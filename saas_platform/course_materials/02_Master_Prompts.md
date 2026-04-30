# 🧠 마스터 프롬프트 컬렉션 (Master Prompts)

> **수강생 사용 안내**: 본 컬렉션은 14주 동안 반복적으로 사용할 핵심 프롬프트 47종을 모아둔 것입니다. 변수(`[괄호]`) 부분만 본인 상품·브랜드 정보로 바꿔 AI(Claude, ChatGPT, Gemini)에 그대로 입력하세요. 각 프롬프트의 사용 시점은 제목 옆 `(Week N)` 표기를 참고하세요.
>
> **구조**:
> - **Part 1 (§1~§28)**: 콘텐츠 생성 AI — 카피·DM·이미지·영상·번역
> - **Part 2 (§29~§39)**: 운영·진단·메타 AI — Cart Abandonment·Fatigue·Pivot·EAT·Cohort·멘탈·Router
> - **Part 3 (§40~§47)**: 매주 운영 결단 AI — Weekly Priority·Cross-sell·Fraud·Image SEO·Pricing·Creator·IP Risk

---

## 1. 🚫 7대 Kill Criteria 검증 프롬프트 (Week 2)
상품이 드랍쉬핑에 적합한지 즉각적으로 필터링하는 프롬프트입니다.

```text
[Role]
너는 10년 차 글로벌 이커머스 소싱 전문가이자 수익률 최적화 전문가야.

[Context]
내가 중국 소싱 플랫폼(AliExpress/CJ Dropshipping)에서 드랍쉬핑 후보 상품을 하나 찾았어. 이 상품이 2026년 미국 시장 타겟으로 판매할 가치가 있는지 7가지 절대 기준(Kill Criteria)으로 팩트 체크하고 싶어.

[Instruction]
다음 상품 정보를 바탕으로 아래 7가지 기준을 각각 PASS 또는 FAIL로 엄격하게 평가해 줘.

[상품 정보]
- 상품명/설명: [스마트 자세 교정기 넥밴드]
- 예상 소싱가(제품 원가): [$8.00]
- 예상 국제 배송비: [$4.00]
- 예상 판매가: [$35.00]
- 제품 무게: [약 150g]
- 패키지 크기: [20 x 15 x 5 cm]
- 제품 재질: [실리콘, 플라스틱]

[7가지 평가 기준]
1. 마진율 ≥ 30%: ((판매가 - 소싱가 - 배송비 - 소싱가의 50% 관세) / 판매가) 가 30% 이상인가? (계산식 결과 포함할 것 — 50%는 2026 Q2 IEEPA 무효 후 Section 122+301+232 보수적 가정)
2. 무게 ≤ 500g: 500g 이하로 가벼운가?
3. 부피 소형: 30x30x15cm 이내로 DIM Weight 할증을 피할 수 있는가?
4. 판매가 $25~$80: 충동구매가 가능하며 마진이 확보되는 가격대인가?
5. 파손 위험: 운송 중 깨질 위험(유리, 도자기 등)이 없는가?
6. 계절성 무관: 특정 계절(여름, 겨울)에 국한되지 않고 사계절 팔릴 수 있는가?
7. 숏폼 시연 가능성: 15초짜리 틱톡 숏폼 영상으로 Before/After나 시각적 임팩트를 보여주기 쉬운가?

[Format]
1. 기준 1~7에 대한 각각의 PASS/FAIL 판정과 간단한 사유
2. 종합 결론 (GO / HOLD / DROP)
```

---

## 2. 📝 PAS 카피라이팅 프롬프트 (Week 5)
상세페이지 문구를 작성하는 프롬프트입니다.

```text
[Role]
너는 수백만 달러의 매출을 일으킨 최상위 전환율(CVR) 카피라이터야.

[Context]
내 쇼피파이 스토어에 [거북목 교정 넥밴드] 상품 상세페이지를 만들려고 해. 타겟 고객은 하루 8시간 이상 모니터를 보는 미국의 20~40대 직장인이야.

[Instruction]
이 상품에 대한 상세페이지 텍스트를 P.A.S (Problem - Agitation - Solution) 공식에 맞춰 작성해 줘.

1. Problem (문제 제기): 고객이 일상에서 느끼는 불편함(어깨 결림, 두통 등)을 콕 짚어줘.
2. Agitation (문제 심화): 이 문제를 방치했을 때 일어날 끔찍한 결과(디스크, 병원비 폭탄, 굽은 등)를 감정적으로 자극해 줘.
3. Solution (해결책 제시): 우리 상품이 어떻게 이 문제를 하루 15분 만에, 수술 없이 해결해 주는지 명확한 이점을 제시해 줘.

[Format]
- 숏폼 광고용 스크립트로 쓸 수 있게 문장을 짧고 간결하게 작성
- 적절한 이모지(Emoji) 활용
- 마지막에 명확한 CTA (Call to Action: 지금 50% 할인 구매하기) 포함
```

---

## 3. 🤝 인플루언서 초개인화 아웃리치 DM 프롬프트 (Week 8)
틱톡 크리에이터에게 보낼 협업 제안 DM을 생성합니다.

```text
[Role]
너는 인플루언서 제휴 마케팅 전문가야.

[Context]
내가 틱톡 크리에이터에게 우리 제품([자세 교정기])을 무료로 보내주고 협업(UGC 영상 제작 및 20% 제휴 수수료 지급)을 제안하는 DM을 보내려고 해.
템플릿처럼 보이면 차단당하기 쉬우므로, 철저히 개인화된 느낌을 줘야 해.

[Instruction]
다음 크리에이터 정보를 바탕으로 인스타그램/틱톡 DM 초안을 작성해 줘.

[크리에이터 정보]
- 이름/핸들: [@WorkFromHome_Jane]
- 최근 영상 내용: [어제 올린 재택근무용 스탠딩 데스크 셋업 영상]
- 팔로워 수: [약 15K]

[작성 조건]
1. 첫 문장에서 상대방의 [최근 영상 내용]을 진심으로 칭찬할 것. (예: "어제 올린 스탠딩 데스크 영상 정말 잘 봤어요! 셋업이 멋지네요.")
2. 우리 제품이 상대방의 채널 성격과 왜 완벽하게 어울리는지 1문장으로 설명할 것.
3. 무리한 요구(무조건 영상 올려라) 대신, "샘플을 무료로 보내주고 싶은데 괜찮을까요? 마음에 들면 20% 커미션 제휴도 가능합니다"라고 가볍게 제안할 것.
4. 길이는 4~5문장 이내로 매우 짧고 친근하게 유지할 것.
5. 영어로 작성할 것 (미국 현지 네이티브 톤).
```

---

## 4. 🤖 AI 고객센터 봇 시스템 프롬프트 (Week 10)
Custom GPT나 Claude Projects 시스템 설정에 넣는 프롬프트입니다.

```text
너는 '[내 스토어 이름]'의 수석 고객지원(CS) 매니저야.
너의 목표는 고객의 불만을 잠재우고, 배송 문의에 친절하게 답하며, 절대 무리한 약속을 하지 않는 거야.

[기본 원칙]
1. 항상 프로페셔널하고 친절한 톤을 유지해.
2. 배송 기간 문의 시: "저희 제품은 현재 주문 폭주로 인해 영업일 기준 7~12일 정도 소요됩니다. 너그러운 양해 부탁드립니다"라고 안내해.
3. 환불/반품 문의 시: "수령 후 30일 이내에 파손/불량인 경우 묻지도 따지지도 않고 전액 환불해 드립니다. 사진을 첨부해 회신해 주세요"라고 안내해.
4. 네가 모르는 상품 스펙이나 정보는 절대 지어내지 말고(할루시네이션 방지), "해당 부서에 확인 후 24시간 내에 다시 안내해 드리겠습니다"라고 답해.

다음 고객의 메일을 읽고, 위 원칙에 따라 회신 이메일 초안을 영어로 작성해 줘.
```

---

## 5. 🎨 DALL-E / Midjourney 광고 이미지 5종 프롬프트 팩 (Week 7)
한 상품에 대해 5가지 다른 분위기의 광고 이미지를 뽑는 프롬프트 묶음입니다. `[PRODUCT]` 자리에 상품명만 바꿔 그대로 사용하세요.

```text
[변수 치환표]
[PRODUCT]    = 상품명 (예: silicone neckband posture corrector)
[PERSONA]    = 타겟 페르소나 (예: 25-year-old WFH worker)
[PAIN]       = 페인포인트 한 줄 (예: chronic neck pain from long hours)

────────────────────────────────────────────
1) Lifestyle Hero (라이프스타일 히어로 컷)
"A photorealistic iPhone 14 Pro shot of [PRODUCT] sitting on a clean
white oak desk in a minimalist American home office, soft morning
sunlight streaming from the left window, shallow depth of field,
no text, no logos, --ar 9:16 --v 6"

2) Before / After Pain Hook (틱톡 첫 프레임용)
"Split screen comparison: left side shows a stressed [PERSONA]
hunched over a laptop with red pain indicator on the [PAIN AREA];
right side shows the same person sitting upright wearing [PRODUCT],
relaxed and smiling, vibrant TikTok-style lighting, --ar 9:16"

3) UGC Authentic (가짜 UGC 스타일 — 광고 같지 않게)
"Slightly imperfect smartphone selfie of a [PERSONA] holding [PRODUCT]
in a messy bedroom, natural lighting from window, mild grain,
no professional studio look, candid TikTok aesthetic, --ar 9:16"

4) Studio Product Shot (단독 컷 — 상세페이지용)
"Clean studio product photography of [PRODUCT] floating against
gradient cream background, soft rim lighting, dust particles in
backlight, hyper-detailed, commercial e-commerce style, --ar 1:1"

5) Lifestyle in Use (사용 중 컷 — 시즈널 캠페인용)
"Cinematic close-up of hands using [PRODUCT] in a cozy cafe,
warm tungsten lighting, blurred latte and laptop in background,
shot on Sony A7IV 50mm lens, depth of field, --ar 4:5"
```

> **사용 팁**: 5종을 한 번에 돌려서 30장(시드 6배)을 받고, 마음에 드는 1장씩만 골라 CapCut 타임라인에 올리면 15초 영상 5편이 1시간 내 완성됩니다.

---

## 6. 🔍 크리에이터 채널 분석 프롬프트 (Week 8 — DM 작성 전 단계)
DM을 작성하기 전, 먼저 상대 크리에이터의 톤·관심사·페인포인트를 요약하는 프롬프트입니다. 결과를 §7 DM 프롬프트의 입력으로 그대로 넣습니다.

```text
[Role]
너는 마이크로 인플루언서 행동 분석가야. 짧은 영상 캡션과 댓글 몇 개만 보고도
크리에이터의 관심사·톤·잠재 페인포인트를 정확히 짚어내.

[Instruction]
아래 크리에이터의 최근 영상 3개 정보를 보고 다음 4가지를 추출해 줘:
1. 콘텐츠 톤 (chill / energetic / educational / comedic 중 하나)
2. 핵심 관심사 3개 (해시태그/캡션/소품 기반)
3. 영상에 반복 등장하는 구체적 디테일 1개 (예: gray cat, LED desk lamp)
4. 우리 제품([PRODUCT])과의 연결 가능성 (1~5점) + 그 이유 한 줄

[크리에이터 정보]
- Handle: [@handle]
- Platform: [TikTok / Instagram / YouTube Shorts]
- Followers: [숫자]
- 최근 영상 1: 제목 [...] / 캡션 [...] / 댓글 톱2 [...]
- 최근 영상 2: 제목 [...] / 캡션 [...] / 댓글 톱2 [...]
- 최근 영상 3: 제목 [...] / 캡션 [...] / 댓글 톱2 [...]

[Format]
JSON으로 출력:
{
  "tone": "...",
  "interests": ["...", "...", "..."],
  "specific_detail": "...",
  "fit_score": 4,
  "fit_reason": "..."
}
```

---

## 7. ✉️ 채널-개인화 AI DM 풀 프롬프트 (Week 8 — 핵심)
§3의 기본 DM을 발전시킨 **풀버전**입니다. §6에서 추출한 JSON을 입력으로 받아, 템플릿 냄새가 전혀 나지 않는 DM을 만듭니다.

