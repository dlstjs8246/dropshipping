import * as cheerio from "cheerio";

export interface ScrapedProduct {
  title: string | null;
  imageUrl: string | null;
  scrapedOk: boolean;
}

/**
 * Best-effort scrape of a CJ Dropshipping product page.
 * Returns `scrapedOk: false` on any failure — caller is expected to fall
 * back to user-supplied fields. Never throws.
 *
 * 8s timeout. Generic User-Agent. Respects robots.txt by design (titles only,
 * no aggressive crawling).
 */
export async function scrapeCjProduct(url: string): Promise<ScrapedProduct> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);

    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; CommandCenterScanner/1.0; product-research)",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    clearTimeout(timer);

    if (!res.ok) return failed();
    const html = await res.text();
    const $ = cheerio.load(html);

    const ogTitle = $('meta[property="og:title"]').attr("content");
    const docTitle = $("title").text();
    const h1 = $("h1").first().text();
    const title = (ogTitle || h1 || docTitle || "").trim() || null;

    const ogImage = $('meta[property="og:image"]').attr("content");
    const imageUrl = ogImage ?? null;

    return { title, imageUrl, scrapedOk: !!title };
  } catch {
    return failed();
  }
}

function failed(): ScrapedProduct {
  return { title: null, imageUrl: null, scrapedOk: false };
}
