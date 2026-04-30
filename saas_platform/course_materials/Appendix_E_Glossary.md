# 📖 Appendix E: 용어집 (Glossary)

> **목적**: 14주 + AI Mastery Track + 운영 부록에 등장하는 90+ 용어를 한 페이지에서 즉시 참조. 한국 학습자가 매주 헤매는 영문 비즈니스/기술 용어 통합.
>
> **사용법**: 매 주차 학습 시 옆 탭에 띄워두기. 모르는 용어 등장 → Ctrl+F (Cmd+F) 검색 → 5초 안에 정의 + 본 강의 등장 위치 + 사용 예시 확인.
>
> **기준**: 본 강의에서 **3회 이상** 등장하거나 **결정에 영향을 주는** 용어만 수록.

---

## 🤖 AI / Tech (22개)

### 핵심 개념

**LLM** (Large Language Model)
대규모 언어 모델. ChatGPT/Claude/Gemini의 본체. 본질은 "다음 단어 확률 예측" 기계.
- 등장: [Supplement 08 §2](./Supplement_08_L1_Generative_AI_Foundations.md)
- 예: "LLM은 검색하지 않고 생성한다"

**Token**
LLM이 처리하는 최소 단위. 영어는 1 단어 ≈ 1.3 토큰, 한국어는 1 글자 ≈ 1.5~2 토큰.
- 등장: [S08 §2.1](./Supplement_08_L1_Generative_AI_Foundations.md), [S10 §3.4](./Supplement_10_L3_AI_Agent_Building.md)
- 예: "max_tokens 400 = 약 300 영어 단어"

**Hallucination** (할루시네이션·환각)
LLM이 사실이 아닌 답을 그럴듯하게 합성하는 현상. 검증 없이 사용 시 사고 발생.
- 등장: [S08 §3](./Supplement_08_L1_Generative_AI_Foundations.md), W1, W3
- 예: "FDA 승인 번호 K194573" (실제 미존재)

**Prompt** (프롬프트)
LLM에 입력하는 텍스트 명령. 5요소(Role·Task·Constraints·Format·Guard)가 핵심.
- 등장: W2, [Master Prompts](./02_Master_Prompts.md)

**System Prompt** (시스템 프롬프트)
대화 전체에 적용되는 영구 지침. Custom GPTs / Claude Projects의 핵심.
- 등장: [S09 §3.2](./Supplement_09_L2_AI_Assistant_Building.md), [S10 §3.4](./Supplement_10_L3_AI_Agent_Building.md)

**Temperature**
LLM 출력의 무작위성. 0 = 항상 같은 답, 1+ = 더 창의적이지만 헛소리 위험 ↑.
- 등장: [S08 §2.2](./Supplement_08_L1_Generative_AI_Foundations.md)

### 프롬프트 패턴

**CoT** (Chain-of-Thought)
"단계별로 생각해줘" — 추론 과정을 출력시켜 정확도 30% 향상.
- 등장: [Supplement 04 §1](./Supplement_04_Advanced_Prompt_Engineering.md)

**Few-shot**
원하는 출력 형식의 예시 3~5개를 주고 "같은 패턴으로 답해줘" — 일관성 핵심.
- 등장: [S04 §2](./Supplement_04_Advanced_Prompt_Engineering.md), [S09 §5](./Supplement_09_L2_AI_Assistant_Building.md)

**Self-Critique**
"방금 답을 자기 비판해서 다시 써줘" — 출력 품질 +15~30%.
- 등장: [S04 §3](./Supplement_04_Advanced_Prompt_Engineering.md), [Master Prompts §15](./02_Master_Prompts.md)

**ToT** (Tree of Thought)
여러 가지 해결책을 동시 탐색 후 최선 1개 선택. 복잡 문제용.
- 등장: [S04 §4](./Supplement_04_Advanced_Prompt_Engineering.md)

### Agent / RAG / 시스템

**RAG** (Retrieval-Augmented Generation)
LLM에 본인 문서를 쥐어주어 그 문서 기반으로만 답하게 만드는 방식. CS 봇의 핵심.
- 등장: W11, [S07](./Supplement_07_AI_Agent_Builder_Comparison.md), [S09 §9](./Supplement_09_L2_AI_Assistant_Building.md)

