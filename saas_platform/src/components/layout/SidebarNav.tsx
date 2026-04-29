"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calculator,
  Bot,
  BookOpen,
  Settings,
  Sparkles,
  Workflow,
  ClipboardCheck,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  group: "main" | "labs" | "learn" | "account";
}

const NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, group: "main" },
  { href: "/margin", label: "Margin Shield", icon: Calculator, group: "main" },
  { href: "/lab/l1", label: "L1 Triangulation", icon: Sparkles, group: "labs" },
  { href: "/lab/l2", label: "L2 Assistant Builder", icon: Bot, group: "labs" },
  { href: "/lab/l3", label: "L3 Agent Sandbox", icon: Workflow, group: "labs" },
  { href: "/sessions", label: "Sessions", icon: Search, group: "labs" },
  { href: "/progress", label: "Progress", icon: ClipboardCheck, group: "learn" },
  { href: "/curriculum", label: "Curriculum", icon: BookOpen, group: "learn" },
  { href: "/settings/account", label: "Settings", icon: Settings, group: "account" },
];

const GROUP_LABEL: Record<NavItem["group"], string> = {
  main: "Main",
  labs: "AI Labs",
  learn: "Learn",
  account: "Account",
};

export function SidebarNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const groups = (["main", "labs", "learn", "account"] as const).map((g) => ({
    group: g,
    items: NAV.filter((n) => n.group === g),
  }));

  return (
    <nav
      className={cn(
        "flex flex-col gap-6 px-3 py-6 text-sm",
        className
      )}
      aria-label="Primary navigation"
    >
      {groups.map(({ group, items }) => (
        <div key={group} className="flex flex-col gap-1">
          <span className="px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {GROUP_LABEL[group]}
          </span>
          {items.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
