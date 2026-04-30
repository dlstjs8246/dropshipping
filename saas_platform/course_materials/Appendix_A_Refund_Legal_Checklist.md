# 📚 부록 A: 환불정책 + 법적 체크리스트 (한국 → 미국 수출)

> **목적**: 한국 소재 셀러가 미국 향 드랍쉬핑을 운영할 때 발생하는 환불·세금·개인정보·분쟁 리스크를 한 문서로 정리합니다. **법률 자문 대용은 아니며**, 분쟁 가능성이 보이면 반드시 변호사 상담을 권장합니다.

---

## 1. 미국 FTC 환불·반품 표시 의무

### 핵심 요약
- FTC(미국 연방거래위원회)는 **환불 정책의 명시적 게시**를 의무화합니다.
- "환불 불가" 정책 자체는 합법이지만, **명시되지 않으면 자동으로 30일 환불 의무**가 부과됩니다.
- Shopify Refund Policy 페이지가 푸터에서 1클릭 안에 도달 가능해야 합니다.

### 의무 표시 항목 (체크리스트)

| ☐ | 항목 |
|:--:|---|
| ☐ | 환불 가능 기간 (예: 30 days from delivery) |
| ☐ | 환불 가능 조건 (defective, damaged, wrong item — 그 외 명시) |
| ☐ | 반품 배송비 부담 주체 (customer / seller) |
| ☐ | 환불 처리 기간 (예: 5–10 business days) |
| ☐ | 환불 방법 (original payment method) |
| ☐ | 비환불 항목 (final sale, custom, perishable) |
| ☐ | 분쟁 발생 시 연락 채널 (이메일 + 응답 시간 약속) |

---

## 2. 30일 환불 정책 영문 템플릿 (Shopify Refund Policy 페이지용)

```markdown
# Refund Policy

Thank you for shopping at [STORE_NAME].

## 30-Day Return & Refund

We offer a **30-day return policy** from the date of delivery. To be eligible for a return, your item must be:
- Unused and in the same condition that you received it
- In the original packaging
- Accompanied by the receipt or proof of purchase

## How to Request a Return

1. Email us at [SUPPORT_EMAIL] with your order number and reason for return.
2. We will respond within 24 hours with return instructions.
3. Ship the item to the return address we provide.

## Refunds

Once we receive and inspect your returned item, we will notify you by email within 3 business days.
- **Approved refunds**: processed to your original payment method within 5–10 business days.
- **Damaged/defective items**: full refund + we cover return shipping.
- **Change of mind**: customer covers return shipping.

## Non-Returnable Items

- Final sale items (clearly marked at checkout)
- Custom-made or personalized products
- Perishable goods

## Damaged or Wrong Items

If you received a damaged or incorrect item, **email a photo within 7 days of delivery**.
We will issue a full refund or replacement at no additional cost.

## Contact

Questions? Email [SUPPORT_EMAIL] — we typically respond within 24 hours, Mon–Fri.
```

> **사용법**: `[STORE_NAME]`, `[SUPPORT_EMAIL]` 두 곳만 치환해 Shopify Admin → Settings → Policies → Refund Policy에 붙여넣으세요.

---

## 3. 한국 사업자가 미국 향 발송 시 통신판매업 신고

### 신고 면제 조건 (2026년 기준)
다음 **둘 중 하나** 충족 시 통신판매업 신고가 면제됩니다.

1. **간이과세자**이면서 직전년도 통신판매 매출 **4,800만 원 미만**
2. 거래 횟수가 직전년도에 **50건 미만**이면서 거래액 **1,200만 원 미만**

> 둘 다 초과하면 시·군·구청에서 통신판매업 신고 (수수료 약 4만 원, 1주일 소요)

### 사업자 등록 후 의무
- 부가가치세 신고 (간이/일반과세자별 다름)
- 종합소득세 신고 (5월)
- **수출 매출은 영세율 적용** — 부가세 0%, 매입세액은 환급 가능
- 수출신고서 (Shopify 직접 발송 시 면제, 한국에서 묶음 발송 시 필수)

---

## 3.5. Day 1 결정트리 — 사업자등록·통신판매업 (1페이지 압축)

수료 직후 월요일 = **Sprint Day 1**. 다음 트리를 따라 **30분 안에** 사업자/통판 결정 완료.

```
START
  │
  ├─ Q1. 직전년도(2025) 통신판매 매출이 4,800만 원 이상이었나?
  │     YES → ❶ 일반과세자 + 통신판매업 신고 필수
  │     NO  → Q2로
  │
  ├─ Q2. 직전년도 거래 횟수가 50건 이상이거나 거래액 1,200만 원 이상이었나?
  │     YES → ❷ 간이과세자 + 통신판매업 신고 필수
  │     NO  → Q3로
  │
  ├─ Q3. 처음 시작이라 아직 매출이 0인가?
  │     YES → ❸ 신고 면제 시작 가능 — 단, 매출 발생 후 다음달 초과 여부 모니터링
  │     NO  → Q1·Q2 재검토 (이미 매출 있음)
  │
  └─ END
```

### 결정 결과별 첫 액션 (각 30분~1주)

