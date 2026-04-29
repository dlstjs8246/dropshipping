"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, MODELS, BYOKMissingError } from "@/lib/anthropic";
import { markProgress, marksForL2 } from "@/lib/progress/auto-mark";

const ASSISTANT_TYPES = ["copy", "dm", "cs"] as const;
type AssistantType = (typeof ASSISTANT_TYPES)[number];

const buildSchema = z.object({
  type: z.enum(ASSISTANT_TYPES),
  brandName: z.string().min(2).max(100),
  oneLineIdentity: z.string().min(10).max(300),
  inputDescription: z.string().min(5).max(500),
  outputDescription: z.string().min(5).max(500),
  failureDescription: z.string().min(5).max(500),
});

export type L2State = { status: "idle" } | { status: "error"; message: string };

export interface L2Output {
  type: AssistantType;
  spec: {
    brandName: string;
    oneLineIdentity: string;
    inputDescription: string;
    outputDescription: string;
    failureDescription: string;
  };
  systemPrompt: string;
  knowledgeFiles: { filename: string; purpose: string }[];
  testPlan: { trial: number; input: string; expectedOutputCheck: string }[];
}

const TYPE_GUIDES: Record<AssistantType, string> = {
  copy:
    "카피 비서 — 상품명·가격·강점 입력을 받아 PAS 3단 + CTA 카피를 영어로 출력. Brand_Voice.md, Best_Copy_5.md, Banned_Words.md 3종 지식 파일을 참조한다.",
  dm:
    "DM 비서 — 크리에이터 핸들·최근 영상 입력을 받아 영상 디테일을 인용한 개인화 DM을 영어로 출력. Store_Info.md, Commission_Structure.md, 5_Channel_Analyses.json, Past_Replies_Won.md 4종.",
  cs:
    "CS 비서 — 고객 메일 1통을 입력 받아 정책에 부합하는 답변 초안 + 우선순위 플래그를 출력. NEVER auto-send 원칙. Refund_Policy.md, Shipping_Policy.md, FAQ_Top_50.md, Brand_Voice.md, Past_Winning_Replies.md 5종.",
};

export async function buildAssistant(
  _prev: L2State,
  formData: FormData
): Promise<L2State> {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const parsed = buildSchema.safeParse({
    type: formData.get("type"),
    brandName: formData.get("brandName"),
    oneLineIdentity: formData.get("oneLineIdentity"),
    inputDescription: formData.get("inputDescription"),
    outputDescription: formData.get("outputDescription"),
    failureDescription: formData.get("failureDescription"),
  });

  if (!parsed.success) {
    return { status: "error", message: parsed.error.errors[0]?.message ?? "입력 오류" };
  }

  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  try {
    const message = await anthropic.messages.create({
      model: MODELS.smart,
      max_tokens: 2048,
      tools: [
        {
          name: "submit_assistant_bundle",
          description:
            "Generate a complete L2 Assistant bundle: System Prompt + Knowledge Files checklist + Test Plan.",
          input_schema: {
            type: "object",
            properties: {
              system_prompt: {
                type: "string",
                description:
                  "1500자 이내의 5요소 시스템 프롬프트 (Role, Task, Constraints, Format, Guard). Claude Projects Custom Instructions에 그대로 붙여넣을 수 있는 형식.",
              },
              knowledge_files: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    filename: { type: "string" },
                    purpose: { type: "string" },
                  },
                  required: ["filename", "purpose"],
                },
              },
              test_plan: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    trial: { type: "number" },
                    input: { type: "string" },
                    expected_output_check: { type: "string" },
                  },
                  required: ["trial", "input", "expected_output_check"],
                },
              },
            },
            required: ["system_prompt", "knowledge_files", "test_plan"],
          },
        },
      ],
      tool_choice: { type: "tool", name: "submit_assistant_bundle" },
      system: [
        {
          type: "text",
          text: `Supplement 09 §3 5단계 빌드를 시뮬레이션한다.
Stage 2 시스템 프롬프트는 5요소(Role, Task, Constraints, Format, Guard)를 모두 포함하며 1500자 이내.
Stage 3 지식 파일은 다음 가이드를 따른다:
${TYPE_GUIDES[parsed.data.type]}
Stage 4 테스트 플랜은 5트라이얼 (각 다른 입력으로 일관성 검증).
모든 출력은 한국어 또는 영어 적절히 (시스템 프롬프트 본문은 한국어 베이스).`,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: JSON.stringify(
            {
              assistant_type: parsed.data.type,
              brand_name: parsed.data.brandName,
              one_line_identity: parsed.data.oneLineIdentity,
              input_description: parsed.data.inputDescription,
              output_description: parsed.data.outputDescription,
              failure_description: parsed.data.failureDescription,
            },
            null,
            2
          ),
        },
      ],
    });

    const tool = message.content.find((b) => b.type === "tool_use");
    if (!tool || tool.type !== "tool_use") {
      return {
        status: "error",
        message: "Claude가 형식에 맞지 않게 응답했습니다.",
      };
    }
    const t = tool.input as {
      system_prompt: string;
      knowledge_files: { filename: string; purpose: string }[];
      test_plan: {
        trial: number;
        input: string;
        expected_output_check: string;
      }[];
    };

    const output: L2Output = {
      type: parsed.data.type,
      spec: {
        brandName: parsed.data.brandName,
        oneLineIdentity: parsed.data.oneLineIdentity,
        inputDescription: parsed.data.inputDescription,
        outputDescription: parsed.data.outputDescription,
        failureDescription: parsed.data.failureDescription,
      },
      systemPrompt: t.system_prompt,
      knowledgeFiles: t.knowledge_files,
      testPlan: t.test_plan.map((step) => ({
        trial: step.trial,
        input: step.input,
        expectedOutputCheck: step.expected_output_check,
      })),
    };

    const inserted = await db
      .insert(labSessions)
      .values({
        orgId,
        createdBy: user.id,
        module: "l2_builder",
        title: `${parsed.data.brandName} — ${parsed.data.type} 비서`,
        input: parsed.data,
        output,
      })
      .returning({ id: labSessions.id });

    await markProgress(user.id, marksForL2(parsed.data.type));

    redirect(`/lab/l2/${inserted[0].id}`);
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `Anthropic 호출 실패: ${err.message}`
          : "Anthropic 호출 실패",
    };
  }
}
