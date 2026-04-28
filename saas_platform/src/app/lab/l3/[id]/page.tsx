import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Workflow,
  CheckCircle2,
  XCircle,
  ArrowDown,
  Copy as CopyIcon,
} from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "../../l1/[id]/CopyButton";
import { DownloadBundleButton } from "../../l2/[id]/DownloadBundleButton";
import { DeleteSessionButton } from "@/components/layout/DeleteSessionButton";
import type { L3Output } from "../actions";

export const metadata = { title: "Agent 실행 결과 | Command Center" };

export default async function L3ResultPage({
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
        eq(labSessions.module, "l3_agent")
      )
    )
    .limit(1);

  const row = rows[0];
  if (!row) notFound();
  const output = row.output as L3Output;

  const isAuto = output.decision.decision === "AUTO_ORDER";
  const blueprintJson = JSON.stringify(output.make_blueprint, null, 2);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/lab/l3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            전체 시뮬레이션 목록
          </Link>
        </Button>
        <div className="flex gap-2">
          <DownloadBundleButton
            filename={`l3-agent-${row.id.slice(0, 8)}.md`}
            content={renderL3BundleMd(row.title ?? "agent", output)}
          />
          <DeleteSessionButton id={row.id} title={row.title ?? "L3 simulation"} />
        </div>
      </div>

      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Workflow className="mt-1 h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{row.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {new Date(row.createdAt).toLocaleString("ko-KR")}
            </p>
          </div>
        </div>
        <Badge
          variant={isAuto ? "success" : "warning"}
          className="text-base px-4 py-2"
        >
          {output.decision.decision}
        </Badge>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>의사결정 흐름</CardTitle>
          <CardDescription>
            트리거 → 룰 평가 → 결정 → 행동 (Agent의 4단계)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Step
              label="1. 트리거"
              detail={`Shopify webhook: order.create #${output.webhook.orderId}`}
            />
            <ChevronStep />
            <Step
              label="2. 룰 평가 (서버 결정적)"
              detail={
                <ul className="space-y-1 text-sm">
                  <RuleRow
                    label="재고"
                    pass={output.computed.rule_evaluation.stock === "pass"}
                    detail={`CJ 재고 ${output.webhook.cjStockQty} >= 주문 ${output.webhook.orderedQty}`}
                  />
                  <RuleRow
                    label="마진 30%+"
                    pass={output.computed.rule_evaluation.margin === "pass"}
                    detail={`실제 마진 ${output.computed.margin_pct}%`}
                  />
                  <RuleRow
                    label="블랙리스트 국가 X"
                    pass={output.computed.rule_evaluation.blacklist === "pass"}
                    detail={`고객 국가: ${output.webhook.customerCountry}`}
                  />
                </ul>
              }
            />
            <ChevronStep />
            <Step
              label="3. Claude 결정 + Confidence"
              detail={
                <div className="space-y-2 text-sm">
                  <p>{output.decision.reasoning}</p>
                  <p className="text-xs text-muted-foreground">
                    Confidence: {(output.decision.confidence * 100).toFixed(0)}%
                    {output.decision.confidence < 0.9 ? (
                      <span className="ml-2 text-amber-600">
                        (0.9 미만 — 휴먼-인-루프 강제)
                      </span>
                    ) : null}
                  </p>
                </div>
              }
            />
            <ChevronStep />
            <Step
              label="4. 행동"
              detail={
                isAuto ? (
                  <span className="text-emerald-700">
                    AUTO_ORDER → CJ API place order + Sheets 로깅
                  </span>
                ) : (
                  <span className="text-amber-700">
                    ESCALATE → Slack #orders-review 채널에 알림 + Sheets 로깅
                  </span>
                )
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Make.com 블루프린트</CardTitle>
            <div className="flex gap-2">
              <CopyButton
                value={blueprintJson}
                label="JSON 복사"
                icon={<CopyIcon className="h-3 w-3" />}
              />
              <DownloadBundleButton
                filename={`order-agent-${output.webhook.orderId}.json`}
                content={blueprintJson}
              />
            </div>
          </div>
          <CardDescription>
            Make.com에서 새 시나리오 생성 → 우측 메뉴 ⋯ → Import Blueprint → 붙여넣기.
            CJ API 키 + Slack 웹훅 + Anthropic 키만 연결하면 가동.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 text-sm">
            {output.make_blueprint.flow.map((step, i) => (
              <li key={i} className="rounded-md border p-3">
                <p className="font-medium">{step.label}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {step.module}
                </p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <div className="rounded-lg border bg-muted/40 p-4 text-xs text-muted-foreground">
        <strong>휴먼-인-루프 원칙:</strong> 어떤 룰이든 fail이거나 confidence가 0.9
        미만이면 서버가 자동으로 ESCALATE로 변경합니다. LLM 단독 판단으로는 결제·발주
        같은 비가역 작업이 트리거되지 않습니다. 자세한 휴먼-인-루프 매트릭스는{" "}
        <Link
          href="/curriculum/Supplement_10_L3_AI_Agent_Building"
          className="underline"
        >
          Supplement 10 §7
        </Link>
        에서.
      </div>
    </div>
  );
}

function Step({ label, detail }: { label: string; detail: React.ReactNode }) {
  return (
    <div className="rounded-md border bg-card p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="text-sm">{detail}</div>
    </div>
  );
}

function ChevronStep() {
  return (
    <div className="flex justify-center" aria-hidden>
      <ArrowDown className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

function RuleRow({
  label,
  pass,
  detail,
}: {
  label: string;
  pass: boolean;
  detail: string;
}) {
  return (
    <li className="flex items-center gap-2">
      {pass ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
      ) : (
        <XCircle className="h-4 w-4 text-destructive" aria-hidden />
      )}
      <span className="font-medium">{label}</span>
      <span className="text-muted-foreground">— {detail}</span>
    </li>
  );
}

function renderL3BundleMd(title: string, output: L3Output): string {
  return `# L3 Order Agent Simulation — ${title}

**Decision**: ${output.decision.decision}
**Confidence**: ${(output.decision.confidence * 100).toFixed(0)}%
**Reasoning**: ${output.decision.reasoning}

---

## Webhook Payload
- Order ID: ${output.webhook.orderId}
- Country: ${output.webhook.customerCountry}
- SKU: ${output.webhook.productSku}
- Qty: ${output.webhook.orderedQty}
- CJ Stock: ${output.webhook.cjStockQty}
- Selling: $${output.webhook.sellingUsd}
- COGS: $${output.webhook.cogsUsd}
- Shipping: $${output.webhook.shippingUsd}

## Rule Evaluation (server-deterministic)
- 재고: ${output.computed.rule_evaluation.stock.toUpperCase()}
- 마진 30%+: ${output.computed.rule_evaluation.margin.toUpperCase()} (실제 ${output.computed.margin_pct}%)
- 블랙리스트 X: ${output.computed.rule_evaluation.blacklist.toUpperCase()}

${output.decision.failed_rules.length > 0 ? `## Failed Rules\n${output.decision.failed_rules.map((r) => `- ${r}`).join("\n")}\n` : ""}

---

## Make.com Blueprint (excerpt)

${output.make_blueprint.flow.map((s, i) => `${i + 1}. **${s.label}** — ${s.module}`).join("\n")}

> 전체 JSON은 별도 다운로드. Make.com → Import Blueprint에 붙여넣기.

---

> Generated by Command Center L3 Agent Sandbox. 강의 연계: Supplement 10 §3 Build 1.
`;
}
