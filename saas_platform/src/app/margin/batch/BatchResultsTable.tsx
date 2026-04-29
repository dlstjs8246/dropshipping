"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpDown, ArrowUp, ArrowDown, AlertCircle, ExternalLink } from "lucide-react";
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BatchRowResult, BatchRowOk } from "./actions";

const columns: ColumnDef<BatchRowOk>[] = [
  {
    accessorKey: "rowIndex",
    header: "#",
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground">
        {row.original.rowIndex}
      </span>
    ),
  },
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <SortHeader
        label="상품명"
        sort={column.getIsSorted()}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <Link
        href={`/margin/${row.original.sessionId}`}
        className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary hover:underline"
      >
        {row.original.productName}
        <ExternalLink className="h-3 w-3" />
      </Link>
    ),
  },
  {
    accessorKey: "verdict",
    header: ({ column }) => (
      <SortHeader
        label="Verdict"
        sort={column.getIsSorted()}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => <VerdictBadge verdict={row.original.verdict} />,
    sortingFn: (a, b) => {
      const order = { GO: 0, HOLD: 1, FAIL: 2 };
      return (
        order[a.original.verdict] - order[b.original.verdict]
      );
    },
  },
  {
    accessorKey: "marginPct",
    header: ({ column }) => (
      <SortHeader
        label="Margin"
        sort={column.getIsSorted()}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span
        className={
          row.original.marginPct >= 30
            ? "font-medium text-emerald-600"
            : "font-medium text-destructive"
        }
      >
        {row.original.marginPct.toFixed(1)}%
      </span>
    ),
  },
  {
    accessorKey: "landedCostUsd",
    header: ({ column }) => (
      <SortHeader
        label="Landed Cost"
        sort={column.getIsSorted()}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => `$${row.original.landedCostUsd.toFixed(2)}`,
  },
];

export function BatchResultsTable({
  results,
  skipped,
}: {
  results: BatchRowResult[];
  skipped: { row: number; reason: string }[];
}) {
  const okRows = useMemo(
    () => results.filter((r): r is BatchRowOk => r.ok),
    [results]
  );
  const errRows = useMemo(() => results.filter((r) => !r.ok), [results]);

  const [sorting, setSorting] = useState<SortingState>([
    { id: "verdict", desc: false },
  ]);

  const table = useReactTable({
    data: okRows,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const summary = useMemo(() => {
    const counts = { GO: 0, HOLD: 0, FAIL: 0 };
    for (const r of okRows) counts[r.verdict] += 1;
    return counts;
  }, [okRows]);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>배치 결과</CardTitle>
          <CardDescription>
            성공 {okRows.length}건 · 실패 {errRows.length}건 · 스킵 {skipped.length}건
            {" · "}GO {summary.GO} / HOLD {summary.HOLD} / FAIL {summary.FAIL}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {okRows.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              성공한 행이 없습니다.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  {table.getHeaderGroups().map((hg) => (
                    <tr key={hg.id}>
                      {hg.headers.map((header) => (
                        <th key={header.id} className="px-3 py-2 font-semibold">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="border-t">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-3 py-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {errRows.length + skipped.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              실패·스킵 행
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {errRows.map((r) =>
                r.ok ? null : (
                  <li key={`err-${r.rowIndex}`} className="rounded-md border p-3">
                    <p className="font-medium">
                      Row {r.rowIndex}: {r.productName}
                    </p>
                    <p className="text-xs text-destructive">{r.message}</p>
                  </li>
                )
              )}
              {skipped.map((s) => (
                <li
                  key={`skip-${s.row}`}
                  className="rounded-md border bg-muted/30 p-3"
                >
                  <p className="font-medium">Row {s.row} 스킵</p>
                  <p className="text-xs text-muted-foreground">{s.reason}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

function SortHeader({
  label,
  sort,
  onClick,
}: {
  label: string;
  sort: false | "asc" | "desc";
  onClick: () => void;
}) {
  const Icon = sort === "asc" ? ArrowUp : sort === "desc" ? ArrowDown : ArrowUpDown;
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="h-7 px-2 text-xs"
    >
      {label}
      <Icon className="ml-1 h-3 w-3" />
    </Button>
  );
}

function VerdictBadge({ verdict }: { verdict: "GO" | "HOLD" | "FAIL" }) {
  return (
    <Badge
      variant={
        verdict === "GO" ? "success" : verdict === "FAIL" ? "destructive" : "warning"
      }
    >
      {verdict}
    </Badge>
  );
}
