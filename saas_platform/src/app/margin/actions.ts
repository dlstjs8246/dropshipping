"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { getAnthropicForUser, BYOKMissingError } from "@/lib/anthropic";
import { runMarginEngine } from "@/lib/business/margin-engine";

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

  let anthropic;
  try {
    anthropic = await getAnthropicForUser(user.id);
  } catch (err) {
    if (err instanceof BYOKMissingError) {
      return { status: "error", message: err.message };
    }
    throw err;
  }

  let scanResult;
  try {
    scanResult = await runMarginEngine(anthropic, input);
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `Anthropic 호출 실패: ${err.message}`
          : "Anthropic 호출 실패",
    };
  }

  const inserted = await db
    .insert(labSessions)
    .values({
      orgId,
      createdBy: user.id,
      module: "margin",
      title: input.productName,
      input: input,
      output: scanResult,
      verdict: scanResult.verdict,
    })
    .returning({ id: labSessions.id });

  redirect(`/margin/${inserted[0].id}`);
}
