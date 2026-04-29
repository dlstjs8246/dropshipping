"use client";

import { useRouter } from "next/navigation";
import { Search, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SessionsFilters({
  initialQ,
  initialModule,
  initialVerdict,
  initialDays,
}: {
  initialQ: string;
  initialModule: string;
  initialVerdict: string;
  initialDays: string;
}) {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    const q = (fd.get("q") as string).trim();
    const mod = fd.get("module") as string;
    const verdict = fd.get("verdict") as string;
    const days = fd.get("days") as string;

    if (q) params.set("q", q);
    if (mod && mod !== "all") params.set("module", mod);
    if (verdict && verdict !== "all") params.set("verdict", verdict);
    if (days && days !== "30") params.set("days", days);
    const qs = params.toString();
    router.push(`/sessions${qs ? `?${qs}` : ""}`);
  }

  function onReset() {
    router.push("/sessions");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="grid gap-2 lg:col-span-2">
        <Label htmlFor="q">검색</Label>
        <Input
          id="q"
          name="q"
          defaultValue={initialQ}
          placeholder="제목 부분 일치 (예: 거북목)"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="module-filter">모듈</Label>
        <Select name="module" defaultValue={initialModule}>
          <SelectTrigger id="module-filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="margin">Margin Shield</SelectItem>
            <SelectItem value="l1_triangulation">L1 Triangulation</SelectItem>
            <SelectItem value="l2_builder">L2 Builder</SelectItem>
            <SelectItem value="l3_agent">L3 Agent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="verdict-filter">Verdict</Label>
        <Select name="verdict" defaultValue={initialVerdict}>
          <SelectTrigger id="verdict-filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="GO">GO</SelectItem>
            <SelectItem value="HOLD">HOLD</SelectItem>
            <SelectItem value="FAIL">FAIL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="days-filter">기간</Label>
        <Select name="days" defaultValue={initialDays}>
          <SelectTrigger id="days-filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">최근 7일</SelectItem>
            <SelectItem value="30">최근 30일</SelectItem>
            <SelectItem value="90">최근 90일</SelectItem>
            <SelectItem value="all">전체</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end gap-2 sm:col-span-2 lg:col-span-4">
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          검색·필터 적용
        </Button>
        <Button type="button" variant="outline" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          초기화
        </Button>
      </div>
    </form>
  );
}
