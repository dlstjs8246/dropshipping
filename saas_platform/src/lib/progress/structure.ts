// Source of truth for the Self-Assessment Hub structure.
// Mirrors Supplement_11_Self_Assessment_and_Progress_Tracker.md.

export interface PreflightItem {
  id: string;
  category: "환경" | "금전" | "멘탈" | "사전 학습";
  label: string;
}

export const PREFLIGHT: PreflightItem[] = [
  // 환경 8
  { id: "p1", category: "환경", label: "ChatGPT 계정 가입 + 첫 5문장 시퀀스 실행" },
  { id: "p2", category: "환경", label: "Claude 계정 가입" },
  { id: "p3", category: "환경", label: "Gemini 계정 가입" },
  { id: "p4", category: "환경", label: "Perplexity 계정 가입" },
  { id: "p5", category: "환경", label: "노션 빈 워크스페이스 1개 생성" },
  { id: "p6", category: "환경", label: "Cursor 에디터 다운로드" },
  { id: "p7", category: "환경", label: "한글/영문 입력 자유롭게 전환 가능" },
  { id: "p8", category: "환경", label: "Chrome/Edge에서 탭 3개 동시 띄우기 익숙함" },
  // 금전 4
  { id: "p9", category: "금전", label: "외국인 결제 가능 카드 1장" },
  { id: "p10", category: "금전", label: "PayPal 계정 (백업)" },
  { id: "p11", category: "금전", label: "첫 3개월 학습용 예산 ~$50 확보" },
  { id: "p12", category: "금전", label: "4-Layer 적층 관세 구조 인지 (Section 122+301+232)" },
  // 멘탈 4
  { id: "p13", category: "멘탈", label: "\"월 천만원\" 광고를 거부할 수 있다" },
  { id: "p14", category: "멘탈", label: "첫 30일 매출 0건도 정상이라는 것을 안다" },
  { id: "p15", category: "멘탈", label: "14주 동안 주 5~10시간 투입 가능" },
  { id: "p16", category: "멘탈", label: "영어 입력에 거부감 없음" },
  // 사전 학습 4
  { id: "p17", category: "사전 학습", label: "Supplement 08 L1 §1~§3 1회독" },
  { id: "p18", category: "사전 학습", label: "Supplement 08 §6.2 4단계 검증 프로토콜 암기" },
  { id: "p19", category: "사전 학습", label: "Supplement 03 도구 매트릭스 훑기" },
  { id: "p20", category: "사전 학습", label: "본인 후보 상품 카테고리 3개 머릿속에 있음" },
];

export interface WeekDef {
  num: number;
  title: string;
  items: { id: string; label: string }[];
}

