"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { saveAnthropicKey, type SaveKeyState } from "../actions";

const initial: SaveKeyState = { status: "idle" };

export function OnboardingKeyForm() {
  const [state, formAction] = useActionState(saveAnthropicKey, initial);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="anthropicKey">API 키</Label>
        <Input
          id="anthropicKey"
          name="anthropicKey"
          type="password"
          autoComplete="off"
          placeholder="sk-ant-api03-..."
          required
          minLength={20}
        />
        <p className="text-xs text-muted-foreground">
          Anthropic Console → Settings → API Keys에서 발급. 새 키 추천.
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
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          검증 + 저장 중...
        </>
      ) : (
        <>
          <KeyRound className="mr-2 h-4 w-4" />
          저장하고 시작하기
        </>
      )}
    </Button>
  );
}
