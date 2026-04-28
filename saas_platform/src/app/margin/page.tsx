import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScanForm } from "./ScanForm";

export const metadata = { title: "Margin Shield | Command Center" };

export default async function MarginPage() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const recent = await db
    .select()
    .from(labSessions)
    .where(and(eq(labSessions.orgId, orgId), eq(labSessions.module, "margin")))
    .orderBy(desc(labSessions.createdAt))
    .limit(20);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Margin Shield</h1>
          <p className="text-sm text-muted-foreground">
            CJ URL → 7-필터 Kill Criteria + Landed Cost + GO/HOLD/FAIL.
            연계: W2 · W3 · Master Prompts §1.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>새 스캔</CardTitle>
          <CardDescription>
            CJ URL은 선택. 미입력 시 입력값만으로 평가합니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScanForm />
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <h2 className="mb-4 text-lg font-bold">최근 스캔</h2>
      {recent.length === 0 ? (
        <p className="rounded-md border bg-card p-8 text-center text-sm text-muted-foreground">
          아직 스캔 기록이 없습니다.
        </p>
      ) : (
        <ul className="divide-y rounded-md border bg-card">
          {recent.map((row) => (
            <li key={row.id}>
              <Link
                href={`/margin/${row.id}`}
                className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-accent"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{row.title ?? "Untitled"}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(row.createdAt).toLocaleString("ko-KR")}
                  </p>
                </div>
                <VerdictBadge verdict={row.verdict} />
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function VerdictBadge({ verdict }: { verdict: string | null }) {
  if (verdict === "GO") return <Badge variant="success">GO</Badge>;
  if (verdict === "FAIL") return <Badge variant="destructive">FAIL</Badge>;
  if (verdict === "HOLD") return <Badge variant="warning">HOLD</Badge>;
  return <Badge variant="secondary">—</Badge>;
}
