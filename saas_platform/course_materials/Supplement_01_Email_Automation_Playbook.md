# 📧 Supplement 01: 이메일 자동화 플레이북

> **연계 주차**: Week 10 (Make.com 기본) → Week 13 (VIP 고도화) → 본 보충 강의 (이메일 시퀀스 설계)
> **소요 시간**: 2시간 (개념 30분 + Klaviyo 세팅 60분 + 시퀀스 4종 작성 30분)

---

## 1. Shopify Email vs Klaviyo 의사결정 매트릭스

| 항목 | Shopify Email (기본 내장) | Klaviyo (전문 도구) |
|---|---|---|
| **무료 한도** | 매월 10,000건 발송 | 250 contacts / 500 emails |
| **세그먼트 기능** | 매우 제한적 | 강력 (LTV·구매 횟수·태그 등) |
| **자동화 시나리오** | 5개 템플릿만 | 무제한 + If/Then 분기 |
| **A/B 테스트** | 없음 | 있음 (subject + body) |
| **유료 시작점** | $25/월 (10K건 초과 시) | $20/월 (500 contacts 초과) |
| **학습 곡선** | 1시간 | 4~6시간 |
| **권장 시점** | 월 매출 < $3K | **월 매출 ≥ $3K 또는 LTV 추적 필요** |

> **결론**: **첫 3개월은 Shopify Email**로 무료 운영, **월 매출 $3K 돌파 시 Klaviyo로 마이그레이션**.

---

## 1.4. KR 시장 retention — 카카오 알림톡 2026-01-01 강화 (옵션)

