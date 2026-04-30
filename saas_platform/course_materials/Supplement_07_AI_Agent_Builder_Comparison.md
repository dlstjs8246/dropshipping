# 🤖 Supplement 07: AI Agent 빌더 비교 (Custom GPTs / Claude Projects / Gemini Gems)

> **목적**: 코딩 없이 자체 AI 어시스턴트(Agent)를 만드는 3대 플랫폼을 비교하고, 드랍쉬핑 운영용 5개 Agent 청사진을 제공합니다.
> **연계**: Week 11 (RAG CS 봇), Master Prompts §22 (위기 대응)

---

## 1. 3대 빌더 비교 표

| 항목 | Custom GPT (ChatGPT) | Claude Projects | Gemini Gems |
|---|---|---|---|
| **요금** | ChatGPT Plus $20 | Claude Pro $20 | Gemini Advanced $20 |
| **컨텍스트 (한 대화)** | 128K tokens | **200K tokens** | 1M tokens |
| **파일 업로드** | 20개 (총 512MB) | **무제한** (Project당) | 10개 |
| **Web Search** | ✓ | ⚠️ Web Search Tool 별도 | ✓ |
| **이미지 생성** | ✓ DALL-E | ✗ | ✓ Imagen 4 |
| **Code Interpreter** | ✓ | ✓ Artifacts | ✓ |
| **공유 가능** | ✓ Public/Private | Pro 사용자 간 공유 | ✓ Public |
| **외부 API 연동** | ✓ Actions (Open API) | Function Calling (API만) | ⚠️ 제한적 |
| **음성 대화** | ✓ Voice Mode | ✗ | ✓ |
| **드랍쉬핑 추천도** | ⭐⭐⭐⭐ | **⭐⭐⭐⭐⭐** | ⭐⭐⭐ |

---

## 2. 빌더별 강점·약점

### Custom GPT (ChatGPT Plus)
**강점**:
- DALL-E·Web Search·Code Interpreter 통합
- Actions로 외부 API 호출 가능 (Shopify, Klaviyo 등)
- GPT Store 공개 시 수익 가능

**약점**:
- 컨텍스트 짧음 (128K) → 긴 매뉴얼 처리 불리
- 파일 512MB 제한
- 시스템 프롬프트 길이 ~8000자 제한

**드랍쉬핑 적용**:
- 고객 응답 봇 (Web Search로 배송 추적)
- 광고 카피 생성기 (DALL-E로 이미지 같이)
- 공급사 검색 봇 (Actions로 Aliexpress 호출)

---

### Claude Projects (Claude Pro) — **드랍쉬핑 1순위**
**강점**:
- 200K 컨텍스트 → 매뉴얼 100페이지 통째 업로드
- 파일 무제한 → 모든 SOP·정책·상품 데이터 포함
- 답변 정확성·정직성 (할루시네이션 적음)
- Artifacts로 차트·표 즉시 생성
- 프롬프트 캐싱으로 API 비용 90% 절감

**약점**:
- DALL-E·이미지 생성 X
- Web Search 별도 활성화
- 음성 대화 X

**드랍쉬핑 적용**:
- **RAG CS 봇** (Week 11 핵심)
- 데이터 분석 어시스턴트 (CSV 업로드 → 인사이트)
- 위기 대응 어시스턴트 (분쟁 사례 DB 학습)

---

### Gemini Gems (Gemini Advanced)
**강점**:
- 1M 컨텍스트 (Claude의 5배)
- Google Workspace 완벽 통합 (Sheets, Docs, Gmail 직접 접근)
- Imagen 4 무제한 이미지 생성
- 한국어 강함 (Google 학습)

**약점**:
- 미세 추론 약함 (Sonnet/4o 대비)
- API 외부 연동 제한적
- 공식 Gem 갤러리 빈약

**드랍쉬핑 적용**:
- Google Sheets 분석 어시스턴트
- Gmail 대량 답변 어시스턴트
- 한국어 콘텐츠 자동화

---

### (옵션) 코드 우선 — Claude Agent SDK / OpenAI Agents SDK

위 3개 빌더는 **노코드 GUI** 방식. 본 강의의 1인 셀러는 여기서 시작이 정답입니다. 단, L3 [Supplement 10](./Supplement_10_L3_AI_Agent_Building.md) 학습 후 운영 자동화를 코드로 본격화한다면 2025년 출시된 Agent SDK가 다음 단계입니다.

