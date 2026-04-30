# 🎓 Week 4: AI 브랜딩 + 스토어 인프라 개설

## 🎯 이번 주 학습 목표
1. 쇼피파이(Shopify) 플랫폼의 기본 결제 세팅 및 필수 인프라를 구축한다.
2. AI(Gemini, Canva)를 활용해 전문 디자이너 수준의 로고와 영웅 배너(Hero Image)를 제작한다.
3. 브랜드 톤앤매너를 설정하여 스토어의 신뢰도를 극대화한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 3주차 과제(최종 상품 스코어카드) 리뷰
* **0:10 - 0:40 (30분)**: [이론] 브랜드 톤앤매너와 컬러 심리학, 쇼피파이 필수 세팅
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] 쇼피파이 결제, 로고 및 배너 제작, About Us 작성
* **2:10 - 2:30 (20분)**: Q&A 및 4주차 과제 안내

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 왜 디자인이 신뢰를 결정하는가?

고객이 스토어에 들어와서 "여기서 사도 안전할까?"를 판단하는 데 걸리는 시간은 **3초**입니다. 중국 직구 느낌이 나는 촌스러운 빨간색, 깨진 이미지, 어색한 폰트는 당장 지갑을 닫게 만듭니다. 우리는 **'미국 현지에 있는 깔끔한 프리미엄 브랜드'**처럼 보여야 합니다.

### 1.5. 2026 Shopify — Sidekick AI 활용 (Editions Winter '26)

