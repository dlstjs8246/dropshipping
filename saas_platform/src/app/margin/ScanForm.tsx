"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { runMarginScan, type ScanState } from "./actions";

const initial: ScanState = { status: "idle" };

export function ScanForm() {
  const [state, formAction] = useActionState(runMarginScan, initial);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="url">CJ URL (선택)</Label>
        <Input
          id="url"
          name="url"
          type="url"
          placeholder="https://www.cjdropshipping.com/product/..."
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="productName">상품명 *</Label>
        <Input
          id="productName"
          name="productName"
          placeholder="예: 거북목 교정 넥밴드"
          required
          minLength={2}
          maxLength={200}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="sourcingUsd">소싱가 (USD) *</Label>
          <Input
            id="sourcingUsd"
            name="sourcingUsd"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="6.00"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="shippingUsd">배송비 (USD) *</Label>
          <Input
            id="shippingUsd"
            name="shippingUsd"
            type="number"
            step="0.01"
            min="0"
            placeholder="3.50"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="weightG">무게 (g) *</Label>
          <Input
            id="weightG"
            name="weightG"
            type="number"
            step="1"
            min="1"
            placeholder="180"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sellingUsd">판매가 (USD) *</Label>
          <Input
            id="sellingUsd"
            name="sellingUsd"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="39.00"
            required
          />
        </div>
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
          AI 평가 중... (~30초)
        </>
      ) : (
        <>
          <Search className="mr-2 h-4 w-4" />
          7-필터로 평가하기
        </>
      )}
    </Button>
  );
}