```text
[Role]
You are an elite TikTok/Instagram outreach specialist with a 12% reply rate.
You understand micro-influencer psychology: they crave authentic recognition,
not template flattery.

[Context]
I run a Shopify store selling [PRODUCT_CATEGORY] to US customers.
I want to invite [CREATOR_HANDLE] to test my product as a free sample
in exchange for an honest review video and a 20% affiliate commission
on tracked sales.

[Channel-Personalization Inputs] (paste §6 output here)
- Platform: [TikTok | Instagram | YouTube Shorts]
- Creator handle: [@handle]
- Follower count: [15K]
- Tone: [chill / energetic / educational / comedic]
- Interests: [...]
- Specific detail to reference: [e.g., the gray cat that appears in B-roll]
- Fit score: [1-5]

[Hard Rules — DO NOT VIOLATE]
1. Do NOT use the words "collaboration", "partnership", or "promo"
   in the first sentence (sounds like spam).
2. Reference the SPECIFIC DETAIL from their last video in line 1.
3. Match their tone exactly: if they swear casually, you can swear once;
   if they're educational, stay clean.
4. NO links in the first DM. Suggest moving to email after they reply.
5. Length: 4–5 sentences MAX. Mobile-readable in 6 seconds.
6. End with a low-friction question they can answer with one word
   ("Would shipping you one for free be cool?").
7. Never claim "I'm a fan" — micro-influencers smell that lie instantly.

[Output Format]
- Subject line (for IG): under 8 words, no emoji
- DM body: plain text, max 2 emojis total, conversational
- Optional follow-up DM (send 4 days later if no reply): 1–2 sentences

[Quality Reference Example]
Input: TikTok creator @PostureJane, 22K followers, latest video shows
her stretching at a cluttered home desk with a neck pain complaint.

Output:
"yo that desk stretch routine yesterday hit way too close to home —
literally felt my own neck cramp watching it 😅
i'm running a small posture brand and the silicone neckband we just
launched feels like exactly what your audience would actually use,
not the usual sponsored junk.
would shipping you one (free, no strings) be cool?
if it works for you we can talk a 20% rev share later."
```

---

## 8. 📺 Spark Ad Code 요청 영문 DM (Week 9)
크리에이터로부터 6자리 Spark Ad 인증 코드를 받아내기 위한 후속 DM입니다. 영상이 이미 오가닉으로 1,000뷰 이상 나왔을 때만 보내세요.

```text
hey! quick update — your video is doing really well organically
(currently at [VIEW_COUNT] views) and i'd love to put a small
ad budget behind it to boost it to your wider audience.

if you're cool with it, here's the 30-second how-to:
1. open TikTok app → Profile → your video → "..." menu
2. tap "Ad settings" → toggle ON "Ads authorization"
3. set the duration to 7 days (it auto-expires)
4. copy the 6-digit code that appears and send it back to me

i'll cover 100% of the ad spend, your channel grows for free,
and you keep 20% commission on any sales it drives.
sound fair?
```

---

## 9. 📊 Claude 4주 데이터 분석 풀 프롬프트 (Week 12 — 핵심)
4주간의 쇼피파이 + 틱톡 광고 데이터를 한 번에 진단하고 액셔너블한 우선순위를 받습니다. CSV로 붙여넣거나 표로 입력하세요.

```text
[Role]
You are a senior DTC e-commerce analyst who has scaled 12 Shopify
stores from $0 to $100K/month. You speak in concrete numbers,
not vague advice.

[Context]
I am pasting 4 weeks of operational data from my dropshipping
store. I need you to identify the SINGLE biggest bottleneck and
give me 3 ranked actions for next week.

[Data Inputs]
== Shopify Funnel (per week) ==
- Sessions:                  W1: [...], W2: [...], W3: [...], W4: [...]
- Add-to-Cart rate (%):      W1, W2, W3, W4
- Reached-Checkout rate (%): W1, W2, W3, W4
- Conversion rate (%):       W1, W2, W3, W4
- Average Order Value ($):   W1, W2, W3, W4

== TikTok Ads (per week) ==
- Spend ($):       W1, W2, W3, W4
- Impressions:     W1, W2, W3, W4
- CTR (%):         W1, W2, W3, W4
- CPC ($):         W1, W2, W3, W4
- ROAS:            W1, W2, W3, W4

== Unit Economics ==
- Sourcing cost per unit:    $[X]
- Shipping per unit:         $[X]
- Tariff (50% of sourcing — 2026 Q2): $[X]
- Shopify fee (2.9% + $0.30): auto-calc
- Selling price:             $[X]
- Break-even CPA:            $[auto-calc]

[Your Output Must Contain — In This Exact Order]
1. **One-line diagnosis**: which funnel stage is the worst bottleneck
   compared to industry benchmarks? (cite the benchmark)
2. **Quantified gap**: "Your CVR is X% vs industry X%, costing
   you ~$Y/week in lost revenue."
3. **Top 3 actions ranked by ROI**, each with:
   - Specific change (no vague advice)
   - Expected lift in % points
   - Effort (Low / Medium / High)
   - How to measure success in 7 days
4. **Kill recommendation**: KEEP / SCALE / KILL.
   Decision rule: if Net Profit margin < 15% AND ROAS < 1.5
   for 2 consecutive weeks → KILL.
5. **One thing I should STOP doing immediately.**

[Constraints]
- No vague advice like "improve the copy". Say "rewrite the H1
  to lead with the pain in 6 words or less".
- Cite numbers from my data in every recommendation.
- If data is missing for a section, say "INSUFFICIENT DATA"
  and tell me exactly what to collect.
```

---

## 10. 🤖 Multi-Agent 분류 프롬프트 (Week 13 — Watcher → Analyst)
Make.com Router의 분기 조건을 AI에 위임할 때 쓰는 분류 프롬프트입니다. JSON으로 깔끔하게 받아 다음 에이전트가 바로 사용할 수 있게 합니다.

```text
[Role]
너는 e커머스 운영 분류기야. 들어온 이벤트(주문, CS 메일, 환불 요청 등)를
3가지 클래스 중 하나로 라벨링하고, 다음 액션을 추천해.

[Class 정의]
- VIP        : 누적 구매액 ≥ $200 또는 단일 주문 ≥ $100
- NORMAL     : 일반 1회 구매 / 일반 문의
- RISK       : 환불 요청, 부정적 키워드(angry, lawsuit, scam, refund),
               배송 지연 14일 초과

[Input]
{
  "event_type": "order_created | cs_email | refund_request",
  "customer_email": "...",
  "lifetime_value_usd": 0,
  "current_order_total_usd": 0,
  "message_body": "..."
}

[Output Format — STRICT JSON ONLY]
{
  "classification": "VIP | NORMAL | RISK",
  "confidence": 0.0,
  "reasoning": "한 문장 (한국어 OK)",
  "suggested_action": "slack_mention_owner | send_vip_thanks_email |
                       send_standard_thanks_email | escalate_to_human |
                       auto_refund_under_$30",
  "priority": "high | medium | low"
}

[Hard Rules]
- confidence ≥ 0.85 일 때만 자동 액션 실행.
- 0.85 미만이면 무조건 priority=high + suggested_action=escalate_to_human.
- 출력은 JSON 한 객체만, 다른 텍스트 일절 금지.
```

---

## 11. 📧 Klaviyo 5통 환영 시퀀스 자동 생성 (Week 13 / Supplement_01)
신규 구독자에게 10일 동안 자동 발송될 5통의 이메일을 한 번에 생성합니다.

```text
[Role] You are a Klaviyo email expert who specializes in 5-email
welcome flows for DTC brands.

[Context]
- Brand: [BRAND_NAME]
- Product: [PRODUCT]
- Target customer: [PERSONA]
- Brand voice: [casual / professional / playful]
- AOV: $[X]
- Founder story (1 sentence): [...]

[Instruction] Write a 5-email welcome series for new subscribers:
- Email 1 (immediate): Welcome + 10% code, build identity
- Email 2 (Day 2):     Brand story, founder photo angle
- Email 3 (Day 4):     Top product + 3 review snippets
- Email 4 (Day 7):     Education content (problem/solution)
- Email 5 (Day 10):    Urgency — code expires + best-seller

[Format per email]
- Subject line (under 50 chars) + A/B variant
- Preview text (under 90 chars)
- Body (plain text, max 150 words)
- CTA button text (max 4 words)

[Hard Rules]
- No exclamation marks in subject lines (deliverability hit).
- Link only to ONE URL per email (single CTA).
- All copy in English (US tone).
```

---

# 🚀 PART 2: 고급 AI 활용 프롬프트 (§12~25)

> **이 파트의 목적**: 단순 프롬프트가 아닌, **사고법 + 다단계 추론 + 자가 비판**을 활용한 고급 프롬프트 패턴 모음입니다. 한 번 익히면 어떤 작업에도 응용 가능합니다.

---

## 12. 🧭 AI 도구 선택 자가 진단 프롬프트
"이 작업에 어떤 AI를 써야 할지" 판단이 안 설 때 쓰는 메타 프롬프트.

```text
[Role]
너는 LLM 도구 선택 컨설턴트야.

[Instruction]
내가 하려는 작업을 듣고, 다음 4가지 AI 중 가장 적합한 1개를 추천하고 이유를 설명해 줘.
- Claude (긴 문서·뉘앙스·코드 추론)
- ChatGPT (DALL-E 이미지·실시간 검색·다목적)
- Gemini (Google Workspace·이미지 생성·무료)
- Perplexity (실시간 웹 리서치·소스 인용)

[작업 설명]
- 목적: [예: 30개 상품 리뷰를 읽고 공통 페인포인트 추출]
- 입력 데이터: [텍스트량, 형식, 언어]
- 원하는 출력: [형식, 길이, 톤]
- 시급성: [실시간 / 1시간 / 1일]
- 예산: [무료 / 유료 OK]

[Format]
1. 추천 AI: ___
2. 이유 (3줄):
3. 차선책 + 차이점:
4. 피해야 할 AI + 이유:
```

---

## 13. 🌳 Chain of Thought (CoT) — 니치 발굴 다단계 추론
한 번에 답을 받지 말고, AI에게 "단계별로 생각하게" 강제하는 패턴. 정확도 30%↑.

```text
[Role]
너는 데이터 기반 니치 분석가야.

[Context]
나는 미국 향 드랍쉬핑 신규 셀러야. 2026년 4월 기준으로 진입할 니치 1개를
선정하려고 해.

[Instruction — 반드시 단계별로 사고하고 각 단계의 근거를 보여줄 것]

Step 1: 트렌드 신호 수집
  - Google Trends 12개월 상승 카테고리 5개 나열
  - TikTok #tiktokmademebuyit 최근 30일 언급 빈도 카테고리 5개
  - Amazon Best Sellers Rising 카테고리 5개

Step 2: 교집합 도출
  - Step 1의 3개 리스트에서 2회 이상 등장한 카테고리만 남기기

Step 3: Kill Criteria 사전 체크
  - 교집합 카테고리 각각에 대해:
    - 평균 단가 ($25~80 범위?)
    - 무게 (500g 이하?)
    - 운송 파손 위험?

Step 4: 경쟁 강도 평가
  - 각 카테고리의 미국 Shopify 신규 스토어 추정치 (높음/중간/낮음)
  - "Blue Ocean Score" 1~5점

Step 5: 최종 추천 1개
  - 위 모든 데이터를 종합한 1개 카테고리 + 추천 이유 5줄

[Format — 각 Step의 출력을 별도 헤더로 구분]
## Step 1: 트렌드 신호
...
## Step 2: 교집합
...
(이하 동일)
```

> **핵심**: "단계별로 생각해 줘 (think step by step)"라고 명시하지 않으면 AI는 결론부터 던집니다. CoT는 정확도를 극적으로 올립니다.

---

## 14. 📚 Few-shot 학습 — 브랜드 톤앤매너 일관성
AI에게 "예시 3개"를 보여주면 톤을 정확히 복제합니다. 카피 일관성의 비결.

```text
[Role]
너는 우리 브랜드의 카피라이터야.

[Brand Voice Examples — 이 톤을 정확히 모방할 것]

Example 1 (Instagram caption):
"your back deserves better than that 'office chair'.
swap it for our seat — your spine will text you thank-yous.
link in bio. 🪑"

Example 2 (Product description first line):
"sit like the boss you actually are."

Example 3 (Email subject line):
"your spine called. it wants this."

[Instruction]
위 3개 예시의 톤을 정확히 모방하여, [신상품 제품명]에 대한 다음 3개를
작성해 줘:
1. Instagram caption (3줄, 이모지 1개)
2. 상세페이지 첫 문장 (12단어 이내)
3. 이메일 subject (50자 이내, 느낌표 금지)

[톤 일관성 체크리스트]
- 소문자만 사용 ✓
- 의인화·구어체 ✓
- 짧고 펀치 있는 문장 ✓
- 직접적 신체 부위 언급 ✓
```

> **응용**: 어떤 업종이든 "잘 쓴 카피 3개"만 모아주면 AI가 그 톤을 그대로 복제합니다.

---

## 15. 🔍 Self-Critique — 카피 품질 자동 개선
AI에게 자기 작품을 비판하게 한 다음 재작성시키는 패턴. 1회 호출로 2배 품질.

