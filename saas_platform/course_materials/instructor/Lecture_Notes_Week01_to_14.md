# 🎓 강사용 14주 마스터 교안 & 대본 (Lecture Notes)

> **강사 체크리스트 (수업 전)**
> - 수강생용 Notion 대시보드 링크 준비 및 공유
> - `02_Master_Prompts.md` 열어두기 (**§1~§47, 3 Part 구조** — Part 1 콘텐츠 / Part 2 운영·진단·메타 / Part 3 매주 운영 결단)
> - (Week 10 이후) Make.com 템플릿(Blueprint) 사전 세팅 및 테스트 완료
>
> **수강생 자기주도 학습 인프라 (모든 주차 공통 안내)**
> - 학습 진척: [Supplement 11 자가 진단 시스템](../Supplement_11_Self_Assessment_and_Progress_Tracker.md) — Week 0 Pre-flight + 매주 일요일 22시 5문항 작성. Week 1 종료 시 첫 Checkpoint 안내. **§5.4 매주 우선순위 + §5.5 멘탈 코치 AI 루틴 매주 강조**.
> - 용어 참조: [Appendix E 용어집](../Appendix_E_Glossary.md) — ROAS·CVR·DDP·HTS·CoT·RAG·MoCRA·IOR·MCP 등 130+ 용어.
> - 흔한 실수 자가 검열: [Appendix F 12선](../Appendix_F_Common_Mistakes_10.md) — 매주 일요일 자가 검열 시트 강조.
>
> **강사가 강의 중 자주 호출할 Master Prompts (Part 2·3)**
> - §29 Cart Abandonment 진단 (W7+) / §30 Creative Fatigue (W9+) / §31 Niche Pivot 3-way (Day 30+) / §32 Reverse Atomization (W7+) / §33 EAT 점검 (W4+) / §34 Trust Signal 9칸 (W4+) / §35 Cohort LTV (W12) / §36 Brand Voice Cross-Channel (W14) / §37 공급사 응답 분류 (W3·W5) / §38 멘탈 코치 (Sup11과 함께) / §39 Router (학생 막힘 시) / §40 매주 우선순위 (월요일 09:00) / §41 Cross-sell (W12) / §42 Repeat Refunder (W11+) / §43 Image SEO (W4·W6) / §44 Tiered Pricing (W4·W12) / §45 Creator Authenticity (W8) / §46 Creator Brief (W8) / §47 IP 사전 점검 (W3·W5 신규 SKU 등록 전 매번)

---

## 🕒 모든 주차 공통 — [2:00 - 2:30] 마무리 30분 템플릿

각 주차 본문은 [2:00]까지만 타임라인 명시. 마지막 30분은 모든 주차 동일 구조:

**[2:00 - 2:15] Q&A 라이브 (15분)**
* 수강생 막힘 → [Master Prompts §39 Router](../02_Master_Prompts.md)에 자유 글쓰기 시연 — AI가 §1~§47 자동 추천
* 가장 자주 나오는 3개 Q를 다음 주 오프닝에 미리 답변 (학습 누적)
* 본 주차 산출물(스코어카드·로고·DM 등)을 1~2명 즉석 spot-check

**[2:15 - 2:25] 다음 주 과제 안내 (10분)**
* Notion 대시보드의 본 주차 체크리스트 함께 확인
* 본 주차 핵심 신규 Master Prompt 1~2개 시연 (각 Week별 본문에 명시)
* 자가 진단: 일요일 22시 [Supplement 11](../Supplement_11_Self_Assessment_and_Progress_Tracker.md) §1~§5 작성 → 월요일 [§40 Weekly Priority](../02_Master_Prompts.md) 1회 실행 권장

**[2:25 - 2:30] 멘탈·동기 부여 (5분)**
* "이번 주 가장 작은 한 발 1개" 발표 라운드 (전원, 30초씩)
* 의욕 5/10 미만 응답자 → [§38 멘탈 코치](../02_Master_Prompts.md) 본인 데이터 입력 권장
* 다음 주에 보자는 멘트 + Slack/단톡 즉시 질문 가능 환기

> **강사 운영 팁**: 본 30분이 강의의 진짜 가치 생성 구간. 이론·실습은 자료로 self-study 가능하지만, Q&A·자가 진단·동기 부여는 라이브에서만 완성. **절대 단축 금지**.

---

## 🟢 Phase 1: 기초 + 비즈니스 설계 (Week 1~3)

