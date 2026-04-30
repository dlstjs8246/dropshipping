# 🎓 Week 12: 데이터 기반 스케일업 & 피벗(Pivot)

## 🎯 이번 주 학습 목표
1. 내 스토어의 병목 구간(고객이 어디서 도망가는가?)을 데이터를 통해 진단한다.
2. 이익(Net Profit)이 잘 나는 위닝 상품에 광고 예산을 스케일업(Scale-up)하는 기준을 세운다.
3. 마진이 나오지 않는 상품을 미련 없이 버리고 새 상품으로 피벗(Pivot)하는 용기를 배운다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 11주차 과제(CS 매뉴얼 및 봇 세팅) 리뷰
* **0:10 - 0:40 (30분)**: [이론] 이커머스 퍼널(Funnel) 분석과 손익분기점(BEP)
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] 스토어 퍼널 데이터 추출 및 AI 진단, 액션 플랜 수립
* **2:10 - 2:30 (20분)**: Q&A 및 12주차 과제 안내

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 트래픽은 돈이 아니다 (퍼널의 이해)

틱톡 영상이 대박 나서 하루에 스토어 방문자가 1만 명이 찍혔습니다. 성공한 걸까요? **장바구니에 담은 사람이 10명, 결제한 사람이 0명이면 그건 실패한 겁니다.** 우리는 물건을 파는 거지 트래픽을 파는 게 아니니까요.

**이커머스 퍼널 3단계**:
1. **노출 대비 클릭(CTR)**: 낮다면 영상 훅(Hook)이 구린 겁니다.
2. **방문 대비 장바구니 담기(ATC)**: 낮다면 상세페이지 카피가 구리거나, 모바일 구매 버튼이 안 보이는 겁니다.
3. **장바구니 대비 결제 완료(CVR)**: 낮다면 배송비가 막판에 비싸게 뜨거나, 신뢰도가 떨어지는 겁니다.

### 2. 스케일업(Scale-up)과 피벗(Pivot)의 결단

마진이 30%를 넘고 결제 전환율이 2%를 넘는 **위닝 상품을 잡았다면?** 하루 광고비를 20달러에서 50, 100달러로 공격적으로 올려야 합니다. 반대로, 광고비를 제품 판매가만큼 썼는데 전환이 안 나온다면? **애착을 버리고 가차 없이 상품을 'Kill'**하고 1주차로 돌아가야 합니다.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. 쇼피파이 데이터 추출 + Google Sheets 분석 템플릿 구축 (40분)

#### Step 1-A. 4시트 구조 (필수 자료)

구글 스프레드시트를 열고 아래 **4개 시트**를 만듭니다. 컬럼명은 그대로 복사해 사용하세요.

| 시트명 | 컬럼 | 출처 |
|---|---|---|
| `Raw_Shopify` | Date / Sessions / Add_to_Cart / Reached_Checkout / Orders / Revenue / AOV | Shopify Admin → Analytics → Reports → CSV Export |
| `Raw_TikTokAds` | Date / Campaign / Spend / Impressions / Clicks / CTR / Conversions / ROAS | TikTok Ads Manager → Reporting → CSV Export |
| `Raw_Sourcing` | SKU / Sourcing_USD / Shipping_USD / Tariff_USD / Landed_Cost_USD | 수동 입력 (CJ 단가 캡처) |
| `Dashboard` | 자동 집계만 — 수식으로 채움 | KPI 카드 6개 + Funnel 차트 + ROAS 트렌드 |

#### Step 1-B. 핵심 KPI 자동 계산 수식 6종

`Dashboard` 시트에 그대로 붙여넣으세요 (시트 참조명만 본인 환경에 맞게).