```text
[Phase 1 — Generate]
[제품: 자세 교정기] 상세페이지 H1과 첫 문단을 PAS 공식으로 작성해 줘.

[Phase 2 — Critique]
방금 네가 쓴 카피를 다음 5가지 기준으로 1~10점 평가하고, 점수가 7점 미만인
항목은 구체적으로 무엇이 부족한지 설명해 줘:
1. Hook 강도 (첫 6단어 안에 페인 자극?)
2. 구체성 (모호한 단어 없이 숫자·시간으로?)
3. 신뢰도 (의학 용어·연구 인용 자연스러운가?)
4. CTA 명확도 (다음 행동이 1초 안에 보이는가?)
5. 모바일 가독성 (3줄 이내 단락?)

[Phase 3 — Improve]
위 비판을 반영하여 카피를 처음부터 다시 작성해 줘.
이번에는 모든 항목이 8점 이상이 되도록.
```

> **결과**: 같은 모델, 같은 입력으로 "한 번 쓴 것보다 명백히 좋은" 결과가 나옵니다.

---

## 16. 🎨 AI 브랜드 네이밍 풀 시스템
브랜드 이름 후보 10개 → 평가 → 1개 선정까지 한 번에.

```text
[Role]
너는 DTC 브랜드 네이미스트야. Allbirds, Warby Parker, Glossier 같은
"발음하기 쉬운" 미국 D2C 네이밍 전문가야.

[Inputs]
- Niche: [posture / wellness / desk accessories]
- Target persona: [25-40 WFH professionals, US]
- Brand vibe: [calm, modern, slightly playful — NOT clinical]
- Forbidden words: [posture, neck, back, fix, correct]
  ↑ 너무 직설적인 단어 금지

[Step 1 — Generate]
다음 5가지 패턴으로 각 2개씩 = 총 10개 후보 생성:
- A. 자연/물상 단어 (예: Mossy, Riverbed)
- B. 의인화 단어 (예: Frank, Hugo, Lola)
- C. 합성 신조어 (예: Klaviyo, Notion 스타일)
- D. 동사 변형 (예: Levitate, Drift)
- E. 외국어 차용 (예: Maru, Sora — 의미 표시)

[Step 2 — Evaluate]
각 후보에 대해 5축 평가:
- Memorability (기억 용이성, 1~5)
- Pronunciation (영어권 발음 쉬움, 1~5)
- .com 도메인 가용성 추정 (✓ 가능 / ✗ 어려움)
- 트레이드마크 충돌 위험 추정 (낮음 / 중간 / 높음)
- Persona fit (브랜드 vibe 적합도, 1~5)

[Step 3 — Recommend]
총점 가장 높은 3개 추천 + 각 이유 2줄.
가장 추천하는 1개 + Instagram 핸들 형태 (@brand_us 등) 5종 변형.
```

---

## 17. 🖼️ AI 로고 디자인 브리프 자동 생성
Midjourney/DALL-E에 그대로 던질 로고 프롬프트를 자동 생성.

```text
[Inputs]
- Brand name: [BRAND]
- Vibe: [calm, modern, playful]
- Color palette: [sage green + cream + charcoal]
- Avoid: [generic icons, leaves, hearts, stars]

[Output — 5종 로고 컨셉 프롬프트]

1. Wordmark (글자만):
"Minimalist wordmark logo for '[BRAND]', custom serif typeface
inspired by Allbirds and Glossier, [color], centered on white,
vector flat design, no icon, --ar 1:1 --v 6"

2. Lettermark (이니셜):
"Geometric lettermark logo featuring the letter '[B]', enclosed
in a soft squircle, [color], minimalist, suitable for app icon,
vector flat design, --ar 1:1"

3. Combination (글자 + 심볼):
"Combination logo for '[BRAND]', wordmark below an abstract
geometric shape representing [vibe], [color], vector,
modern DTC brand aesthetic --ar 1:1"

4. Emblem (배지형):
"Emblem-style logo for '[BRAND]', circular badge with text
wrapping around a central icon, vintage modern, [color],
vector --ar 1:1"

5. Wordmark with mascot:
"Wordmark logo for '[BRAND]' with a tiny minimalist mascot
character beside the text, friendly geometric style, [color],
vector --ar 16:9"

[지침]
5종 모두 생성한 뒤 본인이 1개 선정하고, 그 1개를 Midjourney로 4 시드,
DALL-E로 4 시드 = 총 8 변형 받아 최종 1개를 선택하세요.
```

---

## 18. 🌎 HTS 코드 + 관세율 자동 조회
미국 통관 분류와 관세율을 한 번에. (할루시네이션 위험 — 반드시 USITC.gov 검증 권장)

```text
[Role]
너는 미국 HTS (Harmonized Tariff Schedule) 분류 전문가야.

[Instruction]
다음 상품에 대해:
1. 가장 가능성 높은 HTS 6자리 코드 3개 후보 (확률 순)
2. 각 코드의 일반 관세율 (Column 1 General)
3. 중국 원산지 시 추가 관세 적층 (Section 122 10% + Section 301 7.5~100% + Section 232 if 철강·알루미늄 — 2026.2 IEEPA 무효 이후 4-Layer 구조)
4. 면세 한도 (de minimis 폐지 후 기준)
5. 통관 시 추가 서류 (FCC, FDA, etc 해당 여부)

[상품 정보]
- 명칭: [silicone neckband posture corrector]
- 재질: [70% silicone, 25% plastic, 5% magnet]
- 용도: [posture correction, wellness]
- 원산지: [China]
- 단가: [$8 FOB]

[Format]
| HTS Code | 분류명 | Col 1 % | China 추가 % | 합계 | 추가 서류 |

[중요]
- 모르는 부분은 "USITC.gov 검증 필요"라고 명시할 것
- 절대 추측으로 단정하지 말 것 (관세 오류는 통관 거부 + 벌금)
```

---

## 19. 🔬 AI 소싱 다단계 검증 (스펙 위조 탐지)
중국 공급사의 스펙 표기는 부풀려질 때가 많습니다. AI로 교차 검증.

```text
[Role]
너는 까다로운 미국 바이어야. 중국 공급자가 "당연히 좋다"고 주장하는
스펙을 의심하는 게 너의 일이야.

[입력]
공급자 페이지에서 수집한 스펙:
- 제품: [...]
- 주장 1: [예: "FDA approved"]
- 주장 2: [예: "100% medical grade silicone"]
- 주장 3: [예: "1-year warranty"]
- 주장 4: [예: "10,000+ units sold"]
- 주장 5: [예: "patented design"]

[Instruction]
각 주장에 대해:
1. 주장의 진위 가능성 (낮음/중간/높음) + 근거
2. 위조 시 셀러에게 미칠 법적/실질 리스크
3. 검증할 수 있는 구체적 방법 (3가지)
4. 의심스러우면 어떻게 대응할지 (계약 추가 조건, 샘플 요구 등)

[Format — 표]
| 주장 | 진위 가능성 | 리스크 | 검증 방법 | 대응 |

[Hard Rule]
"FDA approved" 같은 의료 인증 주장은 반드시 FDA.gov 데이터베이스
검색을 권장하고, 미확인 시 카피에서 제외할 것을 명시.
```

---

## 20. 🎯 광고 카피 A/B 테스트 5종 자동 생성
같은 상품의 광고 카피를 5가지 다른 각도로 동시에 생성.

```text
[Role]
너는 DTC 페이스북·틱톡 광고 카피 전문가야.

[제품 정보]
- 제품: [PRODUCT]
- 핵심 페인: [PAIN]
- 핵심 베네핏: [BENEFIT]
- 가격: [$X]

[Instruction — 5가지 각도로 각각 1줄 광고 헤드라인 + 3줄 본문 생성]

A. Pain-led (페인 자극 우선):
   - 헤드라인: [고객의 가장 큰 고통을 6단어 안에]
   - 본문: 그 고통의 일상 영향 → 우리 솔루션

B. Benefit-led (혜택 우선):
   - 헤드라인: [얻게 될 결과를 구체적 숫자로]
   - 본문: 결과 → How → 가격

C. Curiosity-led (호기심 미끼):
   - 헤드라인: ["What if..." 또는 "The reason..." 패턴]
   - 본문: 이유 공개 → 제품 연결 → CTA

D. Social Proof-led (사회적 증거):
   - 헤드라인: [실제 고객 수치 또는 인용]
   - 본문: 인용 확장 → 제품 → CTA

E. Authority-led (권위·전문성):
   - 헤드라인: [전문가/연구 인용]
   - 본문: 연구 요약 → 제품 적용 → CTA

[Format]
각 카피마다:
- Headline: ___
- Body: ___
- 예상 CTR (1~10): ___
- 추천 타겟 페르소나: ___

[테스트 가이드]
5개 모두 동일 일예산 $20씩 4시간 테스트 → CTR 가장 높은 1개에 예산 집중.
```

---

## 21. 💬 리뷰 자동 응답 분기 프롬프트
별점에 따라 다른 톤으로 응답. CS 담당자 시간 90% 절약.

```text
[Role]
너는 [BRAND]의 리뷰 응답 매니저야. 모든 응답은 영어, 친근하지만
프로페셔널한 톤.

[Input]
- 리뷰 별점: [1~5]
- 리뷰 본문: [...]
- 고객 이름: [first name only]

[분기 로직]

IF 별점 ≥ 4 (긍정):
  - 1줄 감사 + 리뷰 내용 중 구체적 1가지 인용 + 이모지 1개
  - 다음 액션 유도 (재구매·다른 상품·소셜 공유)
  - 길이: 3줄 이내
  - 예: "Honestly made my day reading this, [Name]! So happy the
        neckband is helping with those late-night work sessions 🙌
        If you ever want to try our matching wrist support, here's 15% off."

IF 별점 = 3 (중립):
  - 감사 + 개선 의지 표명 + 어떤 부분이 아쉬웠는지 질문
  - 다음 구매 유도 X (불만 가능성)
  - 길이: 4줄 이내
  - 예: "Thanks for the honest feedback, [Name]. Mind sharing
        what would have made it a 5-star? We read every reply and
        it directly shapes our next version. — [Founder]"

IF 별점 ≤ 2 (부정):
  - 진심 어린 사과 + 구체적 보상 제안 + 사적 채널 유도
  - 절대 변명 금지
  - 길이: 5줄 이내
  - 예: "[Name], this is on us — sorry for the disappointment.
        I'd love to make this right: full refund + a replacement
        on our end. Email me directly at [founder@brand.com] and
        I'll handle it personally within 24 hours. — [Founder]"

[Hard Rules]
- 절대 부정 리뷰에 공개 반박 금지
- 가격·할인 언급은 긍정 리뷰에만
- 부정 리뷰 응답 후 반드시 사적 채널로 후속
```

---

## 22. 🚨 위기 대응 (Stripe Dispute / Shopify 정지)
계정 정지·분쟁이 터졌을 때 30분 안에 작성하는 어필 메시지.

```text
[Role]
너는 e커머스 분쟁·계정 복구 전문가야. Stripe·Shopify·PayPal에
보낼 정중하고 사실 기반의 어필 메시지를 작성해.

[Input — 위기 유형 선택]
- TYPE A: Stripe Dispute (chargeback)
- TYPE B: Shopify Account Review (정책 위반 의심)
- TYPE C: PayPal Hold/Limitation
- TYPE D: TikTok Ads Account Suspended

[공통 정보]
- 계정 ID: [...]
- 발생 일시: [YYYY-MM-DD]
- 상대방 주장: [한 문장]
- 본인 측 사실: [3~5개 fact]
- 첨부 가능 증거: [송장, 추적, 카피, 정책 페이지 등]

[Instruction]
1. 첫 문장: 이슈를 인정하되 분쟁 의도 없음 명시
2. Fact 나열 (감정 표현 금지, 시간순)
3. 증거 인덱스 (Exhibit A, B, C ...)
4. 요청 사항 1개로 명확히
5. 마지막 문장: 협력 의지 + 24h 내 추가 요청 시 응답 약속

[Format — 영문 비즈니스 이메일]
- Subject: [Case ID 포함, under 80 chars]
- Body: 200~300 words
- Sign-off: full name + role

[Hard Rules]
- "this is unfair" 같은 감정 표현 절대 금지
- 모든 주장에 증거 번호 매핑 필수
- 1번 메시지로 끝내려고 모든 정보 담을 것 (재제출 = 약점)
```

---

## 23. 🌐 AI Web Research — Perplexity 활용 풀 프롬프트
Perplexity의 "소스 인용" 기능을 극대화하는 리서치 프롬프트.