[Shopify Editions Winter '26](https://www.shopify.com/editions/winter2026)에서 출시된 **Sidekick AI**는 Shopify Admin 안에 내장된 자연어 어시스턴트입니다. 학생들이 강의 후 Shopify 들어가면 우측 상단 ✨ 아이콘이 보일 겁니다.

**1인 셀러용 Sidekick 활용 5선**:

| 활용 | 자연어 명령 예시 |
|---|---|
| 테마 자연어 편집 | "Make the hero banner darker and increase the font size of the headline" |
| 상품 추가 자동화 | "Add the product from this URL with title, description, 3 images, and tags" |
| 마진율 분석 | "Show me products with margin under 30% and suggest price increases" |
| 환불 처리 | "Refund order #1234 with reason 'customer request' and notify them" |
| 신상품 카피 생성 | "Write a PAS-format product description for [상품명]" |

> **결정 규칙**: 단순 쿼리·테마 수정·반복 작업은 Sidekick. 깊은 추론·전략·교차 검증은 [Claude Projects](./Supplement_07_AI_Agent_Builder_Comparison.md). Sidekick은 Shopify 데이터에 직접 접근 → 외부 도구 대비 속도 ↑.

> ⚠️ **Sidekick 한계**: 2026.4 기준 영어 프롬프트가 정확도 ↑. 한국어로 명령 시 데이터 매칭 실패 가끔 발생. 복잡한 명령은 영어 권장.

### 2. 브랜드 톤앤매너 & 컬러 제한의 법칙

초보자가 가장 많이 하는 디자인 실수는 무지개색을 쓰는 겁니다. 오늘은 **메인 컬러 1개와 폰트 1개**(예: Inter, Roboto)만 정하세요.
- 건강/뷰티 → 차분한 파스텔이나 화이트
- 테크 기기 → 다크 톤에 네온 포인트

### 3. 쇼피파이(Shopify) 인프라 개요

수많은 플랫폼 중에 왜 쇼피파이일까요? **앱 생태계가 압도적**이고, **글로벌 결제가 가장 안정적**이기 때문입니다. 지금 첫 3개월간 월 1달러 프로모션을 하고 있으니, 오늘 1달러만 결제하고 3개월 안에 승부를 보겠습니다.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. 쇼피파이 계정 개설 및 결제 (20분)
1. 강사가 공유하는 프로모션 링크로 이메일 가입하세요.
2. 스토어 이름(임시라도 무관)을 정하고, $1 플랜을 결제합니다. (해외 결제 가능 카드 필요)
3. 기본 설정(Settings) 메뉴에서 Store Details, Payments (추후 연동), Checkout 옵션을 설정합니다.

### Step 2. AI 이미지 생성: 로고와 배너 (40분)
1. **Gemini 켜기**: 무료 이미지 생성을 위해 Gemini를 활용합니다.
2. **로고 프롬프트**:
   > "미니멀하고 현대적인 스타일의 '[내 스토어 이름]' 로고 텍스트 마크를 만들어 줘. 색상은 [메인 컬러]를 사용하고 백그라운드는 투명하게 해 줘."
3. **Canva 편집**: 생성된 로고를 Canva 무료 버전에 가져와 규격(Header용)에 맞게 자르고 다듬습니다.
4. **Hero Image 생성**: 스토어 첫 화면에 들어갈 웅장한 배너 이미지를 AI로 생성합니다.
   > 예: "햇살이 비치는 아늑한 거실 한가운데 놓인 세련된 가습기 이미지, 고화질 4K, 여백 있음"

### Step 3. AI로 About Us(브랜드 스토리) 작성 (20분)
1. Claude를 켜고 다음과 같이 입력하세요:
   > "우리 브랜드는 [상품 니치]를 다루는 전문 스토어야. 바쁜 현대인들에게 휴식과 건강을 찾아주는 것이 목표야. 고객에게 신뢰감을 주는 'About Us' 페이지 텍스트를 영문으로 3문단으로 작성해 줘."
2. 작성된 텍스트를 쇼피파이 Pages 메뉴에 붙여넣습니다.

---

## 🤖 [AI 활용 심화] 브랜드 패키지 5단 파이프라인 (20분 추가)

위에서 한 작업을 단편적이 아니라 **AI 5개를 연결한 파이프라인**으로 묶으면 일관성 있는 브랜드가 30분 만에 완성됩니다.

### Step A. Tree of Thought 브랜드 네이밍 (Claude)

[02_Master_Prompts.md §16 브랜드 네이밍 풀 시스템](./02_Master_Prompts.md) 사용:
1. 5가지 패턴(자연/의인화/합성/동사/외국어)으로 각 2개 = 10개 후보
2. 5축 평가 (Memorability·Pronunciation·Domain·TM·Persona Fit)
3. 총점 1위 자동 선정 + Instagram 핸들 5종 변형

### Step B. 톤앤매너 정의 (Claude — Few-shot)

[02_Master_Prompts.md §14 Few-shot 학습 — 브랜드 톤](./02_Master_Prompts.md) 사용:
1. 좋아하는 D2C 브랜드 3개의 인스타 캡션 1개씩 수집 (예: Allbirds, Glossier, Notion)
2. 그 톤을 모방하여 본인 브랜드의 슬로건 5개 + 첫 인스타 캡션 3개 동시 생성
3. → 톤이 일관된 브랜드 보이스 자산 확보

### Step C. 로고 5종 동시 생성 (Midjourney)

[02_Master_Prompts.md §17 AI 로고 디자인 브리프](./02_Master_Prompts.md) 사용:
1. Wordmark / Lettermark / Combination / Emblem / Wordmark+Mascot 5종
2. 각 시드 4개씩 = 20장 로고 후보
3. 마음에 드는 1개 → Final Selection

### Step D. 컬러 팔레트 + 폰트 추천 (Gemini)

```text
[Gemini에 던질 프롬프트]
"이 로고 PNG를 분석해 줘:
- 브랜드 분위기 한 줄 요약
- Primary 1색 + Secondary 2색 + Accent 1색 + Neutral 1색 (HEX 코드)
- Google Fonts 추천 2개 (Heading용 + Body용)
- 다크모드 대응 컬러 5색
- 추천 컬러를 적용한 Shopify 테마 변수명 매핑"
```

### Step E. 히어로 배너 자동 생성 (DALL-E 또는 Imagen 4)

위 Step A~D의 결과를 모두 종합한 프롬프트로 한 번에 히어로 배너 생성:

```text
[히어로 배너 통합 프롬프트]
"Hero banner image for D2C brand '[BRAND_NAME]'.
Mood: [Step B에서 정의한 톤].
Color palette: [Step D HEX 5색].
Subject: [PRODUCT] in [SCENE 한 줄].
Style: minimalist editorial, professional product photography.
Aspect ratio: 16:9, 4K resolution, leave 30% empty space on left
for headline text overlay."
```

### 결과 — Brand Asset Pack
30분 안에:
- ✅ 브랜드 이름 1개 (TM 충돌 위험 사전 평가)
- ✅ 톤 정의 + 슬로건 5개 + 첫 캡션 3개
- ✅ 로고 1종 (4 시드 변형)
- ✅ 컬러 팔레트 5색 (HEX) + 폰트 2개
- ✅ 히어로 배너 1장 (4 시드)

> **연계**: 이 파이프라인은 [Supplement 05 레시피 2 (브랜드 패키지 5단)](./Supplement_05_AI_Workflow_Recipes.md)의 풀 시연입니다.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 도메인(주소)도 사야 하나요?**
> 초반에는 돈을 아끼기 위해 `.myshopify.com` 무료 주소를 그냥 쓰거나, 저렴한 `.store` 도메인을 2~5달러에 사는 것을 추천합니다. 비싼 `.com` 도메인은 첫 매출이 나오고 나서 스케일업할 때 사도 충분합니다.

**Q: 결제 대행사(PG)는 어떻게 연결하나요?**
> 미국 외 거주자는 Shopify Payments 사용이 까다로울 수 있습니다. 오늘 단계에서는 페이팔(PayPal) 비즈니스 계정을 우선 연결하고, 추후 Stripe나 2Checkout 같은 글로벌 PG사 연동을 진행합니다.

---

## 📝 4주차 과제 안내
1. 쇼피파이에 접속하여 무료 테마(Dawn 또는 Sense 등)를 하나 고르고, 오늘 만든 로고와 배너 이미지를 업로드하세요.
2. 스토어의 색상을 정한 컬러 파레트에 맞게 통일시키세요.
3. 스토어 첫 화면 링크를 노션 대시보드에 업데이트하세요.