```
1. 클릭률 (CTR %)
   = Raw_TikTokAds!Clicks / Raw_TikTokAds!Impressions * 100

2. 장바구니 담기율 (ATC %)
   = Raw_Shopify!Add_to_Cart / Raw_Shopify!Sessions * 100

3. 결제 완료율 (CVR %)
   = Raw_Shopify!Orders / Raw_Shopify!Sessions * 100

4. ROAS
   = Raw_Shopify!Revenue / Raw_TikTokAds!Spend

5. Net Profit
   = Raw_Shopify!Revenue
     - SUMPRODUCT(Raw_Sourcing!Landed_Cost_USD, Raw_Shopify!Orders)
     - Raw_TikTokAds!Spend
     - (Raw_Shopify!Revenue * 0.029 + Raw_Shopify!Orders * 0.30)

6. Break-even ROAS
   = 1 / (1 - (Raw_Sourcing!Landed_Cost_USD / Raw_Shopify!AOV))
```

#### Step 1-C. Claude에 4주 데이터 분석 요청

[02_Master_Prompts.md §9 Claude 4주 데이터 분석 풀 프롬프트](./02_Master_Prompts.md)를 엽니다. `Dashboard` 시트의 KPI 4주치를 그대로 입력하면, 다음 5가지를 받습니다:

1. **One-line diagnosis** (병목 1개 + 업계 벤치마크 비교)
2. **Quantified gap** (놓친 매출 $X/주 정량화)
3. **Top 3 actions** (ROI 순위 + 예상 리프트 + 노력도 + 7일 측정법)
4. **KEEP / SCALE / KILL** 결단
5. **STOP doing immediately** 1가지

> 💡 **Phase 4 진입 시 (월 매출 $5K+)**: 위 단순 ROAS 분석을 넘어 [Master Prompts §35 (Cohort LTV 자동 분석)](./02_Master_Prompts.md)으로 **월별 코호트 30/60/90/180일 LTV + 채널별 LTV/CAC + 6개월 예측** 자동. 코호트 12개월 누적 후 본격 활용 권장.
>
> 💡 **AOV +30~50% 자동 발굴**: 100건+ 주문 누적 후 [Master Prompts §41 (Cross-sell / Basket Affinity)](./02_Master_Prompts.md)으로 "A 산 사람의 70%는 B도 살 수 있다" 자동 발굴 + Bundle 가격·시퀀스 자동 결정. 1개 페어 1개월 시도 → AOV +5%+ 확인 후 Top 5 적용.

### Step 2. 병목 진단 의사결정 트리 (40분)

`Dashboard` KPI를 보고 아래 트리를 따라 1개 액션을 선택합니다.

```
가장 낮은 KPI는?
  │
  ├─ CTR < 1.5% (업계 평균 1.8%)
  │   → 🎯 영상 훅(Hook) 문제. Week 7 5종 프롬프트로 새 광고 이미지 5장 생성
  │
  ├─ ATC < 5% (업계 평균 7~10%)
  │   → 🎯 상세페이지 카피·신뢰도 문제. PAS 카피(§2) 재작성 + 리뷰 위젯 추가
  │
  ├─ CVR < 1.5% (업계 평균 2~3%)
  │   → 🎯 결제 단계 문제. 배송비 미리 표시 + 신뢰 배지 + Apple Pay/Shop Pay 활성
  │
  └─ Net Profit Margin < 15%
      → 🎯 단가 문제. CJ 협상 또는 판매가 +$5 (A/B 테스트)
```

### Step 3. 스케일업 vs 피벗 결단 매트릭스 (10분)

마진율 × ROAS 2x2 매트릭스로 상품의 운명을 결정합니다.

```
                 ROAS ≥ 1.5            ROAS < 1.5
              ┌─────────────────┬─────────────────┐
   마진 ≥ 30% │ 🚀 SCALE         │ 🔧 OPTIMIZE      │
              │ 일예산 2x로 인상 │ 광고 소재 교체   │
              │                  │ (1주 후 재평가)  │
              ├─────────────────┼─────────────────┤
   마진 < 30% │ 🪪 SQUEEZE       │ 💀 KILL          │
              │ 판매가 +$5       │ 즉시 중단        │
              │ 또는 단가 협상   │ 1주차로 복귀     │
              └─────────────────┴─────────────────┘
```

