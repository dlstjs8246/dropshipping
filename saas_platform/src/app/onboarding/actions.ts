"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { userKeys } from "@/lib/db/schema";
import { encrypt } from "@/lib/crypto/byok";
import { validateAnthropicKey } from "@/lib/anthropic";
import { requireSessionUser } from "@/lib/auth/session";

const keySchema = z.object({
  anthropicKey: z
    .string()
    .min(20, "API 키가 너무 짧습니다.")
    .startsWith("sk-ant-", "Anthropic API 키는 'sk-ant-'로 시작해야 합니다."),
});

export type SaveKeyState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success" };

export async function saveAnthropicKey(
  _prev: SaveKeyState,
  formData: FormData
): Promise<SaveKeyState> {
  const user = await requireSessionUser();

  const parsed = keySchema.safeParse({
    anthropicKey: formData.get("anthropicKey"),
  });
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.errors[0]?.message ?? "유효하지 않은 키",
    };
  }

  try {
    await validateAnthropicKey(parsed.data.anthropicKey);
  } catch (err) {
    return {
      status: "error",
      message:
        err instanceof Error
          ? `검증 실패: ${err.message}`
          : "Anthropic API 키 검증에 실패했습니다.",
    };
  }

  const encrypted = encrypt(parsed.data.anthropicKey);

  await db
    .insert(userKeys)
    .values({
      userId: user.id,
      anthropicKeyEncrypted: encrypted,
    })
    .onConflictDoUpdate({
      target: userKeys.userId,
      set: { anthropicKeyEncrypted: encrypted, updatedAt: new Date() },
    });

  redirect("/dashboard");
}
