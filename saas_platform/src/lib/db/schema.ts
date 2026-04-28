import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  primaryKey,
  pgEnum,
} from "drizzle-orm/pg-core";

export const orgRoleEnum = pgEnum("org_role", ["owner", "member"]);
export const labModuleEnum = pgEnum("lab_module", [
  "margin",
  "l1_triangulation",
  "l2_builder",
  "l3_agent",
]);
export const verdictEnum = pgEnum("verdict", ["GO", "HOLD", "FAIL"]);

export const orgs = pgTable("orgs", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  ownerId: uuid("owner_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const orgMembers = pgTable(
  "org_members",
  {
    orgId: uuid("org_id")
      .notNull()
      .references(() => orgs.id, { onDelete: "cascade" }),
    userId: uuid("user_id").notNull(),
    role: orgRoleEnum("role").notNull().default("member"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.orgId, t.userId] }),
  })
);

export const userKeys = pgTable("user_keys", {
  userId: uuid("user_id").primaryKey(),
  anthropicKeyEncrypted: text("anthropic_key_encrypted"),
  perplexityKeyEncrypted: text("perplexity_key_encrypted"),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const labSessions = pgTable("lab_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  orgId: uuid("org_id")
    .notNull()
    .references(() => orgs.id, { onDelete: "cascade" }),
  createdBy: uuid("created_by").notNull(),
  module: labModuleEnum("module").notNull(),
  title: text("title"),
  input: jsonb("input").notNull(),
  output: jsonb("output").notNull(),
  verdict: verdictEnum("verdict"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Org = typeof orgs.$inferSelect;
export type OrgMember = typeof orgMembers.$inferSelect;
export type UserKeys = typeof userKeys.$inferSelect;
export type LabSession = typeof labSessions.$inferSelect;
export type NewLabSession = typeof labSessions.$inferInsert;

// Reserved for raw SQL hooks (RLS policies + auth trigger) applied via migration files.
export const _migrationHints = sql`-- See ./migrations/0001_rls_and_triggers.sql`;
