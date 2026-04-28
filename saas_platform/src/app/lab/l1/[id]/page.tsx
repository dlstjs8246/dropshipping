import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles, Copy as CopyIcon } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { L1Output } from "../actions";
import { CopyButton } from "./CopyButton";
import { DownloadBundleButton } from "../../l2/[id]/DownloadBundleButton";
import { DeleteSessionButton } from "@/components/layout/DeleteSessionButton";

export const metadata = { title: "Triangulation 결과 | Command Center" };

export default async function L1ResultPage({
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
        eq(labSessions.module, "l1_triangulation")
      )
    )
    .limit(1);

  const row = rows[0];
  if (!row) notFound();

  const output = row.output as L1Output;
  const patternBadge = patternToBadge(output.synthesis.pattern);
  const bundleMd = renderL1BundleMd(output);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/lab/l1">
            <ArrowLeft className="mr-2 h-4 w-4" />
            전체 분석 목록
          </Link>
        </Button>
        <div className="flex gap-2">
          <DownloadBundleButton
            filename={`l1-${row.id.slice(0, 8)}.md`}
            content={bundleMd}
          />
          <DeleteSessionButton id={row.id} title={row.title ?? "L1 session"} />
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <span>{output.question}</span>
          </CardTitle>
          <CardDescription>
            {new Date(row.createdAt).toLocaleString("ko-KR")}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {output.perspectives.map((p) => (
          <Card key={p.persona}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{personaLabel(p.persona)}</CardTitle>
                <Badge variant="outline">T={p.temperature}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm">{p.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>4단계 — 삼각측정 결론</CardTitle>
            <Badge variant={patternBadge.variant}>{patternBadge.label}</Badge>
          </div>
          <CardDescription>
            Supplement 08 §6.2 프로토콜에 따른 자동 합의 분석
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-semibold">합의 포인트</h3>
            {output.synthesis.consensus_points.length === 0 ? (
              <p className="text-sm text-muted-foreground">없음</p>
            ) : (
              <ul className="ml-5 list-disc space-y-1 text-sm">
                {output.synthesis.consensus_points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">충돌·부분 합의</h3>
            {output.synthesis.divergent_points.length === 0 ? (
              <p className="text-sm text-muted-foreground">없음</p>
            ) : (
              <ul className="ml-5 list-disc space-y-1 text-sm">
                {output.synthesis.divergent_points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 text-sm font-semibold">한 줄 결론</h3>
            <p className="rounded-md bg-muted p-3 text-sm font-medium">
              {output.synthesis.conclusion}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Perplexity 검증 프롬프트</h3>
              <CopyButton
                value={output.synthesis.perplexity_prompt}
                label="복사"
                icon={<CopyIcon className="h-3 w-3" />}
              />
            </div>
            <pre className="overflow-x-auto rounded-md border bg-card p-3 text-xs">
              {output.synthesis.perplexity_prompt}
            </pre>
            <p className="mt-2 text-xs text-muted-foreground">
              [perplexity.ai](https://perplexity.ai)에 붙여넣어 출처 확인 (§6.5).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function personaLabel(p: string): string {
  switch (p) {
    case "analytic":
      return "분석 (보수)";
    case "generative":
      return "생성 (창의)";
    case "contrarian":
      return "반대 (위험)";
    default:
      return p;
  }
}

function patternToBadge(p: "consensus" | "partial" | "conflict"): {
  variant: "success" | "warning" | "destructive";
  label: string;
} {
  switch (p) {
    case "consensus":
      return { variant: "success", label: "합의" };
    case "partial":
      return { variant: "warning", label: "부분 합의" };
    case "conflict":
      return { variant: "destructive", label: "충돌" };
  }
}

function renderL1BundleMd(output: L1Output): string {
  return `# L1 Triangulation Report

> 질문: ${output.question}

---

## 3-AI Perspectives

${output.perspectives
  .map(
    (p) => `### ${personaLabel(p.persona)} (T=${p.temperature})

${p.text}`
  )
  .join("\n\n")}

---

## Synthesis (4단계 — 삼각측정)

**패턴**: ${output.synthesis.pattern}

### 합의 포인트
${output.synthesis.consensus_points.map((p) => `- ${p}`).join("\n") || "- 없음"}

### 충돌·부분 합의
${output.synthesis.divergent_points.map((p) => `- ${p}`).join("\n") || "- 없음"}

### 한 줄 결론
${output.synthesis.conclusion}

---

## Perplexity 검증 프롬프트

\`\`\`
${output.synthesis.perplexity_prompt}
\`\`\`

> Generated by Command Center L1 Triangulation. 강의 연계: Supplement 08 §6.2.
`;
}
