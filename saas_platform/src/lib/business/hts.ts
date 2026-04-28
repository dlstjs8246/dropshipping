import htsData from "./hts-codes.json";

export interface HtsLookupResult {
  hts: string;
  rate: number;
  matched: boolean;
  matchedKeyword: string | null;
}

interface HtsCategory {
  keywords: string[];
  hts: string;
  rate: number;
}

const FALLBACK_RATE = htsData._meta.fallback_rate;
const CATEGORIES: HtsCategory[] = htsData.categories;

/**
 * Find an HTS code by matching product title/keywords against the top-50 list.
 * Returns fallback rate (25%) if no match is found.
 *
 * Always logs `matched: false` so callers can track top-50 miss rate (Phase A.5
 * planning trigger when miss rate exceeds 40%).
 */
export function lookupHts(productText: string): HtsLookupResult {
  const haystack = productText.toLowerCase();
  for (const cat of CATEGORIES) {
    for (const keyword of cat.keywords) {
      if (haystack.includes(keyword.toLowerCase())) {
        return {
          hts: cat.hts,
          rate: cat.rate,
          matched: true,
          matchedKeyword: keyword,
        };
      }
    }
  }
  return {
    hts: "FALLBACK",
    rate: FALLBACK_RATE,
    matched: false,
    matchedKeyword: null,
  };
}
