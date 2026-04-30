# 📚 부록 C: 배송 옵션 분석 (DDP / DDU + 캐리어 비교)

> **목적**: 미국향 발송 시 관세 처리 방식(DDP/DDU)과 캐리어 선택이 고객 만족도와 분쟁률에 미치는 영향을 정리합니다.
> **연계 주차**: Week 3 (Landed Cost) — 마진 계산 직후 1회독 권장

---

## 1. DDP vs DDU — 정의와 고객 경험 차이

### DDP (Delivered Duty Paid)
- **셀러가 관세·세금을 미리 지불**한 후 발송
- 고객은 추가 비용 없이 받음 → **분쟁률 ↓ 70%**
- 셀러 부담: 관세를 판매가에 미리 포함 (마진 압박)

### DDU (Delivered Duty Unpaid)
- **고객이 통관 시 관세를 직접 지불**
- 고객 입장: "주문할 때 못 봤던 추가 비용" 발생 → **PayPal Dispute 60% 증가**
- 셀러 부담: 관세 비용 0 (마진 ↑) — 단, CS 부담 폭증

### 결정 트리
```
배송 가격 < $200?
  └─ YES → DDP 강력 권장 (관세 < $25, 분쟁 비용 더 큼)
  └─ NO  → DDP 권장 (단, 마진 30% 이상 확보 시에만)

관세 35%+ 적용 카테고리 (전자제품·철강 함유 등)?
  └─ YES → 무조건 DDP (DDU 시 분쟁 100% 보장)
  └─ NO  → DDU 가능 (단, 체크아웃 페이지에 명시 필수)
```

> **결론**: 2026년 미국 향 드랍쉬핑은 **DDP가 사실상 유일한 안전한 선택**입니다.

> 📌 **USPS 명칭 주의**: 2023.7부터 First-Class Package + Parcel Select Lightweight가 통합되어 **"Ground Advantage"** 단일 옵션이 됨. 2~5일 배송, $4.10~ (5oz 기준). Shopify Shipping·Pirate Ship 모두 이 명칭으로 표기. 강의자료 일부 "USPS First-Class" 잔재는 동일 서비스를 가리킴.

---

## 2. 캐리어 비교표 (CJ Dropshipping 기준)

| 캐리어 | 평균 도착일 | 추적 | 가격 (500g 기준) | DDP 지원 | 분쟁률 |
|---|:--:|---|:--:|:--:|:--:|
| **CJ Packet (USPS Ground Advantage)** | 12~18일 | 부분 추적 | $4.80 | ✓ | 보통 |
| **Yanwen Special Line** | 10~15일 | 전구간 추적 | $5.50 | ✓ | 낮음 |
| **USPS Ground Advantage (직발송)** | 8~14일 | 전구간 추적 | $8.30 | ✓ | 낮음 |
| **DHL eCommerce** | 6~10일 | 전구간 추적 | $10.20 | ✓ | 매우 낮음 |
| **DHL Express** | 3~5일 | 실시간 추적 | $26.00 | ✓ | 거의 없음 |
| **FedEx International** | 4~6일 | 실시간 추적 | $24.00 | ✓ | 거의 없음 |