> **결단 규칙 (W12 핵심)**: `Net Profit Margin < 15% AND ROAS < 1.5`가 **2주 연속**이면 무조건 KILL. 애착은 사업의 적입니다.

---

## 🎯 [심화] 사업 모델 5가지 — 본인 자본·시간·스킬에 맞는 path 선택 (2026 갱신)

> ⚠️ **2026 시점 변경**: 이전 강의는 "Day 0 = Low-Ticket Pure Dropship 표준 → Phase 4 Niche → Phase 5 High-Ticket" 단일 진화 경로 가정. **De Minimis 폐지 + 4-Layer 관세** 환경에서 학생 본인 자본·시간·스킬에 따라 **처음부터 다른 path 선택이 더 합리적**.

### 5 가지 가능 path (각 학생이 자기 상황에 맞게 1개 선택)

| Path | 자본 | 시간 commit (launch) | 진입 난이도 | 적합 학생 |
|---|:--:|:--:|:--:|---|
| **A. Low-Ticket Pure Dropship** (강의 default) | $50~$200 | 15-25h/주 | 낮음 | 자본 적음, 시간 많음, 학습용 |
| **B. Mid-Ticket Niche** ($50-150) — **2026 권장 default** | $300~$1K | 15-25h/주 | 중간 | 자본 약간, 강의 표준 모델 |
| **C. High-Ticket First** ($150-300) | $1K~$3K | 10-15h/주 | 중간-높음 | 자본 중간, 마케팅 경험 |
| **D. Print-on-Demand** (Printify·Gelato) | $50~$200 | 10-15h/주 | 낮음 | 디자인 스킬, 관세 회피 우선 |
| **E. TikTok Shop + Shopify Hybrid** | $100~$500 | 15-25h/주 | 중간 | TikTok 영상 강한 학생 |

### 각 path별 마진·BEP·timeline 비교

| Path | 객단가 | 실현 마진 | BEP 매출 | 첫 흑자 |
|---|:--:|:--:|:--:|:--:|
| A. Low-Ticket | $25-50 | 5-10% | $1,500/월 | 6-12개월 |
| **B. Mid-Ticket Niche** | $50-150 | **12-18%** | **$1,000/월** | **3-6개월** |
| C. High-Ticket First | $150-300 | 20-30% | $800/월 (5-10 sales) | 2-4개월 |
| D. Print-on-Demand | $25-60 | 15-25% | $1,200/월 | 4-8개월 |
| E. TikTok Shop Hybrid | $30-80 | 10-15% | $1,500/월 | 3-6개월 (organic 강할 시) |

### Path별 진입 결정 트리 (본인 상황 입력)

```
Q1. 본인 자본 (광고 학습비용 포함):
  < $300  → A 또는 D
  $300~$1K → B (강의 표준)
  $1K~$3K → B 또는 C
  $3K+    → C 권장

Q2. 본인 디자인·창작 스킬:
  강함 → D (Print-on-Demand)도 적합
  보통 → A·B·C·E
  
Q3. 본인 TikTok 영상 제작 능력:
  강함 (월 30+ 영상 가능) → E (TikTok Shop Hybrid)도 적합
  보통 → A·B·C·D
  
Q4. 본인 시간 commit (launch phase):
  10h/주 미만 → C 또는 D만 가능
  15-25h/주 → 모두 가능
```

### 본 강의 권장 (2026 갱신)

**Day 0 default = B. Mid-Ticket Niche** ($50-150 + US warehouse 우선). 이전 "Low-Ticket Pure Dropship"은 De Minimis 폐지 후 마진 erosion 너무 심함. 강의의 14주 워크플로우(Week 1~14)는 **B path 기준** 작성 — A·C·D·E는 응용.

#### Path별 강의 자료 활용 가이드

