# 🎓 Week 9: 오가닉 성과 분석 + 소액 유료 광고(Spark Ads)

## 🎯 이번 주 학습 목표
1. 크리에이터들이 올려준 영상(UGC) 중 어떤 영상이 진짜 트래픽을 물어오는지 데이터를 분석한다.
2. 유료 광고를 집행하기 위한 절대 기준(광고 진입 조건)을 확립하여 돈을 낭비하지 않는다.
3. 틱톡 Spark Ads(크리에이터 계정의 영상에 돈을 태우는 광고)를 세팅하고 소액으로 부스팅한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 8주차 과제(DM 발송 및 회신 현황) 리뷰
* **0:10 - 0:40 (30분)**: [이론] ROAS의 함정과 Spark Ads의 강력함
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] 틱톡 애즈 매니저 세팅, Spark Ads 소액(5$) 캠페인 런칭
* **2:10 - 2:30 (20분)**: Q&A 및 9주차 과제 안내

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 광고를 켜기 위한 절대 3조건

지난주에 뿌린 샘플 덕분에 틱톡에 내 상품 영상이 2~3개 올라왔다고 가정합시다. 이때 신나서 바로 광고비 100달러를 태우면 안 됩니다. 다음 **3가지를 만족했을 때만** 광고를 켭니다:

1. 영상의 오가닉 조회수가 **1,000을 넘었는가?**
2. 좋아요/공유 비율이 **10% 이상**인가?
3. 스토어에 **첫 오가닉 결제(매출)**가 발생했는가?

이 조건이 안 맞으면 그 영상은 죽은 영상입니다. 돈을 태워도 안 팔립니다.

### 2. 왜 내 스토어 계정이 아니라 '크리에이터 영상'에 돈을 태울까? (Spark Ads)

과거에는 내 브랜드 계정으로 광고를 올렸습니다. 지금 틱톡 유저들은 브랜드 로고가 뜨고 'Sponsored' 글씨가 보이면 0.1초 만에 넘깁니다. **Spark Ads**는 크리에이터가 자기 채널에 올린 일상 영상에 내가 돈을 지원해서 조회수를 폭발시키는 시스템입니다. 사람들은 광고인 줄 모르고 끝까지 보게 됩니다.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. 틱톡 Ads 매니저 세팅 + Pixel 연동 (20분)

#### Step 1-A. TikTok Business Center (BC) 가입 8단계

```
1. business.tiktok.com 접속 → [Get Started] 클릭
2. 이메일 가입 → 사업자명 입력 (개인사업자 OK)
3. Business Center 자동 생성 → 좌측 [Ad Accounts] → [Create New Ad Account]
4. Ad Account 정보:
   - Time zone: America/Los_Angeles (PST 권장 — 미국 결제 데이터 정렬)
   - Currency: USD
   - Industry: E-commerce → Lifestyle/Apparel/etc.
5. Payment Method 등록:
   - Visa/Master 카드 + 청구지 주소 (한국 OK)
   - 첫 충전 $30 권장 (테스트 3일치)
6. Tax Info: 한국 사업자 → "Not US Tax Resident" 체크
7. 좌측 [Pixels] → [Create Pixel] → 이름: "Shopify_Main"
8. Pixel ID 6자리 복사 (다음 단계에서 사용)
```

#### Step 1-B. Shopify ↔ TikTok Pixel 원클릭 연동

```
1. Shopify Admin → 좌측 [Apps] → [Apps and sales channels]
2. [TikTok] 검색 → [Add app] → Shopify 권한 승인
3. TikTok 앱 내부 → [Connect Account] → BC 계정 로그인
4. [Data Sharing] 설정 → "Maximum" 선택 (Pixel + Events API 동시)
5. Pixel 자동 연동 → §1-A의 6자리 ID와 일치 확인
6. [Events Manager] 진입 → 본인 스토어 URL 방문 → "Test Events" 탭에서 PageView 이벤트 수신 검증
```

> ✅ **검증 포인트**: Test Events에 30초 안에 `PageView`, `ViewContent` 이벤트가 들어오면 정상.

