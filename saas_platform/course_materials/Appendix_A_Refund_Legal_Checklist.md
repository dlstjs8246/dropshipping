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
- **수출 활동 추가**: 부가세 영세율 적용을 위해 사업자 등록 시 "수출 포함" 명시

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
| ☐ | EU·UK 발송 정책을 결정했는가? (§7) — 미배송 또는 IOSS 중개자 |
| ☐ | PG 정산 경로를 셋업했는가? (§8-1) — PayPal/Wise/미국 LLC 중 택1 |
| ☐ | 매출·환차손 자동 기록 시트를 만들었는가? (§8-6) |
| ☐ | 매입 영수증 보관 폴더를 만들었는가? (종소세 기준경비율용, §8-3) |
| ☐ | 부가세 영세율 신고 절차를 노션에 정리했는가? (§8-4) |
| ☐ | `[SUPPORT_EMAIL]`, `[PRIVACY_EMAIL]` 도메인 이메일을 만들었는가? |
| ☐ | 분쟁률 모니터링 알림을 설정했는가? (월 1회 Stripe 대시보드 확인) |
