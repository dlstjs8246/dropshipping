# 🧠 마스터 프롬프트 컬렉션 (Master Prompts)

> **수강생 사용 안내**: 본 컬렉션은 14주 동안 반복적으로 사용할 핵심 프롬프트 25종을 모아둔 것입니다. 변수(`[괄호]`) 부분만 본인 상품·브랜드 정보로 바꿔 AI(Claude, ChatGPT, Gemini)에 그대로 입력하세요. 각 프롬프트의 사용 시점은 제목 옆 `(Week N)` 표기를 참고하세요.

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
1. 마진율 ≥ 30%: ((판매가 - 소싱가 - 배송비 - 소싱가의 125% 관세) / 판매가) 가 30% 이상인가? (계산식 결과 포함할 것)
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
- Tariff (125% of sourcing): $[X]
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
3. 중국 원산지 시 추가 관세 (Section 301 + IEEPA 125%)
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
- B-roll 영상: Runway Gen-3 또는 Pika 1.5
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
