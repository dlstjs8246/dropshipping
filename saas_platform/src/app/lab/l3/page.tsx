import Link from "next/link";
import { Workflow, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { L3Form } from "./L3Form";

export const metadata = { title: "L3 Agent Sandbox | Command Center" };

export default async function L3Page() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const recent = await db
    .select()
    .from(labSessions)
    .where(
      and(eq(labSessions.orgId, orgId), eq(labSessions.module, "l3_agent"))
    )
    .orderBy(desc(labSessions.createdAt))
    .limit(15);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Workflow className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">L3 Agent Sandbox</h1>
          <p className="text-sm text-muted-foreground">
            Mock Shopify 주문 → Claude 의사결정 (재고/마진/BL 3룰) → AUTO_ORDER 또는
            ESCALATE 시뮬레이션. Make.com 블루프린트 export로 실제 Agent 빌드 가능.
            연계: Supplement 10 §3 Build 1.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mock Shopify 주문 시뮬레이션</CardTitle>
          <CardDescription>
            실제 Shopify 연결 없이 주문 페이로드만 입력해 결정을 시뮬레이션합니다.
            결과 페이지에서 Make.com에 import할 수 있는 블루프린트 JSON을 다운로드할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <L3Form />
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <h2 className="mb-4 text-lg font-bold">최근 시뮬레이션</h2>
      {recent.length === 0 ? (
        <p className="rounded-md border bg-card p-8 text-center text-sm text-muted-foreground">
          아직 시뮬레이션 기록이 없습니다.
        </p>
      ) : (
        <ul className="divide-y rounded-md border bg-card">
          {recent.map((row) => {
            const decision =
              (row.output as { decision?: { decision?: string } } | null)?.decision
                ?.decision ?? "?";
            return (
              <li key={row.id}>
                <Link
                  href={`/lab/l3/${row.id}`}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-accent"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{row.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(row.createdAt).toLocaleString("ko-KR")}
                    </p>
                  </div>
                  <Badge
                    variant={decision === "AUTO_ORDER" ? "success" : "warning"}
                  >
                    {decision}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
