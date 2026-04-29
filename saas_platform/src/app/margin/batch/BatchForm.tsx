"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { runBatchMarginScan, type BatchState } from "./actions";
import { BatchResultsTable } from "./BatchResultsTable";

const initial: BatchState = { status: "idle" };

export function BatchForm() {
  const [state, formAction] = useActionState(runBatchMarginScan, initial);

  return (
    <div className="space-y-6">
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="csv">CSV (최대 20행)</Label>
          <Textarea
            id="csv"
            name="csv"
            rows={10}
            required
            minLength={5}
            maxLength={20000}
            placeholder="url, 상품명, 소싱가, 배송비, 무게(g), 판매가"
            className="font-mono text-xs"
          />
          <p className="text-xs text-muted-foreground">
            첫 행이 헤더로 보이면 (예: <code>url</code>로 시작) 자동으로 건너뜁니다.
          </p>
        </div>

        {state.status === "error" ? (
          <Alert variant="destructive">
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        ) : null}

        <SubmitButton />
      </form>

      {state.status === "done" ? (
        <BatchResultsTable
          results={state.results}
          skipped={state.skipped}
        />
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          배치 실행 중... (5개씩 chunk + 1초 delay)
        </>
      ) : (
        <>
          <Layers className="mr-2 h-4 w-4" />
          배치 평가 시작
        </>
      )}
    </Button>
  );
}