```text
[Tool] Perplexity Pro 권장 (무료도 가능, 단 모델은 Sonar Pro 선택)

[Research Question]
"[KEYWORD] 카테고리에서 2026년 기준 미국 시장 진입에 필요한:
1. TAM (시장 규모) 추정치 + 출처
2. CAGR (연 성장률) + 출처
3. 주요 경쟁자 5개 + 각 매출 추정
4. 평균 광고비 (CAC) 업계 벤치마크
5. 평균 LTV (고객 생애 가치) 업계 벤치마크
6. 진입 장벽 (인증·규제·기존 강자)
7. 트렌드 신호 (최근 6개월 언론·SNS)

[Constraint]
- 각 데이터는 반드시 출처 URL 함께 제공
- 출처가 1개뿐인 데이터는 '단일 출처 — 검증 필요'로 표시
- 한국어 답변 + 표 형식
- 모르는 부분은 INSUFFICIENT DATA로 명시 (추측 금지)"

[후속 질문 — 답변 후 바로 추가]
"위 7개 데이터 중 가장 신뢰도 높은 1개와 가장 의심스러운 1개를 골라
이유 설명. 의심스러운 데이터의 검증 방법 3가지 제시."
```

---

## 24. 💰 부가 수익 모델 발굴 (해당 니치 기반)
드랍쉬핑 외에 같은 니치에서 만들 수 있는 부가 수익원 자동 탐색.

```text
[Role]
너는 1인 디지털 사업가 멘토야. "한 니치에서 N개 수익원" 전략의 전문가.

[Input]
- 메인 비즈니스: [POSTURE PRODUCT 드랍쉬핑]
- 현재 자산: 스토어, 인스타 5K 팔로워, 이메일 리스트 800
- 시간 가용: 주 5시간 (메인 외 부가 수익용)

[Instruction]
다음 5가지 부가 수익 모델을 각 평가:
1. 정보 상품 (e-book, mini-course)
2. 코칭/컨설팅
3. 어필리에이트 (제휴 마케팅)
4. SaaS/앱
5. 커뮤니티/멤버십

[각 모델마다 출력]
- 첫 매출까지 예상 시간 (주)
- 6개월 후 예상 월수입 ($)
- 필요한 신규 스킬 (1~3개)
- 메인 비즈니스와의 시너지 (낮음/중간/높음)
- 추천도 (1~5)

[Format]
| 모델 | 첫매출까지 | 6M 월수입 | 신규스킬 | 시너지 | 추천도 |

[최종]
가장 추천하는 1개 + 첫 30일 행동 계획 5개
```

---

## 25. 🎬 Voice/Video AI 활용 시나리오
ElevenLabs/HeyGen/Runway 등을 영상 마케팅에 통합하는 워크플로우.

```text
[Goal]
영상 1개당 제작 시간을 2시간 → 20분으로 단축.

[Stack]
- 스크립트: Claude Sonnet 4.6
- TTS 음성: ElevenLabs (Voice Cloning)
- AI 아바타: HeyGen (실제 사람 영상이 어려울 때)
- B-roll 영상: Sora 2 (ChatGPT Plus) / Veo 3 (Gemini Advanced) 1순위, Runway Gen-4 / Pika 2 대안
- 편집: CapCut (자동 자막)
- 음악: Suno AI (15초 BGM 자동 생성)

[프롬프트 — 한 번에 5종 영상 스크립트]

"제품 [PRODUCT]에 대해 다음 5종 15초 영상 스크립트 작성:
1. UGC 스타일 (1인칭 자연스러움)
2. 연출형 광고 (3초 훅 + 베네핏)
3. Educational (페인의 원인 설명)
4. Comparison (Before/After 시각)
5. Founder 직접 출연 (스토리)

각 스크립트는:
- 15초 분량 (약 30~40 단어)
- 0~3초 / 3~10초 / 10~15초 구간 명시
- TTS용으로 ElevenLabs Voice ID '[Sweet Vibes]'에 적합한 톤
- B-roll에 들어갈 영상 묘사 별도 표시 (Runway 프롬프트로 사용)"

[Voice Cloning 가이드]
ElevenLabs에서 본인 목소리 1분 샘플 업로드 → Voice ID 발급 →
모든 5종 영상의 TTS에 동일 Voice ID 사용 → 브랜드 보이스 일관성 확보.

[비용 절약]
- ElevenLabs: 무료 10분/월 (한 영상 15초 = 40개 가능)
- HeyGen: 무료 1분/월 (간단 컷에만 사용)
- Runway: $15/월 Standard (B-roll 5개 = 충분)
- Suno: 무료 50곡/일
- 총 월 ~$15로 영상 100개 제작 가능
```

---

## 26. ♻️ 콘텐츠 Atomization 1→30 파이프라인 (Week 7-9)

영상 1개 → TikTok·Reels·Shorts·이메일·블로그 30+개 자산으로 자동 변환. **1인 셀러 매주 5시간 절감의 핵심 워크플로우**.

```text
[Role]
너는 D2C 브랜드 콘텐츠 디렉터로 단일 자산을 채널별 톤·길이·페르소나에 맞게 atomization하는 전문가야.

[Input — 본인이 채울 변수]
원본 자산: [영상 URL 또는 transcript 첨부]
브랜드: [BRAND_NAME]
상품: [PRODUCT + 가격 + 강점 3개]
브랜드 톤: [Brand_Voice.md 5축 결과 — 캐주얼·전문적·따뜻함·자신감·간결함의 1~5점]
타겟 페르소나: [§27에서 생성한 3종 중 본 영상 적합 1개]

[Atomization 매트릭스 — 한 번에 30개 자산 생성]

| 채널 | 자산 종류 | 개수 | 길이/형식 |
|---|---|---|---|
| TikTok | 숏폼 영상 스크립트 | 5종 | 15초·페르소나별·Hook 차별화 |
| Reels (IG) | 숏폼 스크립트 | 5종 | 15초·미적 강조 |
| YouTube Shorts | 스크립트 | 5종 | 30~45초·정보 밀도 ↑ |
| 캡션 + 해시태그 | 채널별 캡션 | 9종 | TikTok 3 + Reels 3 + Shorts 3 |
| 이메일 시퀀스 | Welcome·Re-engagement·Promo 본문 | 3종 | 80~120 단어 |
| 블로그 SEO | H1 + 메타 + 800단어 본문 | 1종 | 헤딩 H2 5개 + FAQ 5개 |
| 광고 카피 | Pain·Benefit·Curiosity·Social·Authority 5종 | 5종 | §20 형식 재활용 |
| Pinterest 핀 | 이미지 캡션 + 설명 | 3종 | 800자 이내 |

[프롬프트 — 한 번 입력으로 30개 출력]

"위 [Input]의 원본 자산과 [Atomization 매트릭스]에 따라 30개 자산을 한 번에 생성해.

규칙:
1. 모든 자산이 동일 [브랜드 톤 5축]을 유지 — 채널 톤만 미세 조정 가능, 핵심 5축 보존
2. 같은 [상품 강점 3개]를 다른 각도로 노출 — 같은 표현 반복 X
3. 각 자산에 [채널 + 자산명 + 의도] 메타 표시 + 실제 콘텐츠
4. 각 자산 끝에 'CTA + UTM 권장 파라미터' 1줄
5. TikTok·Reels·Shorts는 0~3초·중간·CTA 구간 명시
6. 이메일 본문은 Subject + Preview + Body 분리
7. 블로그는 SEO 메타 H1 + Description + 본문 분리

[출력 형식]
========== TIKTOK ==========
[자산 1: 페인 훅]
0~3초: ...
3~10초: ...
10~15초: ...
캡션: ...
해시태그: ...
CTA: ...
UTM: ?utm_source=tiktok&utm_medium=organic&utm_campaign=...

[자산 2: ...]
...

(나머지 채널 모두 동일 형식)"

[검증 루틴]
1. 30개 모두 같은 [Brand_Voice.md 5축] 점수 4/5 이상인지 확인
2. 핵심 키워드(상품명·브랜드)가 모든 자산에 동일 표기 (예: "NeckEase v2"가 어디선 "neckease"로 안 변하게)
3. UTM 파라미터가 채널별 일관 (Spark Ads 분석에서 채널 분리 가능)

[배치 비용]
- Sonnet 4.6 + 프롬프트 캐싱: 첫 호출 ~$0.50, 동일 [Input]으로 재호출 시 ~$0.05
- 영상 1개 → 30개 자산 = 약 30분 (수동) → 5분 (AI)
- 매주 영상 3개 발행 시 = 90개 자산/주 = 360개/월

[안티패턴 (절대 금지)]
- 같은 자산을 채널만 바꿔 복붙 → TikTok 알고리즘이 중복 감지, 노출 떨어짐
- 30개 모두 한 페르소나용 → §27의 페르소나 3종으로 분산 권장
```

---

## 27. 👥 고객 리뷰 → 페르소나 3종 자동 생성 (Week 5)

진짜 고객의 언어로 광고를 만드는 가장 빠른 방법. **본인이 인터뷰 안 해도 AI가 페르소나를 발굴**.

```text
[Role]
너는 D2C 브랜드 인사이트 분석가로 고객 리뷰·답변·DM에서 페르소나를 추출하는 전문가야.

[Input]
원천 데이터 (택1 또는 복수):
- Loox/Yotpo 리뷰 50+ 개 (본인 또는 경쟁사)
- Reddit·Trustpilot 후기 30+ 개
- 본인 Instagram·TikTok 댓글 100+ 개
- 본인 Klaviyo "Replied to email" 30+ 개

상품: [PRODUCT]
가격: [$XX]

[프롬프트]

"위 데이터에서 다음 패턴을 추출해 페르소나 3종 생성:

1. 동기 (Why they bought): 빈도순 상위 3
2. 고통 (Pain language): 빈번 표현 5선 (그대로 인용)
3. 망설임 (Objection): 결제 직전 의심 5선
4. 만족 트리거 (Delight): "예상보다 좋았던 점" 3선
5. 환불 트리거 (Disappointment): 부정 후기 패턴 3선
6. 고객 심리 demographics (추정): 나이·성별·라이프스타일·소득
7. 라이프 시점 (Life moment): "왜 지금 샀나?" 트리거 3선

[페르소나 생성 규칙]
- 페르소나 3개는 서로 충분히 달라야 함 (위 7항목 중 5개+ 차별화)
- 각 페르소나에 1줄 닉네임 (예: 'WFH 30대 거북목', 'Gen Z 미용 입문자')
- 각 페르소나에 광고 카피 1개 + DM 첫 줄 1개 동시 생성
- 'AI 페르소나'는 일반론 X — 데이터에서 직접 인용한 표현 포함

[Output 형식]

페르소나 1: [닉네임]
- 동기: ...
- 고통 (인용): "..." (출처: 리뷰 #34)
- 망설임: ...
- 데모그래픽: ...
- 라이프 시점: ...
- 광고 카피 1개: ...
- DM 첫 줄: ...

페르소나 2: ...
페르소나 3: ...

[다음 액션 — 페르소나 활용]
1. 각 페르소나로 [§20 광고 카피 5종 자동 생성] 다시 실행 → 15종
2. 각 페르소나로 [§26 콘텐츠 atomization] 다시 실행 → 90개 자산
3. 페르소나별 별도 Klaviyo 세그먼트 생성 + 다른 메일 시퀀스"

[비용·시간]
- Sonnet 4.6 1회 호출 (200K context로 리뷰 100개 통째 입력) = ~$0.30
- 수동 인터뷰 5명 = 8시간 → AI 페르소나 = 5분
- 결과 신뢰도: 데이터 30개 미만이면 "추정" 비중 ↑ — Self-Critique 1회 추가 권장

[검증 루틴]
- 생성된 페르소나의 "고통" 인용이 진짜 데이터에 있는지 grep 확인
- 페르소나 3종이 광고 5개씩 = 15개 카피로 A/B → 가장 잘되는 페르소나 = 진짜 ICP
```

---

## 28. 🌐 한영 톤 보존 번역 + 미국 문화 보정 (Week 5)

한국어로 고민한 카피의 톤을 미국 문화·관용구에 맞게 보정. **DeepL·기본 번역기로는 톤 50% 손실 — 본 프롬프트로 90%+ 보존**.

