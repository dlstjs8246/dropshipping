/**
 * 7-filter Kill Criteria — sourced from Week 02 of the course curriculum.
 * Server-enforced verdict rule (LLM proposes filter results, server disposes
 * the final GO/HOLD/FAIL judgement).
 */

export const FILTERS = [
  {
    id: "filter_1",
    name: "Margin",
    description: "Net margin >= 30% after landed cost (incl. tariffs).",
  },
  {
    id: "filter_2",
    name: "Weight",
    description: "Shipping weight <= 500g (lower air freight cost).",
  },
  {
    id: "filter_3",
    name: "Volume",
    description: "Box dimensions <= 30 x 30 x 15 cm (DIM weight friendly).",
  },
  {
    id: "filter_4",
    name: "Price band",
    description: "US selling price within $25-$80 impulse-buy range.",
  },
  {
    id: "filter_5",
    name: "Durability",
    description:
      "Non-fragile material, low return-on-arrival defect rate (< 3%).",
  },
  {
    id: "filter_6",
    name: "Year-round demand",
    description: "Not strictly seasonal (Trends 12-month >0% YoY).",
  },
  {
    id: "filter_7",
    name: "Video-able",
    description:
      "Demonstrable transformation in 15-second short-form video (Hook).",
  },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];

export type FilterResult = "pass" | "fail" | "unknown";

export interface ScanResult {
  verdict: "GO" | "HOLD" | "FAIL";
  filter_results: Record<FilterId, FilterResult>;
  rationale: Partial<Record<FilterId, string>>;
  computed: {
    margin_pct: number;
    landed_cost_usd: number;
  };
  hts: {
    code: string;
    rate: number;
    matched: boolean;
    matched_keyword: string | null;
  };
}

/**
 * Server-side verdict reducer. Trumps the LLM's verdict field.
 * GO  = 7/7 pass
 * HOLD = 0 fail and at least one unknown
 * FAIL = at least one fail
 */
export function computeVerdict(
  results: Record<FilterId, FilterResult>
): ScanResult["verdict"] {
  const values = Object.values(results);
  if (values.includes("fail")) return "FAIL";
  if (values.includes("unknown")) return "HOLD";
  return "GO";
}

/**
 * Compute landed cost server-side (don't trust the LLM with arithmetic).
 *
 * landed_cost = sourcing × (1 + hts_rate) + shipping + payment_fee + platform_fee
 * payment_fee = 2.9% × selling_price + $0.30 (Stripe US)
 */
export function computeLandedCost(
  sourcingUsd: number,
  shippingUsd: number,
  htsRate: number,
  sellingUsd: number
): number {
  const tariff = sourcingUsd * htsRate;
  const paymentFee = sellingUsd * 0.029 + 0.3;
  return Number((sourcingUsd + tariff + shippingUsd + paymentFee).toFixed(2));
}

export function computeMarginPct(
  sellingUsd: number,
  landedCostUsd: number
): number {
  if (sellingUsd <= 0) return 0;
  return Number(
    (((sellingUsd - landedCostUsd) / sellingUsd) * 100).toFixed(2)
  );
}
