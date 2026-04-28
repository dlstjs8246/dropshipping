"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";

const REDIRECT_BY_MODULE: Record<string, string> = {
  margin: "/margin",
  l1_triangulation: "/lab/l1",
  l2_builder: "/lab/l2",
  l3_agent: "/lab/l3",
};

export async function deleteLabSession(formData: FormData): Promise<void> {
  const id = formData.get("id");
  if (typeof id !== "string" || id.length === 0) return;

  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  // Use returning() to find the deleted row's module so we know where to redirect.
  const deleted = await db
    .delete(labSessions)
    .where(
      and(
        eq(labSessions.id, id),
        eq(labSessions.orgId, orgId),
        eq(labSessions.createdBy, user.id)
      )
    )
    .returning({ module: labSessions.module });

  const target = REDIRECT_BY_MODULE[deleted[0]?.module ?? ""] ?? "/dashboard";
  redirect(target);
}
