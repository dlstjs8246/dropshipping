import Link from "next/link";
import { Calculator, Bot, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6">
          <Sparkles className="mr-1 h-3 w-3" />
          14주 마스터 클래스 동반 SaaS
        </Badge>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          Command Center
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          AI Mastery Track L1·L2를 실제로 작동시키는 단일 학생용 AI 랩.
          <br className="hidden md:inline" />
          본인 Anthropic 키로 가입하면 즉시 사용 가능합니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/login">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/curriculum">
              <BookOpen className="mr-2 h-4 w-4" />
              강의 자료 둘러보기
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <ModuleCard
          href="/margin"
          icon={Calculator}
          title="Margin Shield"
          level="L0-L1"
          description="CJ URL 한 줄 → 7-필터 Kill Criteria 자동 평가 + 관세 포함 Landed Cost + GO/HOLD/FAIL 판정. W2~W3 강의를 코드로."
          courseRef="W2 Kill Criteria · W3 Landed Cost"
        />
        <ModuleCard
          href="/lab/l1"
          icon={Sparkles}
          title="L1 Triangulation"
          level="L1"
          description="질문 1개 → Claude 3-temperature 병렬 호출 + 합의/부분/충돌 자동 분류. Supplement 08 §6.2 4단계 프로토콜 시연."
          courseRef="Supplement 08 §6.2"
        />
        <ModuleCard
          href="/lab/l2"
          icon={Bot}
          title="L2 Assistant Builder"
          level="L2"
          description="카피·DM·CS 비서 5단계 빌드 (명세 → 시스템 프롬프트 → 지식 → 테스트 → 배포). Claude Projects 복붙 가능 .md 다운로드."
          courseRef="Supplement 09 §3·§7~§9"
        />
      </div>

      <div className="mt-20 rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">1기 평생 무료 + 본인 Anthropic 키 (BYOK)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              플랫폼은 무료. AI 호출 비용은 본인 Anthropic 계정에 청구 (월 약 $7~20).
              모든 키는 AES-256-GCM 암호화 저장. 서버 외 유출 X.
            </p>
            <Link
              href="/curriculum/Supplement_08_L1_Generative_AI_Foundations"
              className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              먼저 L1 (Supplement 08) 1회독 권장
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({
  href,
  icon: Icon,
  title,
  level,
  description,
  courseRef,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  level: string;
  description: string;
  courseRef: string;
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="outline">{level}</Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-xs font-medium uppercase tracking-wider">
          {courseRef}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>
            열기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
