import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let _db: PostgresJsDatabase<typeof schema> | null = null;

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env.local — see .env.local.example."
    );
  }
  return url;
}

/**
 * Lazy Drizzle client. Defers env validation until first query, so importing
 * `db` at module load time does not crash builds when DATABASE_URL is missing
 * (e.g. during Vercel build of pages that happen to include this transitively).
 */
export const db = new Proxy({} as PostgresJsDatabase<typeof schema>, {
  get(_target, prop) {
    if (!_db) {
      // `prepare: false` is required for Supabase pgBouncer transaction-pooler URLs.
      const client = postgres(getDatabaseUrl(), { prepare: false });
      _db = drizzle(client, { schema });
    }
    return Reflect.get(_db, prop);
  },
});

export { schema };
