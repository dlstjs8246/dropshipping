import { db } from "@/lib/db";
import { userKeys } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { decrypt } from "@/lib/crypto/byok";

const API_URL = "https://api.perplexity.ai/chat/completions";

/**
 * Perplexity is the L1 4th source — Sonar models return answers WITH citations.
 * It is OPTIONAL: when a user hasn't configured a key, L1 silently falls back
 * to 3-source mode (3-temp Claude only).
 */

export async function getPerplexityKeyForUser(
  userId: string
): Promise<string | null> {
  const rows = await db
    .select()
    .from(userKeys)
    .where(eq(userKeys.userId, userId))
    .limit(1);

  const encrypted = rows[0]?.perplexityKeyEncrypted;
  if (!encrypted) return null;
  return decrypt(encrypted);
}

export async function validatePerplexityKey(apiKey: string): Promise<boolean> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: "ping" }],
      max_tokens: 1,
    }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Perplexity returned ${response.status}: ${body.slice(0, 200)}`
    );
  }
  return true;
}

export interface PerplexityResult {
  text: string;
  citations: string[];
}

/**
 * Call Perplexity Sonar with a research question.
 * Returns text + array of source URLs (Perplexity's distinguishing feature).
 */
export async function callPerplexity(
  apiKey: string,
  question: string,
  systemPrompt?: string
): Promise<PerplexityResult> {
  const messages = [
    ...(systemPrompt ? [{ role: "system" as const, content: systemPrompt }] : []),
    { role: "user" as const, content: question },
  ];

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages,
      max_tokens: 800,
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Perplexity ${response.status}: ${body.slice(0, 200)}`
    );
  }

  const data = (await response.json()) as {
    choices: { message: { content: string } }[];
    citations?: string[];
  };

  return {
    text: data.choices[0]?.message?.content ?? "",
    citations: data.citations ?? [],
  };
}