```text
[Role]
너는 한국어 ↔ 미국 영어 전환 전문가로 단순 번역이 아닌 톤·문화·관용구·세대 표현을 보정하는 작가야.

[Input]
원문 (한국어): [PASTE]
대상 채널: TikTok 캡션 / 상세페이지 본문 / 광고 카피 / 이메일 / DM 중 택1
페르소나: [§27에서 생성한 3종 중 1개 — 닉네임 + 핵심 demo]
브랜드 톤 5축: [Brand_Voice.md 결과]
금지어: [§Banned_Words.md 결과 — 또는 의료 단정·과대 광고 자동 회피]

[프롬프트]

"위 [원문]을 [대상 채널]용 미국 영어로 변환. 단순 번역 X — 다음 단계 적용:

Step 1: 직역 (DeepL 수준)
Step 2: 톤 보정 — [브랜드 톤 5축]에 맞게 단어 선택 미세 조정
Step 3: 문화 보정 — 미국 [페르소나] 세대 관용구로 어색한 표현 교체
        예: '당신' → 'you' (자연), '스트레스 만빵' → 'stressed AF' (Gen Z) 또는 'overwhelmed' (Millennial)
Step 4: 길이 조정 — 채널별 최적 길이 (TikTok 캡션 100자 / 광고 헤드라인 25자 / 이메일 subject 30~50자)
Step 5: 금지어 회피 — [금지어] 리스트에 걸린 표현 안전 대안으로 교체
Step 6: Self-Critique — 위 5단계 결과를 1점(최악)~5점 평가, 4점 미만이면 자가 재작성

[Output 형식]

== Step 1: 직역 ==
[DeepL 수준 결과]

== Step 2: 톤 보정 ==
[변경된 부분과 사유 1줄씩]

== Step 3: 문화 보정 ==
[변경된 관용구 + 해당 페르소나 적합성 사유]

== Step 4: 길이 조정 ==
[최종 길이 + 채널별 한도 통과 여부]

== Step 5: 금지어 회피 ==
[교체된 표현 (있으면)]

== Step 6: Self-Critique ==
- 톤 5축 점수: [5/5/4/5/5]
- 약점: [1줄]
- 재작성 결과: [최종 영문 1개]"

[검증 루틴]
- 미국 친구 1명에게 보여주고 "어색한 부분 있어?" 30초 피드백 — AI 90% + 사람 10% 점검이 정석
- 같은 한국어 → 영어 변환을 GPT-5 + Gemini 3 Pro에 한 번 더 → 3개 결과 비교 — 일치 부분 = 안전 표현
```

---

# 🧠 Part 2: 운영·진단·메타 AI 프롬프트 (§29~§39)

§1~§28이 "콘텐츠를 만드는 AI"라면, 이 파트는 **본인 운영 데이터를 AI에 주고 객관 진단·결단을 받는 AI**입니다. 매주 30분~1시간 사용 시 의사결정 속도·정확도 가장 큰 향상 영역.

---

## 29. 🛒 Cart Abandonment 심리 진단 + 개인화 복귀 (W7~W12)

체류시간·페이지 패턴·결제 단계 이탈 → "왜 떠났나" AI 분류 → 개인화 복귀 메일.

```text
[Role]
너는 D2C 이커머스 conversion 분석가야.

[Input — Klaviyo / GA4 / Shopify에서 추출]
이탈 고객 행동 로그 (1행 = 1세션):
- session_id, time_on_site_sec, pages_viewed (list), refund_page_visited (bool),
  shipping_page_visited (bool), reviews_page_visited (bool),
  cart_value_usd, cart_items (list), exit_step (cart/shipping/payment/review),
  device (mobile/desktop), referrer (source), repeat_visit (bool)

본인 정보:
- 평균 객단가: [$XX]
- 환불 정책: 30 day money-back, free returns
- 배송 기간: 7-12 business days
- 베스트 후기 키워드: [relief, no-fuss, sturdy 등]

[프롬프트]

"위 [Input] 행 100개 분석하고:

Step 1: 5가지 이탈 원인 카테고리로 자동 분류
  A. 가격 망설임 (cart_value 높음 + 1분 미만)
  B. 배송 기간 의심 (shipping_page 방문 + 이탈)
  C. 환불 신뢰 부족 (refund_page 방문 + 이탈)
  D. 결제 마찰 (payment 단계 이탈)
  E. 단순 보류 (review_page 방문 + 길게 체류)

Step 2: 각 카테고리별 비율 + 가장 흔한 패턴 1줄

Step 3: 카테고리별 개인화 복귀 메일 5종 자동 생성
  - 카테고리 A → "투자 가치" 강조, 분할 결제 옵션 제시
  - 카테고리 B → 평균 도착일 데이터 (지난 100건 추적 결과)
  - 카테고리 C → Money-Back 30일 + 베스트 후기 3개 노출
  - 카테고리 D → 결제 1-click + Apple Pay express checkout 안내
  - 카테고리 E → '인기 상품 곧 품절' 가벼운 push (24h 후 발송)

각 메일: Subject + Preview + Body + CTA + 발송 권장 timing.

Step 4: Klaviyo Flow 분기 다이어그램
'Started Checkout' 트리거 → 위 5 카테고리 분기 → 카테고리별 메일 시퀀스"

[검증 루틴]
- 카테고리 분류 정확도 = 본인이 30개 샘플 직접 라벨링 → AI 분류와 매칭률 80%+
- A/B: 기존 시퀀스(S01 §3) vs 개인화 시퀀스 → 복귀율 비교 (보통 +30~50%)
```

---

## 30. 📉 Creative Fatigue 자동 감지 (4단계) (W9~W12)

광고 영상의 피로도를 AI가 시계열로 진단 → 교체 시점 자동 알림.

```text
[Role]
너는 performance marketing 분석가야.

[Input — TikTok Ads Manager / Meta Ads Manager export]
광고 일별 데이터 (CSV):
- date, ad_id, ad_name, impressions, ctr, cpc, cvr, cpa, frequency,
  spend_usd, revenue_usd, roas

[프롬프트]

"위 데이터에서 각 ad_id별로 fatigue 단계 진단:

[Fatigue 4단계 정의]
- Stage 0 (Healthy): CTR 안정·증가, frequency <3, CPC 안정 → 유지
- Stage 1 (Warning): CTR 7일 이동평균 -10%↓, frequency 3~5 → 새 hook 추가
- Stage 2 (Decline): CTR -25%↓, CPC +30%↑, frequency 5~7 → v2 카피·소재 교체
- Stage 3 (Dead): CTR -50%↓ + ROAS < BEP → 즉시 KILL

[Output 형식 — 모든 활성 광고 1행씩]
| ad_name | 운영일 | Stage | CTR 7d trend | freq | 권장 액션 | 교체 deadline |
| Pain-led v1 | 12 days | Stage 2 | -28% | 5.4 | v2 hook 강화 + 새 thumbnail | 3일 내 |
| Curiosity v3 | 5 days | Stage 0 | +5% | 1.8 | 유지 + 예산 +20% 가능 | — |

Step 2 — Stage 2/3 광고에 대해:
- '왜 fatigue?' 1줄 분석 (예: '같은 hook 12일째, 동일 페르소나 노출')
- 다음 시도 권장 1줄 (예: '페르소나 #2로 전환, hook은 Social Proof로')
- §20 카피 5종 자동 생성에 입력할 수정 변수 추출

Step 3 — 누적 학습 노트 갱신:
- 본 분기 fatigue 도달 평균 일수: [N일]
- 가장 오래 healthy 유지된 패턴: [hook + 페르소나 조합]
- 가장 빠르게 dead된 패턴: [동일]"

[검증 루틴]
- Stage 분류를 본인 직감과 비교 → 일치하면 자동 알림 활성
- 매주 월요일 09:00 AI에 데이터 dump → fatigue 보고서
- Make.com Cron으로 자동화 가능 ([Sup10 §3](./Supplement_10_L3_AI_Agent_Building.md))
```

---

## 31. 🔀 Niche Pivot 3-Way Diagnosis — Pivot / Persist / Pause (Day 30~90)

[Appendix D §6 Stuck Recovery Tree](./Appendix_D_First_100_Customers.md)는 binary KILL만. AI는 3가지 권장 + 사유.

```text
[Role]
너는 D2C 비즈니스 코치로 1인 셀러의 고민을 객관 진단하는 전문가야.

[Input]
- 운영일: [Day N] (Day 0 = 스토어 오픈)
- 누적 매출: $[X]
- 누적 주문 건수: [N]
- 평균 ROAS: [X.X]
- 누적 광고비: $[X]
- 오가닉 영상 조회수 평균: [N]
- TikTok 해시태그 관련 영상 본인 외 신규 조회수 1만+ 영상: [N개]
- 후기 평균 별점: [X.X / 5]
- 부정 후기 비율: [X%]
- 본인 작업 시간 (일 평균): [N시간]
- 본인 의욕 자가 평가: [10점 만점에 X점]

[프롬프트]

"위 데이터로 3가지 시나리오 분석:

A. PIVOT (다른 니치로 전환):
- 현재 데이터에서 '시장 자체가 식고 있다' 신호 강도 1~5
- 신호 예: 본인 외 영상 조회수 1만+ 신규 영상 < 5개/주, 광고 ROAS 지속 < 1, 부정 후기 비율 > 15%
- Pivot 시 후속 액션: §1 Kill Criteria 재실행 + 본인 학습 자산 (스토어·LLC·CRM 등) 재활용

B. PERSIST (현 니치 유지·강화):
- '아직 시장 검증 부족' 신호 강도 1~5
- 신호 예: 본인 외 영상 매주 +10%+, ROAS 곡선 우상향, 후기 별점 4.0+
- Persist 시 후속 액션: §27 페르소나 갱신, §32 Reverse Atomization, §30 Fatigue 점검

C. PAUSE (잠시 멈춤·재정비):
- '본인 번아웃 또는 학습 부족' 신호 강도 1~5
- 신호 예: 작업 시간 8h+/일 + 의욕 5점 미만, 매출 곡선 평탄
- Pause 시 후속 액션: 1주 휴식 + Sup11 §3-A 멘탈 코치 + Day 90 게이트 재진입

[Output 형식]

== 3가지 시나리오 점수 ==
A. PIVOT: 강도 X/5
B. PERSIST: 강도 X/5
C. PAUSE: 강도 X/5

== 1차 권장 ==
[가장 높은 점수 시나리오] + 1줄 사유

== 권장 다음 7일 행동 5개 ==
1. ...
2. ...
...

== 위험 신호 ==
- (있으면 1~3개)

== 본인이 반드시 명심할 1줄 ==
[데이터에서 추출한 가장 중요한 진실]"

[검증 루틴]
- 같은 데이터를 GPT-5 또는 Gemini 3 Pro에 입력 → 3가지 시나리오 점수 비교
- 본인 멘토 1명에게 30초 보여주고 동의 여부 확인
- AI는 보조 도구 — 최종 결단은 본인
```

---

## 32. 🔄 Reverse Atomization — 잘된 영상 → 5채널 자산 (W7~W12)

§26은 "원본 → 30개 자산", §32는 "**잘된 자산 1개 → 다른 채널 자산 자동 재생성**".

```text
[Role]
너는 콘텐츠 분석가로 잘된 자산의 본질을 추출해 다른 채널에 적용하는 전문가야.

[Input]
잘된 자산 (택1):
- TikTok 영상 URL + transcript + 댓글 50개
- 또는 광고 1개 (영상 + 카피 + 4시간 데이터)
- 또는 이메일 1통 (open rate 50%+ 달성한 것)

본인 정보: [§Brand_Voice 5축, §27 페르소나 3종, 상품, 가격]

[프롬프트]

"위 잘된 자산을 분석:

Step 1 — 본질 추출 (왜 이게 잘 됐나):
- Hook 패턴: [Pain/Benefit/Curiosity/Social/Authority 분류]
- 사용된 페르소나 (§27 중 어떤 거?)
- 길이·구조: 0~3초 / 3~10초 / 10~15초 또는 본문 구조
- Tone (5축 점수)
- 결정적 단어·표현 3개 (인용)
- 댓글에서 가장 많이 언급된 것 (베스트 1개)

Step 2 — 다른 채널 적용 (5채널 자동 재생성):
- 채널 A: TikTok (다른 페르소나로 같은 hook 재활용 — 5종)
- 채널 B: 이메일 Subject Line + Body (3종)
- 채널 C: 광고 카피 (Pain·Benefit·Social 강화 — 3종)
- 채널 D: 상세페이지 PAS 보강 (1줄 추가 또는 기존 약점 교체)
- 채널 E: DM (크리에이터·고객용 각 1종)

Step 3 — 재사용 가능한 패턴 라이브러리에 저장:
- '본 자산이 잘 된 이유' 1줄 (다음 분기 학습 노트로 누적)
- '같은 패턴을 다음 시도할 페르소나 후보' 1~3개

[Output 형식]

== 본질 ==
Hook: ...
Persona: ...
구조: ...
Tone (5축): X/X/X/X/X
결정 단어: '...', '...', '...'
댓글 best: '...'

== TikTok 5종 ==
[1] 0~3초: ... | 3~10초: ... | 10~15초: ...
[2] ...
...

== Email Subject + Body 3종 ==
...

== 광고 카피 3종 ==
...

== PAS 보강 ==
...

== DM 2종 ==
...

== 패턴 라이브러리 추가 ==
- 패턴명: '[Curiosity hook + 페르소나 1 + Before/After 시각]'
- 다음 시도: 페르소나 3 (Gen Z 미용 입문자)에 동일 패턴 적용"

[비용·시간]
- Sonnet 4.6 1회 호출 ~$0.30
- 잘된 자산 1개로 5채널 15+ 자산 자동 = 30분 (수동 시 5시간)
```

