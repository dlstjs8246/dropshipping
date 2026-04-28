import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { L1Form } from "./L1Form";

export const metadata = { title: "L1 Triangulation | Command Center" };

export default async function L1Page() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const recent = await db
    .select()
    .from(labSessions)
    .where(
      and(
        eq(labSessions.orgId, orgId),
        eq(labSessions.module, "l1_triangulation")
      )
    )
    .orderBy(desc(labSessions.createdAt))
    .limit(15);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">L1 Triangulation</h1>
          <p className="text-sm text-muted-foreground">
            질문 1개 → Claude 3-temperature 병렬 (분석/생성/반대) → 합의·부분·충돌
            패턴 자동 분류. Supplement 08 §6.2 4단계 프로토콜 시연.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>새 질문</CardTitle>
          <CardDescription>
            검증이 필요한 질문을 던지세요. 거북목 넥밴드 시장성, 광고 카피
            전환율, 관세 회피 전략 등.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <L1Form />
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <h2 className="mb-4 text-lg font-bold">최근 분석</h2>
      {recent.length === 0 ? (
        <p className="rounded-md border bg-card p-8 text-center text-sm text-muted-foreground">
          아직 분석 기록이 없습니다.
        </p>
      ) : (
        <ul className="divide-y rounded-md border bg-card">
          {recent.map((row) => (
            <li key={row.id}>
              <Link
                href={`/lab/l1/${row.id}`}
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
