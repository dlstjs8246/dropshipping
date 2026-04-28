import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

/**
 * BYOK (Bring Your Own Key) symmetric encryption.
 *
 * Uses AES-256-GCM with a per-row random IV. Output format:
 *   base64(iv) + ":" + base64(authTag) + ":" + base64(ciphertext)
 *
 * The master key is read from `ENCRYPTION_KEY` env var (32-byte hex).
 * Generate with: openssl rand -hex 32
 *
 * Phase A trade-off: stored on the same server as the DB connection.
 * Phase B can migrate to Supabase Vault for split-trust.
 */

const ALG = "aes-256-gcm";

function getMasterKey(): Buffer {
  const hex = process.env.ENCRYPTION_KEY;
  if (!hex || hex.length !== 64) {
    throw new Error(
      "ENCRYPTION_KEY must be a 64-char hex string (32 bytes). " +
        "Generate with: openssl rand -hex 32"
    );
  }
  return Buffer.from(hex, "hex");
}

export function encrypt(plaintext: string): string {
  const key = getMasterKey();
  const iv = randomBytes(12); // GCM standard nonce size
  const cipher = createCipheriv(ALG, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();
  return [
    iv.toString("base64"),
    authTag.toString("base64"),
    encrypted.toString("base64"),
  ].join(":");
}

export function decrypt(ciphertext: string): string {
  const [ivB64, tagB64, dataB64] = ciphertext.split(":");
  if (!ivB64 || !tagB64 || !dataB64) {
    throw new Error("Invalid ciphertext format.");
  }
  const key = getMasterKey();
  const iv = Buffer.from(ivB64, "base64");
  const authTag = Buffer.from(tagB64, "base64");
  const data = Buffer.from(dataB64, "base64");
  const decipher = createDecipheriv(ALG, key, iv);
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  return decrypted.toString("utf8");
}
