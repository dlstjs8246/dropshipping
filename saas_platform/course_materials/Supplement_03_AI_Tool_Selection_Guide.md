# 🧭 Supplement 03: AI 도구 선택 가이드 (2026)

> **목적**: "어떤 작업에 어떤 AI를 써야 가장 빠르고 정확한가?"에 대한 작업별 의사결정 매트릭스.
> **연계**: Master Prompts §12 (도구 선택 자가 진단)와 함께 사용

---

## 1. 5대 핵심 AI 비교 표 (2026년 4월 기준)

| 도구 | 강점 | 약점 | 무료 한도 | 유료 시작 |
|---|---|---|---|---|
| **Claude (Anthropic)** | 긴 문서·뉘앙스·코딩 추론·정직성 (200K context) | 이미지 생성 X, 실시간 검색 부분적 | 일 ~30회 | $20/월 (Pro) |
| **ChatGPT (OpenAI)** | DALL-E 이미지·웹 검색·다목적·Custom GPTs | 톤 단조, 긴 글 일관성 약함 | GPT-4o-mini 무제한 / GPT-4o 일 10회 | $20/월 (Plus) |
| **Gemini (Google)** | Workspace 통합·이미지 생성·100만 토큰 컨텍스트 | 한국어 구어체 어색, 추론 깊이 평이 | Gemini 2.0 Flash 무제한 | $20/월 (Advanced) |
| **Perplexity** | 실시간 웹 + 출처 인용 자동 | 창작·코딩 약함 | 일 5회 Pro Search | $20/월 (Pro) |
| **Cursor (코딩 전용)** | Claude/GPT 백엔드 + IDE 통합 | 비코딩 작업 불가 | 월 2,000 completions | $20/월 (Pro) |

---

## 2. 작업별 추천 매트릭스 (드랍쉬핑 14주 흐름 기준)

| 주차 | 작업 | 1순위 | 2순위 | 사유 |
|:--:|---|---|---|---|
| W1 | AI 개념 학습·실험 | **3개 동시 사용** (Claude/GPT/Gemini) | — | 같은 질문에 다른 답을 비교하며 차이 체감 |
| W2 | 니치 트렌드 리서치 | **Perplexity** | Claude + 수동 검색 | 실시간 + 출처 인용이 결정적 |
| W2 | Kill Criteria 7대 평가 | **Claude** | GPT-4o | 다단계 추론 + 정확한 계산 |
| W3 | Landed Cost 계산 | **Claude** | GPT-4o | 수치 계산 정확도 |
| W3 | HTS 코드 추정 | **Perplexity** | Claude (단, USITC.gov 검증 필수) | 실시간 데이터베이스 접근 |
| W4 | 브랜드 네이밍 10개 | **Claude** | GPT-4o | 창의성 + 일관된 평가 |
| W4 | 로고 컨셉 5종 이미지 | **Midjourney → DALL-E (ChatGPT)** | Ideogram (무료) | 이미지 품질 |
| W4 | 영웅 배너 이미지 | **Gemini Imagen 3** (무료) | DALL-E 3 | 무료 + 텍스트 처리 우수 |
| W5 | 상세페이지 PAS 카피 | **Claude Sonnet 4.6** | GPT-4o | 긴 문맥 일관성 + 톤 미묘함 |
| W5 | 영문 SEO 메타 | **Claude** | GPT-4o | 정확한 길이 제한 준수 |
| W5 | 공급사 스펙 검증 | **Perplexity** | Claude | 실시간 비교 + 의심점 도출 |
| W6 | Shopify Liquid 코딩 | **Cursor** (Claude 백엔드) | Claude + 수동 복사 | IDE 자동 적용 |
| W7 | 광고 이미지 30장 | **DALL-E (ChatGPT Plus)** | Midjourney $10 | 1회 5장 + 다양한 시드 |
| W7 | 영상 스크립트 5종 | **Claude** | GPT-4o | 톤 일관성 + 길이 제어 |
| W7 | TTS 보이스 | **ElevenLabs** | CapCut TTS (무료) | 자연스러움 압도적 |
| W8 | 채널 분석 (크리에이터) | **Claude** | GPT-4o | 미묘한 페인포인트 추출 |
| W8 | 개인화 DM 100개 | **Claude** + Few-shot | GPT-4o | Few-shot 응용 가장 정확 |
| W9 | Spark Ads 분석 | **Claude** + CSV | ChatGPT Code Interpreter | 표 분석 정확도 |
| W9 | A/B 카피 5종 | **Claude** | GPT-4o | 창의성 폭 |
| W10 | Make.com 시나리오 설계 | **Claude** | GPT-4o | 단계별 추론 |
| W10 | 고객 응답 (자동) | **Claude Haiku 4.5** (속도+가격) | GPT-4o-mini | 응답 속도가 핵심 |
| W11 | RAG 봇 시스템 프롬프트 | **Claude Projects** | ChatGPT Custom GPT | 200K context로 매뉴얼 통째 업로드 |
| W11 | 가격 모니터링 알림 분류 | **Claude Haiku** | GPT-4o-mini | 단순 분류 = 저렴한 모델 |
| W12 | 4주 데이터 분석 | **Claude** + CSV | ChatGPT Code Interpreter | 깊이 있는 액셔너블 인사이트 |
| W12 | 차트 자동 생성 | **Claude Artifacts** | ChatGPT Code Interpreter | 즉시 시각화 |
| W13 | Multi-Agent 분류 | **Claude Haiku** (API) | GPT-4o-mini API | Make.com HTTP 모듈에서 호출 |
| W13 | 이메일 시퀀스 5통 | **Claude** | GPT-4o | 톤 일관성 |
| W14 | 성과 리포트 작성 | **Claude** | GPT-4o | 긴 문서 구조 |

