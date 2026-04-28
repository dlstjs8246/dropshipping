import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return (
    <aside
      className="hidden w-64 shrink-0 border-r bg-card md:flex md:flex-col"
      aria-label="Sidebar"
    >
      <Link
        href="/dashboard"
        className="flex h-16 items-center gap-2 border-b px-6 font-bold tracking-tight"
      >
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="text-base">Command Center</span>
      </Link>
      <SidebarNav className="flex-1 overflow-y-auto" />
    </aside>
  );
}
