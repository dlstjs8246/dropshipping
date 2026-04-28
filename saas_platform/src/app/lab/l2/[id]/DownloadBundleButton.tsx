"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadBundleButton({
  filename,
  content,
}: {
  filename: string;
  content: string;
}) {
  function handleDownload() {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <Button onClick={handleDownload} variant="outline">
      <Download className="mr-2 h-4 w-4" />
      .md 다운로드
    </Button>
  );
}