### Step 2. 크리에이터 코드 발급 및 Spark Ads 런칭 (60분)

#### Step 2-A. 크리에이터에게 Spark Ad Code 요청

[02_Master_Prompts.md §8 Spark Ad Code 요청 영문 DM](./02_Master_Prompts.md) 템플릿을 그대로 발송합니다. DM에는 크리에이터 측의 메뉴 경로가 포함되어 있어 추가 설명이 필요 없습니다.

> 크리에이터 측 발급 메뉴: TikTok 앱 → Profile → 영상 선택 → "..." → Ad Settings → Ads authorization ON → Duration 7 days → 6자리 코드 복사

#### Step 2-B. Spark Ads 캠페인 생성 풀 워크스루 (Ads Manager 18단계)

```
TikTok Ads Manager 메뉴 경로:
1. ads.tiktok.com → Login (BC 권한 필요)
2. 좌측 사이드바 → [Campaign] → [Create]
3. Advertising Objective → "Website Conversions" 선택. **2026.2 TikTok Smart+ 통합** ([Segwise](https://segwise.ai/blog/tiktok-smart-campaigns-guide-benefits)): Sales/LeadGen/App + Traffic까지 Smart+ 자동 최적화 디폴트 ON. **첫 캠페인은 Smart+ 토글 OFF로 수동 시작 권장** — 학습 곡선 + 예산 폭주 방지. 매출 검증 후 Smart+ ON 전환.
4. Campaign budget → "No limit" (캠페인 단위 무제한, 광고그룹에서 제한)
5. [Continue] → Ad Group 화면

Ad Group 설정:
6.  Optimization Location → Website
7.  Promotion Type → Website
8.  Pixel → §1에서 만든 Shopify_Main 선택
        Optimization Event → "Complete Payment"
9.  Placements → [Select Placement] → TikTok만 체크
        (Pangle / Search / News Feed 모두 해제 — 효율 ↓)
10. Audience:
    - Location: United States
    - Age: 18+
    - Detailed Targeting: 비워두기 (AI 위임이 더 잘 됨)
11. Budget & Schedule:
    - Daily Budget: $20 (Test 단계, Supplement_02 참조)
    - Schedule: "Run continuously"
12. Bidding → "Lowest Cost" (수동 입찰 X — 초보자는 무조건 자동)

Ad 단계:
13. Ad Creation → Identity → "Use TikTok account to deliver Spark Ads"
14. [Find creator] → 크리에이터가 보내준 6자리 Spark Ad Code 입력
15. Authorization 시간: 7 days (캠페인 종료 후 자동 해제)
16. Call to Action → "Shop Now"
17. Destination URL → 상품 상세페이지
        + UTM 파라미터 필수: ?utm_source=tiktok&utm_medium=spark&utm_campaign=[크리에이터핸들]
18. [Submit] → 검수 12~24시간 → 승인 시 자동 송출
```

#### Step 2-C. 첫 24시간 모니터링 체크리스트

런칭 후 **4시간 / 12시간 / 24시간** 시점에 아래를 점검합니다.

| 시점 | 점검 KPI | Kill 임계치 |
|:--:|---|---|
| **4시간** | 노출(Impressions) | < 5,000 → 일시 정지 (검수 또는 매칭 문제) |
| **12시간** | CTR | < 0.5% → 광고 소재 교체 |
| **24시간** | CPC, CVR | CPC > $1.50 또는 CVR < 0.5% → 광고 소재 교체 |
| **3일 누적** | ROAS | < BEP_ROAS (보통 1.4) → **즉시 Kill** |

#### Step 2-D. ROAS 계산식 + 손익분기 BEP CPA 매트릭스

```
ROAS = 매출 / 광고비
BEP_ROAS = 1 / (1 - (Landed_Cost / 판매가))
BEP_CPA = 판매가 - Landed_Cost - 기타수수료
```

| 판매가 | Landed Cost | BEP ROAS | BEP CPA |
|:--:|:--:|:--:|:--:|
| $25 | $12 | 1.92 | $13 |
| $40 | $15 | 1.60 | $25 |
| $60 | $20 | 1.50 | $40 |
| $80 | $25 | 1.45 | $55 |

