"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Workflow, Sparkles, AlertTriangle, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { runOrderAgent, type L3State } from "./actions";

const initial: L3State = { status: "idle" };

const PRESETS = [
  {
    id: "happy",
    label: "정상 주문 (3룰 모두 pass)",
    icon: Sparkles,
    values: {
      orderId: "1001",
      customerCountry: "US",
      productSku: "NECKBAND-BLK",
      orderedQty: "1",
      cjStockQty: "120",
      sellingUsd: "39",
      cogsUsd: "6",
      shippingUsd: "3.5",
    },
  },
  {
    id: "low-margin",
    label: "마진 미달",
    icon: AlertTriangle,
    values: {
      orderId: "1002",
      customerCountry: "US",
      productSku: "TUMBLER-22OZ",
      orderedQty: "1",
      cjStockQty: "50",
      sellingUsd: "25",
      cogsUsd: "12",
      shippingUsd: "4",
    },
  },
  {
    id: "blacklist",
    label: "블랙리스트 국가",
    icon: ShieldX,
    values: {
      orderId: "1003",
      customerCountry: "RU",
      productSku: "LED-STRIP-5M",
      orderedQty: "2",
      cjStockQty: "200",
      sellingUsd: "29",
      cogsUsd: "5",
      shippingUsd: "3",
    },
  },
];

export function L3Form() {
  const [state, formAction] = useActionState(runOrderAgent, initial);

  return (
    <form action={formAction} className="grid gap-4">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          빠른 시작 — 프리셋
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <Button
              key={p.id}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => loadPreset(p.values)}
            >
              <p.icon className="mr-2 h-3 w-3" />
              {p.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="orderId" label="Order ID *" defaultValue="1001" />
        <Field
          id="customerCountry"
          label="Customer Country (ISO 2) *"
          defaultValue="US"
          maxLength={2}
        />
        <Field id="productSku" label="Product SKU *" defaultValue="NECKBAND-BLK" />
        <Field
          id="orderedQty"
          label="Ordered Qty *"
          type="number"
          defaultValue="1"
          min="1"
        />
        <Field
          id="cjStockQty"
          label="CJ 재고 *"
          type="number"
          defaultValue="120"
          min="0"
        />
        <Field
          id="sellingUsd"
          label="판매가 (USD) *"
          type="number"
          step="0.01"
          defaultValue="39"
          min="0.01"
        />
        <Field
          id="cogsUsd"
          label="COGS (USD) *"
          type="number"
          step="0.01"
          defaultValue="6"
          min="0.01"
        />
        <Field
          id="shippingUsd"
          label="배송비 (USD) *"
          type="number"
          step="0.01"
          defaultValue="3.5"
          min="0"
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

function Field({
  id,
  label,
  type = "text",
  defaultValue,
  step,
  min,
  maxLength,
}: {
  id: string;
  label: string;
  type?: string;
  defaultValue?: string;
  step?: string;
  min?: string;
  maxLength?: number;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        defaultValue={defaultValue}
        step={step}
        min={min}
        maxLength={maxLength}
        required
      />
    </div>
  );
}

function loadPreset(values: Record<string, string>) {
  for (const [k, v] of Object.entries(values)) {
    const el = document.getElementById(k) as HTMLInputElement | null;
    if (el) el.value = v;
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Agent 실행 중... (~10초)
        </>
      ) : (
        <>
          <Workflow className="mr-2 h-4 w-4" />
          Agent 실행
        </>
      )}
    </Button>
  );
}
