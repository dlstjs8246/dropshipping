import { db } from "@/lib/db";
import { progress, type ProgressData } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface ProgressMarks {
  weeks?: Record<string, string[]>;
  preflight?: string[];
  l1Assessment?: string[];
  l2Assessment?: string[];
  l3Assessment?: string[];
}

/**
 * Auto-mark Progress checkboxes when a lab session crosses a known threshold.
 * Idempotent: re-marking an already-checked item is a no-op.
 *
 * Failure is silent — auto-marking is a UX nicety, not a correctness
 * requirement. Never let a failed mark abort a successful lab session.
 */
export async function markProgress(
  userId: string,
  marks: ProgressMarks
): Promise<void> {
  try {
    const rows = await db
      .select()
      .from(progress)
      .where(eq(progress.userId, userId))
      .limit(1);

    const existing = (rows[0]?.data as ProgressData | undefined) ?? {};

    const merged: ProgressData = {
      preflight: { ...(existing.preflight ?? {}) },
      weeks: { ...(existing.weeks ?? {}) },
      l1Assessment: { ...(existing.l1Assessment ?? {}) },
      l2Assessment: { ...(existing.l2Assessment ?? {}) },
      l3Assessment: { ...(existing.l3Assessment ?? {}) },
      rubric: existing.rubric,
    };

    if (marks.preflight) {
      for (const id of marks.preflight) merged.preflight![id] = true;
    }
    if (marks.weeks) {
      for (const [w, ids] of Object.entries(marks.weeks)) {
        merged.weeks![w] = { ...(merged.weeks![w] ?? {}) };
        for (const id of ids) merged.weeks![w][id] = true;
      }
    }
    if (marks.l1Assessment) {
      for (const id of marks.l1Assessment) merged.l1Assessment![id] = true;
    }
    if (marks.l2Assessment) {
      for (const id of marks.l2Assessment) merged.l2Assessment![id] = true;
    }
    if (marks.l3Assessment) {
      for (const id of marks.l3Assessment) merged.l3Assessment![id] = true;
    }

    await db
      .insert(progress)
      .values({ userId, data: merged, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: progress.userId,
        set: { data: merged, updatedAt: new Date() },
      });
  } catch (err) {
    // Auto-mark is best-effort. Surface to logs but don't escalate.
    console.error("[markProgress] failed:", err);
  }
}

/**
 * Module-specific mapping rules — single source of truth for "what gets
 * auto-checked when X module fires". Mirrors Supplement 11 §1~§4 IDs.
 */

export function marksForMargin(verdict: "GO" | "HOLD" | "FAIL" | string): ProgressMarks {
  // Margin scan execution itself satisfies W3.1 (scorecard 작성).
  // GO verdict additionally satisfies W3.2 ("23점 이상 달성 또는 Margin Shield GO").
  const weeks: Record<string, string[]> = { "3": ["3.1"] };
  if (verdict === "GO") weeks["3"].push("3.2");
  return { weeks };
}

export function marksForL1(perplexityUsed: boolean): ProgressMarks {
  // L1 run = simultaneous 3-AI (or 4-AI) comparison + §6.2 protocol.
  const marks: ProgressMarks = {
    weeks: { "1": ["1.1", "1.2"] },
    l1Assessment: ["L1-3", "L1-5"],
  };
  if (perplexityUsed) marks.l1Assessment!.push("L1-9");
  return marks;
}

export function marksForL2(
  assistantType: "copy" | "dm" | "cs"
): ProgressMarks {
  const idByType: Record<typeof assistantType, string> = {
    copy: "L2-2",
    dm: "L2-3",
    cs: "L2-4",
  };
  return {
    l2Assessment: ["L2-1", idByType[assistantType]],
    weeks: { "11": ["11.4"] },
  };
}

export function marksForL3(): ProgressMarks {
  return {
    l3Assessment: ["L3-1", "L3-3"],
    weeks: { "13": ["13.4"] },
  };
}