**Agent**
트리거 + 의사결정 룰 + 행동 + 로깅. Assistant와 달리 자율 작동. → §AI Agent.
- 등장: [S10 §1](./Supplement_10_L3_AI_Agent_Building.md), W13

**Assistant**
사용자 발화에 응답하는 AI. Agent 전 단계.
- 등장: [S09](./Supplement_09_L2_AI_Assistant_Building.md), [S10 §1.1](./Supplement_10_L3_AI_Agent_Building.md)

**MCP** (Model Context Protocol)
Claude의 외부 도구 연결 표준 (Anthropic 2024). Custom GPT의 Action에 해당.
- 등장: [S09 §4](./Supplement_09_L2_AI_Assistant_Building.md)

**Custom GPTs**
ChatGPT Plus 사용자가 만드는 본인 비서. GPT Store 공개 가능.
- 등장: [S07](./Supplement_07_AI_Agent_Builder_Comparison.md), [S09 §3](./Supplement_09_L2_AI_Assistant_Building.md)

**Claude Projects**
Claude Pro 사용자의 프로젝트 워크스페이스. 200K 컨텍스트 + 파일 무제한.
- 등장: [S07](./Supplement_07_AI_Agent_Builder_Comparison.md), [S09 §4](./Supplement_09_L2_AI_Assistant_Building.md), W11

**Computer Use**
Anthropic API. AI가 본인 PC 화면 전체 제어. 1인 셀러는 권하지 않음.
- 등장: [S10 §4.2 / §7.3](./Supplement_10_L3_AI_Agent_Building.md)

**Browser Use** (OSS)
오픈소스 브라우저 자동화 Agent. Playwright + Claude/GPT 백엔드. 본 강의 추천.
- 등장: [S10 §4.3](./Supplement_10_L3_AI_Agent_Building.md)

**Prompt Caching**
시스템 프롬프트를 캐시해 다음 호출에서 90% 비용 절감. Anthropic API 기능.
- 등장: [S10 §8.2](./Supplement_10_L3_AI_Agent_Building.md)

**Webhook**
이벤트 발생 시 자동으로 다른 시스템에 알림 보내는 HTTP POST. Make.com의 트리거.
- 등장: W10, [S10 §3](./Supplement_10_L3_AI_Agent_Building.md)

**Cron**
정해진 시각에 반복 실행하는 스케줄러. 매일 09:00 같은 정기 작업용.
- 등장: [S10 §4.4](./Supplement_10_L3_AI_Agent_Building.md)

**API** (Application Programming Interface)
프로그램 간 통신 규격. Shopify API, Claude API 등.
- 등장: 14주 곳곳

---

## 📊 Marketing / Ads (18개)

**ROAS** (Return on Ad Spend)
광고비 1달러로 발생한 매출. ROAS 2.0 = $1 광고로 $2 매출.
- 등장: W9, [Appendix D](./Appendix_D_First_100_Customers.md)
- 예: "Spark Ads 진입 = ROAS 1.5+, 스케일 = 2.0+"

**CVR** (Conversion Rate)
방문자 중 결제 비율. CVR 2% = 100명 중 2명 구매. 1.5% 미만은 신뢰 시그널 점검.
- 등장: W6, W12, [Appendix D Stage B](./Appendix_D_First_100_Customers.md)

**CPM** (Cost Per Mille)
1,000회 노출당 광고비. TikTok 미국 시장 평균 $5~$15.
- 등장: W9

**CTR** (Click-Through Rate)
노출 대비 클릭 비율. 1.5%+ = 양호, 0.5% 미만 = 영상 또는 카피 약점.
- 등장: W7, W9

**CPA** (Cost Per Acquisition)
1명 고객 획득에 든 광고비. BEP CPA = 손익분기 CPA.
- 등장: W9, [Supplement 02](./Supplement_02_Ad_Budget_Calculator.csv)

**BEP** (Break-Even Point)
손익분기점. 매출 = 비용. BEP CPA 초과 시 광고 KILL.
- 등장: [W9 BEP CPA 매트릭스](./Week09_SparkAds_and_Organic.md)

