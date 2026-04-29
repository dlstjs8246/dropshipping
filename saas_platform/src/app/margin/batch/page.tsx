import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { requireSessionUser } from "@/lib/auth/session";
import { BatchForm } from "./BatchForm";

export const metadata = { title: "Margin Shield 배치 | Command Center" };

export default async function MarginBatchPage() {
  await requireSessionUser();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href="/margin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          단일 스캔으로
        </Link>
      </Button>

      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Margin Shield 배치 스캔</h1>
          <p className="text-sm text-muted-foreground">
            CSV로 최대 20개 상품을 병렬 평가. 5개씩 chunk + 1초 delay (Anthropic
            rate limit 회피). 각 행은 lab_sessions에 개별 저장됩니다.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CSV 입력</CardTitle>
          <CardDescription>
            한 줄당 한 상품. 6개 필드를 콤마로 구분: <code>url, 상품명, 소싱가, 배송비, 무게(g), 판매가</code>.
            URL 없으면 첫 필드 비우거나 5개 필드만 사용 가능 (자동 감지).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BatchForm />
        </CardContent>
      </Card>

      <div className="mt-6 rounded-lg border bg-muted/40 p-4 text-xs text-muted-foreground">
        <strong>예시</strong>
        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap">{`https://www.cjdropshipping.com/product/abc, 거북목 넥밴드, 6.00, 3.50, 180, 39.00
, 알람 시계, 4.50, 2.00, 250, 29.00
https://www.cjdropshipping.com/product/xyz, LED 스트립, 5.00, 3.00, 220, 24.00`}</pre>
      </div>
    </div>
  );
}