| 결과 | Day 1 액션 | 비용·시간 |
|:--:|---|---|
| **❶ 일반과세자** | 홈택스 사업자 등록 (소매업 525101) + 시·군·구청 통신판매업 신고 | 약 4만 원, 1주 |
| **❷ 간이과세자** | 홈택스 간이과세자 등록 + 통신판매업 신고 | 약 4만 원, 1주 |
| **❸ 면제 시작** | 홈택스 사업자 등록만 (수출 영세율 환급용) | 무료, 즉시 |

### 추천 — 본 강의 1인 셀러

**❸ → ❷ → ❶ 단계적 전환**이 정석:

1. **❸ 면제 시작**: 매출 0~1,200만 원 구간. 부가세 영세율 환급은 **사업자 등록만으로 가능** (통판 신고 X). 매월 환급액으로 광고비 충당.
2. **❷ 통판 등록**: 거래 50건 또는 1,200만 원 초과 직후. 절대 늦추지 말 것 — 시정 명령 + 과태료 200만 원 이하.
3. **❶ 일반과세자 전환**: 매출 4,800만 원 초과 직후. 자동 전환 / 본인이 미리 신청 가능.

### 자주 오해하는 포인트

| 오해 | 진실 |
|---|---|
| "사업자등록 해야 매출 받을 수 있다" | ✗ — Shopify·PayPal·Stripe는 등록 없어도 받을 수 있음 (단 종소세 5월 신고 의무 그대로) |
| "통신판매업 신고가 사업자등록보다 먼저" | ✗ — 사업자등록 → 그 등록증으로 통판 신고 |
| "수출은 무조건 영세율이라 신고 안 해도 됨" | ✗ — 영세율 = 부가세 0%일 뿐, **신고는 매분기 의무**. 신고 안 하면 환급 못 받음 |
| "면제 조건이면 평생 면제" | ✗ — 매년 직전년도 매출로 재검토 |

### 구청 방문 시 챙길 서류

- 신분증 (주민등록증 또는 운전면허증)
- 사업자등록증 사본
- 도메인 정보 (스토어 URL)
- 결제대행사 정보 (PayPal·Shopify Payments 화면 캡처 OK)
- 4만 원 (현금 또는 카드)

> **핵심**: 정부24·홈택스 셀프 신청도 가능 (집에서 30분). 단, 첫 회는 구청 방문이 빠름 — 모르는 항목 즉문즉답.

---

## 4. GDPR / CCPA 영문 개인정보처리방침 템플릿

미국·유럽 고객의 개인정보를 수집하는 순간 **GDPR (EU)** 및 **CCPA (California)** 적용 대상이 됩니다.

```markdown
# Privacy Policy

Last updated: [YYYY-MM-DD]

## Information We Collect

When you place an order or sign up for our newsletter, we collect:
- Name, email address, shipping address
- Payment information (processed securely via Stripe/Shopify Payments — we never store card numbers)
- Browsing behavior on our site (via cookies and TikTok/Meta Pixel)

## How We Use Your Information

- To process and ship your orders
- To send order confirmations and shipping updates
- To send marketing emails (only with your consent — you can unsubscribe at any time)
- To improve our store and analyze ad performance

## Your Rights

### EU (GDPR)
- Right to access, correct, or delete your data
- Right to data portability
- Right to object to processing
- Email [PRIVACY_EMAIL] to exercise these rights — we respond within 30 days

### California (CCPA)
- Right to know what personal information we collect
- Right to delete personal information
- Right to opt-out of "sale" of personal information (we do not sell)
- Email [PRIVACY_EMAIL] — we respond within 45 days

## Data Sharing

We share data only with:
- Shopify (e-commerce platform)
- Shipping carriers (USPS, DHL, etc.)
- Stripe / Shopify Payments (payment processing)
- TikTok / Meta (ad analytics, with your cookie consent)

We do **not** sell your data.

## Cookies

Our site uses cookies for cart functionality and ad performance.
You can disable cookies in your browser settings.

## Contact

Email [PRIVACY_EMAIL] for any privacy-related questions.
```

> **필수**: Shopify Admin → Settings → Policies → Privacy Policy에 붙여넣고, `[PRIVACY_EMAIL]`만 치환하세요.

---

## 5. 한국 PIPA (개인정보보호법) 컴플라이언스

한국 사용자가 1명이라도 사이트에 접속하는 순간 **PIPA가 적용**됩니다 (Shopify SaaS 자체에는 한국어 버전 정책이 별도로 있어야 하지만, 스토어 운영자 책임).

### 필수 페이지 3개
1. **개인정보처리방침** (영문 §4의 한국어 번역본)
2. **이용약관** (Terms of Service) — 한국어
3. **위치기반서비스 이용약관** — 모바일에서 위치 추적 시 (대부분 면제)

### 위반 시 과태료
- 개인정보처리방침 미게시: 1,000만 원 이하
- 동의 없는 마케팅 이메일 발송: 3,000만 원 이하

### ⚠️ PIPA 2025-10-02 시행 — 외국 사업자 국내대리인 지정 의무