---

## 33. 🛡 EAT 자동 점검 (Expertise · Authority · Trust) — About Us + 상세페이지 (W4~W5)

```text
[Role]
너는 SEO + conversion 분석가로 페이지의 EAT(Expertise·Authority·Trust) 신호를 진단해.

[Input]
- About Us 페이지 텍스트 (전체)
- 대표 상품 상세페이지 텍스트 (전체)
- 결제 페이지 스크린샷 (또는 텍스트 dump)
- 본인 도메인 정보 (가입일·사업자등록·소재지)

[프롬프트]

"각 페이지를 EAT 3축으로 점수화 (각 1~5):

E (Expertise — 전문성):
- 창업자/팀의 도메인 전문성 명시?
- 상품의 기술·재료·테스트 데이터 명시?
- 'How it works' 또는 'Why we built this' 섹션?

A (Authority — 권위):
- 미디어 노출·수상·인증·실험 결과?
- '판매 수치' 또는 '고객 수' 명시?
- 권위 있는 후기 (의사·트레이너·전문가)?

T (Trust — 신뢰):
- 환불 정책 명시? 클릭 1회로 도달?
- 연락처 (이메일·폼·실주소) 명시?
- HTTPS·trust badge 위치?
- 후기 5개 이상? 별점 평균 4.0+?

[Output 형식]

== About Us ==
E: X/5 — [강점 1줄, 약점 1줄]
A: X/5 — ...
T: X/5 — ...

== 상품 상세페이지 ==
(동일 형식)

== 결제 페이지 ==
(동일 형식)

== 누락 요소 (즉시 추가 권장) ==
[ ] About Us에 창업자 사진 + 200자 스토리
[ ] 상세페이지에 'Tested by' 또는 'Backed by' 라인
[ ] 결제 페이지에 환불 정책 1줄 + Money-Back 30일 배지
[ ] (계속)

== EAT 자동 보강 카피 (3종) ==
- About Us 추가 문단: '...'
- 상세페이지 신뢰 라인: '...'
- 결제 페이지 trust signal: '...'

== 종합 점수 + 액션 우선순위 ==
- 종합: X/15 (각 페이지 평균)
- 즉시 액션 1: [가장 큰 약점]"

[검증 루틴]
- AI가 추천한 카피를 그대로 페이지에 적용
- 1주 후 CVR 변화 추적
- 보통 7~12% → 12~18% 향상 (베스트 케이스)
```

---

## 34. ✅ Trust Signal A/B 9-cell Matrix (W4 / W12)

Free Shipping 한도, Money-Back 기간, 결제 옵션 표시 순서 — 1인 셀러가 가장 모르는 영역. AI가 9가지 조합 + 우선순위.

```text
[Role]
너는 D2C 결제 페이지 CRO 전문가야.

[Input]
- 평균 객단가: $[X]
- 마진율: [X%]
- 평균 배송비 (셀러 부담): $[X]
- 현재 trust signal 셋업:
  - Free Shipping 한도: [현재 $XX 이상]
  - Money-Back 기간: [현재 N일]
  - Apple Pay 노출: [있음/없음]
  - 결제 옵션 순서: [Visa/Master 우선 또는 Apple Pay 우선 또는 PayPal 우선]
  - Trust badge: [Norton·McAfee·SSL 등]

[프롬프트]

"본인 객단가·마진 기준으로 9칸 매트릭스 분석:

[3 axes]
- 축 1: Free Shipping 한도 ($35 / $50 / $75 / 무한대)
- 축 2: Money-Back 기간 (30일 / 60일)
- 축 3: 결제 옵션 표시 순서 (Apple Pay 1번 / PayPal 1번 / Visa-Master 1번)

[9 시나리오 (3×3)]

| # | 한도 | 환불기간 | 결제순서 | 예상 CVR | 마진 영향 | 추천도 |
|---|---|---|---|---|---|---|

각 시나리오에 대해:
- 예상 CVR (객단가·페르소나 기준): X.X% (사유 1줄)
- 마진 영향 ($35 한도 + 60일 환불 = 환불 +X%, 마진 -X%)
- 추천도 1~5

[Output 형식]

== 9칸 매트릭스 ==
[표 9행]

== 1순위 권장 ==
[#가장 높은 추천도] — 예상 CVR + 마진 영향 + 사유

== 학생 본인이 즉시 변경할 3가지 (현재 셋업 대비) ==
1. ...
2. ...
3. ...

== A/B 테스트 권장 ==
- 변경 전 CVR baseline 1주 측정
- 변경 후 CVR 1주 측정
- 차이 0.5%p 미만 = 무관, 0.5%p+ = 진짜 효과"

[검증 루틴]
- 1인 셀러는 9개 모두 테스트 X — 1순위 즉시 적용 + 매월 1개 변경
- A/B 테스트는 객단가 $30 이상에서 통계적 유의미 (1주 N=300+ 결제)
```

---

## 35. 📊 Cohort LTV 자동 분석 (W12)

월별 코호트별 매출 곡선·이탈·재구매 곡선 → AI가 패턴·이상치·예측 자동.

```text
[Role]
너는 D2C 코호트 분석가야.

[Input]
Shopify Customers export (CSV):
- customer_id, first_order_date, first_order_value, all_orders (list of dates+values),
  email_open_rate (Klaviyo), source (organic/spark_ads/meta/affiliate)

[프롬프트]

"월별 코호트 LTV 분석:

Step 1 — 매트릭스 구축:
| First Order 월 | 30일 LTV | 60일 LTV | 90일 LTV | 180일 LTV | 재구매율 |
| 2026-01 | $XX | $XX | $XX | $XX | X% |
| 2026-02 | $XX | $XX | $XX | $XX | X% |
...

Step 2 — 패턴 식별:
- LTV 곡선 모양 (지수형 / 평탄형 / 하락형)
- 코호트별 차이 (1월 vs 2월 — 트렌드인가 우연인가?)
- 채널별 LTV (organic 평균 vs spark_ads 평균)
- 이상치 (LTV 갑자기 떨어진 코호트 = 무엇이 변했나?)

Step 3 — 6개월 LTV 예측:
- 가장 잘 한 코호트 기준 → 향후 신규 코호트 예상 LTV
- 본인 CAC와 비교 (LTV/CAC 비율 — 3 이상이면 건강)

Step 4 — 액션 권장:
- 코호트별 약점 시점 (예: 60일에 이탈 급증) → 메일 시퀀스 보강
- 채널 우선순위 (LTV 높은 채널 = 광고 더 태움)
- 재구매 boost (Klaviyo Win-back §4 시점 조정)"

[검증 루틴]
- 본인 첫 6개월 데이터로는 패턴 약함 — 12개월 이후 본격 활용
- 매월 말일에 자동 갱신 (Make.com → AI → Notion)
```

---

## 36. 🎨 Brand Voice Cross-Channel 일관성 점검 (W14)

영상·이메일·DM·캡션 모든 채널의 톤이 같은지 AI 자동 점검.

```text
[Role]
너는 브랜드 보이스 감사관이야.

[Input]
- Brand_Voice.md (5축 정의)
- 최근 30일 자산 샘플:
  - TikTok 영상 transcript 5개
  - 이메일 (Welcome / Abandoned Cart / Promo) 3통
  - DM (크리에이터 / 고객) 4개
  - 광고 카피 5개
  - 상세페이지 1개
  - About Us 1개

[프롬프트]

"위 자산 모두를 [Brand_Voice 5축]으로 1~5 점수화:

| 자산 | 캐주얼 | 전문 | 따뜻함 | 자신감 | 간결 | 종합 편차 |
| TikTok #1 | 5 | 3 | 5 | 4 | 4 | — |
| TikTok #2 | 4 | 3 | 4 | 4 | 4 | -1 |
| Welcome 메일 | 5 | 4 | 5 | 4 | 3 | 0 |
| Abandoned Cart | 3 | 4 | 3 | 5 | 4 | -2 ⚠️ |
...

[자동 진단]
- 5축 평균 점수 + 표준편차 (편차 0.5 미만 = 일관성 있음)
- 이상치 자산 (편차 >1.0) — 어느 자산이 톤 깬 것?
- 가장 일관성 높은 채널 vs 가장 약한 채널

[액션]
- 톤 깬 자산 자동 재작성 ([Master Prompts §15] Self-Critique 트리거)
- 다음 발행 시 적용할 가이드 1줄"

[검증 루틴]
- 분기마다 1회 (매월 X — 데이터 누적 필요)
- 결과를 Brand_Voice.md에 누적 — 시간 경과 톤 drift 추적
```

---

## 37. 📨 공급사 응답 분류 + 다음 액션 추천 (W3, W5)

공급사에 보낸 영문 메일에 답이 오면 — 카테고리 자동 분류 + 다음 액션.

```text
[Role]
너는 D2C 소싱 매니저야.

[Input]
- 본인이 보낸 메일 (영문)
- 공급사 답신 (영문)

[프롬프트]

"답신을 다음 6 카테고리로 분류:

A. PASS — 협력 의사 + 가격·MOQ 명확
B. NEGOTIATE — 가격·MOQ에 협상 여지
C. UPSELL — 더 비싼 옵션 제안 (낚시 가능성)
D. UNCLEAR — 답이 모호 (재질문 필요)
E. SCAM 신호 — 위험 신호 ('100% guarantee', 'wire transfer only')
F. REJECT — 거절 또는 무응답

[Output]

분류: [카테고리]
신뢰도: 0.0~1.0
근거: 답신 내 인용 1줄

다음 액션 (영문 메일 자동 작성):
- A → '주문 1건으로 검증' 영문 답신 + 첫 주문 5개 발주
- B → 협상 영문 (MOQ 50→20, 가격 -10% 요구)
- C → 원래 옵션 재확인 + 추가 옵션 거절
- D → 명확화 영문 (구체 질문 3개)
- E → 무시 + 다른 공급사 시도
- F → 종료 + 다음 5개 후보로 이동

영문 답신 200~300 단어, 정중하지만 단호.

[Risk Score]
- E 카테고리: 즉시 KILL (본인 PayPal 정보 절대 X)
- D 카테고리: 3회 이상 모호 답신 시 KILL"

[검증 루틴]
- 본인 직감과 AI 분류 매칭률 점검
- 첫 주문 시 무조건 PayPal Goods & Services (분쟁 보호)
```

---

## 38. 🧘 멘탈 코치 AI — Day 30 데스파이러 / 번아웃 / Comparison / Wedding Cake

1인 셀러가 진짜 망하는 이유 = 멘탈. AI가 객관 코멘트.

```text
[Role]
너는 1인 사업자 멘탈 코치로 객관적·따뜻한 진단을 하는 전문가야.

[Input]
- 운영일: Day [N]
- 누적 매출 / 광고비 / ROAS
- 본인 작업 시간 (일 평균)
- 본인 의욕 자가 평가 1~10
- 자유 글쓰기 200자: '지금 가장 답답한 것'

[프롬프트]

"본인의 상태를 5가지 함정 패턴으로 진단:

1. Day 30 데스파이러 (매출 0 절망)
   - 신호: Day 25~35 + 매출 < $500 + 의욕 < 5
   - 진단: 정상 단계인지 진짜 위기인지

2. Burnout (번아웃)
   - 신호: 작업 시간 > 8h/일 + 의욕 < 5 + 본인 글에 'tired·exhausted'
   - 진단: 휴식 필요 vs 시스템 문제

3. Shiny Object Syndrome (다른 니치 점프 충동)
   - 신호: 본인 글에 '다른 거 해볼까' + 운영일 < 90
   - 진단: 진짜 pivot 신호인지 회피인지 ([§31 Pivot 진단] 연결)

4. Comparison Trap (인플루언서·동기 비교)
   - 신호: 본인 글에 'X처럼·X만큼' 단어
   - 진단: 객관 사실 vs 인지 왜곡

5. Wedding Cake Syndrome (출시 전 무한 정비)
   - 신호: 운영일 < 7 + 매출 0 + 작업 시간 6h+
   - 진단: 즉시 출시 vs 추가 정비

[Output]

== 본인이 빠진 함정 ==
[가장 강한 신호 1~2개] + 강도 1~5

== 객관적 진단 (따뜻하지만 솔직) ==
[데이터에서 추출한 진실 3줄]

== 다음 7일 행동 5개 (구체) ==
1. (가장 작은 한 발 — 1시간 이내)
2. ...

== 위로 ==
[본인이 잘 한 것 3가지]

== 본인이 다음 주에 자기에게 물어볼 1가지 질문 ==
[멘탈 점검용]"

[검증 루틴]
- 매주 일요일 [Sup11 자가 진단](./Supplement_11_Self_Assessment_and_Progress_Tracker.md) 작성 후 본 프롬프트
- AI 코멘트는 보조 — 진짜 답은 본인 안에
- Day 30 / Day 60 / Day 90 게이트마다 사용 권장
```

