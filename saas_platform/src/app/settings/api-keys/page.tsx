import { requireSessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { userKeys } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OnboardingKeyForm } from "../../onboarding/[step]/OnboardingKeyForm";

export const metadata = { title: "API Keys | Command Center" };

export default async function ApiKeysPage() {
  const user = await requireSessionUser();

  const rows = await db
    .select()
    .from(userKeys)
    .where(eq(userKeys.userId, user.id))
    .limit(1);
  const hasKey = !!rows[0]?.anthropicKeyEncrypted;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Anthropic API 키</span>
            {hasKey ? (
              <Badge variant="success">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                저장됨
              </Badge>
            ) : (
              <Badge variant="warning">
                <AlertCircle className="mr-1 h-3 w-3" />
                미설정
              </Badge>
            )}
          </CardTitle>
          <CardDescription>
            Margin Shield, L1 Triangulation, L2 Builder가 이 키를 사용합니다.
            새 키를 입력하면 기존 키가 교체됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OnboardingKeyForm />
          {rows[0]?.updatedAt ? (
            <p className="mt-4 text-xs text-muted-foreground">
              마지막 업데이트:{" "}
              {new Date(rows[0].updatedAt).toLocaleString("ko-KR")}
            </p>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>키 보안</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>· AES-256-GCM 암호화로 데이터베이스에 저장됩니다.</p>
          <p>· 복호화는 서버 메모리에서만 수행되며 응답 후 GC됩니다.</p>
          <p>· 본인 외 누구도 (관리자 포함) 평문 키를 읽을 수 없습니다.</p>
          <p>· 키 노출 의심 시 Anthropic Console에서 즉시 회전하세요.</p>
        </CardContent>
      </Card>
    </div>
  );
}
