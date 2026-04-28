"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      aria-label={`${label} (clipboard)`}
    >
      {copied ? (
        <>
          <Check className="mr-1 h-3 w-3" />
          복사됨
        </>
      ) : (
        <>
          {icon}
          <span className="ml-1">{label}</span>
        </>
      )}
    </Button>
  );
}
