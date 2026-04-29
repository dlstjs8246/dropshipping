"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, MODELS, BYOKMissingError } from "@/lib/anthropic";
import { getPerplexityKeyForUser, callPerplexity } from "@/lib/perplexity";

const schema = z.object({
  question: z.string().min(10).max(2000),
});

export type L1State = { status: "idle" } | { status: "error"; message: string };

interface ClaudePerspective {
  source: "claude";
  persona: "analytic" | "generative" | "contrarian";
  temperature: number;
  text: string;
}

interface PerplexityPerspective {
  source: "perplexity";
  persona: "research";
  text: string;
  citations: string[];
}

export type Perspective = ClaudePerspective | PerplexityPerspective;

export interface L1Output {
  question: string;
  perspectives: Perspective[];
  synthesis: {
    pattern: "consensus" | "partial" | "conflict";
    consensus_points: string[];
    divergent_points: string[];
    conclusion: string;
    perplexity_prompt: string;
  };
}

const PERSONAS = [
  {
    persona: "analytic" as const,
    temperature: 0.2,
    instruction:
      "사실과 데이터에 집중. 모르는 영역은 'unknown' 명시. 보수적·정량적 답변.",
  },
  {
    persona: "generative" as const,
    temperature: 0.7,
    instruction: "다양한 가능성과 창의적 시각. 가설을 활발히 제시.",
  },
  {
    persona: "contrarian" as const,
    temperature: 1.0,
    instruction: "주류 의견에 반대 각도 — '왜 안 될까' 위험·실패 시나리오 강조.",
  },
];

export async function runTriangulation(
  _prev: L1State,
  formData: FormData
): Promise<L1State> {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const parsed = schema.safeParse({ question: formData.get("question") });
  if (!parsed.success) {
    return {
      status: "error",
      message: "질문은 10~2000자여야 합니다.",
    };
  }
  const question = parsed.data.question;

  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  // 1. Three parallel Claude calls with different personas/temperatures.
  const claudePerspectivesP = PERSONAS.map<Promise<ClaudePerspective>>(
    async ({ persona, temperature, instruction }) => {
      const message = await anthropic.messages.create({
        model: MODELS.fast,
        max_tokens: 800,
        temperature,
        system: [
          {
            type: "text",
            text: `너는 한국 드랍쉬핑 학습자의 질문에 답하는 분석가다. 페르소나: ${persona}. ${instruction}\n\n답변은 간결하게 (200~400자). 핵심 주장 3개 + 숫자 1개 + 출처 가능성 1줄.`,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: question }],
      });
      const text = message.content
        .filter((b) => b.type === "text")
        .map((b) => (b.type === "text" ? b.text : ""))
        .join("\n");
      return { source: "claude", persona, temperature, text };
    }
  );

  // 1b. Optional 4th source: Perplexity Sonar (only if key configured).
  const perplexityKey = await getPerplexityKeyForUser(user.id);
  const perplexityP: Promise<PerplexityPerspective | null> = perplexityKey
    ? callPerplexity(
        perplexityKey,
        question,
        "한국 드랍쉬핑 학습자의 질문이다. 실시간 출처를 인용하며 200~400자로 답한다. 숫자·통계는 가능하면 출처 URL과 함께 제시한다."
      )
        .then(
          (r): PerplexityPerspective => ({
            source: "perplexity",
            persona: "research",
            text: r.text,
            citations: r.citations,
          })
        )
        .catch((): null => {
          // Perplexity failure shouldn't kill the entire L1 run — degrade gracefully.
          return null;
        })
    : Promise.resolve(null);

  let perspectives: Perspective[];
  try {
    const [claudeResults, perplexityResult] = await Promise.all([
      Promise.all(claudePerspectivesP),
      perplexityP,
    ]);
    perspectives = perplexityResult
      ? [...claudeResults, perplexityResult]
      : claudeResults;
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `3-AI 호출 중 오류: ${err.message}`
          : "3-AI 호출 실패",
    };
  }

  // 2. Synthesis call — Claude meta-merges the 3 outputs.
  let synthesis: L1Output["synthesis"];
  try {
    const synthMsg = await anthropic.messages.create({
      model: MODELS.smart,
      max_tokens: 1024,
      tools: [
        {
          name: "submit_synthesis",
          description: "Triangulate three perspectives.",
          input_schema: {
            type: "object",
            properties: {
              pattern: {
                type: "string",
                enum: ["consensus", "partial", "conflict"],
              },
              consensus_points: {
                type: "array",
                items: { type: "string" },
              },
              divergent_points: {
                type: "array",
                items: { type: "string" },
              },
              conclusion: { type: "string" },
              perplexity_prompt: {
                type: "string",
                description:
                  "A focused prompt for Perplexity that verifies the high-risk numeric/factual claims (Korean OK).",
              },
            },
            required: [
              "pattern",
              "consensus_points",
              "divergent_points",
              "conclusion",
              "perplexity_prompt",
            ],
          },
        },
      ],
      tool_choice: { type: "tool", name: "submit_synthesis" },
      system: [
        {
          type: "text",
          text: `Supplement 08 §6.2 4단계 교차 검증 프로토콜을 시연한다. 3개 답을 비교하여 합의/부분/충돌 패턴을 식별하고, 1줄 결론과 Perplexity 검증용 프롬프트를 생성한다.`,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: `[Question] ${question}` },
            ...perspectives.map((p) => ({
              type: "text" as const,
              text:
                p.source === "perplexity"
                  ? `\n[Perplexity research (with citations)] ${p.text}\n(Sources: ${p.citations.join(", ") || "n/a"})`
                  : `\n[Claude ${p.persona} (T=${p.temperature})] ${p.text}`,
            })),
          ],
        },
      ],
    });
    const tool = synthMsg.content.find((b) => b.type === "tool_use");
    if (!tool || tool.type !== "tool_use") {
      return { status: "error", message: "Synthesis 호출이 형식 오류" };
    }
    synthesis = tool.input as L1Output["synthesis"];
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `Synthesis 호출 실패: ${err.message}`
          : "Synthesis 호출 실패",
    };
  }

  const output: L1Output = {
    question,
    perspectives,
    synthesis,
  };

  const inserted = await db
    .insert(labSessions)
    .values({
      orgId,
      createdBy: user.id,
      module: "l1_triangulation",
      title: question.slice(0, 80),
      input: { question },
      output,
    })
    .returning({ id: labSessions.id });

  redirect(`/lab/l1/${inserted[0].id}`);
}