---

## 39. 🧭 Master Prompt Router — 어떤 §N을 써야 하나? (Meta)

학생 질문 → AI가 §1~§38 중 적합한 프롬프트 추천.

```text
[Role]
너는 본 강의 Master Prompts 컬렉션의 가이드야.

[Input]
학생의 현재 막힘 또는 작업 (자유 글쓰기): [예: '광고가 잘 안되는데 왜인지 모르겠다']

[프롬프트]

"학생의 [Input]을 다음 카테고리로 분류 후 §N 추천:

[카테고리 → §N 매핑]
- 상품·니치 발굴: §1, §13, §19
- 카피·상세페이지: §2, §15, §28, §32, §33
- 브랜드·로고·톤: §16, §17, §36
- 영상·이미지·음성: §5, §25, §26, §32
- 광고: §20, §30, §34
- 크리에이터·DM: §3, §4, §6, §7
- HTS·관세: §18
- 이메일·CRM: §11, §29, §35
- CS·분쟁: §21, §22
- 데이터 분석: §8, §9, §10, §35
- 사업 진단·결단: §31, §38
- 멘탈·번아웃: §38
- AI 도구 선택: §12

[Output]

== 본인의 작업 ==
[학생 입력 1줄 요약]

== 1순위 추천 ==
§N (제목) — 왜 이 프롬프트인지 1줄

== 2순위 ==
§N — 왜

== 권장 사용 순서 ==
1. §N으로 1차 결과
2. §N (Self-Critique 또는 후속)
3. §N (검증)

== 사용 후 다음 단계 ==
[결과를 어디에 입력할지 — Klaviyo? Shopify? Slack? 등]"

[검증 루틴]
- 학생이 사용 후 효과적이면 메모 → 다음 라우팅에 학습 (Skill 패키징)
- 1인 셀러 자가 사용 시 본인 메모와 매칭률 80%+ = AI 라우팅 신뢰
```

---

## 📑 Master Prompts 카테고리 요약 (Quick Reference)

| 카테고리 | §N |
|---|---|
| 🔍 상품·니치 | 1, 13, 19 |
| ✍️ 카피·상세페이지 | 2, 15, 28, 32, 33 |
| 🎨 브랜드·디자인 | 16, 17, 36 |
| 🎬 영상·이미지·음성 | 5, 25, 26, 32 |
| 🎯 광고 | 20, 30, 34 |
| 💬 크리에이터·DM | 3, 4, 6, 7 |
| 🌎 HTS·관세 | 18 |
| 📧 이메일·CRM | 11, 29, 35 |
| 🚨 CS·분쟁 | 21, 22 |
| 📊 데이터 분석 | 8, 9, 10, 35 |
| 🔀 사업 진단·결단 | 31, 38 |
| 🧘 멘탈·번아웃 | 38 |
| 🛠 AI 도구 선택 | 12 |
| 🧭 Meta — 어떤 §N? | 39 (Router) |

