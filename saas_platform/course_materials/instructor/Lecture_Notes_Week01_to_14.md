# 🎓 강사용 14주 마스터 교안 & 대본 (Lecture Notes)

> **강사 체크리스트 (수업 전)**
> - 수강생용 Notion 대시보드 링크 준비 및 공유
> - `02_Master_Prompts.md` 열어두기
> - (Week 10 이후) Make.com 템플릿(Blueprint) 사전 세팅 및 테스트 완료

---

## 🟢 Phase 1: 기초 + 비즈니스 설계 (Week 1~3)

### Week 1: AI의 세계 + 드랍쉬핑 아키텍처 🌍
**[0:00 - 0:10] 오프닝**
* **멘트**: "이 14주의 목표는 단순한 '쇼핑몰 창업'이 아닙니다. AI와 노코드를 통해 비즈니스 MVP를 직접 런칭하고, 이 프로세스를 혼자 반복할 수 있는 '능력'을 기르는 것입니다."

**[0:10 - 0:40] 이론: 2026 드랍쉬핑과 AI의 한계**
* **설명**: "할루시네이션(환각)을 조심해야 합니다. AI가 주는 데이터를 그대로 믿지 말고 반드시 크로스체크해야 합니다. 2026년 드랍쉬핑은 세금(관세 125%)과 배송 속도 싸움입니다."

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
* **설명**: "소싱가가 10달러라고 내 원가가 10달러가 아닙니다. 배송비와 최근 이슈인 관세(125%)를 더한 Landed Cost가 진짜 원가입니다."

**[0:30 - 2:00] 실습: 스코어카드 작성 및 최종 니치 확정**
* **실습 가이드**: `03_Scorecard_Template.csv`를 열어 수강생들이 자신의 후보 상품을 기입하게 합니다. 23점을 넘는 상품이 나올 때까지 반복합니다.
* **심화 자료 안내**: DDP/DDU와 캐리어 비교는 [Appendix C](../Appendix_C_Shipping_Carriers_DDP_DDU.md)를 졸업 전 1회독 권장.

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
* **심화 자료 안내**: 다중 AI 연결 워크플로우 10종은 [Supplement 05](../Supplement_05_AI_Workflow_Recipes.md). 단일 프롬프트의 한계를 깨우치는 결정적 자료.
* **운영 플레이북 안내**: 스토어 완성 후 첫 매출 30~90일 운영은 [Appendix D 첫 100명 플레이북](../Appendix_D_First_100_Customers.md) — Day 0 체크리스트 8개를 W6 종료 직후 함께 점검 권장. Stuck Recovery Tree로 막힘 회피.

---

## 🟠 Phase 3: 마케팅 & 런칭 (Week 7~9)

### Week 7: 크리에이티브 공장 (대량 생산) 🎬
**[0:00 - 0:30] 이론: 3초 훅의 중요성**
* **멘트**: "틱톡에서 첫 3초 안에 시선을 끌지 못하면 끝입니다. 예쁜 영상이 아니라 도파민을 자극하는 영상이 필요합니다."

**[0:30 - 2:00] 실습: 마케팅 에셋 생성**
* **실습 가이드**: 이번 달만 ChatGPT Plus를 결제하게 하여 DALL-E로 이미지를 30장 뽑습니다. CapCut 템플릿에 맞춰 빠르게 영상을 편집하는 노하우 전수.
* **심화 자료 안내**: DALL-E/Midjourney 5종 프롬프트 팩은 [Master Prompts §5](../02_Master_Prompts.md)를 띄워두고 변수만 바꾸게 지도. 음성·영상·음악 통합 스택은 [Supplement 06](../Supplement_06_AI_Asset_Generation_Stack.md) — ElevenLabs/Runway/Suno 활용으로 영상 1개 30분 제작.

### Week 8: 제휴 마케팅 (오가닉 바이럴) 세팅 🤝
**[0:00 - 0:40] 이론: 무료 트래픽의 핵심, 제휴 구조**
* **설명**: "돈을 태워서 광고하는 건 나중입니다. 커미션을 20% 높게 주고 크리에이터들이 알아서 내 물건을 팔게 만드는 '시스템'을 구축할 겁니다."

**[0:40 - 2:00] 실습: AI 초개인화 DM 아웃리치**
* **실습 가이드**: AI를 활용해 각 인플루언서의 최근 영상 내용을 언급하는 맞춤형 DM 100개를 순식간에 작성하는 법을 보여줍니다.
* **심화 자료 안내**: 채널 분석은 [Master Prompts §6](../02_Master_Prompts.md), DM 풀 프롬프트는 [§7](../02_Master_Prompts.md). 2단계 파이프라인으로 운영.
* **L2 비서화 안내**: 채널 분석 + 개인화 DM을 매번 수동 호출하지 않고 어시스턴트 1개로 묶는 풀 빌드는 [Supplement 09 §8 DM 비서](../Supplement_09_L2_AI_Assistant_Building.md). 졸업 후 100명 자동 처리.

### Week 9: 데이터 대시보드 + 유료 광고 소액 부스팅 📊
**[0:00 - 0:30] 이론: ROAS의 함정과 광고 진입 조건**
* **멘트**: "광고비 투입 기준을 철저히 지키세요. 오가닉으로 UGC가 3개 이상 터졌을 때만 광고비를 하루 $5씩 태우는 겁니다."

**[0:30 - 2:00] 실습: Spark Ads 집행**
* **실습 가이드**: 반응이 좋았던 크리에이터 영상을 활용해 틱톡 Spark Ads 소액 캠페인을 세팅합니다. Ads Manager 18단계 메뉴 경로는 Week 9 본문 Step 2-B 참조.
* **심화 자료 안내**: 일예산 결정은 [Supplement_02 CSV](../Supplement_02_Ad_Budget_Calculator.csv)에 본인 매출목표 입력 후 자동 산출.

