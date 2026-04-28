import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { L2Form } from "./L2Form";

export const metadata = { title: "L2 Assistant Builder | Command Center" };

export default async function L2Page() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const recent = await db
    .select()
    .from(labSessions)
    .where(
      and(eq(labSessions.orgId, orgId), eq(labSessions.module, "l2_builder"))
    )
    .orderBy(desc(labSessions.createdAt))
    .limit(15);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">L2 Assistant Builder</h1>
          <p className="text-sm text-muted-foreground">
            5단계 빌드 시뮬레이터 (명세 → 시스템 프롬프트 → 지식 → 테스트 → 배포).
            Claude Projects 또는 Custom GPTs에 복붙 가능 .md 다운로드.
            연계: Supplement 09 §3·§7~§9.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stage 1 — 명세</CardTitle>
          <CardDescription>
            만들고 싶은 비서 1개를 선택하고 5개 필드를 채우세요.
            Claude가 5단계 산출물을 생성합니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <L2Form />
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <h2 className="mb-4 text-lg font-bold">최근 빌드</h2>
      {recent.length === 0 ? (
        <p className="rounded-md border bg-card p-8 text-center text-sm text-muted-foreground">
          아직 빌드 기록이 없습니다.
        </p>
      ) : (
        <ul className="divide-y rounded-md border bg-card">
          {recent.map((row) => (
            <li key={row.id}>
              <Link
                href={`/lab/l2/${row.id}`}
                className="flex items-center gap-4 px-4 py-3 hover:bg-accent"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{row.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(row.createdAt).toLocaleString("ko-KR")}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
