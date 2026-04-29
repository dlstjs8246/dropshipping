"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { userKeys } from "@/lib/db/schema";
import { encrypt } from "@/lib/crypto/byok";
import { validatePerplexityKey } from "@/lib/perplexity";
import { requireSessionUser } from "@/lib/auth/session";
import { eq } from "drizzle-orm";

const perplexitySchema = z.object({
  perplexityKey: z
    .string()
    .min(20, "API 키가 너무 짧습니다.")
    .startsWith("pplx-", "Perplexity API 키는 'pplx-'로 시작해야 합니다."),
});

export type PerplexityKeyState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success" };

export async function savePerplexityKey(
  _prev: PerplexityKeyState,
  formData: FormData
): Promise<PerplexityKeyState> {
  const user = await requireSessionUser();

  const parsed = perplexitySchema.safeParse({
    perplexityKey: formData.get("perplexityKey"),
  });
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.errors[0]?.message ?? "유효하지 않은 키",
    };
  }

  try {
    await validatePerplexityKey(parsed.data.perplexityKey);
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error ? `검증 실패: ${err.message}` : "검증 실패",
    };
  }

  const encrypted = encrypt(parsed.data.perplexityKey);

  await db
    .insert(userKeys)
    .values({
      userId: user.id,
      perplexityKeyEncrypted: encrypted,
    })
    .onConflictDoUpdate({
      target: userKeys.userId,
      set: { perplexityKeyEncrypted: encrypted, updatedAt: new Date() },
    });

  revalidatePath("/settings/api-keys");
  return { status: "success" };
}

export async function removePerplexityKey(): Promise<void> {
  const user = await requireSessionUser();
  await db
    .update(userKeys)
    .set({ perplexityKeyEncrypted: null, updatedAt: new Date() })
    .where(eq(userKeys.userId, user.id));
  revalidatePath("/settings/api-keys");
}
