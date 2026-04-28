"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const schema = z.object({
  email: z.string().email("유효한 이메일을 입력하세요."),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const params = useSearchParams();
  const next = params.get("next") ?? "/dashboard";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [oauthLoading, setOauthLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit({ email }: FormValues) {
    setStatus("sending");
    setErrorMessage(null);

    try {
      const supabase = createClient();
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) throw error;
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "알 수 없는 오류");
    }
  }

  async function onGoogleSignIn() {
    setOauthLoading(true);
    setErrorMessage(null);
    try {
      const supabase = createClient();
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (error) throw error;
      // signInWithOAuth redirects browser; no further state change needed.
    } catch (err) {
      setOauthLoading(false);
      setErrorMessage(err instanceof Error ? err.message : "Google 로그인 실패");
    }
  }

  if (status === "sent") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            메일을 확인하세요
          </CardTitle>
          <CardDescription>
            로그인 링크를 보냈습니다. 메일함의 링크를 클릭하면 자동 로그인됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            메일이 안 오면 스팸함을 확인하세요. 5분 내 미도착 시 다시 시도해주세요.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인 / 가입</CardTitle>
        <CardDescription>
          비밀번호 없음. Google 계정 또는 이메일 매직 링크.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={onGoogleSignIn}
          disabled={oauthLoading || status === "sending"}
        >
          {oauthLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              이동 중...
            </>
          ) : (
            <>
              <GoogleIcon className="mr-2 h-4 w-4" />
              Google로 계속
            </>
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-2 text-muted-foreground">또는</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              {...register("email")}
            />
            {formState.errors.email ? (
              <p className="text-xs text-destructive">
                {formState.errors.email.message}
              </p>
            ) : null}
          </div>

          {errorMessage ? (
            <Alert variant="destructive">
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          ) : null}

          <Button
            type="submit"
            variant="secondary"
            className="w-full"
            disabled={status === "sending" || oauthLoading}
          >
            {status === "sending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                전송 중...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                매직 링크 받기
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#EA4335"
        d="M12 5.04c1.7 0 3.21.59 4.41 1.74l3.3-3.3C17.85 1.6 15.18.5 12 .5 7.34.5 3.27 3.16 1.3 7.06l3.85 2.99C6.13 7.13 8.83 5.04 12 5.04z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.83-.07-1.62-.2-2.39H12v4.51h6.46c-.28 1.5-1.13 2.77-2.41 3.62l3.71 2.88c2.17-2 3.74-4.95 3.74-8.62z"
      />
      <path
        fill="#FBBC05"
        d="M5.16 14.05a7.49 7.49 0 0 1 0-4.73L1.3 6.34a12.45 12.45 0 0 0 0 11.32l3.86-3.61z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.18 0 5.85-1.06 7.8-2.86l-3.71-2.88c-1.04.7-2.39 1.12-4.09 1.12-3.16 0-5.85-2.09-6.84-4.92L1.3 17.05C3.27 20.84 7.34 23.5 12 23.5z"
      />
      <path fill="none" d="M.5.5h23v23H.5z" />
    </svg>
  );
}
