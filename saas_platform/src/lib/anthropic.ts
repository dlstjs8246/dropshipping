import Anthropic from "@anthropic-ai/sdk";
import { db } from "@/lib/db";
import { userKeys } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { decrypt } from "@/lib/crypto/byok";

/**
 * Per-request Anthropic client factory using the user's BYOK key.
 * The key never reaches the browser — it is decrypted server-side and
 * lives in memory only for the duration of the request.
 */
export async function getAnthropicForUser(userId: string): Promise<Anthropic> {
  const rows = await db
    .select()
    .from(userKeys)
    .where(eq(userKeys.userId, userId))
    .limit(1);

  const encrypted = rows[0]?.anthropicKeyEncrypted;
  if (!encrypted) {
    throw new BYOKMissingError(
      "Anthropic API key not configured. Open /settings/api-keys to add one."
    );
  }

  const apiKey = decrypt(encrypted);
  return new Anthropic({ apiKey });
}

export class BYOKMissingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BYOKMissingError";
  }
}

/**
 * Sanity-check a user-provided Anthropic key by issuing a 1-token call.
 * Returns `true` if the call succeeds; throws on auth/network errors.
 */
export async function validateAnthropicKey(apiKey: string): Promise<boolean> {
  const client = new Anthropic({ apiKey });
  await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1,
    messages: [{ role: "user", content: "ping" }],
  });
  return true;
}

/**
 * Model IDs used across the app — kept in one place so model upgrades
 * are a single-line change.
 */
export const MODELS = {
  fast: "claude-haiku-4-5-20251001", // routing, classification, validation
  smart: "claude-sonnet-4-6", // generation, synthesis
} as const;

