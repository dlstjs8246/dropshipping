import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bot, Copy as CopyIcon } from "lucide-react";
import { db } from "@/lib/db";
import { labSessions } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { requireSessionUser, requireCurrentOrgId } from "@/lib/auth/session";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "../../l1/[id]/CopyButton";
import { DownloadBundleButton } from "./DownloadBundleButton";
import { DeleteSessionButton } from "@/components/layout/DeleteSessionButton";
import type { L2Output } from "../actions";

export const metadata = { title: "Assistant 빌드 결과 | Command Center" };

export default async function L2ResultPage({
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
        eq(labSessions.module, "l2_builder")
      )
    )
    .limit(1);

  const row = rows[0];
  if (!row) notFound();
  const output = row.output as L2Output;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href="/lab/l2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          전체 빌드 목록
        </Link>
      </Button>

      <div className="mb-8 flex items-start gap-3">
        <Bot className="mt-1 h-6 w-6 text-primary" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {output.spec.brandName} — {typeLabel(output.type)}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {output.spec.oneLineIdentity}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <DownloadBundleButton
            filename={`${output.spec.brandName}-${output.type}-bundle.md`}
            content={renderBundleMd(output)}
          />
          <DeleteSessionButton
            id={row.id}
            title={`${output.spec.brandName} ${output.type} 비서`}
          />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Stage 2 — 시스템 프롬프트</CardTitle>
            <CopyButton
              value={output.systemPrompt}
              label="복사"
              icon={<CopyIcon className="h-3 w-3" />}
            />
          </div>
          <CardDescription>
            Claude Projects → Custom Instructions에 그대로 붙여넣으세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-md border bg-muted p-4 text-xs whitespace-pre-wrap">
            {output.systemPrompt}
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Stage 3 — 지식 파일 체크리스트</CardTitle>
          <CardDescription>
            본인 데이터로 다음 파일을 만들어 Claude Projects → Project Knowledge에 업로드.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {output.knowledgeFiles.map((kf) => (
              <li key={kf.filename} className="flex items-start gap-3 rounded-md border p-3">
                <Badge variant="outline" className="font-mono">
                  {kf.filename}
                </Badge>
                <p className="text-sm text-muted-foreground">{kf.purpose}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stage 4 — 5트라이얼 테스트 플랜</CardTitle>
          <CardDescription>
            아래 5개 입력으로 비서를 테스트. 4/5 일관성 통과 시 운영 OK.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {output.testPlan.map((step) => (
              <li key={step.trial} className="rounded-md border p-3">
                <p className="mb-1 text-xs font-semibold text-muted-foreground">
                  Trial {step.trial}
                </p>
                <p className="mb-2 text-sm">
                  <span className="font-medium">입력:</span> {step.input}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">검증:</span>{" "}
                  {step.expectedOutputCheck}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function typeLabel(t: string): string {
  return t === "copy" ? "카피 비서" : t === "dm" ? "DM 비서" : "CS 비서";
}

function renderBundleMd(output: L2Output): string {
  return `# ${output.spec.brandName} — ${typeLabel(output.type)}

> 정체성: ${output.spec.oneLineIdentity}
> 입력: ${output.spec.inputDescription}
> 출력: ${output.spec.outputDescription}
> 실패 정의: ${output.spec.failureDescription}

---

## Stage 2 — 시스템 프롬프트 (Custom Instructions)

\`\`\`
${output.systemPrompt}
\`\`\`

---

## Stage 3 — 지식 파일 체크리스트

${output.knowledgeFiles.map((kf) => `- **${kf.filename}** — ${kf.purpose}`).join("\n")}

---

## Stage 4 — 5트라이얼 테스트 플랜

${output.testPlan
  .map(
    (s) =>
      `### Trial ${s.trial}\n- 입력: ${s.input}\n- 검증: ${s.expectedOutputCheck}`
  )
  .join("\n\n")}

---

> Generated by Command Center L2 Assistant Builder.
> 강의 연계: Supplement 09 §3·§7~§9.
`;
}