export const WEEKS: WeekDef[] = [
  {
    num: 1,
    title: "AI 세팅 + 드랍쉬핑 아키텍처",
    items: [
      { id: "1.1", label: "ChatGPT/Claude/Gemini 동일 프롬프트 비교 1회 실행" },
      { id: "1.2", label: "S08 §6.2 4단계 검증을 1번 손으로 적용" },
      { id: "1.3", label: "De Minimis 폐지(2025) + IEEPA 무효(2026.2) → 122+301+232 4-Layer 의미 1줄 설명 가능" },
      { id: "1.4", label: "본인 후보 니치 카테고리 3개 메모" },
      { id: "1.5", label: "Week 2 Kill Criteria 미리보기 1회독" },
    ],
  },
  {
    num: 2,
    title: "프롬프트 + Kill Criteria",
    items: [
      { id: "2.1", label: "Master Prompts §1로 후보 3개 평가" },
      { id: "2.2", label: "PASS/FAIL 결과 노션에 기록" },
      { id: "2.3", label: "Supplement 04 6대 패턴 중 2개 시도" },
      { id: "2.4", label: "영어 vs 한국어 동일 질문 1번 비교" },
      { id: "2.5", label: "후보 상품 1개로 압축 결정" },
    ],
  },
  {
    num: 3,
    title: "마진 + 관세 + 스코어카드",
    items: [
      { id: "3.1", label: "Scorecard CSV 본인 상품으로 작성" },
      { id: "3.2", label: "23점 이상 달성 (또는 Margin Shield GO)" },
      { id: "3.3", label: "HTS 코드 다중 AI 검증 완료" },
      { id: "3.4", label: "Appendix C DDP/DDU 결정" },
      { id: "3.5", label: "Landed Cost 1줄 계산 가능" },
    ],
  },
  {
    num: 4,
    title: "브랜딩 + 스토어 인프라",
    items: [
      { id: "4.1", label: "Shopify $1 프로모션 결제" },
      { id: "4.2", label: "브랜드 패키지 5단 파이프라인 실행" },
      { id: "4.3", label: "Hero 이미지 1개 완성" },
      { id: "4.4", label: "Brand Voice 5축 정의서 1쪽 작성" },
      { id: "4.5", label: "도메인 연결 + 결제 테스트" },
    ],
  },
  {
    num: 5,
    title: "소싱 + 카피라이팅",
    items: [
      { id: "5.1", label: "CJ Dropshipping 연동" },
      { id: "5.2", label: "Master Prompts §2 PAS 카피 1개 작성" },
      { id: "5.3", label: "Self-Critique 적용해 카피 재작성" },
      { id: "5.4", label: "상세페이지 1개 완성" },
      { id: "5.5", label: "Appendix B SEO 5단계 적용" },
    ],
  },
  {
    num: 6,
    title: "Cursor + 스토어 최적화",
    items: [
      { id: "6.1", label: "Cursor 에디터로 1개 코드 수정" },
      { id: "6.2", label: "Track123 배송 추적 페이지 가동" },
      { id: "6.3", label: "모바일 Sticky Add to Cart 확인" },
      { id: "6.4", label: "Bogus Gateway 결제 테스트 통과" },
      { id: "6.5", label: "Appendix D Day 0 체크리스트 8개 통과" },
    ],
  },
  {
    num: 7,
    title: "크리에이티브 공장",
    items: [
      { id: "7.1", label: "ChatGPT Plus 1개월 결제" },
      { id: "7.2", label: "DALL-E 광고 이미지 5종 생성" },
      { id: "7.3", label: "CapCut 15초 영상 1개 완성" },
      { id: "7.4", label: "Hook → Body → CTA 구조 적용" },
      { id: "7.5", label: "Supplement 06에서 1개 도구 추가" },
    ],
  },
  {
    num: 8,
    title: "제휴 마케팅 + DM",
    items: [
      { id: "8.1", label: "5K~50K 팔로워 크리에이터 30명 리스트업" },
      { id: "8.2", label: "Master Prompts §6 채널 분석 5명 적용" },
      { id: "8.3", label: "§7 풀 DM으로 30개 발송" },
      { id: "8.4", label: "차단 회피 안티-블록 7개 룰 준수" },
      { id: "8.5", label: "응답률 5%+ 달성" },
    ],
  },
  {
    num: 9,
    title: "Spark Ads",
    items: [
      { id: "9.1", label: "TikTok BC 가입 + Pixel 연동" },
      { id: "9.2", label: "오가닉 폭발 영상 3 조건 식별" },
      { id: "9.3", label: "Spark Ads $5/일 첫 광고 라이브" },
      { id: "9.4", label: "Supplement 02 광고 예산 CSV 본인 입력" },
      { id: "9.5", label: "BEP CPA 매트릭스로 KILL/SCALE 결정" },
    ],
  },
  {
    num: 10,
    title: "자동화 1단계",
    items: [
      { id: "10.1", label: "Make.com 가입 + 첫 시나리오 Import" },
      { id: "10.2", label: "Shopify webhook → Slack 자동 알림" },
      { id: "10.3", label: "Appendix A Dispute SOP 정독" },
      { id: "10.4", label: "환불 정책 영문 페이지 게시" },
      { id: "10.5", label: "자동 발주 1건 테스트 (또는 L3 Sandbox)" },
    ],
  },
  {
    num: 11,
    title: "RAG + 모니터링",
    items: [
      { id: "11.1", label: "Claude Projects 또는 Custom GPT 1개 빌드" },
      { id: "11.2", label: "정책 PDF 5개 업로드 + 5트라이얼" },
      { id: "11.3", label: "가격 모니터링 봇 가동" },
      { id: "11.4", label: "L2 비서 3개 중 1개 빌드 시작" },
      { id: "11.5", label: "비서 일관성 5트라이얼 4/5 통과" },
    ],
  },
  {
    num: 12,
    title: "데이터 분석 + 스케일/피벗",
    items: [
      { id: "12.1", label: "Sheets 4시트 구조 가동" },
      { id: "12.2", label: "Master Prompts §9 분석 1회 실행" },
      { id: "12.3", label: "병목 1개 식별" },
      { id: "12.4", label: "2x2 스케일/피벗 매트릭스로 결정" },
      { id: "12.5", label: "ROAS·CVR·재구매율 노션 기록" },
    ],
  },
  {
    num: 13,
    title: "VIP + Multi-Agent",
    items: [
      { id: "13.1", label: "Make.com Router로 VIP 분기" },
      { id: "13.2", label: "5통 환영 시퀀스 Klaviyo 가동" },
      { id: "13.3", label: "3-Agent 흐름 시연 1회" },
      { id: "13.4", label: "Supplement 10 §5 패턴 이해" },
      { id: "13.5", label: "본인 시스템에 1개 Agent 가동" },
    ],
  },
  {
    num: 14,
    title: "종합 리뷰",
    items: [
      { id: "14.1", label: "14주 KPI 회고" },
      { id: "14.2", label: "다음 90일 Stage A~D 계획 작성" },
      { id: "14.3", label: "졸업 루브릭 3축 자가 진단" },
      { id: "14.4", label: "L2 비서 3개 빌드 일정 잡기" },
      { id: "14.5", label: "1기 Lifetime Free SaaS 베타 가동" },
    ],
  },
];

