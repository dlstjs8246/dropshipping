"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "./SidebarNav";
import { cn } from "@/lib/utils";

export function MobileTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background px-4 md:hidden"
        aria-label="Mobile header"
      >
        <Link href="/dashboard" className="flex items-center gap-2 font-bold">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>Command Center</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      <div
        id="mobile-drawer"
        className={cn(
          "fixed inset-x-0 top-14 z-30 origin-top transform bg-background transition-all md:hidden",
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        )}
        hidden={!open}
      >
        <div className="border-b bg-card shadow-lg">
          <SidebarNav />
        </div>
      </div>
    </>
  );
}
