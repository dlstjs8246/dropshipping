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

---

## 📌 졸업 전 1회독 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | Shopify Refund Policy 페이지에 §2 템플릿 붙여넣었는가? |
| ☐ | Shopify Privacy Policy 페이지에 §4 템플릿 붙여넣었는가? |
| ☐ | 한국 통신판매업 신고 면제 조건을 본인에게 적용했는가? (§3) |
| ☐ | Stripe/PayPal Dispute 대응 SOP를 노션에 저장했는가? (§6) |
| ☐ | `[SUPPORT_EMAIL]`, `[PRIVACY_EMAIL]` 도메인 이메일을 만들었는가? |
| ☐ | 분쟁률 모니터링 알림을 설정했는가? (월 1회 Stripe 대시보드 확인) |