| 항목 | 노코드 빌더 (이 문서 §1) | **Agent SDK** (코드) |
|---|---|---|
| 진입 | 즉시 (드래그·업로드) | Cursor + Python/TS 기본 |
| 도구 호출 | Actions (Open API 스펙) | `@tool` 데코레이터 + MCP |
| 공유 | GPT Store / Pro 공유 | 본인 인프라 (Vercel/Render) |
| 비용 | 월 $20 정액 | API 사용량 + 캐싱 90% 할인 |
| 적합 시점 | Day 1 ~ 매출 검증 | 매출 안정 후 운영 자동화 |

> **결정 규칙**: L1·L2는 GUI 빌더, L3 본격 운영(Agent가 실제 의사결정 수행 + 매일 N회 자동 트리거)은 SDK. 자세한 SDK 코드 예시는 [Supplement 10 §4-7](./Supplement_10_L3_AI_Agent_Building.md) 참조.

---

## 3. 드랍쉬핑 1인 셀러용 5개 Agent 청사진

### 🤖 Agent 1: CS 응답 봇 (Claude Projects 추천)

**목적**: 고객 메일 80%를 인간 검수 가능한 초안으로 자동 생성

```text
[Claude Projects 설정]
1. claude.ai → Projects → "+ New Project"
2. Name: "CS Response Bot"
3. Description: "Customer service email drafter for [BRAND]"
4. Custom Instructions:
   "너는 [BRAND]의 수석 CS 매니저야.
   업로드된 매뉴얼을 100% 정확히 따라 답변해.
   배송·환불·상품 스펙 외 질문은 '확인 후 24h 내 답변'으로 회피.
   답변은 영어, 4~6줄, 친근하지만 프로페셔널.
   답변 끝에는 항상 '— [Founder Name]' 서명."

5. Knowledge (파일 업로드):
   - shipping_policy.pdf
   - refund_policy.pdf
   - product_specs.pdf
   - faq_top_50.pdf
   - past_winning_responses.pdf (좋은 응답 50개)

6. 사용:
   - 고객 메일 본문 복붙 → "Draft a response"
   - 결과 확인 → 수정 → Gmail 답장
```

---

### 🔍 Agent 2: 니치 발굴 어시스턴트 (Custom GPT 추천)

**목적**: Web Search + DALL-E를 활용한 트렌드 모니터링

```text
[Custom GPT 설정]
1. ChatGPT Plus → Explore GPTs → Create
2. Name: "DTC Niche Hunter"
3. Description: "Find emerging product niches with data"

4. Instructions:
   "너는 DTC 트렌드 분석가야.
   사용자가 카테고리를 주면:
   1. Web Search로 최근 30일 검색량 동향 확인
   2. 미국 Amazon Best Sellers 상위 10개 비교
   3. TikTok #tiktokmademebuyit 최근 게시물 50개 패턴
   4. 위 데이터를 종합한 진입 추천도 1~10점
   5. DALL-E로 추천 상품 라이프스타일 이미지 1장

   모든 답변은 한국어, 출처 URL 포함."

5. Capabilities:
   ✓ Web Browsing
   ✓ DALL-E
   ✓ Code Interpreter

6. 사용:
   - "wellness 카테고리 분석해줘"
   - 5분 후 종합 리포트 + 이미지 1장
```

---

### 📊 Agent 3: 데이터 분석 어시스턴트 (Claude Projects 추천)

**목적**: 매주 KPI 자동 분석 + 액셔너블 인사이트

```text
[Claude Projects 설정]
1. Name: "Weekly Data Analyst"
2. Custom Instructions:
   "너는 senior DTC 분석가야.
   매주 일요일 사용자가 4개 CSV를 업로드하면:
   1. Master Prompts §9 분석 풀 프롬프트 그대로 적용
   2. KEEP / SCALE / KILL 결단 명시
   3. Artifacts로 차트 1개 즉시 생성 (line chart)
   4. 다음 주 액션 3개 (우선순위 순)
   5. STOP doing 1개

   답변은 한국어, 표·차트 활용."

3. Knowledge:
   - business_metrics_baseline.csv (지난 13주 데이터)
   - industry_benchmarks.pdf

4. 사용:
   - 매주 일요일 4개 CSV 드래그 → "Analyze this week"
```

---

### 🎨 Agent 4: 광고 카피 생성기 (Custom GPT 추천)

**목적**: DALL-E + 카피를 한 번에 생성

```text
[Custom GPT 설정]
1. Name: "Ad Creative Factory"
2. Instructions:
   "너는 DTC 광고 크리에이티브 전문가야.
   사용자가 [상품명, 페인, 베네핏, 가격]을 주면:
   1. Master Prompts §20 5종 카피 동시 생성
   2. 5종 각각에 매칭되는 DALL-E 이미지 1장씩 (총 5장)
   3. 추천 페르소나·예상 CTR 명시

   결과는 표로 정리. 영어 카피 + 한국어 메모."

3. Capabilities:
   ✓ DALL-E
4. 사용:
   - 신상품 정보 입력 → 5분 후 5종 광고 패키지 완성
```

