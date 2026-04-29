import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { requireSessionUser } from "@/lib/auth/session";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OnboardingKeyForm } from "./OnboardingKeyForm";

export const metadata = { title: "온보딩 | Command Center" };

export default async function OnboardingPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  await requireSessionUser();
  const { step } = await params;
  const stepNum = Number(step);

  if (!Number.isInteger(stepNum) || stepNum < 1 || stepNum > 2) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between text-xs text-muted-foreground">
        <span>Step {stepNum} / 2</span>
        <Link href="/dashboard" className="hover:underline">
          나중에 하기
        </Link>
      </div>

      {stepNum === 1 ? <Step1Welcome /> : <Step2Key />}
    </div>
  );
}

function Step1Welcome() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>환영합니다 👋</CardTitle>
        <CardDescription>
          Command Center는 14주 마스터 클래스의 AI Mastery Track L1·L2를 실제로
          작동시키는 단일 학생용 AI 랩입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p>
          본 플랫폼은 <strong>BYOK</strong> (Bring Your Own Key) 모델로 운영됩니다.
          본인 Anthropic API 키를 입력하면 모든 AI 모듈이 즉시 활성화됩니다.
        </p>
        <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
          <li>플랫폼은 평생 무료 (1기 학생)</li>
          <li>AI 호출 비용은 본인 Anthropic 계정으로 청구 (월 약 $7~20)</li>
          <li>키는 AES-256-GCM 암호화 저장 — 서버 외 유출 X</li>
        </ul>
        <Button asChild className="w-full">
          <Link href="/onboarding/2">
            다음: API 키 입력
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function Step2Key() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Anthropic API 키 입력</CardTitle>
        <CardDescription>
          [console.anthropic.com](https://console.anthropic.com)에서 키를 발급한 뒤
          아래에 붙여넣으세요. 1-token 검증 후 암호화 저장됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <OnboardingKeyForm />
        <p className="text-xs text-muted-foreground">
          (선택) L1 Triangulation에 출처 URL 포함 4번째 소스를 추가하려면 가입 후
          <Link href="/settings/api-keys" className="px-1 text-primary hover:underline">
            Settings → API Keys
          </Link>
          에서 Perplexity 키도 입력할 수 있습니다.
        </p>
      </CardContent>
    </Card>
  );
}
