"use client";

import { useActionState, useMemo, useState, useTransition } from "react";
import { Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { saveProgress, type ProgressSaveState } from "./actions";
import { RubricRadar } from "@/components/progress/RubricRadar";
import {
  PREFLIGHT,
  WEEKS,
  L1_ASSESSMENT,
  L2_ASSESSMENT,
  L3_ASSESSMENT,
} from "@/lib/progress/structure";
import type { ProgressData } from "@/lib/db/schema";

const initialActionState: ProgressSaveState = { status: "idle" };

const PREFLIGHT_CATEGORIES = ["환경", "금전", "멘탈", "사전 학습"] as const;

export function ProgressForm({ initialData }: { initialData: ProgressData }) {
  const [data, setData] = useState<ProgressData>(() => ({
    preflight: initialData.preflight ?? {},
    weeks: initialData.weeks ?? {},
    l1Assessment: initialData.l1Assessment ?? {},
    l2Assessment: initialData.l2Assessment ?? {},
    l3Assessment: initialData.l3Assessment ?? {},
    rubric: initialData.rubric ?? { revenue: 0, system: 0, ai: 0 },
  }));

  const [state, formAction] = useActionState(saveProgress, initialActionState);
  const [isPending, startTransition] = useTransition();

  function togglePreflight(id: string) {
    setData((d) => ({
      ...d,
      preflight: { ...d.preflight, [id]: !d.preflight?.[id] },
    }));
  }

  function toggleWeek(weekNum: number, itemId: string) {
    setData((d) => {
      const wKey = String(weekNum);
      const current = d.weeks?.[wKey] ?? {};
      return {
        ...d,
        weeks: {
          ...d.weeks,
          [wKey]: { ...current, [itemId]: !current[itemId] },
        },
      };
    });
  }

  function toggleAssessment(
    key: "l1Assessment" | "l2Assessment" | "l3Assessment",
    id: string
  ) {
    setData((d) => ({ ...d, [key]: { ...d[key], [id]: !d[key]?.[id] } }));
  }

  function setRubricAxis(axis: "revenue" | "system" | "ai", value: number) {
    setData((d) => ({
      ...d,
      rubric: { ...(d.rubric ?? { revenue: 0, system: 0, ai: 0 }), [axis]: value },
    }));
  }

  const preflightCount = useMemo(
    () => Object.values(data.preflight ?? {}).filter(Boolean).length,
    [data.preflight]
  );

  const weeksDoneCount = useMemo(() => {
    let total = 0;
    for (const w of Object.values(data.weeks ?? {})) {
      total += Object.values(w).filter(Boolean).length;
    }
    return total;
  }, [data.weeks]);

  const l1Count = countTrue(data.l1Assessment);
  const l2Count = countTrue(data.l2Assessment);
  const l3Count = countTrue(data.l3Assessment);

  const rubric = data.rubric ?? { revenue: 0, system: 0, ai: 0 };

  function handleSave() {
    const fd = new FormData();
    fd.set("data", JSON.stringify(data));
    startTransition(() => formAction(fd));
  }

  return (
    <div className="space-y-6">
      {state.status === "error" ? (
        <Alert variant="destructive">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}
      {state.status === "success" ? (
        <Alert>
          <AlertDescription>
            저장됨 — {new Date(state.updatedAt).toLocaleString("ko-KR")}
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b bg-background/95 px-6 py-3 backdrop-blur">
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge variant="outline">Pre-flight {preflightCount}/20</Badge>
          <Badge variant="outline">Weekly {weeksDoneCount}/70</Badge>
          <Badge variant="outline">L1 {l1Count}/10</Badge>
          <Badge variant="outline">L2 {l2Count}/8</Badge>
          <Badge variant="outline">L3 {l3Count}/10</Badge>
        </div>
        <Button onClick={handleSave} disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              저장 중...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              저장
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="preflight" className="w-full">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="preflight">Pre-flight</TabsTrigger>
          <TabsTrigger value="weeks">14주 Weekly</TabsTrigger>
          <TabsTrigger value="l1">L1 졸업</TabsTrigger>
          <TabsTrigger value="l2">L2 졸업</TabsTrigger>
          <TabsTrigger value="l3">L3 졸업</TabsTrigger>
          <TabsTrigger value="rubric">졸업 루브릭</TabsTrigger>
        </TabsList>

        <TabsContent value="preflight" className="space-y-4">
          {PREFLIGHT_CATEGORIES.map((cat) => (
            <Card key={cat}>
              <CardHeader>
                <CardTitle className="text-base">{cat}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {PREFLIGHT.filter((p) => p.category === cat).map((p) => (
                    <CheckboxRow
                      key={p.id}
                      id={`pre-${p.id}`}
                      checked={!!data.preflight?.[p.id]}
                      label={p.label}
                      onChange={() => togglePreflight(p.id)}
                    />
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Hint>15+ ✅ → Week 1 진입 OK.</Hint>
        </TabsContent>

        <TabsContent value="weeks" className="space-y-3">
          {WEEKS.map((w) => {
            const wDone = countTrue(data.weeks?.[String(w.num)]);
            return (
              <Card key={w.num}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>
                      Week {w.num}: {w.title}
                    </span>
                    <Badge variant={wDone >= 4 ? "success" : "outline"}>
                      {wDone}/5
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {w.items.map((it) => (
                      <CheckboxRow
                        key={it.id}
                        id={`w-${it.id}`}
                        checked={!!data.weeks?.[String(w.num)]?.[it.id]}
                        label={`${it.id} — ${it.label}`}
                        onChange={() => toggleWeek(w.num, it.id)}
                      />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
          <Hint>주차별 4+ ✅ → 다음 주 진입 OK.</Hint>
        </TabsContent>

        <TabsContent value="l1">
          <AssessmentCard
            title="L1 졸업 자가 진단"
            description="6/10 이상 → L2 진입 자격"
            count={l1Count}
            total={10}
            items={L1_ASSESSMENT}
            checked={data.l1Assessment ?? {}}
            onToggle={(id) => toggleAssessment("l1Assessment", id)}
          />
        </TabsContent>

        <TabsContent value="l2">
          <AssessmentCard
            title="L2 졸업 자가 진단"
            description="6/8 이상 → L3 진입 자격"
            count={l2Count}
            total={8}
            items={L2_ASSESSMENT}
            checked={data.l2Assessment ?? {}}
            onToggle={(id) => toggleAssessment("l2Assessment", id)}
          />
        </TabsContent>

        <TabsContent value="l3">
          <AssessmentCard
            title="L3 졸업 자가 진단"
            description="7/10 이상 → 진정한 졸업"
            count={l3Count}
            total={10}
            items={L3_ASSESSMENT}
            checked={data.l3Assessment ?? {}}
            onToggle={(id) => toggleAssessment("l3Assessment", id)}
          />
        </TabsContent>

        <TabsContent value="rubric" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>3축 졸업 루브릭</CardTitle>
              <CardDescription>
                매출 / 시스템 / AI 활용 — 각 0~100 자가 평가
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RubricRadar
                revenue={rubric.revenue}
                system={rubric.system}
                ai={rubric.ai}
              />
              <Separator />
              <RubricSlider
                axis="revenue"
                label="매출 트랙"
                hint="누적 매출·고객 수. 100 = $2K+ 누적 50명+"
                value={rubric.revenue}
                onChange={(v) => setRubricAxis("revenue", v)}
              />
              <RubricSlider
                axis="system"
                label="시스템 트랙"
                hint="자동화·자가 운영. 100 = Make 3+ + Klaviyo + RAG CS"
                value={rubric.system}
                onChange={(v) => setRubricAxis("system", v)}
              />
              <RubricSlider
                axis="ai"
                label="AI 활용 트랙"
                hint="L1·L2 졸업 + L3 1+ Build. 100 = 모든 진단 PASS"
                value={rubric.ai}
                onChange={(v) => setRubricAxis("ai", v)}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function countTrue(record: Record<string, boolean> | undefined): number {
  if (!record) return 0;
  return Object.values(record).filter(Boolean).length;
}

function CheckboxRow({
  id,
  checked,
  label,
  onChange,
}: {
  id: string;
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <li className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 cursor-pointer rounded border-input accent-primary"
      />
      <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed">
        {label}
      </label>
    </li>
  );
}

function AssessmentCard({
  title,
  description,
  count,
  total,
  items,
  checked,
  onToggle,
}: {
  title: string;
  description: string;
  count: number;
  total: number;
  items: { id: string; label: string }[];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Badge variant={count >= Math.ceil(total * 0.7) ? "success" : "outline"}>
            {count}/{total}
          </Badge>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((it) => (
            <CheckboxRow
              key={it.id}
              id={`a-${it.id}`}
              checked={!!checked[it.id]}
              label={`${it.id} — ${it.label}`}
              onChange={() => onToggle(it.id)}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function RubricSlider({
  axis,
  label,
  hint,
  value,
  onChange,
}: {
  axis: string;
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={`rubric-${axis}`} className="text-sm font-medium">
          {label}
        </label>
        <span className="text-sm tabular-nums">{value}</span>
      </div>
      <input
        id={`rubric-${axis}`}
        type="range"
        min="0"
        max="100"
        step="5"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer accent-primary"
      />
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
      {children}
    </div>
  );
}
