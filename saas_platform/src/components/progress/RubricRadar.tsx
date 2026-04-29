"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function RubricRadar({
  revenue,
  system,
  ai,
}: {
  revenue: number;
  system: number;
  ai: number;
}) {
  const data = [
    { axis: "매출", value: revenue, fullMark: 100 },
    { axis: "시스템", value: system, fullMark: 100 },
    { axis: "AI 활용", value: ai, fullMark: 100 },
  ];

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <RadarChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 16 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="axis" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Radar
            dataKey="value"
            stroke="oklch(0.488 0.243 264.376)"
            fill="oklch(0.488 0.243 264.376)"
            fillOpacity={0.4}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
