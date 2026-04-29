"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, KeyRound, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  savePerplexityKey,
  removePerplexityKey,
  type PerplexityKeyState,
} from "./actions";

const initial: PerplexityKeyState = { status: "idle" };

export function PerplexityKeyForm({ hasKey }: { hasKey: boolean }) {
  const [state, formAction] = useActionState(savePerplexityKey, initial);

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="perplexityKey">Perplexity API 키</Label>
          <Input
            id="perplexityKey"
            name="perplexityKey"
            type="password"
            autoComplete="off"
            placeholder="pplx-..."
            required
            minLength={20}
          />
          <p className="text-xs text-muted-foreground">
            [perplexity.ai](https://www.perplexity.ai/settings/api) → API → Generate.
            키 입력 시 L1 Triangulation에 4번째 소스로 자동 추가 (출처 URL 포함).
          </p>
        </div>

        {state.status === "error" ? (
          <Alert variant="destructive">
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        ) : null}
        {state.status === "success" ? (
          <Alert>
            <AlertDescription>저장되었습니다.</AlertDescription>
          </Alert>
        ) : null}

        <SubmitButton hasKey={hasKey} />
      </form>

      {hasKey ? (
        <form action={removePerplexityKey}>
          <Button type="submit" variant="ghost" size="sm" className="text-muted-foreground">
            <Trash2 className="mr-2 h-3 w-3" />
            Perplexity 키 제거
          </Button>
        </form>
      ) : null}
    </div>
  );
}

function SubmitButton({ hasKey }: { hasKey: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="outline">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          검증 + 저장 중...
        </>
      ) : (
        <>
          <KeyRound className="mr-2 h-4 w-4" />
          {hasKey ? "Perplexity 키 교체" : "Perplexity 키 저장"}
        </>
      )}
    </Button>
  );
}
