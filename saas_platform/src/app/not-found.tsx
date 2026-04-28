import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 md:min-h-screen">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          이동하려던 페이지가 존재하지 않거나 이전되었을 수 있습니다.
        </p>
        <Button asChild className="mt-6">
          <Link href="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            대시보드로 가기
          </Link>
        </Button>
      </div>
    </div>
  );
}