> 📌 **2026 GRI 반영**: FedEx/UPS는 2026.1.6부터 GRI 5.9%(헤드라인) 적용, 단 fuel·peak·oversize 등 부가서비스 포함 시 **실효 인상 8~12%** ([Supply Chain Dive](https://www.supplychaindive.com/news/fedex-2026-gri-shipping-rate-increase/760011/)). USPS Ground Advantage도 2026.1.19 평균 5.4% 인상. 위 표는 보수적 평균치 — **분기별로 본인 카드사·CJ·Pirate Ship 견적 재산정 필수**. 마진 계산식(Week 3)에 ±10% 변동 가정하고 운영.

### 가격대별 권장 조합

| 판매가 | 권장 캐리어 | 사유 |
|:--:|---|---|
| $25~40 | **CJ Packet** | 마진 보호 우선, 도착 지연 허용 |
| $40~80 | **Yanwen Special Line** | 가성비 + 추적성 균형 |
| $80~150 | **DHL eCommerce** | 신뢰도 ↑, 분쟁률 ↓ |
| $150+ | **DHL Express** | 프리미엄 경험, VIP 만족도 |

---

## 3. 관세 적층 시대 (2026~) — DDP 권장 이유

### 시나리오 비교 (자세 교정기 $40 판매가)

| 항목 | DDU | DDP |
|---|---|---|
| 표시 가격 | $40.00 | $40.00 |
| 셀러 마진 | $20.00 | $10.00 (관세 포함) |
| 고객 경험 | 통관 시 +$15 청구서 도착 | 추가 비용 없음 |
| 분쟁률 | 12% | 0.5% |
| Stripe Dispute 손실 ($15/건) | -$1.80/주문 | -$0.075/주문 |
| **실질 수익** | **$18.20** | **$9.93** |

> **반전**: DDU가 마진은 높아 보이지만, 분쟁 비용을 빼면 DDP와 비슷하거나 더 적습니다.

---

## 3.5. 위험물 — 리튬배터리 (UN 3480/3481) 회피 체크리스트

### 2026.1.1 시행 SoC 30% 제한

[IATA 2026 Lithium Battery Guidance](https://www.iata.org/contentassets/05e6d8742b0047259bf3a700bc9d42b9/lithium-battery-guidance-document.pdf)에 따라 **2026.1.1부터 항공 운송 리튬배터리는 충전 상태(SoC) 30% 이하** 제약. CJ/AliExpress가 자동으로 막아주지 않아 셀러가 직접 회피 필수.

### 영향받는 SKU 카테고리

| 카테고리 | 내장 리튬배터리 | UN 분류 |
|---|---|---|
| 이어폰·헤드폰 | ✓ 거의 전부 | UN3481 |
| 보조배터리 (Power Bank) | ✓ | UN3480 |
| LED 무드등·랜턴 | ✓ 충전형 | UN3481 |
| 뷰티 디바이스 (마사지건·미용기기) | ✓ | UN3481 |
| 무선 가전 (선풍기·청소기) | ✓ | UN3481 |
| 전자담배 / 베이프 | ✓ | UN3480 (TikTok Shop 금지 카테고리) |

### 캐리어별 리튬배터리 처리 (2026.1.1~)

| 캐리어 | UN3481 (장비 내장) | UN3480 (단독) |
|---|:--:|:--:|
| **CJ Packet (USPS)** | ✗ 거부 | ✗ 거부 |
| **Yanwen Special Line** | △ 일부 라우트만 | ✗ |
| **USPS (직발송)** | ✗ | ✗ |
| **DHL eCommerce** | ✓ | ✓ (제한적) |
| **DHL Express** | ✓ (DG 라이센스 필요) | ✓ |
| **FedEx International Priority** | ✓ | ✓ |

> **결론**: 리튬배터리 함유 SKU = **DHL eCom/Express 또는 FedEx만 가능** → 배송비 2~3배. CJ Packet 의존 셀러는 **이 카테고리를 Kill Criteria 단계에서 자동 회피** 권장.

### 결정 트리

```
상품에 충전식 배터리 또는 보조배터리 포함?
  └─ NO  → 일반 라우트 OK
  └─ YES → 본 강의 권장: DROP (Kill Criteria 8번째 항목 추가)
            예외: 마진 50%+ + DHL eCom 운영 가능 시에만
```

> **위험 신호**: CJ에서 "ePacket Battery" 옵션 표시 시 IATA 2026 미준수 가능. 공급자에게 SDS + UN 분류 서면 확인 후에만 진행.

---

## 4. 분실 / 지연 보험 옵션

### 무료 옵션
- **CJ Dropshipping 기본 보험**: 분실 시 송장 가격까지 환급 (판매가 X). 신청 후 30일 내 처리.

### 유료 옵션
| 서비스 | 비용 | 보장 범위 |
|---|---|---|
| **Route App** (Shopify Plugin) | 주문가의 1~2% (고객 부담) | 분실 / 도난 / 파손 100% |
| **ShipBob Insurance** | 주문가의 1.5% | 분실 + 도난 |
| **Shopify Shipping Insurance** | 주문가의 0.5~1% | 분실만 (US 내 한정) |

> **권장**: 평균 주문가 $50 이상이면 Route App 도입. 고객이 보험료 자발적 추가 가능.

---

## 5. 캐리어 전환 결정 트리 (월 주문 50건 기준)

```
월 주문량 < 50건?
  └─ YES → CJ Packet 또는 Yanwen 고정 (협상력 부족)
  └─ NO  → ↓

주요 분쟁 사유는?
  ├─ "Not received" 다수 → 추적성 좋은 캐리어로 (Yanwen → DHL eCommerce)
  ├─ "Took too long" 다수 → 빠른 캐리어로 (DHL eCommerce → DHL Express, 단 마진 재계산)
  └─ "Customs charge" 다수 → DDU → DDP 전환 (즉시)

월 주문 > 200건?
  └─ CJ에 직접 협상 — 캐리어별 단가 5~10% 인하 가능
```

---

## 📌 캐리어 선택 1회독 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | 본인 상품군에 DDP/DDU 중 적합한 모드를 결정했는가? |
| ☐ | 판매가에 따라 §2 매트릭스의 권장 캐리어를 적용했는가? |
| ☐ | 체크아웃 페이지에 예상 배송 기간(영업일 기준)을 명시했는가? |
| ☐ | 분실/지연 클레임 SOP를 노션에 저장했는가? |
| ☐ | 월 주문 50건 돌파 시 캐리어 협상 알림을 설정했는가? |
