"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { runTriangulation, type L1State } from "./actions";

const initial: L1State = { status: "idle" };

export function L1Form() {
  const [state, formAction] = useActionState(runTriangulation, initial);
  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="question">질문</Label>
        <Textarea
          id="question"
          name="question"
          rows={4}
          minLength={10}
          maxLength={2000}
          required
          placeholder="예: 거북목 교정 넥밴드를 미국에서 $39에 팔 때 위닝 가능성은?"
        />
        <p className="text-xs text-muted-foreground">
          10~2000자. 구체적일수록 좋습니다.
        </p>
      </div>

      {state.status === "error" ? (
        <Alert variant="destructive">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          3-AI 호출 중... (~30초)
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          교차 검증하기
        </>
      )}
    </Button>
  );
}