---

### 🚨 Agent 5: 위기 대응 어시스턴트 (Claude Projects 추천)

**목적**: Stripe·Shopify·PayPal 분쟁 시 30분 안에 어필 작성

```text
[Claude Projects 설정]
1. Name: "Crisis Response Lawyer"
2. Custom Instructions:
   "너는 e커머스 분쟁 변호사야.
   사용자가 위기 유형 + 본인 fact + 증거를 주면:
   1. Master Prompts §22 위기 대응 풀 프롬프트 적용
   2. 영문 비즈니스 이메일 200~300단어
   3. Exhibit A/B/C 증거 인덱스
   4. 어필 1회로 끝낼 수 있게 모든 정보 포함

   감정 표현 절대 금지, fact 중심."

3. Knowledge:
   - stripe_dispute_winning_examples_50.pdf
   - shopify_appeal_templates.pdf
   - paypal_resolution_guide.pdf
   - past_disputes_won.csv

4. 사용:
   - 위기 발생 → 5개 입력 → 30분 안에 어필 메시지 완성
```

---

## 4. Agent 운영 베스트 프랙티스

### Do's ✅
1. **하나의 Agent = 하나의 명확한 작업**: "모든 걸 하는 봇"은 어느 것도 잘 못함
2. **Knowledge 파일은 PDF로 통일**: 파싱 안정성 최고
3. **Custom Instructions에 "절대 X 하지 말 것" 명시**: 안전 장치
4. **답변 형식을 표로 강제**: 자동화 시 파싱 쉬움
5. **매월 한 번 Knowledge 갱신**: 정책·가격 변경 반영
6. **3개월마다 응답 품질 감사**: 5개 샘플로 정확도 측정

### Don'ts ❌
1. 100% 자동화 (CS 봇·위기 대응은 휴먼 검수 필수)
2. 민감 데이터 업로드 (개인정보·결제 정보 X)
3. Knowledge 파일 1개에 10MB 이상 (분할 권장)
4. Custom Instructions 8000자 초과 (요약 후 Knowledge로 이전)
5. 무료 GPT/Project 공유 시 본인 데이터 노출 위험

---

## 5. 빌더 선택 결정 트리

```
긴 매뉴얼·정책 학습이 핵심? (10~100 페이지)
  └─ YES → Claude Projects (200K context)
  └─ NO  → ↓

이미지 생성이 필요?
  └─ YES → Custom GPT (DALL-E) 또는 Gemini Gems (Imagen)
  └─ NO  → ↓

Google Workspace 통합이 핵심?
  └─ YES → Gemini Gems
  └─ NO  → ↓

외부 API 연동 (Shopify, Klaviyo 등)?
  └─ YES → Custom GPT (Actions)
  └─ NO  → Claude Projects (가장 안정)
```

---

## 6. Multi-Agent 시스템 — 빌더 간 협업

```
[Custom GPT: Ad Creative Factory] 
    │ DALL-E 이미지 생성
    ▼
[Claude Projects: Copy Reviewer]
    │ Self-Critique + 개선
    ▼
[Gemini Gems: Sheets Logger]
    │ Google Sheets에 자동 저장
    ▼
[Make.com Webhook]
    │ Slack 알림
```

> **고급 응용**: 3개 빌더의 강점을 모두 활용하는 1인 셀러는 사실상 5명 직원을 둔 효과를 얻습니다.

---

## 📌 졸업 직후 1주일 챌린지

| Day | 챌린지 |
|:--:|---|
| Day 1 | Claude Projects로 CS 봇 1개 (매뉴얼 PDF 업로드) |
| Day 2 | Custom GPT로 니치 발굴 봇 1개 |
| Day 3 | Claude Projects로 데이터 분석 어시스턴트 1개 |
| Day 4 | Custom GPT로 광고 카피 봇 1개 |
| Day 5 | Claude Projects로 위기 대응 봇 1개 |
| Day 6 | 5개 봇 응답 품질 테스트 (각 5개 샘플) |
| Day 7 | 친구 셀러에게 봇 데모 → 피드백 |

> **결론**: 졸업 직후 5개 Agent를 갖춘 1인 셀러는 외주·정직원 없이 월 100시간 노가다 작업을 자동화합니다. 이것이 "AI 활용 수익화"의 진짜 모습입니다.
