"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, MODELS, BYOKMissingError } from "@/lib/anthropic";
import { markProgress, marksForL3 } from "@/lib/progress/auto-mark";

const orderSchema = z.object({
  orderId: z.string().min(1),
  customerCountry: z.string().length(2),
  productSku: z.string().min(1),
  orderedQty: z.coerce.number().int().positive(),
  cjStockQty: z.coerce.number().int().nonnegative(),
  sellingUsd: z.coerce.number().positive(),
  cogsUsd: z.coerce.number().positive(),
  shippingUsd: z.coerce.number().nonnegative(),
});

export type L3State =
  | { status: "idle" }
  | { status: "error"; message: string };

export interface L3Output {
  webhook: z.infer<typeof orderSchema>;
  decision: {
    decision: "AUTO_ORDER" | "ESCALATE";
    failed_rules: string[];
    reasoning: string;
    confidence: number;
  };
  computed: {
    margin_pct: number;
    rule_evaluation: {
      stock: "pass" | "fail";
      margin: "pass" | "fail";
      blacklist: "pass" | "fail";
    };
  };
  make_blueprint: {
    name: string;
    flow: Array<{
      module: string;
      label: string;
      mapping: Record<string, string>;
    }>;
  };
}

const BLACKLIST = ["KP", "IR", "CU", "SY", "RU"];