**LTV** (Lifetime Value)
1명 고객의 평생 가치 (재구매 합계). LTV/CAC 비율이 비즈니스 건강도.
- 등장: [Supplement 01](./Supplement_01_Email_Automation_Playbook.md), W12

**CAC** (Customer Acquisition Cost)
신규 고객 획득 비용. CAC < LTV/3 = 건강한 비즈니스.
- 등장: W12

**AOV** (Average Order Value)
평균 주문 금액. 업셀·번들로 AOV 올리기 = 마진 올리기와 동일.
- 등장: W12

**PAS** (Problem-Agitation-Solution)
카피 3단 구조. 문제 → 더 아프게 → 해결책. 본 강의 카피 표준.
- 등장: W5, [Master Prompts §2](./02_Master_Prompts.md), [S09 §7](./Supplement_09_L2_AI_Assistant_Building.md)

**AIDA** (Attention-Interest-Desire-Action)
전통적 광고 4단 구조. 본 강의는 PAS가 더 효율적이라고 봄.
- 등장: 참고 (PAS와 비교)

**Hook**
영상 첫 0~3초. 시선을 멈추게 하는 트리거. 미달 시 95% 이탈.
- 등장: W7

**UGC** (User-Generated Content)
사용자 제작 콘텐츠. 진짜 후기 영상 = 광고보다 5x 효과.
- 등장: W7, W8, [Appendix D Stage B](./Appendix_D_First_100_Customers.md)

**Spark Ads**
TikTok에서 크리에이터 본인 영상을 그대로 광고화. 본 강의 광고 1순위.
- 등장: W9

**Pixel** (TikTok Pixel / Meta Pixel)
사이트에 박는 추적 코드. 광고 알고리즘 학습용.
- 등장: W9

**Ad Code** (Spark Ad Code)
크리에이터가 발급하는 코드. 본인 영상을 광고로 사용 허락.
- 등장: W9, [Master Prompts §8](./02_Master_Prompts.md)

**Affiliate** (제휴 마케팅)
크리에이터에게 커미션을 주고 본인 상품 판매 유도. 무료 트래픽의 핵심.
- 등장: W8

**Win-back**
60일+ 미구매 고객을 다시 데려오는 이메일 시퀀스.
- 등장: [Supplement 01](./Supplement_01_Email_Automation_Playbook.md)

---

## ⚖️ Legal / Compliance (10개)

**FTC** (Federal Trade Commission)
미국 연방거래위원회. 환불·광고 표현 규제. 30일 환불 의무 기준.
- 등장: [Appendix A](./Appendix_A_Refund_Legal_Checklist.md)

**FDA** (Food and Drug Administration)
미국 식품의약품안전청. 의료기기·식품 인증. Class I/II/III 분류.
- 등장: [Appendix A](./Appendix_A_Refund_Legal_Checklist.md), [S08 §3.1](./Supplement_08_L1_Generative_AI_Foundations.md) (할루시네이션 예시)

**GDPR** (General Data Protection Regulation)
EU 개인정보 보호 규정. 위반 시 매출 4% 과태료.
- 등장: [Appendix A §4](./Appendix_A_Refund_Legal_Checklist.md), [S09 §11](./Supplement_09_L2_AI_Assistant_Building.md)

**CCPA** (California Consumer Privacy Act)
캘리포니아 개인정보보호법. 미국 GDPR.
- 등장: [Appendix A §4](./Appendix_A_Refund_Legal_Checklist.md)

**PIPA** (개인정보보호법)
한국 개인정보보호법. 위반 시 5천만원 과태료.
- 등장: [Appendix A §5](./Appendix_A_Refund_Legal_Checklist.md), [S09 §11](./Supplement_09_L2_AI_Assistant_Building.md)

**Stripe Dispute** / **Chargeback**
고객이 카드사에 환불 요청 → Stripe가 판정. 분쟁률 0.75% 초과 시 계정 정지.
- 등장: [Appendix A §6](./Appendix_A_Refund_Legal_Checklist.md), [S10 §7.1](./Supplement_10_L3_AI_Agent_Building.md)