| Path | 강의 워크플로우 | 갱신 필요 영역 |
|---|---|---|
| **A** | 그대로 사용 (단 마진 5-10% 가정) | Week 3 마진 표 본인 카테고리로 재계산 |
| **B (default)** | 그대로 사용 | 없음 — 강의 표준 |
| **C High-Ticket** | Week 5 카피 더 길게 (Comparison·Buying Guide), Week 9 Google Ads + SEO 추가 | Phase 5로 미루지 말고 처음부터 |
| **D Print-on-Demand** | Week 5 디자인 워크플로우 추가 (Canva·Midjourney → Printify) | Week 4·5 sourcing 우회 |
| **E TikTok Shop Hybrid** | Week 8·9에 TikTok Shop 셋업 추가 (KR 학생 한국 시장만 가능) | Week 7 영상 매주 30+ |

### High-Ticket First (Path C) — 자본 있는 학생용

자본 $1K-3K 있으면 처음부터 high-ticket 권장. 이유:
- 객단가 높아 광고비 흡수 여유 (4:1 ROAS 가능)
- CS 빈도 낮음 (고객 적음, 객단가 높음)
- 마진 20-30% 안정 → 광고 학습기 견딜 수 있음
- 단점: 학습 곡선 가파름, 경쟁사 높은 수준

**적합 카테고리**: 가구·홈데코, 운동기구, 취미용품 (드론·악기·아트), 펫 액세서리 프리미엄, 사무 가전.

### Print-on-Demand (Path D) — 관세 회피 옵션

Printify·Gelato·Printful 등은 **미국 fulfillment + 디자인 only** 모델. 학생이 디자인 1개만 만들면 자동 인쇄·발송. 관세·재고 0.

**적합 카테고리**: 의류 (Tee·Hoodie), 머그컵·텀블러, 포스터·아트 프린트, 폰 케이스, 토트백.
**단점**: 마진 15-25% (Printify base + 디자인 마크업), Tier 1 카테고리 경쟁 매우 심함, 디자인 차별화가 곧 사업 차별화.

### TikTok Shop Hybrid (Path E) — 영상 잘 만드는 학생

KR 학생: 2025-08~ TikTok Shop KR 정식 운영. KR 사업자만으로 KR 도메스틱 셀링.
US 학생: 미국 LLC + PBR 필수.

획득은 TikTok Shop (organic + Affiliate Center), 재구매는 Shopify로 owning. 인앱 결제 → CVR 2-3배.

---

## 🎯 [Phase 4~5] 사업 모델 진화 (B Path → Niche/High 전환)

본 강의 14주는 **2026 갱신 default = B Path Mid-Ticket** ($50-150)을 표준으로 가르침. 매출 $5K+ 안정 후 **사업 모델 자체를 진화**시킬 수 있음. 2026 시점 1인 셀러용 진화 경로.

### 모델 비교

