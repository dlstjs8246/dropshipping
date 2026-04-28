import Link from "next/link";
import { Calculator, Sparkles, Bot, Workflow, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Dashboard | Command Center" };

const MODULE_META: Record<
  string,
  { href: (id: string) => string; label: string; icon: typeof Calculator }
> = {
  margin: {
    href: (id) => `/margin/${id}`,
    label: "Margin Shield",
    icon: Calculator,
  },
  l1_triangulation: {
    href: (id) => `/lab/l1/${id}`,
    label: "L1 Triangulation",
    icon: Sparkles,
  },
  l2_builder: {
    href: (id) => `/lab/l2/${id}`,
    label: "L2 Assistant Builder",
    icon: Bot,
  },
  l3_agent: {
    href: (id) => `/lab/l3/${id}`,
    label: "L3 Agent Sandbox",
    icon: Workflow,
  },
};

export default async function DashboardPage() {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);

  const recent = await db
    .select()
    .from(labSessions)
    .where(eq(labSessions.orgId, orgId))
    .orderBy(desc(labSessions.createdAt))
    .limit(5);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {user.email} 님, 안녕하세요. 3개 AI 모듈이 본인 BYOK 키로 작동합니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ModuleCard
          href="/margin"
          icon={Calculator}
          title="Margin Shield"
          description="CJ URL → 7-필터 + Landed Cost"
        />
        <ModuleCard
          href="/lab/l1"
          icon={Sparkles}
          title="L1 Triangulation"
          description="질문 1개 → 3-AI 합의 분석"
        />
        <ModuleCard
          href="/lab/l2"
          icon={Bot}
          title="L2 Assistant Builder"
          description="카피·DM·CS 비서 5단계 빌드"
        />
        <ModuleCard
          href="/lab/l3"
          icon={Workflow}
          title="L3 Agent Sandbox"
          description="Mock 주문 → AUTO_ORDER/ESCALATE"
        />
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>최근 작업</CardTitle>
          <CardDescription>
            모든 모듈 통합 — 최근 5개 세션
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recent.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              아직 작업이 없습니다. 위 모듈 중 하나를 시작하세요.
            </p>
          ) : (
            <ul className="divide-y">
              {recent.map((row) => {
                const meta = MODULE_META[row.module];
                if (!meta) return null;
                const Icon = meta.icon;
                return (
                  <li key={row.id}>
                    <Link
                      href={meta.href(row.id)}
                      className="flex items-center gap-3 rounded-md px-2 py-3 hover:bg-accent"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {row.title ?? "Untitled"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {meta.label} ·{" "}
                          {new Date(row.createdAt).toLocaleString("ko-KR")}
                        </p>
                      </div>
                      {row.verdict ? (
                        <Badge
                          variant={
                            row.verdict === "GO"
                              ? "success"
                              : row.verdict === "FAIL"
                                ? "destructive"
                                : "warning"
                          }
                        >
                          {row.verdict}
                        </Badge>
                      ) : null}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ModuleCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={href}>
            열기
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
