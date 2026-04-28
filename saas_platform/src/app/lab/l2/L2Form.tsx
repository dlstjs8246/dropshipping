"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buildAssistant, type L2State } from "./actions";

const initial: L2State = { status: "idle" };

export function L2Form() {
  const [state, formAction] = useActionState(buildAssistant, initial);
  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="type">비서 타입</Label>
        <Select name="type" required defaultValue="copy">
          <SelectTrigger id="type">
            <SelectValue placeholder="선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="copy">카피 비서 (PAS 카피)</SelectItem>
            <SelectItem value="dm">DM 비서 (크리에이터 아웃리치)</SelectItem>
            <SelectItem value="cs">CS 비서 (고객 응대 초안)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="brandName">브랜드 이름 *</Label>
        <Input id="brandName" name="brandName" placeholder="예: NeckEase" required minLength={2} maxLength={100} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="oneLineIdentity">한 줄 정체성 *</Label>
        <Input
          id="oneLineIdentity"
          name="oneLineIdentity"
          placeholder="예: 30대 WFH 미국인이 친구한테 권하는 듯한 차분·모던·살짝 장난스러운 톤"
          required
          minLength={10}
          maxLength={300}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="inputDescription">입력 설명 *</Label>
        <Textarea
          id="inputDescription"
          name="inputDescription"
          rows={2}
          placeholder="예: 상품명 + 가격 + 핵심 강점 3개"
          required
          minLength={5}
          maxLength={500}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="outputDescription">출력 설명 *</Label>
        <Textarea
          id="outputDescription"
          name="outputDescription"
          rows={2}
          placeholder="예: H1 1줄 + PAS 본문 3단 + CTA 1줄 (영어)"
          required
          minLength={5}
          maxLength={500}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="failureDescription">실패 정의 *</Label>
        <Textarea
          id="failureDescription"
          name="failureDescription"
          rows={2}
          placeholder="예: 톤 5축 미달 / 금지어 사용 / 의학 단정 / 5트라이얼 일관성 60% 미만"
          required
          minLength={5}
          maxLength={500}
        />
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
          5단계 빌드 중... (~30초)
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          비서 빌드하기
        </>
      )}
    </Button>
  );
}
