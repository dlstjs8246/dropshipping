"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { progress, type ProgressData } from "@/lib/db/schema";
import { requireSessionUser } from "@/lib/auth/session";

const recordOfBoolean = z.record(z.string(), z.boolean());
const weeksRecord = z.record(z.string(), recordOfBoolean);
const rubricSchema = z.object({
  revenue: z.number().min(0).max(100),
  system: z.number().min(0).max(100),
  ai: z.number().min(0).max(100),
});

const dataSchema = z
  .object({
    preflight: recordOfBoolean.optional(),
    weeks: weeksRecord.optional(),
    l1Assessment: recordOfBoolean.optional(),
    l2Assessment: recordOfBoolean.optional(),
    l3Assessment: recordOfBoolean.optional(),
    rubric: rubricSchema.optional(),
  })
  .strict();

export type ProgressSaveState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success"; updatedAt: string };

export async function saveProgress(
  _prev: ProgressSaveState,
  formData: FormData
): Promise<ProgressSaveState> {
  const user = await requireSessionUser();

  const raw = formData.get("data");
  if (typeof raw !== "string") {
    return { status: "error", message: "data 필드 누락" };
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return { status: "error", message: "JSON 파싱 실패" };
  }

  const parsed = dataSchema.safeParse(parsedJson);
  if (!parsed.success) {
    return {
      status: "error",
      message:
        parsed.error.errors[0]?.path.join(".") + ": " +
        (parsed.error.errors[0]?.message ?? "검증 실패"),
    };
  }

  const data: ProgressData = parsed.data;
  const now = new Date();

  await db
    .insert(progress)
    .values({ userId: user.id, data, updatedAt: now })
    .onConflictDoUpdate({
      target: progress.userId,
      set: { data, updatedAt: now },
    });

  revalidatePath("/progress");
  return { status: "success", updatedAt: now.toISOString() };
}
