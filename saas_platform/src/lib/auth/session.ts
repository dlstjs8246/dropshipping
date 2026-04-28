import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { orgMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function getSessionUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function requireSessionUser() {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}

/**
 * Returns the user's primary org. Phase A assumes single org per user
 * (created automatically by handle_new_user trigger). When multi-org
 * lands in Phase B, expose a selector and read from a session cookie.
 */
export async function getCurrentOrgId(userId: string): Promise<string | null> {
  const rows = await db
    .select({ orgId: orgMembers.orgId })
    .from(orgMembers)
    .where(eq(orgMembers.userId, userId))
    .limit(1);
  return rows[0]?.orgId ?? null;
}

export async function requireCurrentOrgId(userId: string): Promise<string> {
  const orgId = await getCurrentOrgId(userId);
  if (!orgId) {
    throw new Error(
      "User has no org membership. The handle_new_user trigger may have failed."
    );
  }
  return orgId;
}
