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

## ❓ 자주 묻는 질문 (FAQ)

**Q: 이 모든 데이터를 엑셀로 일일이 합쳐서 계산하려니 너무 힘든데요?**
> 정확합니다. 쇼피파이 매출 따로, 틱톡 광고비 따로, CJ 소싱원가 따로 — 이 3개 사이트를 매일 돌아다니며 엑셀로 합치는 게 셀러들에게 가장 고통스러운 작업입니다. 14주차에 이 작업을 자동화한 '통합 대시보드' SaaS를 공개합니다.

**Q: 4주 데이터가 너무 적은 거 아닌가요?**
> 4주는 최소 단위입니다. 더 많을수록 좋습니다. 단, 2주 미만 데이터로는 결단을 내리지 마세요 — 우연에 의한 노이즈일 가능성이 큽니다.

---

## 📝 12주차 과제 안내
1. 오늘 AI가 분석해 준 내 스토어의 병목 구간과 그 해결책(액션 플랜)을 노션에 정리하세요.
2. 이번 달 최종 결산 마진율(%)을 계산해서 올려주세요. 적자가 났어도 아주 훌륭한 데이터이니 당당하게 올리세요!
