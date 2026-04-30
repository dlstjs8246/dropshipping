# 🚨 Appendix F: 흔한 실수 10선 (Common Mistakes Hall of Shame)

> **목적**: 14주 동안 매 기수마다 반복되는 **"피할 수 있었던 실수 TOP 10"**을 한 곳에 모았습니다. 매주 일요일 [Supplement 11 자가 진단](./Supplement_11_Self_Assessment_and_Progress_Tracker.md) 작성 직전에 본 문서를 1회 훑어 자기 검열하세요.
>
> **사용법**: 각 항목에 ❌/✅ 자가 체크. ❌가 3개 이상이면 그 주는 "신규 학습 정지 + 복구 우선" 모드.

---

## 1. 본인이 좋아하는 상품을 판다 — Kill Criteria 무시

❌ **증상**: 첫 주말 AliExpress 둘러보다가 "예쁘다", "필요하다" 싶은 상품을 결정 → Kill Criteria 통과율 못 따짐.

✅ **올바른 흐름**: 감정 배제 → [Master Prompts §1 Kill Criteria 7대 검증 프롬프트](./02_Master_Prompts.md) → 4개 이상 통과 + [스코어카드 23점 이상](./03_Scorecard_Template.csv) 만 진입.

**왜 치명적인가**: 무거운 유리잔 시작 → 30% 파손 → 환불 폭증 → 분쟁률 1.5% 초과 → Stripe 계정 정지. 90일 안에 비즈니스 종료.

📚 [Week 2](./Week02_Prompt_Engineering_Kill_Criteria.md) · [Week 3](./Week03_Landed_Cost_Scorecard.md)

---

## 2. Landed Cost 누락 — 마진 환상

❌ **증상**: 소싱가 $8 + 판매가 $30 = "마진 73%!" 라고 노션에 적음. 통관 + 관세 + 국제배송비 + 결제수수료 + 광고비 미반영.

✅ **올바른 공식 (2026 Q2 기준 — IEEPA 무효 후 4-Layer)**:
```
실제 마진 = 판매가 − (소싱가 + 국제배송비 + 관세 50% (보수적) + 결제수수료3% + 광고비/주문 + Returnless 충당 5%)
```
30% 이상이어야 광고비·환불·재투자 흡수 가능. **카테고리별 관세 차이가 큼** — 본인 HTS 코드는 [Master Prompts §18](./02_Master_Prompts.md) + USITC.gov 검증 필수.

**왜 치명적인가**: $8 상품 → 진짜 Landed Cost ~$16 (50% 가정) → 판매가 $30이면 마진 47%. 단, 카테고리가 철강 함유면 +50% 추가로 적자 전환.

📚 [Week 3](./Week03_Landed_Cost_Scorecard.md) · [Master Prompts §18](./02_Master_Prompts.md)

---

## 3. HTS 코드 AI 단독 의존

❌ **증상**: ChatGPT에 "넥밴드 HTS 코드 알려줘" 한 줄 → AI가 "9021.10" 자신 있게 답변 → 그대로 통관 → **잘못된 분류로 통관 거부 + 벌금 + 6주 지연**.

✅ **올바른 흐름**: AI 후보 3개 → Perplexity 출처 검증 → USITC.gov 직접 확인 → 의심 시 통관사 문의.

**왜 치명적인가**: HTS는 LLM이 **가장 자주 환각**하는 영역 (3,000+ 코드 + 매년 갱신). 단독 의존 = 통관 도박.

📚 [Week 3 §HTS](./Week03_Landed_Cost_Scorecard.md) · [Supplement 08 §교차검증](./Supplement_08_L1_Generative_AI_Foundations.md)

---

## 4. Bogus Gateway 테스트 없이 오픈

❌ **증상**: Day 0 = 스토어 오픈일. 홍보 트래픽이 들어오는데 결제 실패 — 환불·재시도 안내가 안 보임 → 이탈률 100%.

✅ **올바른 흐름**: Shopify Admin → Settings → Payments → Bogus Gateway 활성화 → 결제 1회 통과 → **반품/환불 1회 테스트** → 진짜 결제로 1회 더 → 본인 카드로 본인 결제 테스트 통과해야 오픈.

**왜 치명적인가**: 첫 매출 1건 = §A-2 지인 시드의 **유일한** 신뢰 시그널. 결제 실패하면 0% 리뷰 페이지에서 영원히 빠져나오지 못함.

📚 [Week 6](./Week06_Cursor_Coding_Optimization.md) · [Appendix D Sprint Day 3](./Appendix_D_First_100_Customers.md)

---

## 5. 후기 0% 상태로 광고 태우기

❌ **증상**: 오픈 직후 "트래픽이 부족해서 안 팔리는 거야" → Meta·TikTok 광고 $50/일 → CPC만 폭증 + CVR 0.3%.

✅ **올바른 흐름**: **신뢰 시그널 4개**(About + 정책 + 후기 3건 + 결제 정상) **확보 후** 광고 진입. Stage A 14일은 광고 0원.

**왜 치명적인가**: 빈 후기 페이지는 광고 클릭 후 이탈을 90%까지 만듭니다. 광고비는 "트래픽" 사는 게 아니라 "신뢰 시그널 위에 트래픽 부어주는 것".