> **학생 사용 팁**: 막힐 때 [§39 Router](#39-master-prompt-router--어떤-n을-써야-하나-meta)에 본인 상황 입력 → AI가 자동 §N 추천. 또는 위 표에서 카테고리 직접 점프.

---

# 🎯 Part 3: 매주 운영 깊은 결단 AI (§40~§46)

§29~§39가 "월~분기 운영 진단"이라면 Part 3는 **매주 월요일 09:00 본인 데이터 dump → AI 결단** 영역. 1인 셀러가 진짜 매주 5분 만에 의사결정 끝내는 도구.

---

## 40. 📋 이번 주 우선순위 자동 — KPI → 5가지 액션 (매주 월요일)

본인 KPI dashboard + 본인 시간 + 본인 의욕을 AI에 던지면 "이번 주 5개"가 나옴.

```text
[Role]
너는 1인 D2C 셀러의 시간 매니저야. 1주일에 사용 가능한 시간 안에서 매출·리스크·학습의 우선순위를 결단하는 코치.

[Input — 매주 월요일 09:00 작성]
지난 주 KPI:
- 매출: $[X] (전주 대비 ±%)
- 광고비: $[X] (ROAS [X.X])
- 신규 후기: [N건] (평균 별점 [X])
- 미발송 주문: [N건]
- CS 미응답: [N건]
- 광고 분쟁률: [X%]
- 구독자 신규: [N명]

본인 자원:
- 이번 주 사용 가능 시간: [N시간]
- 의욕: 1~10
- 가장 답답한 1가지 (한 줄): [...]

본인 단계:
- Day [N] (Day 0 = 오픈)
- 누적 매출: $[X]

[프롬프트]

"위 데이터로 이번 주 우선순위 5개 액션 결단:

원칙:
1. 시간 N시간 안에 끝나는 액션만
2. 매출에 직접 영향 ≥ 학습 ≥ 정비 (긴급도 순)
3. 답답함 1줄을 1~2번 액션 안에서 직접 해결
4. 의욕 5↓이면 작은 한 발만 (1시간 작업 5개)

[Output 형식]

== 이번 주 핵심 진단 ==
[KPI에서 가장 큰 신호 1줄]

== 5가지 액션 (시간순 + 예상 효과) ==
1. [작업명] — 예상 X시간 — 효과: [매출/리스크/학습] [수치]
2. ...

== 각 액션의 첫 한 발 (월요일 09:30 시작용) ==
- 액션 1 첫 한 발: [구체 동작 1줄]
- ...

== Master Prompts 연결 ==
- 액션 N → §M 사용 권장

== 함정 신호 (해당하면 1순위 변경) ==
- (있으면 1줄)

== 다음 월요일 KPI 가이드 ==
- 위 5개 액션 후 어떤 KPI가 어떻게 변해야 정상?"

[검증 루틴]
- 매주 일요일 22시 [Sup11 자가 진단](./Supplement_11_Self_Assessment_and_Progress_Tracker.md)과 함께 본 프롬프트
- 액션 5개 중 3개+ 실행 = 정상. 2개 이하면 §38 멘탈 코치 동시 실행
```

---

## 41. 🛒 Cross-sell / Basket Affinity 자동 — AOV 늘리기 (월 1회)

Shopify 주문 데이터 → "A 산 사람의 70%는 B도 살 수 있다" AI 자동 발굴.

```text
[Role]
너는 D2C basket affinity 분석가야.

[Input — Shopify Orders export (CSV)]
- order_id, customer_id, line_items (list of SKU+qty), order_value, order_date

100건 이상 주문 데이터 입력.

[프롬프트]

"위 주문 데이터로 cross-sell 기회 자동 발굴:

Step 1 — Basket affinity 매트릭스:
| 상품 A | 상품 B | A 구매 시 B 동시 구매율 | A 구매 후 30일 내 B 구매율 |
| neckband | desk-lamp | 12% | 28% |
| neckband | back-pillow | 8% | 35% |
...

Step 2 — Top 5 cross-sell 기회 (동시 구매 또는 30일 내):
[Affinity 20%+인 페어 5개]

Step 3 — 각 페어별 액션:
A. 상품 페이지에 "Frequently bought together" 위젯 (Shopify 무료 앱)
B. Email Welcome 시퀀스 5번째에 "[A] 사용자가 자주 함께 사는 [B]" 발송
C. 결제 후 thank-you 페이지에 [B] 추천 + 10% 단발 할인
D. Shopify Bundle 자동 생성 ([A] + [B] = $XX, 정가 $YY 절약 명시)

Step 4 — Bundle 가격 자동 결정:
- A $39 + B $29 = bundle $58 (10% 절약 노출)
- 본인 마진 보호: 합산 마진 ≥ 30% 유지

Step 5 — 실행 시 예상 효과:
- AOV 변화: $[X] → $[Y] (예측)
- 마진 변화: 페어별 ±%
- 우선 적용 SKU: [Top 1]"

[검증 루틴]
- 첫 100건 미만이면 데이터 부족 — 무시
- 1개 페어부터 1개월 시도 → AOV +5%+ 확인 후 Top 5 모두 적용
- 매월 1회 갱신 (시즌별 affinity 변화)
```

---

## 42. 🚫 Repeat Refunder Fraud — 자동 차단 + 1차 진단 (매주 점검)

마진 가장 직접적으로 갉아먹는 운영 누수. AI 1차 분류 → Shopify 자동 태깅.

```text
[Role]
너는 e-commerce fraud 분석가야.

[Input — Shopify Customers + Returns export]
- customer_id, email, first_order_date, total_orders, total_refunds,
  refund_value_total, refund_reasons (list), shipping_addresses (list),
  payment_methods (last 4 digits hash), ip_addresses (list)

[프롬프트]

"각 고객을 다음 5단계 위험도로 분류:

Tier 0 — Clean (0~1 환불, 정상 사유)
Tier 1 — Watch (2 환불 / 1.5+ 년 거래)
Tier 2 — Warning (3+ 환불 / 1년 / 동일 사유 반복)
Tier 3 — Block (4+ 환불 / 6개월 / 다중 주소·결제)
Tier 4 — Fraud Ring (동일 IP·주소·이름 패턴 + 다중 계정 신호)

[검증 신호 5개]
1. 환불 비율 (refund_value / order_value) > 25% = Tier 1
2. '받지 못함 (item not received)' 환불 + 결국 추적 OK = Tier 2
3. 6개월 내 3+ 환불 + 다른 결제수단 = Tier 3
4. 동일 IP에 다른 이메일 주문 = Tier 4
5. 환불 후 Reddit·Trustpilot에 부정 리뷰 = Tier 2

[Output 형식]

== Tier 분포 ==
Tier 0: N명 (정상)
Tier 1: N명 (관찰)
Tier 2: N명 (경고 — 결제 차단 검토)
Tier 3: N명 (즉시 차단)
Tier 4: N명 (Stripe 사기 신고 권장)

== 즉시 액션 (Tier 2~4) ==
[고객별]
- email: [hash] | tier: [N] | 사유: [1줄] | 액션: [Shopify Tag 'fraud-watch' / 결제 차단 / Stripe 신고]

== 본인 결제 정책 보강 추천 ==
- '연 환불 3회+ 시 신규 주문 거부' 약관 추가
- 결제 페이지에 '동일인 다중 주문 자동 검증' 1줄 명시 (psychological deterrent)
- Klaviyo Suppress 자동 적용 (Tier 3+)"

[검증 루틴]
- 매주 월요일 점검 (10분)
- AI 분류 → 본인이 30개 spot-check → 매칭률 80%+ 확인
- Tier 4 = 즉시 Stripe Disputes 페이지에 "Fraud Ring" 신고
- 본 프롬프트로 매월 1~3% 마진 회복 가능 (보수적)
```

---

## 43. 🖼 Image SEO + Alt Text 자동 최적화 (W4~W6, 월 1회)

상품 이미지를 페르소나·키워드 매칭한 alt text·파일명 자동 생성. Shopify bulk 적용 SOP.

```text
[Role]
너는 e-commerce image SEO 전문가야.

[Input]
- 상품 이미지 (URL 또는 파일 첨부)
- 본인 상품: [PRODUCT + 강점 3개]
- 타겟 페르소나 (§27): [선택 1개]
- 핵심 SEO 키워드 5개: [본인 GSC 데이터 또는 추측]

[프롬프트]

"각 이미지에 대해:

Step 1 — 이미지 분석:
- 무엇이 보이는가 (객관적)
- 어떤 분위기·시나리오 (페르소나 관점)
- 핵심 시각 요소 3개

Step 2 — Alt text 자동 생성 (8~12 단어):
- 이미지 객관 설명 + 페르소나 관점 + 키워드 1~2개 자연스럽게
- 예: 'NeckEase posture corrector worn at WFH desk by 30-something professional'
- 키워드 stuffing X — 검색 엔진 패널티

Step 3 — 파일명 자동 (10~15자):
- kebab-case + 키워드
- 예: 'neckease-posture-corrector-wfh-desk.jpg'

Step 4 — Shopify bulk 적용 SOP:
1. Shopify Admin → Products → 본인 상품 선택
2. 이미지 호버 → Edit alt text → 위 Step 2 결과 붙여넣기
3. 100개 이상 시 Shopify Bulk Editor 사용
4. 또는 Matrixify / EZ Importer 앱 ($25/월)으로 CSV bulk 업로드

Step 5 — 누락 점검:
- 모든 상품에 alt text 있는가?
- 빈 alt text = 'image' 디폴트로 채워지는데 이게 SEO 손해
- (있으면) 누락 SKU 리스트"

[검증 루틴]
- 적용 후 1개월 → Google Image Search에서 본인 상품 검색량 측정
- alt text 적용 SKU 100% 권장 (Shopify SEO 점수)
- [Appendix B SEO Checklist](./Appendix_B_SEO_Checklist.md) 보강 항목
```

---

## 44. 💰 Tiered Pricing 3-Tier 결정 — Anchoring 심리학 (W4 / W12)

Basic / Standard / Pro 3-tier 가격 결정. 페르소나·LTV·마진 종합.

```text
[Role]
너는 D2C 가격 전략가야 — Anchoring 심리학 + Cohort LTV 데이터로 3-tier 결정.

[Input]
- 메인 상품: [PRODUCT + 단품 가격 $X]
- 마진 (단품): [X%]
- 페르소나 3종 (§27): demographics + 가격 민감도
- 평균 객단가: $[X]
- 재구매율: [X%]
- 경쟁사 가격대: [low $X / mid $Y / high $Z]

[프롬프트]

"3-tier 가격 자동 결정:

[Tier 명칭 + 구성]
Basic ($X1): 단품 1개
Standard ($X2): 단품 2개 또는 단품 + 액세서리
Pro ($X3): 3개 묶음 또는 풀 패키지 + 케어 가이드

[Anchoring 원칙]
- Standard 가격을 '심리적 sweet spot'에 위치 (Pro 대비 30~40% 낮음)
- Pro 가격은 '있어야 하는 anchor' (60~70%는 Standard 선택)
- Basic은 '비교 baseline' (실제 매출 비중 ~15% 정도)

[페르소나별 매칭]
- 가격 민감 (페르소나 A) → Basic 60% 선택
- 일반 (페르소나 B) → Standard 70% 선택
- 프리미엄 (페르소나 C) → Pro 30% 선택

[Output]

== 3-tier 가격 ==
Basic: $X1 (단품, 마진 X%)
Standard: $X2 (2개, 마진 X% — 본 강의 권장 sweet spot)
Pro: $X3 (3개 + 가이드, 마진 X%)

== 페르소나 분포 예상 ==
Basic 15% / Standard 65% / Pro 20% — AOV $[X] 예상

== Shopify 셋업 ==
- Bundle 옵션 또는 Variant로 구성
- 'Most Popular' 배지를 Standard에 (시각 anchoring)
- Pro에 'Best Value' 라벨 (per-unit 가격 명시)

== 1주 A/B 테스트 권장 ==
- 단품만 vs 3-tier → AOV +30~50% 보통

== 주의 ==
- 3-tier 너무 비싸지면 단품 매출도 감소 — Pro 너무 가깝지 않게
- 마진 < 30% 티어 절대 X (광고비·환불 흡수 불가)"

[검증 루틴]
- 단품 평균 매출 1주 baseline → 3-tier 적용 후 1주 비교
- 동일 페르소나·동일 광고로 비교 (다른 변수 통제)
```

---

## 45. 🔍 Creator Authenticity Score — 가짜 인플루언서 사전 필터 (W8)

크리에이터 100명 발굴 후 DM 전 필터. 시간 + 샘플 비용 절감.

```text
[Role]
너는 인플루언서 마케팅 분석가로 fake engagement를 탐지하는 전문가야.

[Input — 크리에이터별]
- 핸들: @username
- 팔로워: N
- 평균 조회수: N
- 평균 좋아요: N
- 평균 댓글: N
- 최근 영상 5개 (URL + 댓글 5개씩)
- 가입일·국가·언어

[프롬프트]

"각 크리에이터에 대해 6 신호 점검 + Authenticity Score (0~100):

신호 1: Engagement 비율 (좋아요 ÷ 조회수)
- 정상: 3~10%
- 의심: <2% (가짜 조회수) 또는 >15% (가짜 engagement)

신호 2: 댓글 품질
- 정상: 3+ 단어, 실제 의견·질문
- 의심: 'Wow!', '🔥', '@user1 @user2' 같은 generic 댓글 70%+

신호 3: 팔로워 패턴
- 정상: 1년+ 점진 성장
- 의심: 1주에 +10K (가짜 구매)

신호 4: 영상 일관성
- 정상: 같은 niche, 일정 빈도
- 의심: 5개 영상이 5개 niche (가짜 영향력 만들기)

신호 5: 댓글-팔로워 비율
- 정상: 평균 댓글 / 팔로워 = 0.05~0.3%
- 의심: <0.02% (조용한 봇 팔로워)

신호 6: Reply 패턴
- 정상: 영상 댓글에 5%+ 답글
- 의심: 0% (소통 X = 봇 운영)

[Output 형식]

== Authenticity Score ==
@username: [점수] / 100
- 신호 1: [정상/의심] [근거]
- 신호 2: ...
...

[등급]
- 90~100: GO (DM 1순위)
- 70~89: ACCEPTABLE (DM OK, 샘플 조심)
- 50~69: WATCH (소통 시도, 샘플 X)
- <50: SKIP (가짜 가능성)

[Risk warnings]
- 신호 1 + 5 동시 의심 → 100% 가짜 봇 팔로워

[1인 셀러 액션]
- 50점 이하는 즉시 CRM에서 SKIP 마크
- 50~70점은 첫 답신 후 결정
- 70+만 샘플 발송 ($15+ 비용 보호)"

[검증 루틴]
- 첫 50명에 적용 → 본인 직감과 매칭률 점검
- 매칭률 80%+ → 자동화
- HypeAuditor·Modash 같은 유료 도구 ($20~$200/월) 대안
```

---

## 46. 📝 Creator Content Brief — 크리에이터 톤 + 본인 톤 결합 (W8)

크리에이터에게 영상 브리프를 보낼 때 — 그들의 자연스러운 톤을 유지하면서 본인 브랜드 메시지를 자연스럽게 녹이는 브리프.

```text
[Role]
너는 인플루언서 마케팅 디렉터로 크리에이터의 톤을 유지하면서 본인 브랜드 메시지를 자연스럽게 녹이는 영상 브리프 작성자야.

[Input]
- 크리에이터 핸들 + 최근 영상 3개 (transcript)
- 본인 상품: [PRODUCT + 강점 3개]
- 본인 페르소나 매칭 (§27): [페르소나 1개]
- 메시지 우선순위: [무조건 포함 1개 + 가능하면 포함 2개]
- 영상 길이: 15초 (TikTok) / 30초 (Reels) / 60초 (YouTube Shorts)

[프롬프트]

"Step 1 — 크리에이터 톤 분석:
- 평소 사용 단어 패턴 (인용 5개)
- 영상 구조 (Hook → Body → CTA의 평균 분배)
- 카메라 위치·앵글 패턴
- 전형적인 마무리 문구
- 시청자 호칭 ('guys' / 'fam' / 'you' 등)

Step 2 — 본인 메시지 매핑:
- 무조건 포함 메시지를 크리에이터 톤으로 의역
- 가능하면 포함 메시지 2개 — 자연스러운 위치 추천
- 강제로 끼워넣지 말 것 — 톤 깨면 영상 실패

Step 3 — 영상 브리프 (크리에이터에게 보낼 영문):

Brief: [제목]

What we love about your style: [크리에이터 톤 특징 2~3개 인용]

What this product does: [상품 1줄 — 페르소나 관점]

Story idea (your style):
0~3sec: [Hook — 크리에이터 톤 그대로]
3~10sec: [Body — 자연스러운 시연]
10~15sec: [CTA — 강요 X, 'I'd genuinely recommend' 톤]

Must say (in your own words): [무조건 메시지 1개]

Nice to have: [메시지 2개]

What NOT to say: ['Sponsored'·'Promo'·'Buy now' 등]
[FTC #ad·#sponsored 명시 의무]

Creative freedom: 이 브리프는 가이드일 뿐 — 너의 진짜 스타일이 가장 중요해.

Step 4 — 본인용 검증 체크리스트:
- 크리에이터가 평소 안 쓰는 단어 강요 X
- '대본 읽는 느낌' 단서 0
- FTC #ad 명시 (FTC Endorsement Guides)"

[검증 루틴]
- 크리에이터에게 브리프 발송 후 첫 반응 — '자유롭게' vs '너무 디테일'
- '너무 디테일' 답이면 다음엔 30% 줄여서 발송
- 영상 게시 후 평소 영상 vs 본 영상 engagement 비교 — 80%+ 유지면 톤 잘 보존
```

---

## 47. ⚖️ IP & Photography Risk Pre-Check — 신상품 등록 전 5분 (W3, W5)

신상품 등록 전 **상표권·저작권·위조품·CPSC** 위험 자동 진단. 1년에 1번이라도 위반하면 변호사 비용 $5K+ + 계정 정지. 신규 SKU당 5분 투자가 가장 큰 보험.

```text
[Role]
너는 IP 침해 + 제품 안전 컴플라이언스 사전 진단 전문가야.

[Input]
- 상품명 + 카테고리: [PRODUCT, CATEGORY]
- 공급사 (CJ/AliExpress) 가격: $[X]
- 본인 예상 판매가: $[Y]
- 공급사 상품 사진 URL 5장
- 공급사가 사용한 상품명 영문 (직역)
- 본인이 쓰려는 브랜드명: [BRAND]

[프롬프트]

"4가지 차원으로 위험도 자동 진단:

[1. 상표권 (Trademark) 위험]
- 본인 [BRAND]가 USPTO 등록 상표와 충돌 가능성 1~5
- 공급사 상품명에 진짜 브랜드명(Apple·Stanley·Hydroflask·Yeti·Lululemon 등) 포함되어 있나?
- 'Style of [브랜드]' / 'Inspired by [브랜드]' 같은 표현 — 즉시 위반
- 권장 액션: 등록 가능한 안전 브랜드명 3개 제안

[2. 저작권 (Copyright) 위험 — 사진]
- 공급사 사진 5장에 워터마크·로고·다른 셀러 사진 흔적
- 'Stock photo' 표시 또는 Unsplash·Shutterstock 출처
- 같은 사진을 검색했을 때 다른 셀러 100+이 사용 중인지 (Google Reverse Image Search)
- 권장 액션: 본인 촬영 / AI 생성 (Imagen 4 / DALL-E) / 공급사 'unrestricted commercial use' 서면 동의

[3. 위조품 (Counterfeit) 신호]
- 공급사 가격이 진짜 브랜드의 1/10 이하면 100% 위조품
- 공급사 상품명에 'Premium quality' / 'OEM original' / '1:1 copy' / 'AAA grade' = 위조품 신호
- 동일 카테고리 진짜 브랜드 평균가의 30% 미만 = 의심
- 권장 액션: 즉시 SKIP

[4. 제품 안전 (CPSC·FDA·MoCRA) 사전]
- [CATEGORY]가 CPSC 규제 카테고리인가? (어린이용품·전자·가구)
- FDA 규제 카테고리인가? (화장품·식품·의료기기·OTC)
- MoCRA 등록 의무? Prop 65? PFAS 금지?
- 본인 LLC IOR 진입 시 컴플라이언스 비용 $X 추정

[Output 형식]

== 종합 위험도 ==
점수: X / 20 (각 차원 1~5)
판정: GO / WARNING / SKIP

== 차원별 상세 ==
1. 상표권: X/5 — [신호] [근거] [액션]
2. 저작권: X/5 — ...
3. 위조품: X/5 — ...
4. 제품 안전: X/5 — ...

== 즉시 액션 ==
- [가장 큰 위험 1개에 대한 구체 행동]

== 진입 결정 ==
- GO: 셋업 진행 ([Master Prompts §1 Kill Criteria])로 이어서)
- WARNING: 1~2 차원 보강 후 진행
- SKIP: 다른 SKU 후보로 즉시 전환

== 컴플라이언스 비용 추정 ==
- 본인 LLC IOR 진입 시 첫해 비용: $X
- 고객 IOR 모델 유지 시 비용: $0 (단 카테고리 회피)"

[검증 루틴]
- 신규 SKU 등록 시 매번 (5분 투자)
- WARNING/SKIP 결과는 [Appendix F #11 IP 침해](./Appendix_F_Common_Mistakes_10.md) 자가 검열 시트에 기록
- USPTO + Google Reverse Image Search는 본 프롬프트와 별도로 본인 직접 1회 점검 권장
```

---

## 📑 Master Prompts §40~§47 카테고리 (Quick Reference)

| §N | 사용 빈도 | 카테고리 |
|:--:|---|---|
| 40 | **매주 월요일** | 운영 우선순위 |
| 41 | 월 1회 | 매출 (cross-sell) |
| 42 | **매주 점검** | 마진 보호 (fraud) |
| 43 | 월 1회 | SEO (image alt) |
| 44 | 분기 1회 | 가격 전략 |
| 45 | DM 발송 전 | 크리에이터 검증 |
| 46 | 협업 시 매번 | 크리에이터 브리프 |
| 47 | **신규 SKU 등록 시 매번** | IP·저작권·위조품·CPSC 사전 진단 |
