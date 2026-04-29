import Link from "next/link";
import { Search, Calculator, Sparkles, Bot, Workflow, ArrowRight } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, desc, eq, gte, ilike, sql } from "drizzle-orm";
import type { SQL } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SessionsFilters } from "./SessionsFilters";

export const metadata = { title: "Sessions | Command Center" };

const PAGE_SIZE = 25;

const MODULE_META: Record<
  string,
  { href: (id: string) => string; label: string; icon: typeof Calculator }
> = {
  margin: {
    href: (id) => `/margin/${id}`,
    label: "Margin",
    icon: Calculator,
  },
  l1_triangulation: {
    href: (id) => `/lab/l1/${id}`,
    label: "L1",
    icon: Sparkles,
  },
  l2_builder: {
    href: (id) => `/lab/l2/${id}`,
    label: "L2",
    icon: Bot,
  },
  l3_agent: {
    href: (id) => `/lab/l3/${id}`,
    label: "L3",
    icon: Workflow,
  },
};

type Mod = "margin" | "l1_triangulation" | "l2_builder" | "l3_agent";
const VALID_MODULES: Mod[] = [
  "margin",
  "l1_triangulation",
  "l2_builder",
  "l3_agent",
];
const VALID_VERDICTS = ["GO", "HOLD", "FAIL"] as const;
const VALID_DAYS = ["7", "30", "90", "all"] as const;

export default async function SessionsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    module?: string;
    verdict?: string;
    days?: string;
    page?: string;
  }>;
}) {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);
  const params = await searchParams;

  const q = (params.q ?? "").trim();
  const mod = VALID_MODULES.includes(params.module as Mod)
    ? (params.module as Mod)
    : null;
  const verdict =
    VALID_VERDICTS.includes(params.verdict as (typeof VALID_VERDICTS)[number])
      ? (params.verdict as (typeof VALID_VERDICTS)[number])
      : null;
  const days =
    VALID_DAYS.includes(params.days as (typeof VALID_DAYS)[number])
      ? (params.days as (typeof VALID_DAYS)[number])
      : "30";
  const page = Math.max(1, Number(params.page) || 1);

  const conditions: SQL<unknown>[] = [eq(labSessions.orgId, orgId)];
  if (mod) conditions.push(eq(labSessions.module, mod));
  if (verdict) conditions.push(eq(labSessions.verdict, verdict));
  if (q) conditions.push(ilike(labSessions.title, `%${q}%`));
  if (days !== "all") {
    const since = new Date();
    since.setDate(since.getDate() - Number(days));
    conditions.push(gte(labSessions.createdAt, since));
  }

  const where = and(...conditions);

  const [rows, totalRows] = await Promise.all([
    db
      .select()
      .from(labSessions)
      .where(where)
      .orderBy(desc(labSessions.createdAt))
      .limit(PAGE_SIZE)
      .offset((page - 1) * PAGE_SIZE),
    db
      .select({ count: sql<number>`count(*)::int` })
      .from(labSessions)
      .where(where),
  ]);

  const total = totalRows[0]?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Search className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sessions</h1>
          <p className="text-sm text-muted-foreground">
            Margin · L1 · L2 · L3 모든 세션을 통합 검색·필터합니다.
          </p>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base">필터</CardTitle>
        </CardHeader>
        <CardContent>
          <SessionsFilters
            initialQ={q}
            initialModule={mod ?? "all"}
            initialVerdict={verdict ?? "all"}
            initialDays={days}
          />
        </CardContent>
      </Card>

      <p className="mb-3 text-xs text-muted-foreground">
        {total.toLocaleString("ko-KR")}건 — {page}/{totalPages} 페이지
      </p>

      {rows.length === 0 ? (
        <p className="rounded-md border bg-card p-8 text-center text-sm text-muted-foreground">
          조건에 맞는 세션이 없습니다.
        </p>
      ) : (
        <ul className="divide-y rounded-md border bg-card">
          {rows.map((row) => {
            const meta = MODULE_META[row.module];
            const Icon = meta?.icon ?? Search;
            return (
              <li key={row.id}>
                <Link
                  href={meta?.href(row.id) ?? "#"}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-accent"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {row.title ?? "Untitled"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {meta?.label ?? row.module} ·{" "}
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

      {totalPages > 1 ? (
        <Pagination
          page={page}
          totalPages={totalPages}
          baseQuery={{ q, mod, verdict, days }}
        />
      ) : null}
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  baseQuery,
}: {
  page: number;
  totalPages: number;
  baseQuery: { q?: string; mod?: string | null; verdict?: string | null; days?: string };
}) {
  function buildHref(target: number) {
    const params = new URLSearchParams();
    if (baseQuery.q) params.set("q", baseQuery.q);
    if (baseQuery.mod) params.set("module", baseQuery.mod);
    if (baseQuery.verdict) params.set("verdict", baseQuery.verdict);
    if (baseQuery.days && baseQuery.days !== "30") params.set("days", baseQuery.days);
    if (target !== 1) params.set("page", String(target));
    const qs = params.toString();
    return `/sessions${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <Button asChild variant="outline" size="sm" disabled={page === 1}>
        <Link href={buildHref(Math.max(1, page - 1))}>이전</Link>
      </Button>
      <span className="text-sm text-muted-foreground">
        {page} / {totalPages}
      </span>
      <Button
        asChild
        variant="outline"
        size="sm"
        disabled={page === totalPages}
      >
        <Link href={buildHref(Math.min(totalPages, page + 1))}>다음</Link>
      </Button>
    </div>
  );
}