### Week 1: AI의 세계 + 드랍쉬핑 아키텍처 🌍
**[0:00 - 0:10] 오프닝**
* **멘트**: "이 14주의 목표는 단순한 '쇼핑몰 창업'이 아닙니다. AI와 노코드를 통해 비즈니스 MVP를 직접 런칭하고, 이 프로세스를 혼자 반복할 수 있는 '능력'을 기르는 것입니다."

**[0:10 - 0:40] 이론: 2026 드랍쉬핑과 AI의 한계**
* **설명**: "할루시네이션(환각)을 조심해야 합니다. AI가 주는 데이터를 그대로 믿지 말고 반드시 크로스체크해야 합니다. 2026년 드랍쉬핑은 세금(122+301+232 4-Layer 관세)과 배송 속도 싸움입니다. 2026.2 IEEPA 무효 후 카테고리별 25~50%로 정상화됨 — 단, 매월 변동 가능."

**[0:40 - 2:00] 실습: 3대 AI 세팅 및 역공학 분석**
* **실습 가이드**: 수강생들이 ChatGPT, Claude, Gemini 창을 모두 띄우게 한 뒤 동일한 프롬프트를 입력하게 합니다.
* **Q&A 대응**:
  * *Q: ChatGPT 유료 결제 할까요?* → A: "아닙니다. Week 7 광고 이미지 만들 때 딱 한 달만 결제할 겁니다. 지금은 3개를 돌려 쓰며 무료로 한도를 극복하세요."
* **수강 전 자율학습 안내**: AI가 처음인 친구에게는 수업 전에 [Supplement 08 L1 생성형 AI 다루는법](../Supplement_08_L1_Generative_AI_Foundations.md)을 1회독 시킬 것. 본 1주차의 "할루시네이션·3대 AI 교차" 설명이 30분 → 10분으로 단축됨. L1 미독자에게는 §2(토큰 예측)와 §6(검증 루틴)만이라도 강제.
* **심화 자료 안내**: 작업별 AI 선택 매트릭스는 [Supplement 03](../Supplement_03_AI_Tool_Selection_Guide.md) (AI Mastery Track L2). "어떤 AI를 어디에" 헤매는 시간을 0으로 만듦.

### Week 2: 프롬프트 엔지니어링 + 필터링 (Kill Criteria) 🎯
**[0:00 - 0:40] 이론: 프롬프트 5요소와 7대 필터**
* **멘트**: "좋은 질문이 좋은 답을 만듭니다. Role(역할)과 Format(형식)을 반드시 지정하세요. 오늘은 '안 되는 상품을 빠르게 버리는' 7가지 기준(Kill Criteria)을 배웁니다."

**[0:40 - 2:00] 실습: 트렌드 교차 검증**
* **실습 가이드**: Google Trends 화면을 띄우고 하락세인 상품을 걸러내는 시연을 보여줍니다. 이후 `02_Master_Prompts.md`의 Kill Criteria 프롬프트를 사용해 AI가 PASS/FAIL을 판정하는 것을 보여줍니다.
* **심화 자료 안내**: 6대 고급 프롬프트 패턴(CoT, Few-shot, Self-Critique 등)은 [Supplement 04](../Supplement_04_Advanced_Prompt_Engineering.md). 1주차의 단순 프롬프트와 비교 시연 강력 권장.

### Week 3: 마진 설계 + 세무 리스크 + 스코어카드 ✍️
**[0:00 - 0:30] 이론: Landed Cost와 관세**
* **설명**: "소싱가가 10달러라고 내 원가가 10달러가 아닙니다. 배송비와 관세(2026 Q2 기준 보수적 50% 가정)를 더한 Landed Cost가 진짜 원가입니다. IEEPA 무효 판결로 이전 125% 시대는 끝났지만, Section 122+301+232 적층은 여전 — 본인 카테고리 HTS 검증 필수."