**De Minimis**
미국 관세 면제 한도 ($800/일/수입자). 2025년 폐지 — 모든 소포가 정식 통관 + 관세 부과 대상.
- 등장: W3

**IEEPA 무효 판결** (Learning Resources v. Trump, 2026.2.20)
대법원 6-3으로 IEEPA 기반 관세 권한 무효화. 중국발 평균 실효 관세율 약 2/3 감소. 대체로 Section 122(10% 글로벌) + Section 301 + Section 232 4-Layer 적층 구조가 표준. 본 강의는 보수적으로 "소싱가의 50%"를 관세로 가정.
- 등장: W3 §2-2

**HTS** (Harmonized Tariff Schedule)
미국 관세 분류 코드. 상품마다 다른 관세율 적용.
- 등장: W3, [Master Prompts §18](./02_Master_Prompts.md)

**통신판매업 신고**
한국 셀러 의무. 면제 조건: ① 직전 6개월 거래 50건 미만 + 거래액 천만원 미만, ② 간이과세자.
- 등장: [Appendix A §5](./Appendix_A_Refund_Legal_Checklist.md)

**부가가치세 (VAT)**
한국 10% 부가세. 일반과세자만 환급 가능.
- 등장: W3

---

## 📦 Logistics / Trade (8개)

**DDP** (Delivered Duty Paid)
관세 셀러 부담. 분쟁률 0.5%. 미국 D2C 표준.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**DDU** (Delivered Duty Unpaid)
관세 고객 부담. 분쟁률 12%. 본 강의 권장 X.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**CIF** (Cost, Insurance, Freight)
화물 가격 + 보험 + 운송비 포함 가격.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**FOB** (Free On Board)
출발지 항구 인도 가격. CIF에서 운송비 제외.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**Landed Cost**
실제 원가. 소싱가 + 배송비 + 관세 + 결제 수수료. **마진 계산의 진짜 기준**.
- 등장: W3, [Master Prompts §1](./02_Master_Prompts.md)

**EORI** (Economic Operators Registration)
EU 수출입 사업자 등록 번호. 영국 진출 시 필요.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**CJ Packet / Yanwen / DHL eCommerce**
드랍쉬핑 캐리어. 배송일·분쟁률 다름. 본 강의 1순위 = CJ Packet.
- 등장: [Appendix C](./Appendix_C_Shipping_Carriers_DDP_DDU.md)

**Track123 / 17track**
배송 추적 통합 위젯. CS 문의 50% 감소.
- 등장: W6, [Appendix D](./Appendix_D_First_100_Customers.md)

---

## 🛒 E-commerce (10개)

**Dropshipping**
재고 없이 주문 발생 시 공급사가 직접 고객에 발송하는 방식. 본 강의 모델.
- 등장: 14주 전체

**SKU** (Stock Keeping Unit)
재고 관리 단위. 색·사이즈마다 다른 SKU.
- 등장: W5

**MOQ** (Minimum Order Quantity)
공급사 최소 주문 수량. 드랍쉬핑은 MOQ 1.
- 등장: W5

**COGS** (Cost of Goods Sold)
매출원가. 마진 계산의 분자.
- 등장: W3

**GMV** (Gross Merchandise Value)
총 거래액. 매출이 아니라 환불 전 총합.
- 등장: W12

**CJ Dropshipping**
중국 드랍쉬핑 플랫폼. 본 강의 소싱 1순위.
- 등장: W5

**Shopify**
이커머스 SaaS. 본 강의 스토어 인프라 표준.
- 등장: W4, W6

**Bogus Gateway**
Shopify 테스트 결제 모드. 가짜 주문으로 결제 흐름 검증.
- 등장: W6

**Sticky Add-to-Cart**
스크롤해도 따라다니는 구매 버튼. 모바일 CVR +20%.
- 등장: W6

**Klaviyo**
이커머스 특화 이메일 자동화. Shopify 1순위 통합.
- 등장: [Supplement 01](./Supplement_01_Email_Automation_Playbook.md)

---

## 🛠 Tools / Workflow (10개)

**Make.com**
노코드 자동화 플랫폼. Zapier보다 저렴하고 강력. 본 강의 표준.
- 등장: W10, W13, [S10](./Supplement_10_L3_AI_Agent_Building.md)

