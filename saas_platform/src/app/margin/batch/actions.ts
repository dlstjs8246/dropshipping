"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, BYOKMissingError } from "@/lib/anthropic";
import { runMarginEngine, type MarginScanInput } from "@/lib/business/margin-engine";
import type { ScanResult } from "@/lib/business/kill-criteria";

const rowSchema = z.object({
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

const CHUNK_SIZE = 5;
const CHUNK_DELAY_MS = 1000;
const MAX_ROWS = 20;

export interface BatchRowOk {
  ok: true;
  rowIndex: number;
  sessionId: string;
  productName: string;
  verdict: ScanResult["verdict"];
  marginPct: number;
  landedCostUsd: number;
}

export interface BatchRowErr {
  ok: false;
  rowIndex: number;
  productName: string;
  message: string;
}

export type BatchRowResult = BatchRowOk | BatchRowErr;

export type BatchState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "done"; results: BatchRowResult[]; skipped: { row: number; reason: string }[] };

interface ParsedRow {
  rowIndex: number;
  raw: string;
  data?: MarginScanInput;
  parseError?: string;
}

function splitCsvLine(line: string): string[] {
  return line.split(",").map((c) => c.trim());
}

function looksLikeHeader(cells: string[]): boolean {
  const first = (cells[0] ?? "").toLowerCase();
  return first.includes("url") || first.includes("상품");
}

function parseCsv(csv: string): ParsedRow[] {
  const lines = csv
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return [];

  const startIdx = looksLikeHeader(splitCsvLine(lines[0])) ? 1 : 0;

  return lines.slice(startIdx).map<ParsedRow>((line, i) => {
    const cells = splitCsvLine(line);
    if (cells.length < 5) {
      return {
        rowIndex: startIdx + i + 1,
        raw: line,
        parseError: `필드 수가 부족합니다 (5~6개 필요, 받음: ${cells.length})`,
      };
    }
    const [urlOrEmpty, productName, sourcing, shipping, weight, selling] =
      cells.length === 5
        ? ["", cells[0], cells[1], cells[2], cells[3], cells[4]]
        : cells;

    const parsed = rowSchema.safeParse({
      url: urlOrEmpty,
      productName,
      sourcingUsd: sourcing,
      shippingUsd: shipping,
      weightG: weight,
      sellingUsd: selling,
    });

    if (!parsed.success) {
      return {
        rowIndex: startIdx + i + 1,
        raw: line,
        parseError: parsed.error.errors[0]?.message ?? "검증 실패",
      };
    }
    return { rowIndex: startIdx + i + 1, raw: line, data: parsed.data };
  });
}

const batchSchema = z.object({
  csv: z.string().min(5).max(20000),
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function runBatchMarginScan(
  _prev: BatchState,
  formData: FormData
): Promise<BatchState> {
  const user = await requireSessionUser();

  const parsed = batchSchema.safeParse({ csv: formData.get("csv") });
  if (!parsed.success) {
    return { status: "error", message: "CSV 입력이 비었거나 너무 깁니다." };
  }

  const rows = parseCsv(parsed.data.csv);
  if (rows.length === 0) {
    return { status: "error", message: "유효한 행을 찾을 수 없습니다." };
  }
  if (rows.length > MAX_ROWS) {
    return {
      status: "error",
      message: `한 번에 최대 ${MAX_ROWS}개까지 처리합니다 (받음: ${rows.length}).`,
    };
  }

  const orgId = await requireCurrentOrgId(user.id);

  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  const skipped: { row: number; reason: string }[] = [];
  const validRows: { rowIndex: number; data: MarginScanInput }[] = [];
  for (const r of rows) {
    if (r.parseError || !r.data) {
      skipped.push({ row: r.rowIndex, reason: r.parseError ?? "unknown" });
    } else {
      validRows.push({ rowIndex: r.rowIndex, data: r.data });
    }
  }

  const results: BatchRowResult[] = [];

  for (let i = 0; i < validRows.length; i += CHUNK_SIZE) {
    const chunk = validRows.slice(i, i + CHUNK_SIZE);
    const chunkResults = await Promise.all(
      chunk.map(async ({ rowIndex, data }): Promise<BatchRowResult> => {
        try {
          const scan = await runMarginEngine(anthropic, data);
          const inserted = await db
            .insert(labSessions)
            .values({
              orgId,
              createdBy: user.id,
              module: "margin",
              title: data.productName,
              input: data,
              output: scan,
              verdict: scan.verdict,
            })
            .returning({ id: labSessions.id });

          return {
            ok: true,
            rowIndex,
            sessionId: inserted[0].id,
            productName: data.productName,
            verdict: scan.verdict,
            marginPct: scan.computed.margin_pct,
            landedCostUsd: scan.computed.landed_cost_usd,
          };
        } catch (err) {
          return {
            ok: false,
            rowIndex,
            productName: data.productName,
            message: err instanceof Error ? err.message : "Unknown error",
          };
        }
      })
    );
    results.push(...chunkResults);
    if (i + CHUNK_SIZE < validRows.length) {
      await sleep(CHUNK_DELAY_MS);
    }
  }

  return { status: "done", results, skipped };
}