**[0:30 - 2:00] 실습: 스코어카드 작성 및 최종 니치 확정**
* **실습 가이드**: `03_Scorecard_Template.csv`를 열어 수강생들이 자신의 후보 상품을 기입하게 합니다. 23점을 넘는 상품이 나올 때까지 반복합니다.
* **심화 자료 안내**: DDP/DDU와 캐리어 비교는 [Appendix C](../Appendix_C_Shipping_Carriers_DDP_DDU.md)를 졸업 전 1회독 권장.
* **🆕 본 주차 신규 Master Prompt 시연**: [§47 IP & Photography Risk Pre-Check](../02_Master_Prompts.md) — Week 5 신상품 등록 전 매번 사용 자동화. 신규 SKU 1개당 5분 투자가 1년 1회 IP 위반 시 $5K+ 변호사비 회피. **W3에서 미리 시연하고 W5에서 실전 적용**.
* **🆕 IOR 결정 트리 안내**: [Week 3 §2-2-bis](../Week03_Landed_Cost_Scorecard.md)의 Phase 1~3 (고객 IOR) vs Phase 4+ (본인 LLC IOR) 분기를 강사가 화이트보드에 그려서 설명. 학생이 카테고리 선택 시 IOR 책임을 미리 인지해야 카테고리 자가 회피([Kill #8](../Week02_Prompt_Engineering_Kill_Criteria.md))가 작동.

---

## 🟡 Phase 2: 스토어 구축 (Week 4~6)

### Week 4: 브랜딩 + 스토어 인프라 개설 🎨
**[0:00 - 0:30] 이론: 톤앤매너 설정**
* **멘트**: "스토어 디자인이 조잡하면 사기 사이트처럼 보입니다. 색상 2개, 폰트 1개로 제한해서 깔끔하게 만드세요."

**[0:30 - 2:00] 실습: 쇼피파이 결제 및 AI 디자인**
* **실습 가이드**: 수강생이 쇼피파이 3개월 $1 프로모션으로 결제하도록 지도합니다. Gemini 무료 이미지 생성기로 영웅 배너(Hero Image)를 생성합니다.
* **심화 자료 안내**: W4에서 정의한 브랜드 보이스를 졸업 후 'Few-shot Pool'로 변환하여 카피 비서에 주입하는 방법은 [Supplement 09 §5·§7](../Supplement_09_L2_AI_Assistant_Building.md) (AI Mastery Track L2).

### Week 5: 소싱 파이프라인 연동 + AI 카피라이팅 📝
**[0:00 - 0:30] 이론: PAS 카피 공식**
* **설명**: "PAS (Problem-Agitation-Solution). 고객의 문제를 짚어주고, 더 아프게 찌른 다음, 우리 상품을 해결책으로 제시하는 겁니다."

**[0:30 - 2:00] 실습: 깊은 검증 (핵심 주차)**
* **실습 가이드**: CJ Dropshipping을 연동합니다. 상품을 여러 개 올리지 못하게 통제하고, 단 1~2개의 위닝 후보 상품에 집중하여 상세페이지를 Claude로 완벽하게 작성하게 합니다.
* **심화 자료 안내**: 상세페이지 SEO 메타·Alt 작성은 [Appendix B](../Appendix_B_SEO_Checklist.md) 5단계로 시연.

### Week 6: AI 코딩 (Cursor) + 스토어 최적화 💻
**[0:00 - 0:30] 이론: 이커머스 모바일 전환율**
* **설명**: "모바일에서 결제 버튼(Add to Cart)이 첫 화면에 보이지 않으면 이탈률이 급증합니다."

**[0:30 - 2:00] 실습: Cursor 활용**
* **실습 가이드**: 코딩을 전혀 모르는 수강생에게 Cursor 편집기를 열게 하고, 자연어 채팅(Cmd+K)으로 버튼 색상을 바꾸거나 불필요한 섹션을 숨기는 시연을 합니다. (깊이 들어가지 않도록 주의)
* **심화 자료 안내**: 다중 AI 연결 워크플로우 13종은 [Supplement 05](../Supplement_05_AI_Workflow_Recipes.md) (atomization·페르소나·A/B 닫힌 학습 포함). 단일 프롬프트의 한계를 깨우치는 결정적 자료. 막힘 시 카탈로그 인덱스에서 작업명 → 레시피 매핑.
* **운영 플레이북 안내**: 스토어 완성 후 첫 매출 30~90일 운영은 [Appendix D 첫 100명 플레이북](../Appendix_D_First_100_Customers.md) — Day 0 체크리스트 8개를 W6 종료 직후 함께 점검 권장. Stuck Recovery Tree로 막힘 회피.

---

## 🟠 Phase 3: 마케팅 & 런칭 (Week 7~9)

### Week 7: 크리에이티브 공장 (대량 생산) 🎬
**[0:00 - 0:30] 이론: 3초 훅의 중요성**
* **멘트**: "틱톡에서 첫 3초 안에 시선을 끌지 못하면 끝입니다. 예쁜 영상이 아니라 도파민을 자극하는 영상이 필요합니다."

**[0:30 - 2:00] 실습: 마케팅 에셋 생성**
* **실습 가이드**: 이번 달만 ChatGPT Plus를 결제하게 하여 DALL-E로 이미지를 30장 뽑습니다. CapCut 템플릿에 맞춰 빠르게 영상을 편집하는 노하우 전수.
* **심화 자료 안내**: DALL-E/Midjourney 5종 프롬프트 팩은 [Master Prompts §5](../02_Master_Prompts.md)를 띄워두고 변수만 바꾸게 지도. 음성·영상·음악 통합 스택은 [Supplement 06](../Supplement_06_AI_Asset_Generation_Stack.md) — ElevenLabs/Runway/Suno 활용으로 영상 1개 30분 제작.
* **🆕 본 주차 신규 Master Prompt 시연**: [§26 콘텐츠 Atomization](../02_Master_Prompts.md) — 영상 1개 → TikTok 5/Reels 5/Shorts 5/이메일 3/블로그 1/광고 5/Pinterest 3 = 30개 자산 한 번 호출. 매주 영상 3개 발행 시 월 90개 자산. **시연: 본인 영상 transcript dump → 1분 안에 30개 자산 생성**.
* **🆕 AI 광고 콘텐츠 법적 지뢰 5선**: [Week 7 §3](../Week07_AI_Creative_Factory.md) — California AB 1836 (사망 셀럽 likeness $10K/위반), EU AI Act Article 50 (2026.8 시행), C2PA/SynthID 워터마크 제거 금지 등. Sora 2/Veo 3 활용 시 강사가 안전 vs 위험 프롬프트 표 시연.

### Week 8: 제휴 마케팅 (오가닉 바이럴) 세팅 🤝
**[0:00 - 0:40] 이론: 무료 트래픽의 핵심, 제휴 구조**
* **설명**: "돈을 태워서 광고하는 건 나중입니다. 커미션을 20% 높게 주고 크리에이터들이 알아서 내 물건을 팔게 만드는 '시스템'을 구축할 겁니다."

**[0:40 - 2:00] 실습: AI 초개인화 DM 아웃리치**
* **실습 가이드**: AI를 활용해 각 인플루언서의 최근 영상 내용을 언급하는 맞춤형 DM 100개를 순식간에 작성하는 법을 보여줍니다.
* **심화 자료 안내**: 채널 분석은 [Master Prompts §6](../02_Master_Prompts.md), DM 풀 프롬프트는 [§7](../02_Master_Prompts.md). 2단계 파이프라인으로 운영.
* **L2 비서화 안내**: 채널 분석 + 개인화 DM을 매번 수동 호출하지 않고 어시스턴트 1개로 묶는 풀 빌드는 [Supplement 09 §8 DM 비서](../Supplement_09_L2_AI_Assistant_Building.md). 졸업 후 100명 자동 처리.
* **🆕 본 주차 신규 Master Prompt 시연 2종**:
  - [§45 Creator Authenticity Score](../02_Master_Prompts.md) — DM 발송 전 6 신호로 가짜 팔로워·봇 자동 탐지. 50점 미만 SKIP, 70+만 샘플. **시연**: 5명 핸들 입력 → 점수표 출력.
  - [§46 Creator Content Brief](../02_Master_Prompts.md) — 크리에이터 톤 + 본인 메시지 결합 + FTC #ad 명시 영문 브리프 자동. 협업 시 매번 사용.
* **🆕 TikTok Shop KR/US 구분**: [Week 8 §3 비교표](../Week08_TikTok_Affiliate_Outreach.md) — 미국 시장은 미국 LLC + PBR 필수, 한국 도메스틱은 2025-08~ KR 사업자 단독 OK. 학생 거주국별 진입 경로 명시 필요. **TikTok Shop 위반 48점 시스템**(§4-D)도 함께 강조.

### Week 9: 데이터 대시보드 + 유료 광고 소액 부스팅 📊
**[0:00 - 0:30] 이론: ROAS의 함정과 광고 진입 조건**
* **멘트**: "광고비 투입 기준을 철저히 지키세요. 오가닉으로 UGC가 3개 이상 터졌을 때만 광고비를 하루 $5씩 태우는 겁니다."

**[0:30 - 2:00] 실습: Spark Ads 집행**
* **실습 가이드**: 반응이 좋았던 크리에이터 영상을 활용해 틱톡 Spark Ads 소액 캠페인을 세팅합니다. Ads Manager 18단계 메뉴 경로는 Week 9 본문 Step 2-B 참조.
* **심화 자료 안내**: 일예산 결정은 [Supplement_02 CSV](../Supplement_02_Ad_Budget_Calculator.csv)에 본인 매출목표 입력 후 자동 산출.
* **🆕 본 주차 신규 Master Prompt 시연 3종**:
  - [§30 Creative Fatigue 4단계](../02_Master_Prompts.md) — 광고 CTR/CVR/Frequency 시계열 → Healthy/Warning/Decline/Dead 자동. 매주 월요일 09:00 자동 보고. 광고비 -15~25%.
  - [§40 Weekly Priority](../02_Master_Prompts.md) — KPI dump → 5가지 액션 자동. 매주 월요일 09:00 5분 결단.
  - [§29 Cart Abandonment 5 카테고리](../02_Master_Prompts.md) — Klaviyo 행동 데이터 → 가격/배송/환불/결제/보류 분류 → 개인화 복귀 메일. 복귀율 +30~50%.
* **🆕 Meta Ads 보조 채널 + CAPI**: [Week 9 Step 3](../Week09_SparkAds_and_Organic.md) — TikTok 단일 의존 위험 분산. Shopify ↔ Meta CAPI 1-click 연동. iOS ATT 후 픽셀만으로 전환 20~40% 손실 방지.
* **🆕 TikTok Smart+ 2026.2 통합**: 첫 캠페인은 Smart+ OFF 수동 시작 권장 (예산 폭주 방지). Meta Advantage+ 강제 전환(2026.1.15) 명시.

---

## 🟣 Phase 4: AI Agent & 자동화 (Week 10~12)

### Week 10: 운영 자동화 1단계 (CS & 주문) 🤖
**[0:00 - 0:30] 이론: 반복 업무의 정의**
* **설명**: "오늘부터는 여러분이 자는 동안에도 시스템이 돌아가게 만들 겁니다."

**[0:30 - 2:00] 실습: 템플릿 복사 (강사 주도)**
* **실습 가이드**: 수강생이 직접 Make 시나리오를 짜면 100% 에러가 납니다. 강사가 미리 준비한 Blueprint URL을 주고 'Import' 버튼만 누르게 하여 API 키만 연결하도록 지도합니다.
* **심화 자료 안내**: 환불·법적 이슈는 [Appendix A §6 Dispute SOP](../Appendix_A_Refund_Legal_Checklist.md) 참조.
* **L3 무인 시스템 안내**: 진짜 무인 24/7 시스템 마스터 아키텍처는 [Supplement 10 §2](../Supplement_10_L3_AI_Agent_Building.md), Build 1 Single Agent 풀 코드(Make + Claude API)는 [§3](../Supplement_10_L3_AI_Agent_Building.md). 본 W10 Make 시나리오는 "Agent-lite" — Claude API 의사결정이 추가되어야 진짜 Agent가 됨.
* **🆕 Voice Agent CS (Build 4) 안내**: [Supplement 10 §9.5](../Supplement_10_L3_AI_Agent_Building.md) — ElevenLabs Convai + Sonnet 4.6 + RAG로 잠자는 동안 음성·라이브챗 60% 자동 처리. 월 $50로 1,000건. shadow mode 1주 가드레일 명시.
* **🆕 MCP 표준 + Cursor 3 안내**: [§4-6-bis MCP](../Supplement_10_L3_AI_Agent_Building.md) — Linux Foundation 2025.12 이관, 75+ Claude connector. Make.com 30+ 모듈 비대 시 Agent SDK + MCP 마이그레이션 시점.

### Week 11: 지능형 RAG & 모니터링 자동화 🧠
**[0:00 - 0:50] 이론: RAG와 Agent 개념**
* **설명**: "RAG는 AI에게 내 회사 매뉴얼을 쥐어주는 겁니다. 엉뚱한 대답을 안 하게 룰을 정해주는 거죠."

**[0:50 - 2:00] 실습: Claude Projects RAG 체험**
* **실습 가이드**: 상품 상세정보, 배송 정책이 적힌 PDF를 Claude Projects에 업로드하고, AI가 완벽한 CS 이메일을 답변하는 것을 체험시킵니다.
* **심화 자료 안내**: Custom GPTs vs Claude Projects vs Gemini Gems 비교 + 5개 Agent 청사진은 [Supplement 07](../Supplement_07_AI_Agent_Builder_Comparison.md) (AI Mastery Track L3). 졸업 후 30일 내 5개 Agent 직접 구축.
* **L2 비서 빌드 안내**: 본 시간에 만든 CS 봇을 본인 정책·과거 응대 50건·금지어로 확장한 카피·DM·CS 3종 비서 풀 빌드는 [Supplement 09](../Supplement_09_L2_AI_Assistant_Building.md). Supplement 07이 *비교*라면 09는 *빌드 매뉴얼*.
* **L3 Browser Use 안내**: 정적 HTML로 안 잡히는 SPA·로그인 페이지까지 모니터링은 [Supplement 10 §4 Browser Use Agent](../Supplement_10_L3_AI_Agent_Building.md).
* **🆕 본 주차 신규 Master Prompt 시연**: [§42 Repeat Refunder Triage](../02_Master_Prompts.md) — Tier 0~4 자동 분류 + Shopify 자동 태깅 + Stripe 신고. 매주 점검 = 매월 1~3% 마진 회복. **시연**: 본인 (또는 데모) Customers CSV → AI Tier 분류.
* **🆕 RAG 강화 안내**: Claude Projects 외 [Anthropic Files API + Skills (2025.10)](../Supplement_07_AI_Agent_Builder_Comparison.md), [캐싱 RAG 비용 1/10](../Supplement_03_AI_Tool_Selection_Guide.md) 명시. CS 봇 = 매뉴얼 4개(Refund/Shipping/FAQ/Banned_Words) + 캐싱 ON.

### Week 12: 데이터 기반 스케일업 & 피벗 📈
**[0:00 - 0:30] 이론: 데이터 기반 의사결정**
* **멘트**: "마진이 30% 밑으로 떨어지면 당장 스톱하고 원인을 분석해야 합니다."

**[0:30 - 2:00] 실습: 백엔드 데이터 분석**
* **실습 가이드**: 스토어 1달 데이터를 CSV로 다운받아 Claude에 올리고 병목 구간(이탈률 등)을 도출하게 합니다.
* **심화 자료 안내**: 분석 풀 프롬프트는 [Master Prompts §9](../02_Master_Prompts.md), 4시트 Sheets 구조는 Week 12 본문 Step 1-A 참조.
* **🆕 본 주차 신규 Master Prompt 시연 3종**:
  - [§31 Niche Pivot 3-Way](../02_Master_Prompts.md) — Day 30+ 게이트가 binary KILL이 아닌 Pivot/Persist/Pause 강도 점수 + 7일 행동.
  - [§35 Cohort LTV](../02_Master_Prompts.md) — 월별 코호트 30/60/90/180일 LTV + 6개월 예측 + 채널별 LTV/CAC.
  - [§41 Cross-sell Basket Affinity](../02_Master_Prompts.md) — 100건+ 주문 → "A 산 사람의 70% B" 자동 + Bundle 가격. AOV +30~50%.
* **🆕 사업 모델 3가지 안내**: [Week 12 [심화]](../Week12_Data_Driven_ScaleUp.md) — Low-Ticket(5~15%) / Niche Brand(15~35%) / High-Ticket(20~45%) 진화 경로. Phase 4(월 $5K+) = Niche Brand 전환 권장 명시. **3PL Hybrid**([Appendix C §6](../Appendix_C_Shipping_Carriers_DDP_DDU.md))도 함께 시연.

---

## 🚀 Phase 5: 확장 & 종합 (Week 13~14)

### Week 13: 워크플로우 자동화 고도화 🏗️
**[0:00 - 0:10] 12주차 회고**
* 12주 데이터 기반 KEEP/SCALE/KILL 결단 1~2명 spot-check.

**[0:10 - 0:40] 이론: LTV(고객 생애 가치)와 리텐션 마케팅**
* **멘트**: "신규 1명 광고비 $20 vs 기존 고객 재구매 메일 $0. 광고비 폭등 2026년에 살아남는 유일한 방법은 한 명이 두 번·세 번 사게 만드는 LTV 설계."
* **조건부 자동화의 논리 (If/Then/Else)** 5분 설명 — VIP $100+ 산 고객엔 30% 시크릿, 장바구니 이탈엔 10%.

**[0:40 - 0:50] ☕ 쉬는 시간**

**[0:50 - 1:50] 실습: Make.com Router 활용 VIP 자동 분류 메일**
* Shopify Customer 데이터 → Router 분기 → Klaviyo 세그먼트별 다른 메일 자동 발송 풀 빌드.
* 가장 흔한 에러: Webhook 매핑 누락. 강사가 미리 준비한 Blueprint 임포트 → 본인 API 키만 연결.

**[1:50 - 2:00] 후반 시연: 3-Agent 흐름 (Watcher → Analyst → Communicator)**
* 1회성 사례를 졸업 후 모든 Multi-Agent에 재사용 가능한 골격으로 일반화 시연.

* **심화 자료 안내**: Multi-Agent 분류는 [Master Prompts §10](../02_Master_Prompts.md), 5통 환영 이메일 시퀀스 자동 생성은 [§11](../02_Master_Prompts.md). 깊이 있는 이메일 자동화는 [Supplement 01](../Supplement_01_Email_Automation_Playbook.md).
* **L3 패턴 일반화 안내**: Watcher → Analyst → Communicator 패턴을 재사용 가능 골격으로 일반화 + 핸드오프 JSON 스키마 표준 + 에러 회복 룰은 [Supplement 10 §5](../Supplement_10_L3_AI_Agent_Building.md). 본 W13의 1회성 사례를 졸업 후 모든 Multi-Agent에 재사용.
* **🆕 코드 우선 진화 경로**: Make.com 30+ 모듈 비대 시 [Supplement 10 §4-7 Claude Agent SDK + §4-6-bis MCP](../Supplement_10_L3_AI_Agent_Building.md). 매월 매출 $20K+ 도달 후 마이그레이션 권장.
* **🆕 매주 운영 결단 AI 도입 시점**: W13 종료 후엔 [§40 Weekly Priority](../02_Master_Prompts.md)·[§42 Repeat Refunder](../02_Master_Prompts.md)·[§29 Cart Abandonment](../02_Master_Prompts.md)을 매주 월요일 09:00 루틴화 (= [01_Notion_Dashboard 매주 운영 루틴](../01_Notion_Dashboard.md) 참조).

[2:00 - 2:30] 공통 마무리 30분 ([상단 템플릿](#-모든-주차-공통----200---230-마무리-30분-템플릿) 적용)

### Week 14: 종합 리뷰 & SaaS 비전 제시 🎯
**[0:00 - 1:00] 수강생 성과 리포트 발표**
* 실패 사례를 가장 칭찬해 줍니다. "실패는 데이터를 남겼으니 성공입니다."

**[1:00 - 1:40] 피드백 수집 및 SaaS 비전 제시 (가장 중요)**
* **강사 핵심 멘트**: "14주 동안 매번 트렌드 찾고 마진 계산하느라 힘들었죠? 그 고통을 해결할 **강사 자체 개발 스캐너/마진 계산기 SaaS**를 다음 달에 런칭합니다. 여러분은 1기니까 평생 무료로 쓰게 해드릴게요. 대신 피드백만 주세요."
* **효과**: 수강생들이 스스로 불편함을 뼈저리게 느꼈기 때문에, SaaS 런칭 즉시 열성적인 베타 테스터로 전환됩니다.

**[1:40 - 2:00] 다채널 확장 + 졸업 후 다음 90일**
* [Week 14 [심화] 다채널](../Week14_Final_Review_SaaS_Pitch.md) — Shopify·TikTok Shop·Amazon·eBay·Etsy 정책 비교. Phase 4·5 진화 경로 시연.
* **🆕 본 주차 신규 Master Prompt 시연**: [§36 Brand Voice Cross-Channel](../02_Master_Prompts.md) — 영상·이메일·DM·캡션·광고 5채널 톤 5축 자동 점수 + drift 추적. 분기마다 1회 권장.
* [Appendix D 졸업 직후 7일 Sprint](../Appendix_D_First_100_Customers.md) §0.5를 화면에 띄우고 다음 월요일부터 D1~D7 강제 진입.

[2:00 - 2:30] 공통 마무리 30분 — 단, **마지막 회차이므로 Q&A는 30분 풀 사용**. 졸업 후 단톡 운영 + 6개월 후 1기 동창회 일정 안내.