---

## 3. 모델별 가격 비교 (2026 API 기준)

직접 API를 호출하는 경우 (Make.com, n8n, 자체 앱 등):

| 모델 | Input ($ / 1M tokens) | Output ($ / 1M tokens) | 비고 |
|---|:--:|:--:|---|
| Claude Sonnet 4.6 | $3.00 | $15.00 | 최고 균형 |
| Claude Haiku 4.5 | $1.00 | $5.00 | **분류·자동화 추천** |
| Claude Opus 4.7 | $15.00 | $75.00 | 최고 추론 (특수 용도만) |
| GPT-4o | $2.50 | $10.00 | Claude Sonnet 대안 |
| GPT-4o-mini | $0.15 | $0.60 | Claude Haiku 대안 |
| Gemini 2.0 Flash | 무료 (한도 내) | 무료 (한도 내) | 폭넓은 무료 한도 |

> **💡 자동화 비용 절감 비법**: 분류/추출 같은 단순 작업은 Haiku/4o-mini로, 창작/추론은 Sonnet/4o로. **프롬프트 캐싱** 활용 시 RAG 비용 90% 절감 가능.

---

## 4. 작업 유형별 1줄 결정 규칙

| 작업 유형 | 결정 규칙 |
|---|---|
| **빠른 답** (60초 안에 결론) | ChatGPT 4o |
| **깊은 추론** (다단계 사고) | Claude Sonnet |
| **실시간 정보 + 출처** | Perplexity |
| **이미지 생성 (사실적)** | DALL-E (ChatGPT Plus) |
| **이미지 생성 (예술적)** | Midjourney |
| **이미지 생성 (무료)** | Gemini Imagen 3 또는 Ideogram |
| **긴 문서 처리** (PDF, 100+ 페이지) | Claude Sonnet (200K context) |
| **코드 작성·디버깅** | Cursor (Claude 백엔드) 또는 Claude Sonnet |
| **음성 생성 (TTS)** | ElevenLabs |
| **영상 생성** | Runway Gen-3 또는 Pika 1.5 |
| **음악 생성 (BGM)** | Suno AI |
| **자동화 분류 (저비용)** | Claude Haiku 4.5 API |
| **Google Workspace 연동** | Gemini Advanced |
| **반복 작업 자동화** | Custom GPT 또는 Claude Projects |

---

## 5. 무료 한도 극복 — "3개 AI 교차 사용" 전략

ChatGPT 무료 + Claude 무료 + Gemini 무료를 같이 쓰면 일일 한도를 사실상 무제한으로 늘릴 수 있습니다.

### 일일 사용 패턴 예시
```
오전 (Claude 무료 한도 활용):
- 복잡한 카피·분석 작업
- 30회 한도 다 쓸 때까지

낮 (ChatGPT 무료 GPT-4o-mini):
- 빠른 검색·간단 질문
- 무제한이라 자유롭게

저녁 (Gemini 2.0 Flash):
- 이미지 생성·긴 문서 요약
- 무제한 + 100만 토큰

심야 (Perplexity 무료):
- 시장 리서치·통계 검증
```

> **결론**: 첫 6개월은 유료 결제 없이 3개 AI 교차 사용으로 충분. ChatGPT Plus는 W7 광고 이미지 생성용 1개월만 결제.

---

## 6. 절대 피해야 할 AI 사용 패턴

| ❌ 패턴 | 왜? | ✅ 대안 |
|---|---|---|
| 1개 AI에만 의존 | 할루시네이션 검증 불가 | 3개 AI 교차 검증 (W1 학습) |
| 프롬프트 1줄로 끝 | 결과 품질 50% 이하 | Master Prompts 템플릿 활용 |
| AI 답을 그대로 복붙 | 사실 오류 + 톤 불일치 | Self-Critique (§15) 한 번 더 |
| 모든 작업에 GPT-4o | 비용 폭증 | Haiku/4o-mini로 단순 작업 위임 |
| 한국어로만 질문 | 영어 학습 데이터 못 활용 | 핵심 작업은 영문 프롬프트 |
| 컨텍스트 매번 새로 | 일관성 붕괴 | Claude Projects / Custom GPT |

---

## 📌 결론 — 추천 스택

```
무료 (총 $0):
├─ Claude (메인 작업)
├─ ChatGPT (보조 + DALL-E)
├─ Gemini (이미지 + 긴 문서)
├─ Perplexity (리서치)
└─ Cursor (코딩)

유료 추가 (선택, 월 $35):
├─ ChatGPT Plus ($20) — W7 한 달만
├─ ElevenLabs Starter ($5) — W7~ 영상 음성
└─ Midjourney Basic ($10) — W7 광고 이미지

자동화 단계 (Phase 4 진입 시, 월 $20~50):
├─ Claude API ($10~30) — 자동 응답·분류
└─ Anthropic 프롬프트 캐싱 활용 → 비용 90% 절감
```
