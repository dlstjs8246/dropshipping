import { ClipboardCheck } from "lucide-react";
import { db } from "@/lib/db";
import { progress, type ProgressData } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { requireSessionUser } from "@/lib/auth/session";
import { ProgressForm } from "./ProgressForm";

export const metadata = { title: "Progress | Command Center" };

export default async function ProgressPage() {
  const user = await requireSessionUser();

  const rows = await db
    .select()
    .from(progress)
    .where(eq(progress.userId, user.id))
    .limit(1);

  const initialData = (rows[0]?.data as ProgressData | undefined) ?? {};
  const updatedAt = rows[0]?.updatedAt ?? null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <ClipboardCheck className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">학습 진척 추적</h1>
          <p className="text-sm text-muted-foreground">
            Supplement 11 자가 진단 시스템 인터랙티브. 매주 일요일 22시 작성.
            Pre-flight + 14주 Weekly + L1·L2·L3 졸업 자가 진단 + 3축 졸업 루브릭.
          </p>
          {updatedAt ? (
            <p className="mt-1 text-xs text-muted-foreground">
              마지막 저장: {new Date(updatedAt).toLocaleString("ko-KR")}
            </p>
          ) : null}
        </div>
      </div>

      <ProgressForm initialData={initialData} />
    </div>
  );
}
