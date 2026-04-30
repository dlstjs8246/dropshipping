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

**Form 5472 + Pro-forma 1120**
외국인 단독 소유 미국 LLC가 매년 IRS에 제출 의무. 소득 0원이라도 의무. 미신고 페널티 $25,000/년.
- 등장: Appendix A §8-5-bis

**FBAR (FinCEN 114)**
미국 LLC 명의 외국 계좌(Wise·Mercury) 잔액이 한 번이라도 $10K+ 초과 시 신고 의무. 미신고 페널티 최소 $10K.
- 등장: Appendix A §8-5-bis

**W-8BEN-E**
외국 법인이 미국 결제처(Stripe·PayPal·Amazon)에서 페이아웃 받을 때 30% 자동 원천징수 면제용 IRS 양식. LLC 설립 직후 1회 제출.
- 등장: Appendix A §8-5-bis

**SAQ A / SAQ A-EP** (PCI DSS 4.0.1)
Self-Assessment Questionnaire — 머천트 PCI 자가 평가 등급. Shopify 호스티드 체크아웃 = SAQ A 자동. 체크아웃에 3rd-party 스크립트 inject 시 SAQ A-EP 격상 위험.
- 등장: Week 4 §3.5

**Visa CE 3.0** (Compelling Evidence 3.0)
Visa 분쟁 자동 적격 부여 표준. 5가지 증거(이전 거래·device·IP·login·배송지) 보관 시 Reason Code 10.4 자동 승소.
- 등장: Appendix A §6 끝

**해외직구 대행업** (525105 / 구매대행)
한국 소비자의 미국 상품 구매를 대행하는 모델. 본 강의 직판(525101) 모델과 구분 — 사업자 등록 시 헷갈리지 말 것.
- 등장: Appendix A §8-5

**MoCRA** (Modernization of Cosmetics Regulation Act)
2024-07-01 시행. 미국 시장 화장품 셀러 의무 — Facility Registration + Product Listing + US Agent + Adverse Event Reporting + Biennial Renewal.
- 등장: Appendix A §6.6

**A2P 10DLC** (Application-to-Person 10-Digit Long Code)
미국 캐리어가 강제하는 비즈니스 SMS 등록. 2025-02-01부터 미등록 SMS 100% 차단. Brand + Campaign 등록 의무.
- 등장: Supplement 01 §7

**FTC Fake Reviews Rule** (16 CFR Part 465)
2024-10-21 시행. 가짜 리뷰·인센티브·억제·hijacking 모두 금지. 위반당 $51,744.
- 등장: Appendix A §6.3

**CPSIA** (Consumer Product Safety Improvement Act)
12세 이하 어린이용품 의무 — 3rd-party lab 테스트 + CPC 발행 + Lead 100ppm·페인트 90ppm·Phthalate 0.1% 한도. 2026-07-08부터 e-Filing.
- 등장: Week 2 Kill Criteria #8

**MCP** (Model Context Protocol)
Anthropic 발표(2024.11) → Linux Foundation 이관(2025.12). Agent와 외부 도구·데이터 소스를 연결하는 벤더 중립 표준. 2026.4 기준 75+ Claude connector + Cursor·Claude Desktop 통합.
- 등장: Supplement 10 §4-6-bis

**Section 232 확장**
2025-2026 트럼프 정부가 발동한 추가 관세 — 구리(2025.8.1, 50%) + 반도체 + 목재 + 의약품. 기존 철강·알루미늄에 더해 공급망 핵심 카테고리 직격.
- 등장: Week 3 §2-2

**Reciprocal Tariffs** (Trump 2.0)
국가별 차등 관세. 2026.1.27 한국 25%, 일본·EU 등 별도. 본 강의 중국 소싱 모델은 직접 영향 없음 (KR 원산지 아니므로).
- 등장: Week 3 §2-2

**EU CBAM** (Carbon Border Adjustment Mechanism)
2026.1.1 정식 발효. 시멘트·철·알루미늄·비료·전기·수소 카테고리만 적용 + 50톤/년 미만 면제. 1인 드랍쉬핑 셀러 무관.
- 등장: Appendix A §7-1-bis

**Visa CE 3.0** (Compelling Evidence 3.0)
2025-10-17 글로벌 자동 적용. 5가지 증거 보관 시 Reason Code 10.4 분쟁 자동 승소.
- 등장: Appendix A §6 끝

