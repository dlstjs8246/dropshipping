import type Anthropic from "@anthropic-ai/sdk";
import { MODELS } from "@/lib/anthropic";
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

export interface MarginScanInput {
  url?: string;
  productName: string;
  sourcingUsd: number;
  shippingUsd: number;
  weightG: number;
  sellingUsd: number;
}

/**
 * Headless margin scan — accepts a pre-built Anthropic client + input,
 * runs the full pipeline, returns ScanResult. Used by both single
 * (/margin) and batch (/margin/batch) flows.
 *
 * Throws on Anthropic failure — caller decides whether to swallow or escalate.
 */
export async function runMarginEngine(
  anthropic: Anthropic,
  input: MarginScanInput
): Promise<ScanResult> {
  // 1. Best-effort enrichment from CJ.
  const scraped = input.url
    ? await scrapeCjProduct(input.url)
    : { title: null as string | null, imageUrl: null as string | null, scrapedOk: false };

  const productText = `${input.productName} ${scraped.title ?? ""}`.trim();

  // 2. HTS lookup.
  const hts = lookupHts(productText);

  // 3. Server-deterministic landed cost + margin.
  const landedCost = computeLandedCost(
    input.sourcingUsd,
    input.shippingUsd,
    hts.rate,
    input.sellingUsd
  );
  const marginPct = computeMarginPct(input.sellingUsd, landedCost);

  // 4. Anthropic Kill Criteria evaluation.
  const filterDescriptions = FILTERS.map(
    (f, i) => `${i + 1}. ${f.name}: ${f.description}`
  ).join("\n");

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
                  { type: "string", enum: ["pass", "fail", "unknown"] },
                ])
              ),
              required: FILTERS.map((f) => f.id),
            },
            rationale: {
              type: "object",
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
        text: `너는 미국 시장 드랍쉬핑 상품 평가 전문가다. 7개 Kill Criteria 필터로 입력 상품을 평가한다. 보수적으로 답해 — 확신 없으면 "unknown" 반환.

[필터]
${filterDescriptions}

[평가 원칙]
- filter_1 Margin: 시스템 계산값 margin_pct 그대로 사용 (>=30 = pass).
- filter_2 Weight: weight_g <= 500 = pass.
- filter_4 Price band: $25 <= selling_usd <= $80 = pass.
- filter_3 Volume / filter_5 Durability / filter_6 Year-round / filter_7 Video-able는 product_name에서 추론. 모르면 "unknown".

각 필터에 1줄 한국어 사유 (<= 120자).`,
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
    throw new Error("Claude returned non-tool-use response");
  }
  const tool = toolBlock.input as {
    filter_results: Record<FilterId, FilterResult>;
    rationale: Partial<Record<FilterId, string>>;
  };

  // Override deterministic filters.
  tool.filter_results.filter_1 = marginPct >= 30 ? "pass" : "fail";
  tool.filter_results.filter_2 = input.weightG <= 500 ? "pass" : "fail";
  tool.filter_results.filter_4 =
    input.sellingUsd >= 25 && input.sellingUsd <= 80 ? "pass" : "fail";

  const verdict = computeVerdict(tool.filter_results);

  return {
    verdict,
    filter_results: tool.filter_results,
    rationale: tool.rationale,
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
}
