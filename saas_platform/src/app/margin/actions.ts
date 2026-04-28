"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, MODELS, BYOKMissingError } from "@/lib/anthropic";
import { lookupHts } from "@/lib/business/hts";
import {
  FILTERS,
  type FilterId,
  type FilterResult,
  computeVerdict,
  computeLandedCost,
  computeMarginPct,
  type ScanResult,
} from "@/lib/business/kill-criteria";
import { scrapeCjProduct } from "@/lib/business/cj-scrape";

const scanSchema = z.object({
  url: z
    .string()
    .url()
    .optional()
    .or(z.literal("").transform(() => undefined)),
  productName: z.string().min(2).max(200),
  sourcingUsd: z.coerce.number().positive(),
  shippingUsd: z.coerce.number().nonnegative(),
  weightG: z.coerce.number().positive().int(),
  sellingUsd: z.coerce.number().positive(),
});

export type ScanState =
  | { status: "idle" }
  | { status: "error"; message: string };

export async function runMarginScan(
  _prev: ScanState,
  formData: FormData
): Promise<ScanState> {
  const user = await requireSessionUser();

  const parsed = scanSchema.safeParse({
    url: formData.get("url"),
    productName: formData.get("productName"),
    sourcingUsd: formData.get("sourcingUsd"),
    shippingUsd: formData.get("shippingUsd"),
    weightG: formData.get("weightG"),
    sellingUsd: formData.get("sellingUsd"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message:
        parsed.error.errors[0]?.message ?? "입력값 검증 실패. 모든 필드를 채우세요.",
    };
  }

  const orgId = await requireCurrentOrgId(user.id);
  const input = parsed.data;

  // 1. Best-effort enrichment from CJ.
  let scraped = { title: null as string | null, imageUrl: null as string | null, scrapedOk: false };
  if (input.url) {
    scraped = await scrapeCjProduct(input.url);
  }
  const productText = `${input.productName} ${scraped.title ?? ""}`.trim();

  // 2. HTS lookup (top-50 with 25% fallback).
  const hts = lookupHts(productText);

  // 3. Compute landed cost server-side.
  const landedCost = computeLandedCost(
    input.sourcingUsd,
    input.shippingUsd,
    hts.rate,
    input.sellingUsd
  );
  const marginPct = computeMarginPct(input.sellingUsd, landedCost);

  // 4. Anthropic API call — Kill Criteria evaluation.
  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  const filterDescriptions = FILTERS.map(
    (f, i) => `${i + 1}. ${f.name}: ${f.description}`
  ).join("\n");

  let llmFilterResults: Record<FilterId, FilterResult>;
  let llmRationale: Partial<Record<FilterId, string>>;

  try {
    const message = await anthropic.messages.create({
      model: MODELS.fast,
      max_tokens: 1024,
      tools: [
        {
          name: "submit_evaluation",
          description: "Submit Kill Criteria evaluation for the product.",
          input_schema: {
            type: "object",
            properties: {
              filter_results: {
                type: "object",
                properties: Object.fromEntries(
                  FILTERS.map((f) => [
                    f.id,
                    {
                      type: "string",
                      enum: ["pass", "fail", "unknown"],
                    },
                  ])
                ),
                required: FILTERS.map((f) => f.id),
              },
              rationale: {
                type: "object",
                description: "1-sentence rationale per filter (<=120 chars).",
                properties: Object.fromEntries(
                  FILTERS.map((f) => [f.id, { type: "string" }])
                ),
              },
            },
            required: ["filter_results", "rationale"],
          },
        },
      ],
      tool_choice: { type: "tool", name: "submit_evaluation" },
      system: [
        {
          type: "text",
          text: `너는 미국 시장 드랍쉬핑 상품 평가 전문가다. 7개 Kill Criteria 필터로 입력 상품을 평가한다. 보수적으로 답해 — 확신 없으면 "unknown"을 반환한다 ("pass" 남발 금지).

[필터]
${filterDescriptions}

[입력 데이터]
- product_name: 학생이 입력한 상품명
- url_title: CJ 페이지에서 추출한 제목 (있을 경우)
- sourcing_usd, shipping_usd, weight_g, selling_usd: 학생 입력
- hts_code, hts_rate: 시스템이 룩업한 관세율
- landed_cost_usd, margin_pct: 시스템이 계산한 진짜 비용/마진

[평가 원칙]
- filter_1 Margin: 시스템 계산값 margin_pct를 그대로 사용 (>=30 = pass).
- filter_2 Weight: weight_g <= 500 = pass.
- filter_4 Price band: $25 <= selling_usd <= $80 = pass.
- filter_3 Volume / filter_5 Durability / filter_6 Year-round / filter_7 Video-able는 product_name에서 추론. 모르면 "unknown".

각 필터에 1줄 한국어 사유 (<= 120자) 첨부.`,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: JSON.stringify(
            {
              product_name: input.productName,
              url_title: scraped.title,
              sourcing_usd: input.sourcingUsd,
              shipping_usd: input.shippingUsd,
              weight_g: input.weightG,
              selling_usd: input.sellingUsd,
              hts_code: hts.hts,
              hts_rate: hts.rate,
              hts_matched: hts.matched,
              landed_cost_usd: landedCost,
              margin_pct: marginPct,
            },
            null,
            2
          ),
        },
      ],
    });

    const toolBlock = message.content.find((b) => b.type === "tool_use");
    if (!toolBlock || toolBlock.type !== "tool_use") {
      return {
        status: "error",
        message: "Claude가 예상한 형식으로 응답하지 않았습니다.",
      };
    }
    const tool = toolBlock.input as {
      filter_results: Record<FilterId, FilterResult>;
      rationale: Partial<Record<FilterId, string>>;
    };
    llmFilterResults = tool.filter_results;
    llmRationale = tool.rationale;
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `Anthropic 호출 실패: ${err.message}`
          : "Anthropic 호출 실패",
    };
  }

  // Override filter_1 with deterministic margin check.
  llmFilterResults.filter_1 = marginPct >= 30 ? "pass" : "fail";
  llmFilterResults.filter_2 = input.weightG <= 500 ? "pass" : "fail";
  llmFilterResults.filter_4 =
    input.sellingUsd >= 25 && input.sellingUsd <= 80 ? "pass" : "fail";

  // 5. Server-computed verdict.
  const verdict = computeVerdict(llmFilterResults);

  const scanResult: ScanResult = {
    verdict,
    filter_results: llmFilterResults,
    rationale: llmRationale,
    computed: {
      margin_pct: marginPct,
      landed_cost_usd: landedCost,
    },
    hts: {
      code: hts.hts,
      rate: hts.rate,
      matched: hts.matched,
      matched_keyword: hts.matchedKeyword,
    },
  };

  // 6. Persist.
  const inserted = await db
    .insert(labSessions)
    .values({
      orgId,
      createdBy: user.id,
      module: "margin",
      title: input.productName,
      input: input,
      output: scanResult,
      verdict,
    })
    .returning({ id: labSessions.id });

  redirect(`/margin/${inserted[0].id}`);
}