**Atomization** (콘텐츠)
영상 1개 → TikTok·Reels·Shorts·이메일·블로그 30+개 자산으로 변환하는 AI 워크플로우. 1인 셀러 매주 5시간 절감.
- 등장: Master Prompts §26, Supplement 05 레시피 11

**Voice Agent** (대화형 AI)
ElevenLabs Convai + Sonnet으로 인입 음성·라이브챗 1차 응대. 잠자는 동안 봇이 60% 처리 + 분쟁 위험만 휴먼 escalate.
- 등장: Supplement 10 §9.5

**Confidence Threshold** (신뢰도 임계값)
AI 출력에 포함된 self-reported confidence를 작업별 임계값으로 의사결정 — 즉시 채택 / 인간 검수 / 재시도 분기.
- 등장: Supplement 08 §6.6

**Closed-Loop Learning** (닫힌 학습 루프)
A/B 데이터 → AI가 "왜 졌나" 분석 → v2 자동 생성 → 재테스트의 누적 패턴. 분기마다 ICP·훅·CTA 베스트 패턴 갱신.
- 등장: Supplement 05 레시피 13, Week 9 Step D

**Claude Skills** (2025.10 출시)
본인 정책·매뉴얼·SOP를 재사용 가능한 단위로 패키징. LLM이 작업에 따라 자동 발동 — Custom GPT Knowledge보다 비용 ↓.
- 등장: Supplement 07 §Skills

**Cart Abandonment Triage** (이탈 심리 분류)
체류시간·페이지 패턴·결제 단계 → 5 카테고리(가격망설임/배송의심/환불불신/결제마찰/단순보류)로 AI 자동 분류 → 카테고리별 개인화 복귀 메일.
- 등장: Master Prompts §29

**Creative Fatigue 4단계**
광고 CTR·CVR·Frequency 시계열로 진단하는 4단계 (Healthy / Warning / Decline / Dead). AI가 교체 시점 자동 알림.
- 등장: Master Prompts §30, Week 9

**Niche Pivot 3-Way** (Pivot / Persist / Pause)
Day 30+ 게이트에서 binary KILL이 아닌 3가지 시나리오 + 강도 점수로 객관 진단. 잘못된 KILL 방지.
- 등장: Master Prompts §31, Appendix D §6

**Reverse Atomization**
잘된 자산 1개 → 본질 추출 → 다른 채널 5종(TikTok·이메일·광고·PAS·DM) 자동 재생성. §26의 역방향.
- 등장: Master Prompts §32

**EAT** (Expertise · Authority · Trust)
구글 검색 + 결제 페이지 신뢰도 3축. About Us·상세페이지·결제 페이지 작성 후 AI 자동 점수화 + 보강 카피.
- 등장: Master Prompts §33, Week 4

**Cohort LTV** (코호트 라이프타임 가치)
월별 신규 고객 그룹의 30/60/90/180일 LTV 곡선. 채널별·SKU별 차이 + 6개월 예측. AI 자동 분석.
- 등장: Master Prompts §35, Week 12

**Brand Voice Drift**
영상·이메일·DM 등 채널 간 톤 일관성 편차. 시간 경과 측정으로 톤 일관성 누적 모니터링.
- 등장: Master Prompts §36, Week 14

**Master Prompt Router** (§39)
학생 막힘 → 적합한 §1~§47 자동 추천 메타 AI. 본 컬렉션 47종 사용 가이드.
- 등장: Master Prompts §39

**5 멘탈 함정** (Day 30 Despair / Burnout / Shiny Object / Comparison / Wedding Cake)
1인 셀러가 망하는 5 패턴. AI가 작업 로그·자가 진단으로 객관 코멘트.
- 등장: Master Prompts §38, Supplement 11 §5.5

**Weekly Priority AI** (이번 주 5가지 액션)
매주 월요일 09:00 KPI + 시간 + 의욕 dump → AI가 5가지 액션 + 첫 한 발 + 함정 신호. 매주 5분 의사결정.
- 등장: Master Prompts §40, Supplement 11 §5.4

**Basket Affinity / Cross-sell** (장바구니 친화도)
Shopify 100건+ 주문 데이터 → "A 산 사람의 70%는 B도 살 수 있다" AI 자동 발굴. AOV +30~50%.
- 등장: Master Prompts §41, Week 12