📚 [Appendix D §A](./Appendix_D_First_100_Customers.md) · [Week 9](./Week09_SparkAds_and_Organic.md)

---

## 6. 메가 인플루언서만 노림 — 마이크로 무시

❌ **증상**: 100만 팔로워 인플루언서에게 DM 100통 → 답장 0. "아무도 답을 안 해주네" → 제휴 마케팅 포기.

✅ **올바른 흐름**: **팔로워 1만~5만 마이크로 인플루언서**에 집중. 응답률 5% (100통 → 5답장 → 1~2명 진짜 영상 → 매출 폭발 1번).

**왜 치명적인가**: 메가는 1건당 $500~5,000 협찬비 + DM 안 봄. 마이크로는 무료 샘플($15)로 협업.

📚 [Week 8](./Week08_TikTok_Affiliate_Outreach.md) · [Master Prompts §6·§7](./02_Master_Prompts.md)

---

## 7. Spark Ads 검증 영상 없이 진입

❌ **증상**: 직접 만든 영상 5개 → 조회수 평균 200회 → 그 영상으로 Spark Ads $20/일 → 1주일 만에 광고비 $140 소진, 매출 0.

✅ **올바른 흐름**: **자연 조회수 1만+ 터진 영상이 있을 때만** Spark Ads 진입. 검증 안 된 영상에 광고비 = 빈 풍선에 바람 넣기.

**왜 치명적인가**: TikTok 알고리즘은 **이미 터진 영상**을 더 밀어줌. 안 터진 영상은 광고비를 부어도 알고리즘 신호가 약함.

📚 [Week 9](./Week09_SparkAds_and_Organic.md) · [Appendix D Stage C-1](./Appendix_D_First_100_Customers.md)

---

## 8. Make.com 시나리오 30+ 모듈 비대화

❌ **증상**: CS 자동화 시나리오 1개에 모듈 47개. 디버깅 시 어디서 깨졌는지 추적 불가. 매월 Operations 한도 초과 ($30+ 결제).

✅ **올바른 흐름**: 모듈 15개 넘으면 **분리 신호**. 동일 LLM 호출이 3+ 모듈에서 반복 = [Claude Agent SDK 마이그레이션 시점](./Supplement_10_L3_AI_Agent_Building.md) (§4-7 참조).

**왜 치명적인가**: 모듈 30개 = 연결점 90개 = 디버깅 시간 폭증. 자동화한답시고 운영 시간이 더 늘어나면 본말전도.

📚 [Supplement 10 §3·§4-7](./Supplement_10_L3_AI_Agent_Building.md) · [Week 10](./Week10_Auto_Fulfillment_CS.md)

---

## 9. RAG 매뉴얼 없이 CS 봇 자동 답변 ON

❌ **증상**: Claude Projects에 정책 1장만 업로드 → CS 봇이 환불·배송·재고 모두 환각 답변 → 분쟁률 1% 돌파.

✅ **올바른 흐름**: **Knowledge Files 4개 필수** — Refund_Policy.md / Shipping_Policy.md / Product_FAQ.md / Banned_Words.md. 봇은 **초안만** 생성, 인간 승인 후 발송 (휴먼-인-루프).

**왜 치명적인가**: AI 단독 답변 = "8주 안에 도착합니다" 환각 → 고객 클레임 → 분쟁 → 결제처 정지.

📚 [Week 11](./Week11_RAG_Price_Monitoring.md) · [Supplement 10 §5](./Supplement_10_L3_AI_Agent_Building.md)

---

## 10. 분쟁률 모니터링 안 함

❌ **증상**: Stripe 대시보드 한 달째 안 봄 → 갑자기 이메일 "Your account has been suspended" 도착 → 매출 정지 + 7일 이내 잔액 환수.

✅ **올바른 흐름**: **주 1회 (월요일 09:00)** Stripe Dashboard → Disputes 확인. 분쟁 1건도 24시간 내 Evidence 제출. 분쟁률 0.5% 넘으면 즉시 상품 페이지·배송 기간 표시 재검토.

**왜 치명적인가**: Stripe 정지 = 모든 매출 USD가 동결됨. 7일 이내 잔액을 다른 계좌로 옮기려면 추가 인증 수십 단계.

📚 [Appendix A §6](./Appendix_A_Refund_Legal_Checklist.md)

---

## 📊 자가 검열 시트 (매주 일요일 사용)

| # | 실수 | 이번 주 ❌/✅ |
|:--:|---|:--:|
| 1 | 감정으로 상품 선택 (Kill Criteria 미적용) | ☐ |
| 2 | Landed Cost 누락 마진 계산 | ☐ |
| 3 | HTS AI 단독 의존 | ☐ |
| 4 | 결제 테스트 없이 오픈 | ☐ |
| 5 | 후기 0% 상태로 광고 | ☐ |
| 6 | 메가 인플루언서만 추적 | ☐ |
| 7 | 검증 안 된 영상으로 Spark Ads | ☐ |
| 8 | Make.com 시나리오 비대화 | ☐ |
| 9 | RAG 매뉴얼 없이 봇 자동화 | ☐ |
| 10 | 분쟁률 모니터링 누락 | ☐ |

> **3개 이상 ❌이면**: 그 주는 신규 학습 정지. 해당 항목의 📚 링크로 가서 복구 우선.