2025년 10월 2일부터 PIPA 외국 사업자 가이드라인 시행 ([Baker McKenzie](https://connectontech.bakermckenzie.com/south-korea-issues-guidelines-on-applying-the-personal-information-protection-act-to-foreign-business-operators/)). KR 거주자가 미국 LLC 명의 Shopify를 운영해도, **KR 거주자 데이터를 처리하면 외국 사업자로 분류** 가능. 매출·이용자 수 기준 충족 시 다음 의무:

| 매출 / 이용자 기준 | 의무 |
|---|---|
| 직전년도 KR 매출 1,000만 원 또는 KR 이용자 정보 1,000명 이상 | **국내대리인 지정** (개인정보보호법 §31의2) — KR 주소·연락처 보유 자연인/법인 |
| 동일 + 한국 이용자 100만 명 이상 | **PIPC 사전 통지** + 데이터보호책임자(DPO) 지정 |

**1인 KR 셀러 실무**: 본인이 KR 거주 → 본인이 국내대리인 자동 충족. **단 미국 LLC + 미국 거주 친척 명의 등으로 셋업한 경우 별도 한국 대리인 지정 필요**. 위반 시 과태료 2,000만 원 이하.

> **본 강의 권장**: KR 시장 매출 비중이 5% 미만이면 Shopify Markets에서 KR 차단 → PIPA 적용 회피. KR 시장도 노린다면 본인 명의 한국 사업자가 국내대리인 자동 겸직.

---

## 6. 분쟁 발생 시 PayPal / Stripe Dispute 대응 SOP

### Dispute가 들어오면 — 24시간 내 대응 필수

#### Step 1: 즉시 확인 (1시간 내)
- Stripe/PayPal 대시보드에서 Dispute 상세 내역 열기
- 분쟁 사유 분류:
  - `Product not received` (배송 미도착)
  - `Product not as described` (상품 불일치)
  - `Unauthorized transaction` (도용)
  - `Duplicate charge` (중복 청구)

#### Step 2: 증거 수집 (4시간 내)
| 분쟁 유형 | 필요 증거 |
|---|---|
| Product not received | 배송 추적번호 + 추적 스크린샷 + 도착 확인 (Track123) |
| Product not as described | 상품 상세페이지 스크린샷 + 고객 동의 기록 (체크박스) |
| Unauthorized | IP 로그, 배송지, 이메일 인증 기록 |
| Duplicate charge | 주문 ID 두 개 비교, 환불 처리 내역 |

#### Step 3: Evidence 제출 (24시간 내)
- Stripe: Dashboard → Disputes → 해당 건 → Submit Evidence
- 영문 1페이지 요약 + 모든 증거 PDF 첨부
- 추적번호는 반드시 **공식 캐리어 사이트 URL** 함께 제공

#### Step 4: 후속 조치 (분쟁 종결 후)
- **승소 시**: 로그를 보관 (재분쟁 대비)
- **패소 시**: 환불 + 수수료 ($15) 손실. 동일 패턴이 3회 이상 반복되면:
  - 상품 페이지 카피 재검토
  - 배송 기간을 명시적으로 표시 (`7-12 business days`)
  - 의심 IP/이메일 차단

### Dispute Rate 임계치 (계정 정지 기준)
| 처리사 | 위험 임계치 | 정지 임계치 |
|---|:--:|:--:|
| Stripe | 0.75% | 1.0% |
| PayPal | 1.0% | 1.5% |
| Shopify Payments | 1.0% | 1.5% |

> **결론**: 분쟁률 0.5% 이하를 유지하지 못하면 결제 처리사 계정이 정지됩니다. 환불 정책을 명확히 하고 배송 기간을 정직하게 표시하는 것이 가장 싸게 분쟁을 줄이는 방법입니다.

### Visa CE 3.0 (Compelling Evidence 3.0) — 2025-10-17 글로벌 자동 적용

Visa의 신규 분쟁 방어 표준. **Reason Code 10.4 (Other Fraud) 분쟁에서 자동 적격 부여**되면 Visa가 머천트 승소 처리 ([Chargebacks911](https://chargebacks911.com/prevent-chargebacks/prevent-visa-disputes/visa-compelling-evidence-3-0/)).

#### 자동 적격 요건 (5가지 모두 보관 의무)
1. 동일 카드로 **이전 정상 거래 2건 이상** (분쟁 거래 ≥120일 전)
2. **Device fingerprint** (브라우저·OS·해상도) 거래 시점 기록
3. **IP 주소** 거래 시점 기록
4. **Login history** — 이메일 또는 계정 ID 기준 18개월 보관
5. **배송 주소** 동일 (또는 본인 인증된 가족 주소)

#### Shopify 자동 처리 vs 수동 작업

| 데이터 | Shopify 자동 보관 | 셀러 추가 작업 |
|---|---|---|
| 거래 이력 | ✓ | — |
| Device fingerprint | ✓ (Shopify Fraud Analysis) | — |
| IP 주소 | ✓ | — |
| Login history | △ (Shopify 계정 로그인만) | Klaviyo 또는 별도 CDP 연동 권장 |
| 배송 주소 | ✓ | — |

> **실무**: Stripe Dispute 응답 시 위 5가지 증거를 **하나의 PDF로 묶어 첨부** + Shopify Order URL 명시. 자동 적격 시 Visa 측에서 즉시 승소 처리, 수수료도 면제.

> ⚠️ **2026.4 적용 카드망**: Visa만. Mastercard는 자체 표준 (Mastercom Collaboration), AmEx는 별도. **Visa는 미국 시장 ~52% — 자동 처리만으로 분쟁 ~30% 감소 효과**.

---

## 6.3. FTC Fake Reviews Rule — 위반당 $51,744 (2024-10-21 시행, 2025-12 1차 enforcement)

[FTC 16 CFR Part 465](https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials) 시행. 2025년 12월 FTC가 첫 enforcement로 **10개 D2C 회사에 warning letter** ([FTC Blog 2025-12](https://www.ftc.gov/business-guidance/blog/2025/12/warning-letter-or-ten-businesses-comply-ftcs-consumer-review-rule)). 위반당 **$51,744 + 환불 명령**.

### 금지 행위 (드랍쉬핑 셀러 빈발)

| 행위 | 위반 |
|---|---|
| 가짜 리뷰 구매·생성·게시 | ✗ AI로 후기 100개 생성 → 즉시 위반 |
| 임직원·가족·친구 리뷰 (관계 미공시) | ✗ "내 동생도 좋다고 함" 게시 |
| 리뷰 게시 대가 인센티브 (조건부 할인 등) | ✗ "★5 후기 쓰면 다음 주문 10% 할인" |
| 부정 리뷰 억제 (NDA·법적 위협) | ✗ "나쁜 리뷰 지우면 100불 드림" |
| Review hijacking (다른 상품 후기 가져다 붙이기) | ✗ |
| AI로 영상 후기 생성 | ✗ 본인 명시 안 하면 위반 |
| 가짜 SNS 인디케이터 (좋아요·팔로워·인사이트) | ✗ |

### 안전한 리뷰 수집 SOP

1. **결제 후 14일** Klaviyo 자동 메일 → "솔직한 후기 부탁" 무조건 부탁만 (**인센티브 X**)
2. 후기 작성자가 자발적으로 ★1~3 줘도 **삭제 금지** (Loox·Yotpo 자동 게시 설정)
3. 영상 후기 인센티브 OK (**제품 무료 + 영상 후기**라는 조건은 명시 시 합법)
4. 영상 후기 첫 자막에 **"#sponsored" 또는 "Free product received"** 명시

### Loox / Yotpo / Stamped 안전 설정

| 설정 | 권장 |
|---|---|
| Auto-publish ★4-5만 → ★1-3 검수 후 게시 | ❌ 부정 리뷰 억제 위반 |
| **모든 후기 자동 게시** (관리자가 24h 이내 응답만) | ✅ |
| AI 후기 생성 기능 | ❌ 절대 X |
| "Verified Purchase" 배지 | ✅ 합법 (실제 구매자만) |
| 인센티브로 후기 유도 | ⚠️ 명시 시에만 OK ("free product for review" 1줄) |

> **본 강의 권장**: 첫 100건 후기는 [Appendix D §A-2 지인 시드](./Appendix_D_First_100_Customers.md)로 **정상 결제 + 솔직한 후기**만. AI 후기 생성·구매·삭제 absolute_X.

---

## 6.4. FTC Click-to-Cancel / ROSCA — 정기구독·박스 판매 셀러 주의

**현황 (2026.4 기준)**: FTC의 "Click-to-Cancel Rule"은 **2025년 7월 8th Cir.에 의해 무효** 판결. 단, FTC는 **ROSCA** (Restore Online Shoppers' Confidence Act) + **FTC Act §5** 기반 **개별 집행 강화 중** + 2026.3 ANPRM 재시동 ([Holland & Knight 2025.9](https://www.hklaw.com/en/insights/publications/2025/09/ftc-steps-up-subscription-enforcement-after-click-to-cancel-rule)).

### 정기구독·박스 셀러 의무 (지금 시행 중)

| 의무 | 내용 |
|---|---|
| 결제 전 명시적 동의 | 자동 결제·갱신 주기·금액·취소 방법을 결제 페이지 가시 영역에 표시 |
| **"쉬운 취소"** | 가입과 동일한 채널·동일한 클릭 수 이내로 취소 가능해야 함 |
| 취소 확인 메일 | 취소 즉시 확인 메일 자동 발송 |
| 갱신 사전 알림 | 연간 결제는 갱신 30일 전 알림 메일 |

### Shopify Subscription 앱별 컴플라이언스

| 앱 | 자동 처리 | 셀러 추가 작업 |
|---|---|---|
| Shopify Subscriptions (네이티브) | 가입·취소 동일 UI | 갱신 알림 메일 수동 |
| Recharge | 거의 자동 | DMARC 인증 (§Supplement 01 §1.5) |
| Bold Subscriptions | 부분 자동 | 갱신 알림 메일 수동 |

> **본 강의 권장**: 첫 12개월 = **단발 결제만** 운영 (정기구독 X). 월 매출 $5K+ + 위험관리 능력 확보 후 구독 진입.

---

## 6.5. California Prop 65 — 캘리포니아 화학물질 경고 라벨

### 무엇이고 왜 무서운가

캘리포니아 거주자에게 **암·생식독성·발달독성 유발 가능 화학물질**(900+ 종 리스트)에 노출 가능한 상품 판매 시 결제 전 **경고 표시 의무**. **위반 시 일당 $2,500 + 민사소송** ([P65Warnings.ca.gov](https://www.p65warnings.ca.gov/business-resources)).

드랍쉬핑 셀러가 모르고 부닥치는 이유: **알리·CJ 공급자가 안 알려줌**. 대부분 카테고리 해당:

| 카테고리 | Prop 65 트리거 화학물질 |
|---|---|
| 화장품·뷰티 | Lead, Talc, Phthalates |
| 전자제품·케이블 | DEHP, BBP (PVC 가소제), Lead solder |
| 플라스틱 (배터리·케이스) | BPA, BPS, Phthalates |
| 가죽·합성가죽 | Chromium, Formaldehyde |
| 보석·악세사리 | Lead, Cadmium, Nickel |
| 주방용품 (코팅) | PFOA, PFAS (Teflon 계열) |
| 핸드폰 케이스 | Phthalates |

> **추정**: 드랍쉬핑 베스트셀러 카테고리의 **70%+가 Prop 65 영향 받음**.

### 1인 셀러 결정 트리

```
캘리포니아 매출 비중이 전체의 5% 미만?
  └─ YES → ❶ Shopify에서 CA 배송 차단 (Markets → Shipping zones → Exclude CA)
            가장 단순, 매출 손실 ~5%
  └─ NO  → ❷ Prop 65 경고 라벨 추가 (앱 활용)
            매출 유지, 셋업 30분
```

### ❷ 경로 — Shopify 앱으로 자동 경고 표시 (30분)

| 앱 | 가격 | 기능 |
|---|---|---|
| **Prop 65 Warnings** (Shopify App) | $9.99/월 | CA 주소 입력 시 결제 페이지에 자동 경고 표시 |
| **Avalara CrossBorder** | $50+/월 | Prop 65 + 50개 주 컴플라이언스 통합 |

수동 경고 문구 (제품 상세페이지·체크아웃):

```
⚠️ WARNING: This product can expose you to chemicals
including [화학물질명], which is known to the State of
California to cause cancer [and birth defects or other
reproductive harm]. For more information go to
www.P65Warnings.ca.gov.
```

### 카테고리별 일반 경고 문구

CJ/AliExpress 공급자에게 SDS(Safety Data Sheet) 요청 → 받은 화학물질 리스트로 위 템플릿 채우기. 못 받으면 카테고리별 일반 경고 사용 (덜 정확하지만 위반은 면함).

### 본 강의 권장

**Phase 1~2 (월 매출 $3K 미만)**: ❶ CA 배송 차단 — 신경 쓸 거 줄임.
**Phase 3+ (월 매출 $3K+)**: ❷ Prop 65 앱 도입 — CA 매출 회수가 $9.99 앱비 회수.

> **체크리스트 추가**: §졸업 전 1회독 체크리스트에 "CA 정책 결정 (배송 차단 또는 Prop 65 앱)" 추가.

---

## 6.6. 화장품 카테고리 — FDA MoCRA + 주별 PFAS·금지 화학물질

화장품 드랍쉬핑은 **법적 진입 장벽이 가장 높은** 카테고리. 1인 셀러가 깊이 모르고 들어가면 즉시 통관 보류·리콜·벌금. 본 강의는 **첫 12개월은 화장품 카테고리 회피 권장**.

### 6.6-1. MoCRA (Modernization of Cosmetics Regulation Act)

2024-07-01 FDA 시행 ([FDA MoCRA](https://www.fda.gov/cosmetics/registration-listing-cosmetic-product-facilities-and-products), [Crowell 가이드](https://www.crowell.com/en/insights/client-alerts/fda-issues-final-guidance-on-facility-registration-and-product-listing-under-mocra)). 미국 시장에 화장품 판매하는 모든 셀러가 의무.

| 의무 | 마감 | 미준수 시 |
|---|---|---|
| **Facility Registration** (Cosmetic Direct Portal) | 출시 60일 전 | misbranded → 통관 보류 |
| **Cosmetic Product Listing** (성분 + 라벨 사진) | 출시 후 120일 + 매년 갱신 | 동일 |
| **US Agent 지정** (외국 제조사) | 등록 시 | 등록 자체 불가 |
| **Adverse Event Reporting** | 이벤트 후 15 영업일 | 민사·형사 노출 |
| **Biennial Renewal** | 매 2년 | 자동 무효화 |

**1인 KR 셀러 진입 경로**:
1. 직접 등록 — Cosmetic Direct Portal에서 본인 셀러를 "responsible person" 등록 + 제조사 등록 + 제품 등록. 영문 SDS·성분·라벨 필수
2. 위임 — Registrar Corp / Foster Cosmetics / FDAImports 같은 US Agent 위임 ($600~$2,000/년)

### 6.6-2. 주별 화학물질 금지 — Prop 65를 넘어선 추가 규제

#### Maine PFAS 전면 금지 (2026-01-01 발효)

[Maine DEP](https://www.maine.gov/dep/spills/topics/pfas/PFAS-products/)에 따라 **intentionally-added PFAS 함유 제품 판매 금지**:

| 카테고리 | 금지 시점 |
|---|---|
| 화장품 | **2026-01-01 (이미 발효)** |
| 의류·텍스타일 | 2026-01-01 |
| 쿠킹웨어 (Teflon 계열) | 2026-01-01 |
| 생리용품·청소용품 | 2026-01-01 |
| 유아용품 | 2026-01-01 |
| Intentionally-added PFAS 패키지 | 2030 |

#### California AB 2762 / AB 496 / AB 1817

| 법규 | 발효 | 금지 화학물질 수 |
|---|---|---|
| **AB 2762 (1차)** | 2025-01-01 | 13종 (Mercury, Formaldehyde, BPA 등) ([Marten Law](https://martenlaw.com/news/california_bans_pfas_in_apparel_textiles_cosmetics)) |
| **AB 496 (2차)** | 2027-01-01 | + 26종 추가 |
| **AB 1817 (의류 PFAS)** | 2025: 100ppm → **2027: 50ppm** | 의류 전반 |

#### Minnesota / Washington 동시 진행

- **Minnesota** 2025-01-01 — 쿠킹웨어·화장품·유아용품 PFAS 금지
- **Washington** 2025 — 화장품·생리용품 PFAS 금지 (Safer Products WA)

### 6.6-3. 본 강의 1인 셀러 결정 트리

```
화장품·의류·쿠킹웨어 카테고리?
  ├─ NO → 일반 진행 (전자제품·잡화 안전)
  └─ YES → Q1
            ├─ Q1. 첫 12개월차이고 매출 검증 미완료?
            │     YES → 🚫 카테고리 회피 — Kill Criteria 자동 탈락
            │     NO  → Q2
            └─ Q2. MoCRA + Maine·CA·MN·WA 컴플라이언스 셋업 ($1K+/년) 가능?
                  YES → Registrar Corp 위임 + 주별 PFAS-free 인증서 공급자에게 요청
                  NO  → 🚫 카테고리 회피
```

> **본 강의 권장**: 첫 12개월은 화장품·의류·쿠킹웨어 = **Kill Criteria 8번 자동 탈락 카테고리**. 매출 $5K+ 안정 후 단일 SKU로 검증 진입.

---

## 7. EU·UK 향 발송 시 부가세 (IOSS / UK VAT)

미국 외 EU·영국으로 직배송하는 순간 **수입 부가세 사전 징수 의무**가 발생합니다. 셀러가 사전 등록 안 하면 수취 고객이 통관 시점에 별도 청구되어 분쟁·반품 폭증.

### 7-1. EU IOSS (Import One-Stop Shop)

| 항목 | 내용 |
|---|---|
| 적용 한도 | **€150 이하** 소포 (B2C) |
| 의무 | 셀러가 결제 시점에 EU 부가세 (국가별 17~27%) 징수 + IOSS 번호로 통관 |
| 등록 방법 | EU 외 셀러는 **IOSS 중개자 (Intermediary)** 통해 등록 — Shopify Markets Pro / Eurora / Taxually 등 |
| 부가세 신고 | 월 1회 IOSS Portal에 일괄 신고 |
| 미등록 시 | 통관 시 고객 부담 (€150 초과는 어차피 정식 통관) |

### 7-2. UK VAT (Brexit 이후 별도 체계)

| 항목 | 내용 |
|---|---|
| 적용 한도 | **£135 이하** 소포 |
| 의무 | 셀러가 결제 시점에 UK VAT 20% 징수 + HMRC에 분기별 신고 |
| 등록 방법 | HMRC VAT Registration (해외 셀러는 NETP 트랙) |
| 신고 주기 | 분기별 |
| £135 초과 | 정식 통관 (수입자 = 고객) |

### 7-2-bis. EU DSA Article 30 — 거래자 지위 신고 (2025.2.17~)

EU 전 회원국에 적용되는 **Digital Services Act (DSA)** Article 30. 미신고 거래자는 EU 마켓플레이스(Apple/Google/Etsy 등)에서 **노출 차단**, Shopify D2C도 사이트에 "trader" 표시 의무 ([EU Commission DSA](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act)).

| 항목 | 내용 |
|---|---|
| 의무 표시 항목 | 거래자명·주소·이메일·전화·사업자등록번호·자가 인증 ("I am a trader" 선언) |
| Shopify 적용 | Settings → Policies → Trader Information 페이지 추가 |
| EU 매출 0이라도 EU 사용자 접근 가능하면 적용 | 별도 신고 절차 없음, 사이트 표시만 의무 |

> **본 강의 권장**: §7-1 IOSS 안 하고 EU 미배송 정책이라도 **사이트는 EU에서 보임** → DSA Trader 페이지는 게시. 5분 작업.

### 7-2-ter. GA4 + Google Consent Mode v2 (EEA·UK 트래픽 시)

2024년 3월부터 **EEA·UK 사용자에게 광고를 노출하려면 Google Consent Mode v2 필수** ([Google 공식](https://support.google.com/tagmanager/answer/13695607)). 미적용 시 Google Ads·Analytics 데이터 처리 자체 중단.

```
Shopify 권장 셋업:
1. CookieYes 또는 SimpleCookie (무료 플랜) 설치
2. GTM 또는 GA4 자동 통합
3. Consent Mode v2 신규 파라미터 (ad_user_data, ad_personalization) 자동 전달
4. EU 사용자 = 동의 전 cookieless 측정으로 운영 (전환 모델링)
```

> EU 매출 비중 5% 미만이면 §7-1 결정트리의 "EU 미배송"으로 우회 — Consent Mode 신경 쓸 필요 없음.

### 7-3. 1인 셀러 실용 결정 트리

```
EU·UK 매출 비중이 전체의 5% 이하?
  └─ YES → "EU·UK 미배송" 정책 (Shopify Markets에서 차단)
            반품 폭탄 회피, 운영 단순
  └─ NO  → Shopify Markets Pro 활성화 (수수료 ~$50/월 + 거래당)
            IOSS·UK VAT 자동 처리, 단 매출 안정 후 진입

처음부터 EU·UK를 노린다면 → Eurora / Taxually 같은 IOSS 중개자 직접 계약
```

> **본 강의 권장**: Phase 1~3은 **미국 단일 마켓 집중**. EU·UK는 매출 안정(월 $5K+) 후 검토. 한국 1인 셀러가 IOSS·UK VAT를 본인 명의로 처리하면 분기별 회계·신고 부담이 매출보다 큼.

---

## 8. 한국 셀러 — PG 정산·종합소득세·환차손 (회계 실무)

미국 향 매출은 USD로 들어와 한국 원화로 환전·정산·신고하는 과정에서 **세무·회계 처리가 까다로움**. 본 §8은 1인 셀러 기준 실무 가이드.

### 8-1. PG / 결제 처리사별 한국 정산 흐름

| 결제사 | 한국 셀러 직접 사용 | 정산 통화 | 정산 주기 | 한국 입금 경로 |
|---|---|---|---|---|
| **Shopify Payments** | △ (한국 사업자 직접 X — 미국 LLC 필요) | USD | 2~7일 | Wise / Payoneer 경유 |
| **Stripe** | ✗ (한국 비즈니스 미지원) | USD | 7일 | 미국 LLC + Wise |
| **PayPal Business** | ○ | USD | 즉시 | PayPal → 한국 원화 환전 (수수료 ~3.5%) |
| **Wise Business** | ○ | USD/multi | 보유 후 환전 | 한국 원화 계좌 직접 |
| **Payoneer** | ○ | USD | 즉시 | Payoneer → 원화 입금 |

> **추천 셋업** (한국 셀러, 미국 LLC 없음): Shopify Payments 대신 **PayPal Business + Shop Pay**. 매출 검증 후 Doola/Stripe Atlas로 미국 LLC → Stripe로 전환.

### 8-2. 매출 인식 시점 + 환율 적용

| 시점 | 적용 환율 | 회계 처리 |
|---|---|---|
| 주문 발생 | 결제일 매매기준율 | 매출 인식 (USD 기준) |
| PG 정산 입금 | 입금일 매매기준율 | 외환차익/차손 인식 |
| 원화 환전 | 환전일 우대환율 | 환전손익 |

**예시**: 4/1 $100 매출 (₩1,400/$ → ₩140,000 매출 인식) → 4/8 PayPal 정산 ($100, ₩1,420 → ₩142,000 입금) → 4/15 환전 (₩1,415/$ → ₩141,500 입금)
- 외환차익: ₩2,000 (4/1 → 4/8)
- 환전손실: ₩500 (4/8 → 4/15)
- 손익계산서엔 양쪽 모두 영업외손익으로 분리 표기

### 8-3. 종합소득세 신고 (5월) — 1인 셀러 기준

| 매출 규모 | 신고 유형 | 비고 |
|---|---|---|
| 연 7,500만 원 미만 | **단순경비율** (일반 소매업 약 75%) | 가장 단순 — 매출×25%가 소득 |
| 7,500만 ~ 1.5억 원 | **기준경비율** | 주요 경비(매입·임차료) 영수증 필수 |
| 1.5억 원 이상 | **간편장부 / 복식부기** | 세무사 위임 권장 |

**드랍쉬핑 특성**: 매입(소싱)이 매출의 50%+를 차지 → 단순경비율 적용 시 실제 소득보다 과세 → 손해. **매입 영수증을 모아 기준경비율 또는 간편장부로 신고하는 게 유리**.

### 8-4. 부가가치세 — 수출 영세율

해외 고객 매출은 **부가세 0% (영세율)** 적용:
- 매출세액: 0원
- 매입세액: 100% 환급 (광고비·도구 구독료·소싱·배송비 등의 부가세를 환급받음)
- **결과**: 분기별 부가세 신고 시 **매번 환급**받는 구조 (드랍쉬핑의 큰 메리트)

영세율 인정 증빙:
- Shopify 결제 내역 (해외 카드·PayPal)
- 배송 추적번호 (해외 도착 증명)
- 수출신고서 (한국에서 묶음 발송 시)

### 8-5. 한국 사업자 등록 시 업종 코드

- **소매업 — 통신판매업**: 525101 (전자상거래 소매업)
- **해외직구 대행업**: 525105 (구매대행 모델 — 본 강의 직판 모델과 다름, 헷갈리지 말 것)
- **수출 활동 추가**: 부가세 영세율 적용을 위해 사업자 등록 시 "수출 포함" 명시

### 8-5-bis. ⚠️ 미국 LLC를 보유한 KR 셀러 — IRS 의무 (Phase 5 진입 전 필독)

Doola/Stripe Atlas로 **미국 Single-Member LLC**를 만들면 KR 거주자라도 **매년 IRS에 다음 의무**:

| 의무 | 마감 | 미신고 페널티 | 적용 대상 |
|---|---|---|---|
| **Form 5472 + Pro-forma 1120** | 매년 4월 15일 | **$25,000/년** + 연 $10,000 누적 | 외국인 단독 소유 미국 LLC 전원 (소득 0원도 의무) |
| **FBAR (FinCEN 114)** | 매년 4월 15일 (10/15 자동연장) | 최소 $10,000 (고의면 $100K+) | LLC 명의 Wise/Mercury 잔액 한 번이라도 **$10K+ 초과** 시 |
| **Form W-8BEN-E** | LLC 설립 직후 1회 | 30% 자동 원천징수 | Stripe·PayPal·Amazon 페이아웃 시 미제출 = 30% 자동 차감 |
| **Form 1099-K** (받는 쪽) | 1월 31일 (Stripe → 셀러) | 직접 의무 X — 단 IRS 매칭 | $20K + 200건 초과 시 (2026 OBBB 기준 환원) |
| State Annual Report | 주별 (예: DE는 6월 1일) | $400~$800 + 회사 강제 해산 | LLC 설립 주에 매년 |

**왜 KR 거주자도 적용?** Single-Member LLC는 IRS 시점에서 **disregarded entity** — 세금은 소유주(KR 거주자)에게 흐르지만, **정보 신고 의무는 LLC 본체에 부과**. 그래서 소득 0원 LLC도 5472는 반드시.

**실무 셋업 권장**:
- **Doola·Stripe Atlas 패키지에 5472 신고 포함되어 있는지 확인** ($300~$500/년 추가)
- 또는 [James Baker CPA](https://jamesbakercpa.com) / Greenback Tax 같은 KR-Friendly EA 위임 ($400~$600/년)
- **셀프 신고 시도 X** — 양식이 영문·미국 회계 용어 다수, 첫해 실수가 최저 $25K 페널티

> ⚠️ **단정 금지**: 위 의무는 본 강의 일반 가이드. **본인 케이스(공동 소유, S-Corp 전환, US 거주 가족 등)에 따라 추가 의무**(Form 5471, GILTI 등) 발생 가능. **반드시 EA 또는 미국세무사 1회 상담 후 LLC 설립**.

> 💡 **무엇이 KR 거주자에게 적용 안 되나**: GILTI(Subpart F), PFIC, FATCA reporting on KR account → 모두 미국 시민·영주권자에게만 적용. KR 거주자 본인에 직접 의무 없음. (단, 미국 시민·영주권 가진 KR 거주자는 예외 — 별도 상담 필수.)

### 8-6. 추천 도구

| 단계 | 도구 | 비고 |
|---|---|---|
| 매출·환차손 자동 기록 | Wise Business + Google Sheets | API 연동 무료 |
| 부가세·종소세 신고 | 삼쩜삼 / 자비스 / 세무사 | 매출 7,500만 원 이상 = 세무사 |
| 영문 거래 증빙 보관 | Notion DB + Drive | 5년 보관 의무 |

---

## 📌 졸업 전 1회독 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | Shopify Refund Policy 페이지에 §2 템플릿 붙여넣었는가? |
| ☐ | Shopify Privacy Policy 페이지에 §4 템플릿 붙여넣었는가? |
| ☐ | 한국 통신판매업 신고 면제 조건을 본인에게 적용했는가? (§3) |
| ☐ | Stripe/PayPal Dispute 대응 SOP를 노션에 저장했는가? (§6) |
| ☐ | CA 정책을 결정했는가? (§6.5) — 배송 차단 또는 Prop 65 앱 |
| ☐ | EU·UK 발송 정책을 결정했는가? (§7) — 미배송 또는 IOSS 중개자 |
| ☐ | PG 정산 경로를 셋업했는가? (§8-1) — PayPal/Wise/미국 LLC 중 택1 |
| ☐ | 미국 LLC 소유 시 — Form 5472 + FBAR + W-8BEN-E 셋업했는가? (§8-5-bis) |
| ☐ | (KR 시장 매출 시) 국내대리인 지정 + PIPA 통지 했는가? (§5) |
| ☐ | 매출·환차손 자동 기록 시트를 만들었는가? (§8-6) |
| ☐ | 매입 영수증 보관 폴더를 만들었는가? (종소세 기준경비율용, §8-3) |
| ☐ | 부가세 영세율 신고 절차를 노션에 정리했는가? (§8-4) |
| ☐ | `[SUPPORT_EMAIL]`, `[PRIVACY_EMAIL]` 도메인 이메일을 만들었는가? |
| ☐ | 분쟁률 모니터링 알림을 설정했는가? (월 1회 Stripe 대시보드 확인) |
