import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FILTERS, type FilterId, type FilterResult, type ScanResult } from "@/lib/business/kill-criteria";

export const metadata = { title: "스캔 결과 | Margin Shield" };

interface MarginInput {
  url?: string;
  productName: string;
  sourcingUsd: number;
  shippingUsd: number;
  weightG: number;
  sellingUsd: number;
}

export default async function ScanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await requireSessionUser();
  const orgId = await requireCurrentOrgId(user.id);
  const { id } = await params;

  const rows = await db
    .select()
    .from(labSessions)
    .where(
      and(
        eq(labSessions.id, id),
        eq(labSessions.orgId, orgId),
        eq(labSessions.module, "margin")
      )
    )
    .limit(1);

  const row = rows[0];
  if (!row) notFound();

  const input = row.input as MarginInput;
  const output = row.output as ScanResult;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href="/margin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          전체 스캔 목록
        </Link>
      </Button>

      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{row.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {new Date(row.createdAt).toLocaleString("ko-KR")}
          </p>
        </div>
        <VerdictHero verdict={output.verdict} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Stat label="Margin" value={`${output.computed.margin_pct}%`} />
        <Stat
          label="Landed Cost"
          value={`$${output.computed.landed_cost_usd.toFixed(2)}`}
        />
        <Stat
          label="HTS"
          value={
            output.hts.matched
              ? `${(output.hts.rate * 100).toFixed(1)}%`
              : `25% (fallback)`
          }
          subValue={output.hts.matched ? output.hts.code : "no match"}
        />
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>7-필터 평가</CardTitle>
          <CardDescription>
            서버 결정 룰: GO=7/7 pass · HOLD=≥1 unknown · FAIL=≥1 fail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {FILTERS.map((f) => (
              <FilterRow
                key={f.id}
                index={Number(f.id.replace("filter_", ""))}
                name={f.name}
                description={f.description}
                result={output.filter_results[f.id as FilterId]}
                rationale={output.rationale[f.id as FilterId]}
              />
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>입력값</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-2 text-sm sm:grid-cols-2">
            <DefRow label="상품명" value={input.productName} />
            <DefRow label="소싱가" value={`$${input.sourcingUsd}`} />
            <DefRow label="배송비" value={`$${input.shippingUsd}`} />
            <DefRow label="무게" value={`${input.weightG}g`} />
            <DefRow label="판매가" value={`$${input.sellingUsd}`} />
            {input.url ? (
              <DefRow label="URL" value={input.url} mono />
            ) : null}
          </dl>
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <div className="rounded-lg border bg-muted/40 p-4 text-xs text-muted-foreground">
        <strong>Verdict 결정 원칙:</strong> Filter 1 (Margin), 2 (Weight), 4
        (Price band)는 서버 사이드에서 결정적으로 평가됨 (LLM 답변 무시).
        Filter 3·5·6·7은 LLM 추론. 보수적 기본: 모르면 unknown → HOLD.
      </div>
    </div>
  );
}

function VerdictHero({ verdict }: { verdict: string }) {
  if (verdict === "GO") {
    return (
      <Badge variant="success" className="text-base px-4 py-2">
        GO
      </Badge>
    );
  }
  if (verdict === "FAIL") {
    return (
      <Badge variant="destructive" className="text-base px-4 py-2">
        FAIL
      </Badge>
    );
  }
  return (
    <Badge variant="warning" className="text-base px-4 py-2">
      HOLD
    </Badge>
  );
}

function Stat({
  label,
  value,
  subValue,
}: {
  label: string;
  value: string;
  subValue?: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      {subValue ? (
        <p className="text-xs text-muted-foreground">{subValue}</p>
      ) : null}
    </div>
  );
}

function FilterRow({
  index,
  name,
  description,
  result,
  rationale,
}: {
  index: number;
  name: string;
  description: string;
  result: FilterResult;
  rationale: string | undefined;
}) {
  const Icon =
    result === "pass" ? CheckCircle2 : result === "fail" ? XCircle : HelpCircle;
  const iconColor =
    result === "pass"
      ? "text-emerald-600"
      : result === "fail"
        ? "text-destructive"
        : "text-amber-500";

  return (
    <li className="flex gap-3 rounded-md border p-3">
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="font-medium">
          <span className="text-muted-foreground">{index}.</span> {name}
        </p>
        <p className="text-xs text-muted-foreground">{description}</p>
        {rationale ? (
          <p className="mt-1 text-sm">{rationale}</p>
        ) : null}
      </div>
      <Badge
        variant={
          result === "pass" ? "success" : result === "fail" ? "destructive" : "warning"
        }
      >
        {result.toUpperCase()}
      </Badge>
    </li>
  );
}

function DefRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between border-b pb-1">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={mono ? "truncate font-mono text-xs" : "font-medium"}>
        {value}
      </dd>
    </div>
  );
}
