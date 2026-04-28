import Link from 'next/link';

type Item = { num?: number; title: string; file: string; format?: 'md' | 'csv'; subtitle?: string };

export default function CurriculumIndex() {
  const weeks: Item[] = [
    { num: 1, title: 'AI의 세계와 2026 드랍쉬핑 아키텍처', file: 'Week01_AI_Dropshipping_Intro' },
    { num: 2, title: '프롬프트 엔지니어링 + 필터링 (Kill Criteria)', file: 'Week02_Prompt_Engineering_Kill_Criteria' },
    { num: 3, title: '마진 설계 + 세무 리스크 + 스코어카드 완성', file: 'Week03_Landed_Cost_Scorecard' },
    { num: 4, title: 'AI 브랜딩 + 스토어 인프라 개설', file: 'Week04_AI_Branding_Store_Setup' },
    { num: 5, title: '소싱 파이프라인 연동 + AI 카피라이팅', file: 'Week05_Sourcing_and_Copywriting' },
    { num: 6, title: 'AI 코딩 (Cursor) + 스토어 기술적 최적화', file: 'Week06_Cursor_Coding_Optimization' },
    { num: 7, title: '크리에이티브 공장 (AI 에셋 대량 생산)', file: 'Week07_AI_Creative_Factory' },
    { num: 8, title: '제휴 마케팅 (오가닉 바이럴) 세팅', file: 'Week08_TikTok_Affiliate_Outreach' },
    { num: 9, title: '오가닉 성과 분석 + 소액 유료 광고(Spark Ads)', file: 'Week09_SparkAds_and_Organic' },
    { num: 10, title: '운영 자동화 1단계 (Make.com 발주/CS 자동화)', file: 'Week10_Auto_Fulfillment_CS' },
    { num: 11, title: '지능형 RAG 고객센터 & 원가 방어 모니터링', file: 'Week11_RAG_Price_Monitoring' },
    { num: 12, title: '데이터 기반 스케일업 & 피벗(Pivot)', file: 'Week12_Data_Driven_ScaleUp' },
    { num: 13, title: '워크플로우 고도화 (VIP 고객 관리)', file: 'Week13_Advanced_Workflows' },
    { num: 14, title: '최종 리뷰 및 자체 SaaS (Command Center) 런칭', file: 'Week14_Final_Review_SaaS_Pitch' },
  ];

  const supplements: Item[] = [
    {
      title: '📋 자가 진단 & 학습 진척 추적 시스템 (매주 10분)',
      file: 'Supplement_11_Self_Assessment_and_Progress_Tracker',
      subtitle: 'Week 0 시작점 — 매주 일요일 22시 작성',
    },
    {
      title: '이메일 자동화 플레이북 (Klaviyo + 시퀀스 4종)',
      file: 'Supplement_01_Email_Automation_Playbook',
      subtitle: 'Week 13 직후 권장',
    },
    {
      title: '광고 예산 계산기 (4 시나리오 CSV)',
      file: 'Supplement_02_Ad_Budget_Calculator',
      format: 'csv',
      subtitle: 'Week 9 직후 권장',
    },
    {
      title: '🎯 L1 생성형 AI 다루는법 (할루시네이션·교차검증·언어 결정)',
      file: 'Supplement_08_L1_Generative_AI_Foundations',
      subtitle: 'Week 1 직전·직후 권장 — AI Mastery Track L1 (시작점)',
    },
    {
      title: '🛠 L2 AI 도구 선택 가이드 (작업별 매트릭스)',
      file: 'Supplement_03_AI_Tool_Selection_Guide',
      subtitle: 'Week 1 직후 권장 — AI Mastery Track L2',
    },
    {
      title: '🛠 L2 고급 프롬프트 엔지니어링 (CoT·Few-shot·Self-Critique 등)',
      file: 'Supplement_04_Advanced_Prompt_Engineering',
      subtitle: 'Week 2 직후 권장 — AI Mastery Track L2',
    },
    {
      title: '🛠 L2 AI 워크플로우 레시피 (다중 AI 연결 10종)',
      file: 'Supplement_05_AI_Workflow_Recipes',
      subtitle: 'Week 6 직후 권장 — AI Mastery Track L2',
    },
    {
      title: '🛠 L2 AI 에셋 생산 스택 (음성·영상·음악 통합)',
      file: 'Supplement_06_AI_Asset_Generation_Stack',
      subtitle: 'Week 7 직후 권장 — AI Mastery Track L2',
    },
    {
      title: '🛠 L2 AI Assistant 사용법 — 본인 비서 만들기 (카피·DM·CS)',
      file: 'Supplement_09_L2_AI_Assistant_Building',
      subtitle: 'Week 11 직후 권장 — AI Mastery Track L2',
    },
    {
      title: '🤖 L3 AI Agent 빌더 비교 (Custom GPTs vs Claude Projects vs Gems)',
      file: 'Supplement_07_AI_Agent_Builder_Comparison',
      subtitle: 'Week 11 직후 권장 — AI Mastery Track L3',
    },
    {
      title: '🤖 L3 AI Agent 사용법 — 의사결정 자동화 & 무인 시스템',
      file: 'Supplement_10_L3_AI_Agent_Building',
      subtitle: 'Week 13 직후 권장 — AI Mastery Track L3 (최심화)',
    },
  ];

  const appendices: Item[] = [
    {
      title: '환불정책 + 법적 체크리스트 (한 → 미)',
      file: 'Appendix_A_Refund_Legal_Checklist',
      subtitle: 'Week 10 직후 권장',
    },
    {
      title: '상품 페이지 SEO 체크리스트',
      file: 'Appendix_B_SEO_Checklist',
      subtitle: 'Week 5 직후 권장',
    },
    {
      title: '배송 옵션 분석 (DDP/DDU + 캐리어 비교)',
      file: 'Appendix_C_Shipping_Carriers_DDP_DDU',
      subtitle: 'Week 3 직후 권장',
    },
    {
      title: '🎯 첫 100명 고객 확보 90일 플레이북',
      file: 'Appendix_D_First_100_Customers',
      subtitle: 'Week 6 직후 권장 — 졸업 후 6개월 생존율 결정',
    },
    {
      title: '📖 용어집 (Glossary) — ROAS·CVR·DDP·HTS·CoT·RAG 등 90+ 용어',
      file: 'Appendix_E_Glossary',
      subtitle: '매 주차 옆 탭에 띄워두기 — 한국 학습자 필수',
    },
  ];

  return (
    <div className="py-12 px-8 max-w-5xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center">
          <span className="mr-3">📚</span> Curriculum Reader
        </h1>
        <p className="text-lg text-slate-500 mt-3 font-medium">
          14주 마스터 클래스 전체 강의 교안 + 보충 강의 + 부록을 열람합니다.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h2 className="text-lg font-bold text-slate-800">📅 주차별 강의 스크립트 (강사용)</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {weeks.map((week) => (
            <li key={week.file} className="hover:bg-slate-50 transition-colors">
              <Link href={`/curriculum/${week.file}`} className="flex items-center px-6 py-4 group">
                <span className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black text-xl mr-5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {week.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{week.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">Week {week.num} Lecture Notes</p>
                </div>
                <div className="ml-auto text-slate-300 group-hover:text-indigo-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-slate-100 bg-emerald-50">
          <h2 className="text-lg font-bold text-slate-800">🆕 보충 강의 (옵션 트랙)</h2>
          <p className="text-sm text-slate-600 mt-1">정규 14주 외 깊이 있게 다루는 옵션 강의</p>
        </div>
        <ul className="divide-y divide-slate-100">
          {supplements.map((item) => (
            <li key={item.file} className="hover:bg-slate-50 transition-colors">
              <Link href={`/curriculum/${item.file}`} className="flex items-center px-6 py-4 group">
                <span className="flex-shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-black text-base mr-5 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.format === 'csv' ? 'CSV' : 'MD'}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.subtitle}</p>
                </div>
                <div className="ml-auto text-slate-300 group-hover:text-emerald-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-amber-50">
          <h2 className="text-lg font-bold text-slate-800">📚 부록 (졸업 후 참조용)</h2>
          <p className="text-sm text-slate-600 mt-1">운영 중 부닥치는 법적·기술적 이슈 빠른 참조</p>
        </div>
        <ul className="divide-y divide-slate-100">
          {appendices.map((item) => (
            <li key={item.file} className="hover:bg-slate-50 transition-colors">
              <Link href={`/curriculum/${item.file}`} className="flex items-center px-6 py-4 group">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-black text-base mr-5 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  📄
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.subtitle}</p>
                </div>
                <div className="ml-auto text-slate-300 group-hover:text-amber-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