> **결단 규칙**: 실제 CPA가 BEP CPA를 **2일 연속 초과**하면 광고를 끄고 새 소재로 재시작합니다.

### Step 3. Meta Ads 보조 채널 + Conversions API (CAPI) (옵션 — Spark Ads 검증 후)

**왜 단일 채널 의존이 위험한가**: Spark Ads 1개 채널만 쓰면 TikTok Shop 위반 1건 → 광고 계정 정지 → 매출 0 직행. **Meta Ads(Facebook + Instagram)를 보조로 켜두면 채널 분산 + 동일 영상 자산을 광고로 바로 재활용** 가능.

#### 3-A. Shopify ↔ Meta CAPI 1-click 연동 (10분)

**iOS 14.5 ATT** 이후 Meta Pixel 단독은 전환의 **20~40% 손실** ([Triple Whale CAPI 2026](https://www.triplewhale.com/blog/facebook-capi)). Conversions API(CAPI)는 서버사이드로 직접 Meta에 이벤트 전송 → ATT 우회. Shopify는 네이티브 커넥터 무료 + 1-click.

```
1. Shopify Admin → Apps → "Facebook & Instagram" 설치 (Meta 공식)
2. Meta Business Manager 로그인 → Pixel + CAPI 자동 생성
3. [Data Sharing] → "Maximum" 선택 (Pixel + CAPI 동시 활성)
4. [Events Manager] → Test Events 탭 → 본인 스토어 PageView 1회
5. 30초 안에 "Server" 컬럼에 이벤트 들어오면 CAPI 정상
6. Aggregated Event Measurement (AEM) 도메인 검증 → 8개 이벤트 우선순위 설정
   (1) Purchase (2) AddToCart (3) ViewContent ... (8) Lead
```

> ✅ **검증 포인트**: Events Manager의 "Event Match Quality" 점수 7.0+ → 매칭 양호. 6.0 미만이면 도메인 검증 또는 Customer Information Parameters 누락.

#### 3-B. Meta Ads 첫 캠페인 — Spark Ads 영상 그대로 재사용

```
1. ads.facebook.com → [Create Campaign]
2. Objective → "Sales" → **Advantage+ Shopping Campaigns (ASC)** ⚠️ 2026-01-15부터 manual detailed targeting 사실상 폐지, ASC가 SMB 디폴트 ([eMarketer](https://www.emarketer.com/content/meta-will-phase-manual-targeting-some-advantage-campaigns)) — Audience·Placement·Optimization 모두 자동 위임
3. Conversion Location → Website
4. Pixel + Conversion Event → "Purchase"
5. Audience: ASC는 자동 — 본인이 만질 수 있는 건 Country (US) + Custom Audience (구매자 LookAlike) 정도
6. Placements → Advantage+ Placements (Auto, 강제)
7. Budget: $20/일 (TikTok과 동일 예산으로 시작)
8. Ad Creative:
   - Spark Ads에서 가장 잘된 영상의 MP4 다운로드 (Identity 권한 필요)
   - 또는 크리에이터에게 raw 영상 받기
9. Primary Text + Headline → AI로 5종 생성 (Step A 동일 방법)
10. CTA → "Shop Now" → UTM 파라미터:
    ?utm_source=meta&utm_medium=advantage_plus&utm_campaign=[캠페인명]
```

#### 3-C. TikTok vs Meta — 어디에 더 태울까?

```
[1주 동시 운영 후 결단 트리]

TikTok ROAS > Meta ROAS × 1.3?
  └─ YES → TikTok 80% : Meta 20%로 예산 재분배
  └─ NO  → Q2로

Meta ROAS > TikTok ROAS × 1.3?
  └─ YES → Meta 70% : TikTok 30%
  └─ NO  → 50:50 유지 (분산 가치)
```

> **본 강의 권장**: 첫 30일 = TikTok 단일. 영상 자산 5+개 검증 후 Meta CAPI 보조 진입. **두 채널 동시 시작은 비추** — 학습 부담 + 광고비 분산으로 둘 다 어중간하게 됨.

---

## 🤖 [AI 활용 심화] 광고 카피 5종 동시 + Self-Critique (20분 추가)

광고 1개를 잘 쓰는 것보다 **5가지 다른 각도로 동시에 5개**를 만들어 A/B 테스트하는 것이 광고비를 가장 적게 태우는 방법입니다.

### Step A. Tree of Thought 5종 동시 생성
`02_Master_Prompts.md` **§20 광고 카피 A/B 테스트 5종 자동 생성** 사용:
1. Pain-led / Benefit-led / Curiosity-led / Social Proof-led / Authority-led 5각도
2. 각 헤드라인 + 본문 + 예상 CTR + 추천 페르소나 자동 출력
3. 5개 모두 동일 일예산 $20씩 4시간 테스트

### Step B. 4시간 후 데이터로 Self-Critique
4시간 데이터 수집 후 Claude에 다시:
```text
"위 5개 광고의 첫 4시간 데이터:
- A (Pain-led):     CTR 1.2%, CPC $0.85
- B (Benefit-led):  CTR 0.8%, CPC $1.20
- C (Curiosity):    CTR 2.1%, CPC $0.45
- D (Social Proof): CTR 1.6%, CPC $0.65
- E (Authority):    CTR 0.5%, CPC $1.80

가장 성과 좋은 1개의 성공 요인을 분석하고,
그 요인을 강화한 v2 카피 3종 추가 생성해 줘."
```

### Step C. v2 카피 5만큼 다시 테스트
가장 잘되는 패턴(여기선 Curiosity)을 강화한 v2 카피 3종으로 재테스트.

> **핵심**: AI가 카피를 "처음 쓰는" 단계가 아니라, **"데이터 보고 진화"하는** 단계가 진짜 가치 발생 지점.

---

## 📊 [AI 활용 심화] Spark Ads 데이터 → 결단 자동화 (15분 추가)

### Master Prompts §9 + Claude Artifacts 활용

매일 오전 9시 (캠페인 24시간 후) Claude에 어제 데이터 입력:
```text
"어제 Spark Ads 캠페인 데이터:
[CSV 붙여넣기 또는 표 형식]

다음 5가지를 즉시 답변:
1. 24h 내 KEEP / SCALE / KILL 결단
2. SCALE이라면 다음 일예산 추천 ($20→$N)
3. KILL이라면 다음 시도할 페르소나·각도 추천
4. 차트로 시각화 (Claude Artifacts 사용)
5. 향후 7일 ROAS 예측 (시계열 외삽)"
```

### Claude Artifacts 차트 자동 생성
Claude가 즉시 인터랙티브 라인 차트 생성 → PNG로 저장 → Slack 전송

> **결과**: 매일 광고 분석 30분 → AI 자동화 5분. 데이터 보고 결단 못 내리는 셀러가 90%인데, 이 워크플로우가 그 격차를 메웁니다.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 20달러씩 태웠는데 매출이 하나도 안 나면 언제 꺼야 하나요?**
> 상품 판매가(예: 40달러)만큼 광고비를 썼는데(CPA) 장바구니 담기조차 1건도 없다면 그 캠페인은 당장 끄세요(Kill). 훅이 약하거나 상세페이지에서 이탈하는 겁니다. 데이터가 쌓이면 어디서 고객이 도망가는지 알 수 있습니다.

**Q: 크리에이터가 코드를 안 주면 어떡하죠?**
> 그래서 처음에 협업 제안 DM을 보낼 때 "영상 성과가 좋으면 우리가 광고비도 태워줄게. 그럼 네 채널 조회수랑 팔로워도 같이 오를 거야"라고 **윈윈(Win-win) 전략**을 어필해야 합니다. 이걸 이해하는 크리에이터들은 기꺼이 코드를 줍니다.

---

## 📝 9주차 과제 안내
1. 조건이 충족된 수강생은 오늘 배운 대로 하루 20달러짜리 Spark Ads를 돌리고, 3일 뒤의 ROAS(광고수익률) 결과를 분석해 오세요.
2. 아직 조건이 충족되지 않은 수강생은 크리에이터 DM 발송을 50명 추가로 진행하세요.