| 차원 | **Low-Ticket** ($15~50) | **Niche Brand** ($30~120) | **High-Ticket** ($150+) |
|---|---|---|---|
| **순마진** | 5~15% | 15~35% | 20~45% |
| **객단가 ($)** | $25~50 | $50~120 | $150~$1,500 |
| **본 강의 진입 시점** | Day 0 (표준 모델) | Phase 4 (월 $5K+) | Phase 5 (월 $20K+) |
| **사업 모델** | Pure dropship (CJ 직발송) | 3PL hybrid (현지 창고) | 3PL hybrid + 컨설팅 판매 |
| **고객 결정 시간** | 30초 충동 | 1~3일 비교 | 1~2주 검토 |
| **광고 채널** | TikTok organic + Spark | Meta + TikTok 병행 | Google Ads + 콘텐츠 SEO |
| **CS 빈도** | 높음 (고객 다수, 객단가 낮음) | 중간 | 낮음 (고객 적음, 객단가 높음) |
| **재구매율** | 20~30% | 35~50% | 5~15% (단발 고가) |
| **광고비 흡수** | 마진 낮아 어려움 | 안정 | 높은 마진으로 여유 |
| **법적 컴플라이언스** | 카테고리 회피 (Kill #8) | 일부 적용 | **본인 LLC IOR 필수** |

### 모델별 진화 경로

```
Day 0 (강의 표준): Low-Ticket Pure Dropship
                 │
                 ▼
                 매출 검증 (월 $5K+)
                 │
                 ├─ 같은 카테고리 심화 → Niche Brand
                 │   • 본인 영문 도메인 + 브랜딩 강화
                 │   • 3PL 일부 도입 (베스트셀러 SKU만)
                 │   • Klaviyo Win-back + 재구매 시퀀스
                 │   • 마진 15~35% 확보
                 │
                 └─ 카테고리 전환 → High-Ticket
                     • 본 강의 카테고리 외 (가구·홈·전자·B2B 액세서리 등)
                     • 본인 LLC IOR + 3PL 필수
                     • Google Ads + SEO 콘텐츠 클러스터
                     • 마진 20~45% 안정
                     • 단점: 학습 곡선 + 재고 자본 필요
```

### 마진 tier별 광고비 흡수 한계

| 모델 | BEP_ROAS | 권장 광고비/매출 | 광고 1건 손익분기 |
|---|:--:|:--:|:--:|
| Low-Ticket (마진 10%) | **10×** | <8% (사실상 organic 의존) | 매우 빡빡 |
| Niche Brand (마진 25%) | 4× | 15~20% | 안정 |
| High-Ticket (마진 35%) | 2.85× | 25~35% | 여유 |

> **핵심 진실**: Low-Ticket이 어려운 진짜 이유 = **광고비 흡수가 거의 불가능**. 마진 10%로 광고를 켜면 ROAS 10× 달성해야 본전. 그래서 본 강의가 **Day 0~Phase 3은 무조건 organic 영상 우선**으로 가르침. Phase 4 진입 = Niche Brand 전환 권장.

### Phase 5 진입 조건 (High-Ticket으로 가도 되는가)

다음 5개 모두 충족 시:
- [ ] 월 매출 $20K+ 12개월 안정
- [ ] 본인 LLC + Form 5472·FBAR·W-8BEN-E 셋업 ([Appendix A §8-5-bis](./Appendix_A_Refund_Legal_Checklist.md))
- [ ] 3PL 운영 경험 ([Appendix C §6](./Appendix_C_Shipping_Carriers_DDP_DDU.md))
- [ ] 이메일 리스트 5K+ (Klaviyo)
- [ ] 본인 도메인 권위 (Google PA 30+)

> 💡 **Master Prompts 활용**: [§31 Niche Pivot 3-Way](./02_Master_Prompts.md)으로 본인 데이터 기반 "Low-Ticket 유지 vs Niche 진화 vs High-Ticket 전환" AI 진단. 단발 결단이 아니라 분기마다 재평가 권장.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 이 모든 데이터를 엑셀로 일일이 합쳐서 계산하려니 너무 힘든데요?**
> 정확합니다. 쇼피파이 매출 따로, 틱톡 광고비 따로, CJ 소싱원가 따로 — 이 3개 사이트를 매일 돌아다니며 엑셀로 합치는 게 셀러들에게 가장 고통스러운 작업입니다. 14주차에 이 작업을 자동화한 '통합 대시보드' SaaS를 공개합니다.

**Q: 4주 데이터가 너무 적은 거 아닌가요?**
> 4주는 최소 단위입니다. 더 많을수록 좋습니다. 단, 2주 미만 데이터로는 결단을 내리지 마세요 — 우연에 의한 노이즈일 가능성이 큽니다.

---

## 📝 12주차 과제 안내
1. 오늘 AI가 분석해 준 내 스토어의 병목 구간과 그 해결책(액션 플랜)을 노션에 정리하세요.
2. 이번 달 최종 결산 마진율(%)을 계산해서 올려주세요. 적자가 났어도 아주 훌륭한 데이터이니 당당하게 올리세요!