**Repeat Refunder Tier** (반복 환불자 위험도 5단계)
Tier 0 정상 / Tier 1 관찰 / Tier 2 경고 / Tier 3 즉시 차단 / Tier 4 사기 링. 매주 점검으로 1~3% 마진 회복.
- 등장: Master Prompts §42, Appendix A §6

**Image SEO Auto**
페르소나·키워드 매칭 alt text·파일명 자동 생성 + Shopify Bulk 일괄 적용. Google Image Search 노출 + Shopify SEO 점수.
- 등장: Master Prompts §43, Appendix B §3

**Tiered Pricing 3-Tier** (Anchoring 심리학)
Basic/Standard/Pro 가격대를 페르소나·LTV·마진 기준 자동 결정. AOV +30~50%.
- 등장: Master Prompts §44, Week 4

**Creator Authenticity Score** (인플루언서 진정성 점수)
6 신호(engagement·댓글 품질·팔로워 패턴 등)로 가짜 팔로워·봇 자동 탐지. 50점 미만 SKIP, 70+만 샘플.
- 등장: Master Prompts §45, Week 8

**Creator Content Brief AI**
크리에이터 평소 톤 분석 + 본인 메시지 결합 + FTC #ad 명시 영문 브리프 자동. 톤 깨면 영상 실패 — 자연스러운 결합.
- 등장: Master Prompts §46, Week 8

**IOR** (Importer of Record)
미국 통관 시 관세 납부 + 제품 안전·인증 데이터에 대한 최종 법적 책임자. CJ 직발송 = 고객 IOR / 본인 LLC 통관 = 본인 IOR. 본인 LLC IOR이면 CPSC·MoCRA·FDA·HTS 모든 책임.
- 등장: Week 3 §2-2-bis

**Pure Dropship vs 3PL Hybrid vs Full 3PL**
배송 모델 3단계 진화. Pure(Day 0, CJ 직발송) → Hybrid(Phase 4, 베스트셀러만 미국 창고) → Full(Phase 5, 모든 SKU). 마진 -2~10%p, CVR +15~40%.
- 등장: Appendix C §6

**Low-Ticket / Niche Brand / High-Ticket** (사업 모델 3가지)
가격대·마진·운영 모델 차이. Low(5~15%) / Niche(15~35%) / High(20~45%). Day 0 = Low(표준), Phase 4 = Niche, Phase 5 = High 진화.
- 등장: Week 12 [심화]

**CPSC eFiling §1110.11**
2026-07-08부터 모든 CPSC 규제 제품 수입 시 적합성 증명 데이터를 CBP에 전자 제출 의무. Full PGA(소량) vs Reference PGA(다량 + Product Registry 등록). FTZ는 2027-01-08.
- 등장: Appendix A §6.7

**Finished Product Certifier**
CPSC eFiling §1110.11에서 데이터 정확성 최종 책임자. Customs Broker는 대리 제출만, 정확성 책임 X. 본인 LLC 또는 US Agent (Registrar Corp 등).
- 등장: Appendix A §6.7

**FTC Mail Order Rule** (16 CFR Part 435)
1971 시행, 2024 enforcement 강화. 광고 명시 X 시 30일 이내 배송 의무. 30일 초과 = 고객 동의 + 거절 시 환불.
- 등장: Appendix A §1

**제품 책임 보험** (General/Product Liability + Cyber Liability)
1인 셀러 권장 $300~$500/년 (BOP 통합 $700~$1,200). Hiscox·Next Insurance·Thimble.
- 등장: Appendix A §1

**다채널 진화 — Shopify·TikTok·Amazon·eBay·Etsy**
플랫폼별 드랍쉬핑 정책 차이. Shopify 완전 허용 / TikTok Shop 조건부 / Amazon 엄격 / eBay 도매만 / Etsy 금지.
- 등장: Week 14 [심화]

**IP 사전 점검** (§47 Master Prompt)
신규 SKU 등록 전 5분 — 상표권·저작권·위조품·CPSC 4 차원 자동 진단. GO/WARNING/SKIP. 1년 1회 위반 = 변호사 $5K+.
- 등장: Master Prompts §47, Appendix F #11

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
