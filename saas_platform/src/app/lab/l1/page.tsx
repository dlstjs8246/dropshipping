import Link from "next/link";
import { Sparkles, ArrowRight, Globe, Info } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions, userKeys } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { L1Form } from "./L1Form";

export const metadata = { title: "L1 Triangulation | Command Center" };

export default async function L1Page() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const [recent, keysRow] = await Promise.all([
    db
      .select()
      .from(labSessions)
      .where(
        and(
          eq(labSessions.orgId, orgId),
          eq(labSessions.module, "l1_triangulation")
        )
      )
      .orderBy(desc(labSessions.createdAt))
      .limit(15),
    db
      .select({ has: userKeys.perplexityKeyEncrypted })
      .from(userKeys)
      .where(eq(userKeys.userId, user.id))
      .limit(1),
  ]);
  const hasPerplexity = !!keysRow[0]?.has;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">L1 Triangulation</h1>
            <Badge variant={hasPerplexity ? "success" : "outline"}>
              <Globe className="mr-1 h-3 w-3" />
              {hasPerplexity ? "4 sources" : "3 sources"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            질문 1개 → Claude 3-temperature 병렬 (분석/생성/반대){hasPerplexity ? " + Perplexity Sonar" : ""} → 합의·부분·충돌 패턴 자동 분류.
            Supplement 08 §6.2 4단계 프로토콜 시연.
          </p>
          {!hasPerplexity ? (
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Info className="h-3 w-3" />
              Perplexity 키 추가 시 출처 URL 포함 4번째 소스 활성화 →{" "}
              <Link href="/settings/api-keys" className="text-primary hover:underline">
                Settings
              </Link>
            </p>
          ) : null}
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
