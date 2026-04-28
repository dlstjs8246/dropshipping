"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDER = ["light", "dark", "system"] as const;
type ThemeOption = (typeof ORDER)[number];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mount detection: hydration-safe pattern for next-themes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Theme toggle">
        <span className="h-4 w-4" />
      </Button>
    );
  }

  const current = (theme as ThemeOption | undefined) ?? "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Monitor;
  const labels: Record<ThemeOption, string> = {
    light: "라이트 모드 (다음: 다크)",
    dark: "다크 모드 (다음: 시스템)",
    system: "시스템 따름 (다음: 라이트)",
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={labels[current]}
      title={labels[current]}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