---

## 🟣 Phase 4: AI Agent & 자동화 (Week 10~12)

### Week 10: 운영 자동화 1단계 (CS & 주문) 🤖
**[0:00 - 0:30] 이론: 반복 업무의 정의**
* **설명**: "오늘부터는 여러분이 자는 동안에도 시스템이 돌아가게 만들 겁니다."

**[0:30 - 2:00] 실습: 템플릿 복사 (강사 주도)**
* **실습 가이드**: 수강생이 직접 Make 시나리오를 짜면 100% 에러가 납니다. 강사가 미리 준비한 Blueprint URL을 주고 'Import' 버튼만 누르게 하여 API 키만 연결하도록 지도합니다.
* **심화 자료 안내**: 환불·법적 이슈는 [Appendix A §6 Dispute SOP](../Appendix_A_Refund_Legal_Checklist.md) 참조.
* **L3 무인 시스템 안내**: 진짜 무인 24/7 시스템 마스터 아키텍처는 [Supplement 10 §2](../Supplement_10_L3_AI_Agent_Building.md), Build 1 Single Agent 풀 코드(Make + Claude API)는 [§3](../Supplement_10_L3_AI_Agent_Building.md). 본 W10 Make 시나리오는 "Agent-lite" — Claude API 의사결정이 추가되어야 진짜 Agent가 됨.

### Week 11: 지능형 RAG & 모니터링 자동화 🧠
**[0:00 - 0:50] 이론: RAG와 Agent 개념**
* **설명**: "RAG는 AI에게 내 회사 매뉴얼을 쥐어주는 겁니다. 엉뚱한 대답을 안 하게 룰을 정해주는 거죠."

**[0:50 - 2:00] 실습: Claude Projects RAG 체험**
* **실습 가이드**: 상품 상세정보, 배송 정책이 적힌 PDF를 Claude Projects에 업로드하고, AI가 완벽한 CS 이메일을 답변하는 것을 체험시킵니다.
* **심화 자료 안내**: Custom GPTs vs Claude Projects vs Gemini Gems 비교 + 5개 Agent 청사진은 [Supplement 07](../Supplement_07_AI_Agent_Builder_Comparison.md) (AI Mastery Track L3). 졸업 후 30일 내 5개 Agent 직접 구축.
* **L2 비서 빌드 안내**: 본 시간에 만든 CS 봇을 본인 정책·과거 응대 50건·금지어로 확장한 카피·DM·CS 3종 비서 풀 빌드는 [Supplement 09](../Supplement_09_L2_AI_Assistant_Building.md). Supplement 07이 *비교*라면 09는 *빌드 매뉴얼*.
* **L3 Browser Use 안내**: 정적 HTML로 안 잡히는 SPA·로그인 페이지까지 모니터링은 [Supplement 10 §4 Browser Use Agent](../Supplement_10_L3_AI_Agent_Building.md).

### Week 12: 데이터 기반 스케일업 & 피벗 📈
**[0:00 - 0:30] 이론: 데이터 기반 의사결정**
* **멘트**: "마진이 30% 밑으로 떨어지면 당장 스톱하고 원인을 분석해야 합니다."

**[0:30 - 2:00] 실습: 백엔드 데이터 분석**
* **실습 가이드**: 스토어 1달 데이터를 CSV로 다운받아 Claude에 올리고 병목 구간(이탈률 등)을 도출하게 합니다.
* **심화 자료 안내**: 분석 풀 프롬프트는 [Master Prompts §9](../02_Master_Prompts.md), 4시트 Sheets 구조는 Week 12 본문 Step 1-A 참조.

---

## 🚀 Phase 5: 확장 & 종합 (Week 13~14)

### Week 13: 워크플로우 자동화 고도화 🏗️
* **핵심 내용**: Make.com의 Router(분기점)를 이용해 VIP 고객과 일반 고객의 메일을 다르게 자동 발송하는 고도화 실습 진행. 후반 40분은 3-Agent 흐름(Watcher → Analyst → Communicator) 시연.
* **심화 자료 안내**: Multi-Agent 분류는 [Master Prompts §10](../02_Master_Prompts.md), 5통 환영 이메일 시퀀스 자동 생성은 [§11](../02_Master_Prompts.md). 깊이 있는 이메일 자동화는 [Supplement 01](../Supplement_01_Email_Automation_Playbook.md).
* **L3 패턴 일반화 안내**: Watcher → Analyst → Communicator 패턴을 재사용 가능 골격으로 일반화 + 핸드오프 JSON 스키마 표준 + 에러 회복 룰은 [Supplement 10 §5](../Supplement_10_L3_AI_Agent_Building.md). 본 W13의 1회성 사례를 졸업 후 모든 Multi-Agent에 재사용.

### Week 14: 종합 리뷰 & SaaS 비전 제시 🎯
**[0:00 - 1:00] 수강생 성과 리포트 발표**
* 실패 사례를 가장 칭찬해 줍니다. "실패는 데이터를 남겼으니 성공입니다."

**[1:00 - 1:40] 피드백 수집 및 SaaS 비전 제시 (가장 중요)**
* **강사 핵심 멘트**: "14주 동안 매번 트렌드 찾고 마진 계산하느라 힘들었죠? 그 고통을 해결할 **강사 자체 개발 스캐너/마진 계산기 SaaS**를 다음 달에 런칭합니다. 여러분은 1기니까 평생 무료로 쓰게 해드릴게요. 대신 피드백만 주세요."
* **효과**: 수강생들이 스스로 불편함을 뼈저리게 느꼈기 때문에, SaaS 런칭 즉시 열성적인 베타 테스터로 전환됩니다.
