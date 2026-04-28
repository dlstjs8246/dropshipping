import { Suspense } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "로그인 | Command Center",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 py-12 md:min-h-screen">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2 font-bold tracking-tight"
        >
          <Sparkles className="h-5 w-5 text-primary" />
          <span>Command Center</span>
        </Link>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