KR 시장 매출이 있다면 카카오 알림톡(브랜드 메시지)이 메일보다 응답률 ~5배. 단 **2026.1.1부터 발송 가능 기준 강화** ([Channel.io 공지](https://docs.channel.io/updates/ko/articles/%EA%B3%B5%EC%A7%80-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%95%8C%EB%A6%BC%ED%86%A1-%EB%B0%9C%EC%86%A1-%EA%B0%80%EB%8A%A5-%EA%B8%B0%EC%A4%80-%EB%B3%80%EA%B2%BD-%EC%95%88%EB%82%B42611-%EC%8B%9C%ED%96%89-f9f70118)).

| 메시지 유형 | 2025 | 2026.1.1~ |
|---|---|---|
| 주문·배송·CS 알림 | ✓ 자유 발송 | ✓ 자유 발송 |
| 쿠폰·마일리지·포인트 | ✓ | **❌ 사전 명시 동의 + 거래 직접 관련 시에만** |
| 신상품·프로모션 광고 | △ (광고 알림톡, 친구톡) | △ (별도 옵트인 후) |

**KR 시장 retention 셋업**:
- 주문·배송·CS는 알림톡으로 자동화 가능 (응답률 ↑)
- 쿠폰·할인 메시지는 영문 메일(Klaviyo) 또는 친구톡(별도 동의)
- 본 강의 미국 단일 마켓 모델은 영향 없음 — KR 시장 진출 시점에만 검토

> KR 시장 미진출이라면 본 §1.4 무시 OK. §1.5(이메일 인증)부터 다시 시작.

---

## 1.5. 발송자 인증 (SPF·DKIM·DMARC) — Gmail/Yahoo/Microsoft 의무 요건

### 왜 이 단계를 건너뛰면 매출이 0인가

2024년 2월 Google·Yahoo가 시행, **2025년 11월부터 Microsoft까지 합류** + **임시 지연 → 영구 거부로 격상**. 인증 미설정 시 Welcome Flow·Abandoned Cart 메일이 **인박스 진입 자체 실패** (스팸함 또는 거부 반송). 발송 5,000건/일 이상 도메인은 **반드시** 다음 4가지 충족:

1. **SPF** 레코드 (DNS TXT) — 발송 서버 IP 화이트리스트
2. **DKIM** 서명 (DNS TXT) — 메일 본문 위변조 검증
3. **DMARC** 정책 (`p=none` 최소, `p=quarantine` 권장)
4. **One-click List-Unsubscribe** 헤더 (RFC 8058) — Klaviyo 자동 처리
5. **스팸률 0.3% 이하** 유지 — Postmaster Tools에서 모니터링

### Klaviyo "Branded Sending Domain" 셋업 (1회, 30분)

```
1. Klaviyo Dashboard → Account → Settings → Domains
2. [Set up branded sending domain] 클릭
3. 본인 도메인 입력 (예: brand.com → send.brand.com)
4. Klaviyo가 6개 DNS 레코드 표시:
   - 1× CNAME (Branded Domain)
   - 2× CNAME (DKIM 키 1·2)
   - 1× TXT (SPF — 기존 SPF가 있으면 병합)
   - 1× TXT (DMARC: v=DMARC1; p=none; rua=mailto:dmarc@brand.com)
   - 1× CNAME (Bounce 처리 도메인)
5. Cloudflare/Gabia/Cafe24 등 도메인 관리 페이지에서 6개 레코드 추가
6. Klaviyo로 돌아와 [Verify] → 24시간 내 인증 통과
7. [Use branded sending domain] 토글 ON → 모든 발송이 send.brand.com 경유
```

### Shopify Email 사용 시

Shopify Email은 자동으로 SPF·DKIM 처리되지만 **발신 주소가 `@store.shopify.com`** → 신뢰도 낮음. 졸업 전에 [Sender Authentication](https://help.shopify.com/en/manual/promoting-marketing/email-marketing/getting-started-with-email-marketing#sender-authentication) 활성화로 본인 도메인 발송 권장.

### 4-주차 모니터링 시그널

| 신호 | 정상 | 위험 |
|---|:--:|:--:|
| Klaviyo Open Rate | 25%+ (Apple MPP 영향 포함) | <15% → 인증 의심 |
| Bounce Rate | <2% | >5% → 즉시 발송 중지 |
| Spam Complaint | <0.1% | >0.3% → 도메인 신뢰도 추락, Recovery 1개월+ |
| Postmaster Tools | "Domain Reputation: High" | "Medium/Low" → DMARC 강화 |

### 흔한 실수 (한국 셀러)

| 실수 | 결과 |
|---|---|
| 가비아·카페24 DNS UI에서 Klaviyo CNAME 그대로 복붙 (`v=DMARC1...`) | TXT를 CNAME으로 잘못 등록 → 인증 실패 |
| 기존 SPF (`v=spf1 include:_spf.google.com ~all`) 무시하고 Klaviyo SPF 단독 등록 | Gmail 발송 깨짐 |
| DMARC `p=reject` 즉시 적용 | Welcome Flow 첫 발송에 자기 메일도 차단 |

> **권장 단계**: `p=none` 1주 → `p=quarantine` 1주 → `p=reject` 영구 (DMARC 점진 강화).

---

## 2. 5통 환영 시퀀스 (Welcome Flow) 설계

신규 구독자에게 10일 동안 자동 발송되는 5통의 이메일입니다. **`02_Master_Prompts.md` §11 프롬프트**로 한 번에 생성합니다.

### 시퀀스 타임라인

| # | 발송 시점 | 목적 | 핵심 CTA |
|:--:|:--:|---|---|
| 1 | Sign-up 즉시 | 환영 + 10% 할인 코드 | Shop with code |
| 2 | Day 2 | 브랜드 스토리 | About us |
| 3 | Day 4 | 베스트셀러 + 리뷰 3개 | Shop best-seller |
| 4 | Day 7 | 교육 콘텐츠 (Problem/Solution) | Read more |
| 5 | Day 10 | 긴급성 — 코드 만료 임박 | Use code now |

### Email 1 예시 (즉시 발송)
```
Subject: Welcome to [BRAND] — your 10% code inside
Preview: One-time only. Code expires in 10 days.

Hey [FIRST_NAME],

Welcome to the [BRAND] family.

Quick promise: we won't spam you. We'll only email when we have
something genuinely useful — a new product, a real tip, or a story
behind what we do.

For showing up, here's a 10% off code: WELCOME10

[Shop the collection →]

— [FOUNDER_NAME], Founder
```

> **나머지 4통**: Master Prompts §11 프롬프트를 1회 실행하면 Email 1~5가 한 번에 출력됩니다. 본인 브랜드 정보만 치환해서 그대로 Klaviyo Flow에 붙여넣으세요.

---

## 3. 장바구니 이탈 (Abandoned Cart) 3단계 시퀀스

장바구니에 담고 결제하지 않은 고객을 다시 데려오는 자동화. **이커머스 매출의 평균 10~15% 회수**.

### 시퀀스 구조

| # | 발송 시점 | 톤 | 인센티브 |
|:--:|:--:|---|---|
| 1 | 이탈 후 1시간 | 친절 reminder | 없음 (배송비 무료 어필만) |
| 2 | 이탈 후 24시간 | 약간 push | 5% 할인 코드 |
| 3 | 이탈 후 72시간 | 마지막 기회 | 10% 할인 코드 + 24시간 만료 |

### Email 2 예시 (24시간 후)
```
Subject: Did your cart get lost?
Preview: Here's 5% to bring it home.

Hey [FIRST_NAME],

We saved your [PRODUCT_NAME] just in case.

If shipping cost was the holdup, here's a code that takes another
5% off: SAVED5

It expires in 48 hours, so grab it before someone else does
(stock is moving fast on this one).

[Complete your order →]
```

### Klaviyo 세팅 5단계
```
1. Klaviyo Dashboard → Flows → Create Flow → "Abandoned Cart"
2. Trigger: Started Checkout (Klaviyo가 Shopify에서 자동 감지)
3. Filter: Placed Order zero times since "Started Checkout"
        (이미 결제한 고객 제외)
4. Step 1: Wait 1 hour → Send Email 1
   Step 2: Wait 23 hours → Send Email 2
   Step 3: Wait 48 hours → Send Email 3
5. Activate Flow → 모니터링 (첫 주는 3통 모두 본인 메일로 테스트)
```

---

## 4. Win-back 캠페인 (60일 미구매 고객)

지난 60일간 구매가 없는 기존 고객에게 보내는 재활성화 이메일.

### 시퀀스 구조 (3통)

| # | 발송 시점 | 메시지 핵심 |
|:--:|:--:|---|
| 1 | 마지막 구매 후 60일 | "We miss you" + 신상품 소개 |
| 2 | + 7일 (1번 미오픈자) | 15% 할인 코드 |
| 3 | + 14일 (2번도 미오픈자) | "You'll be unsubscribed" 경고 + 마지막 20% 할인 |

> **결론**: 3통 모두 미오픈하면 Klaviyo가 자동으로 비활성 세그먼트로 이동 → 발송 비용 절약.

---

## 5. 세그먼트 정의 (필수 4개)

Klaviyo의 진짜 가치는 **세그먼트별 다른 메시지**입니다. 다음 4개 세그먼트를 시작점으로 만드세요.

| 세그먼트 | 정의 | 마케팅 전략 |
|---|---|---|
| **VIP** | LTV ≥ $200 OR 구매 횟수 ≥ 3 | 신상품 사전 공개, VIP 전용 30% 코드 |
| **Casual** | 1~2회 구매, LTV < $200 | 정기 프로모션, 신상품 소개 |
| **At-Risk** | 마지막 구매 60~120일 경과 | Win-back 시퀀스 트리거 |
| **Cold** | 구독 후 90일간 0회 구매 | 교육 콘텐츠 → 첫 구매 유도 |

### Klaviyo 세그먼트 만들기
```
Lists & Segments → Create Segment → "VIP"
Definition:
   - Properties about someone:
     "Total Order Value (Lifetime)" is at least 200
   - OR
     "Number of Orders (Lifetime)" is at least 3
Save → 세그먼트 자동 갱신 (실시간)
```

---

## 6. Klaviyo 무료 250 컨택트 한도 운영법

무료 한도를 최대한 활용하는 3가지 전략:

1. **Cold 세그먼트 자동 정리**: 90일간 0구매 + 0오픈 → Suppress (발송 불가 처리). 컨택트 수에서 제외됨.
2. **Pop-up 전략**: 사이트 첫 방문 시 즉시 이메일 받지 말고, **5초 체류 후** 또는 **20% 스크롤 후** 팝업. 의도가 있는 방문자만 수집.
3. **다중 도메인 분리**: 무료 250개 한도가 부족하면 서브 브랜드별로 별도 Klaviyo 계정 운영 (각각 250개씩).

> **마이그레이션 트리거**: 컨택트가 220개를 넘으면 1주일 내에 유료 플랜($20/월)로 업그레이드. Suppress된 컨택트는 무료 플랜에서 자동 청소되지 않으므로 수동 정리 필요.

---

## 📌 졸업 전 1회독 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | Shopify Email로 환영 시퀀스 1통이라도 발송 테스트했는가? |
| ☐ | Master Prompts §11로 5통 환영 시퀀스 본문을 생성했는가? |
| ☐ | Abandoned Cart Flow를 활성화했는가? |
| ☐ | VIP / Casual / At-Risk / Cold 세그먼트 4개를 정의했는가? |
| ☐ | 월 매출 $3K 돌파 시 Klaviyo 마이그레이션 알림을 노션에 설정했는가? |