**Zapier**
Make.com 대체. 더 단순하지만 비쌈.
- 등장: 참고

**Cursor**
AI 코드 에디터. Cmd+K로 자연어 명령. 비개발자도 코드 수정 가능.
- 등장: W6

**Notion**
지식 베이스 + 대시보드. 본 강의 학습 진척 추적용.
- 등장: 14주 전체, [Supplement 11](./Supplement_11_Self_Assessment_and_Progress_Tracker.md)

**Goaffpro**
Shopify 추천 코드 시스템. 무료 플랜으로 시작 가능.
- 등장: [Appendix D Stage B](./Appendix_D_First_100_Customers.md)

**CapCut**
무료 영상 편집기 (TikTok 모회사). 15초 영상 10분 제작.
- 등장: W7

**Perplexity**
AI 검색 엔진. 모든 답에 1차 출처 URL 첨부. 환각 검증 1순위.
- 등장: [S08 §6.5](./Supplement_08_L1_Generative_AI_Foundations.md)

**Slack**
팀 메시징. Agent의 휴먼 승인 대시보드로 활용.
- 등장: [S10](./Supplement_10_L3_AI_Agent_Building.md)

**Google Sheets**
데이터 분석 + 자동화 로깅. 본 강의 데이터 표준.
- 등장: W12, [S10](./Supplement_10_L3_AI_Agent_Building.md)

**Vercel Cron / Render**
서버리스 인프라. Browser Use Agent 호스팅용.
- 등장: [S10 §4.5](./Supplement_10_L3_AI_Agent_Building.md)

---

## 🇰🇷 Korean Specifics (5개)

**일반과세자 vs 간이과세자**
한국 사업자 분류. 직전 1년 매출 8천만원 미만 = 간이과세 가능 (부가세 1.5~4%).
- 등장: [Appendix A §5](./Appendix_A_Refund_Legal_Checklist.md)

**개인사업자 vs 법인**
세율·자금 흐름·신용도 다름. 첫해는 개인사업자 권장.
- 등장: [Appendix A §5](./Appendix_A_Refund_Legal_Checklist.md)

**해외 직판 (B2C 수출)**
한국 셀러가 외국 고객에 직접 판매. 본 강의 모델.
- 등장: W3

**구매대행**
한국 고객이 외국 상품 구매를 한국 셀러에 위임. 본 강의 모델 X.
- 등장: 참고 (혼동 주의)

**전자상거래법**
한국 온라인 판매 규제. 환불·표시 의무.
- 등장: [Appendix A §5](./Appendix_A_Refund_Legal_Checklist.md)

---

## 🔍 빠른 검색 — 카테고리별 인덱스

| 막힘 영역 | 키워드 점프 |
|---|---|
| AI 답이 이상 | Hallucination, Temperature, Self-Critique |
| 자동화 안 됨 | Webhook, Cron, API, Make.com |
| 광고 ROAS 낮음 | ROAS, CVR, BEP, CPA, Hook |
| 마진 음수 | Landed Cost, COGS, HTS, DDP |
| Dispute 폭주 | Stripe Dispute, FTC, GDPR, CCPA |
| 한국 세무 모름 | 통신판매업, PIPA, 일반과세자 |
| 비서 빌드 | System Prompt, Few-shot, RAG, Custom GPTs |
| Agent 빌드 | Agent, Webhook, Browser Use, MCP |

---

## 📌 본 용어집 사용 원칙

1. **모르는 용어 등장 → 즉시 검색** (5초 안에 답)
2. **3회 이상 반복 등장 → 노션에 본인 메모로 기록**
3. **검색해도 없는 용어 → 본 용어집에 추가 제안** (강사에게 피드백)
4. **AI에게 정의 묻기 전 본 문서 먼저** (할루시네이션 회피)

---

> **마지막 한 마디**: 한국 학습자의 가장 큰 장벽은 **개념이 아니라 용어**입니다. ROAS·CVR·DDP 같은 단어 3개 모르면 7시간짜리 강의가 통째로 안 들어옵니다. 본 용어집을 매주 옆 탭에 띄워두는 습관 = 학습 속도 +50%.
