import Link from 'next/link';

export default function CurriculumIndex() {
  const weeks = [
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

  return (
    <div className="py-12 px-8 max-w-5xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center">
          <span className="mr-3">📚</span> Curriculum Reader
        </h1>
        <p className="text-lg text-slate-500 mt-3 font-medium">
          14주 마스터 클래스 전체 강의 교안을 열람합니다. 원본 Markdown 파일은 자동 렌더링됩니다.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h2 className="text-lg font-bold text-slate-800">주차별 강의 스크립트 (강사용)</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {weeks.map((week) => (
            <li key={week.num} className="hover:bg-slate-50 transition-colors">
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
    </div>
  );
}