export async function runOrderAgent(
  _prev: L3State,
  formData: FormData
): Promise<L3State> {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const parsed = orderSchema.safeParse({
    orderId: formData.get("orderId"),
    customerCountry: formData.get("customerCountry"),
    productSku: formData.get("productSku"),
    orderedQty: formData.get("orderedQty"),
    cjStockQty: formData.get("cjStockQty"),
    sellingUsd: formData.get("sellingUsd"),
    cogsUsd: formData.get("cogsUsd"),
    shippingUsd: formData.get("shippingUsd"),
  });
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.errors[0]?.message ?? "입력값 오류",
    };
  }
  const order = parsed.data;

  // Server-side rule evaluation (deterministic, never trust LLM math).
  const stockPass = order.cjStockQty >= order.orderedQty;
  const marginPct =
    order.sellingUsd > 0
      ? ((order.sellingUsd - order.cogsUsd - order.shippingUsd) /
          order.sellingUsd) *
        100
      : 0;
  const marginPass = marginPct >= 30;
  const blacklistPass = !BLACKLIST.includes(order.customerCountry.toUpperCase());

  const computed = {
    margin_pct: Number(marginPct.toFixed(2)),
    rule_evaluation: {
      stock: stockPass ? ("pass" as const) : ("fail" as const),
      margin: marginPass ? ("pass" as const) : ("fail" as const),
      blacklist: blacklistPass ? ("pass" as const) : ("fail" as const),
    },
  };

  // Anthropic call — narrative reasoning + confidence (server enforces decision).
  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  let llmDecision: L3Output["decision"];
  try {
    const response = await anthropic.messages.create({
      model: MODELS.fast,
      max_tokens: 400,
      tools: [
        {
          name: "submit_order_decision",
          description: "Decide whether to auto-order or escalate.",
          input_schema: {
            type: "object",
            properties: {
              decision: {
                type: "string",
                enum: ["AUTO_ORDER", "ESCALATE"],
              },
              failed_rules: {
                type: "array",
                items: { type: "string" },
                description:
                  "Subset of: stock, margin, blacklist. Empty if all pass.",
              },
              reasoning: {
                type: "string",
                description: "1-sentence Korean rationale.",
              },
              confidence: { type: "number", minimum: 0, maximum: 1 },
            },
            required: ["decision", "failed_rules", "reasoning", "confidence"],
          },
        },
      ],
      tool_choice: { type: "tool", name: "submit_order_decision" },
      system: [
        {
          type: "text",
          text: `너는 드랍쉬핑 자동 발주 의사결정기다. 주문 1건과 서버가 미리 평가한 3개 룰 결과를 받는다.

[하드 룰 — LLM이 뒤집을 수 없음]
- 1개라도 fail → ESCALATE
- 3개 모두 pass + confidence >= 0.9 → AUTO_ORDER
- 3개 pass + confidence < 0.9 → ESCALATE (휴먼-인-루프)

[너의 역할]
- 1줄 한국어 reasoning (왜 이 결정인가)
- 본인 분석에 대한 confidence (0.0~1.0)
- failed_rules 배열 (서버 평가 그대로 + LLM이 본 추가 우려가 있으면 추가)

학생의 신뢰를 위해 보수적·정직하게 답한다.`,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: JSON.stringify(
            {
              order,
              server_rule_evaluation: computed.rule_evaluation,
              computed_margin_pct: computed.margin_pct,
            },
            null,
            2
          ),
        },
      ],
    });

    const tool = response.content.find((b) => b.type === "tool_use");
    if (!tool || tool.type !== "tool_use") {
      return { status: "error", message: "Claude가 형식 오류 응답" };
    }
    llmDecision = tool.input as L3Output["decision"];
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `Anthropic 호출 실패: ${err.message}`
          : "Anthropic 호출 실패",
    };
  }

  // Server-enforce: any rule fail → ESCALATE regardless of LLM verdict.
  const anyFail =
    !computed.rule_evaluation.stock ||
    !computed.rule_evaluation.margin ||
    !computed.rule_evaluation.blacklist ||
    Object.values(computed.rule_evaluation).includes("fail");
  if (anyFail) {
    llmDecision.decision = "ESCALATE";
  } else if (llmDecision.confidence < 0.9) {
    llmDecision.decision = "ESCALATE";
  }

  // Generate Make.com blueprint export — mirrors Supplement 10 §3-3.
  const blueprint: L3Output["make_blueprint"] = {
    name: `Order Agent — ${order.orderId}`,
    flow: [
      {
        module: "Webhooks > Custom webhook",
        label: "1. Receive Shopify order.create",
        mapping: { event: "order.create" },
      },
      {
        module: "HTTP > Make a request (Anthropic)",
        label: "2. Claude API decision",
        mapping: {
          model: MODELS.fast,
          system: "Order rule evaluator (3 rules: stock/margin/blacklist)",
          tool: "submit_order_decision",
        },
      },
      {
        module: "Tools > Parse JSON",
        label: "3. Extract decision",
        mapping: { source: "{{2.body.content[0].input}}" },
      },
      {
        module: "Flow Control > Router",
        label: "4. Branch on decision",
        mapping: {
          condition_a: "decision = AUTO_ORDER",
          condition_b: "decision = ESCALATE",
        },
      },
      {
        module: "HTTP > Make a request (CJ)",
        label: "5a. AUTO_ORDER → CJ place order",
        mapping: { endpoint: "POST /api/v2/orders" },
      },
      {
        module: "Slack > Post a message",
        label: "5b. ESCALATE → #orders-review",
        mapping: { channel: "#orders-review", text: "{{3.reasoning}}" },
      },
      {
        module: "Google Sheets > Add a row",
        label: "6. Log to audit sheet",
        mapping: {
          spreadsheet: "order_agent_log",
          row: "[timestamp, order_id, decision, failed_rules, confidence]",
        },
      },
    ],
  };

  const output: L3Output = {
    webhook: order,
    decision: llmDecision,
    computed,
    make_blueprint: blueprint,
  };

  const inserted = await db
    .insert(labSessions)
    .values({
      orgId,
      createdBy: user.id,
      module: "l3_agent",
      title: `Order ${order.orderId} → ${llmDecision.decision}`,
      input: order,
      output,
    })
    .returning({ id: labSessions.id });

  await markProgress(user.id, marksForL3());

  redirect(`/lab/l3/${inserted[0].id}`);
}