export interface AssessmentItem {
  id: string;
  label: string;
}

export const L1_ASSESSMENT: AssessmentItem[] = [
  { id: "L1-1", label: "토큰 예측 메커니즘 1줄 설명 가능" },
  { id: "L1-2", label: "환각 4유형 중 3개 이상 이름 댈 수 있음" },
  { id: "L1-3", label: "3대 AI를 모두 가입했고 동시 비교 1+회 경험" },
  { id: "L1-4", label: "한/영 결정 기준 1줄 답할 수 있음" },
  { id: "L1-5", label: "S08 §6.2 4단계 프로토콜 암기" },
  { id: "L1-6", label: "초보자 7대 함정 중 5개 이상 자기 경험" },
  { id: "L1-7", label: "무료 → 유료 전환 1순위 시점 (W7) 인지" },
  { id: "L1-8", label: "거북목 케이스를 본인 상품에 1번 적용" },
  { id: "L1-9", label: "Perplexity 가입 + 1번 사용" },
  { id: "L1-10", label: "AI 답 그대로 복붙 사고 경험" },
];

export const L2_ASSESSMENT: AssessmentItem[] = [
  { id: "L2-1", label: "Stage 1~5 모두 적용 가능" },
  { id: "L2-2", label: "카피 비서 빌드 + 5트라이얼 4/5 통과" },
  { id: "L2-3", label: "DM 비서 빌드 + 영상 디테일 인용 확인" },
  { id: "L2-4", label: "CS 비서 빌드 + 4가지 메일 유형 처리" },
  { id: "L2-5", label: "Few-shot Pool 5개 본인 데이터로 작성" },
  { id: "L2-6", label: "업로드 NEVER 6종 인지" },
  { id: "L2-7", label: "일관성·정책·형식 3-기준 모두 통과" },
  { id: "L2-8", label: "30일 챌린지 4주차 완료" },
];

export const L3_ASSESSMENT: AssessmentItem[] = [
  { id: "L3-1", label: "Assistant vs Agent 1줄 차이 설명" },
  { id: "L3-2", label: "무인 24/7 마스터 아키텍처 7개 노드 그릴 수 있음" },
  { id: "L3-3", label: "Build 1 (Order Agent) 가동" },
  { id: "L3-4", label: "Build 2 (Browser Use) 가동" },
  { id: "L3-5", label: "Build 3 (Multi-Agent CS) 가동" },
  { id: "L3-6", label: "휴먼-인-루프 4 패턴 본인 Agent에 매핑" },
  { id: "L3-7", label: "폭주 방지 4종 셋업" },
  { id: "L3-8", label: "자가 개선 회고 자동화 가동" },
  { id: "L3-9", label: "월 비용 ~$30 안에 운영" },
  { id: "L3-10", label: "절대 자동 결정 금지 매트릭스 본인 적용" },
];
