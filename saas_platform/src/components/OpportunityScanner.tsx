'use client';
import { useState } from 'react';

export default function OpportunityScanner() {
  const [criteria, setCriteria] = useState([
    { id: 1, label: '마진율 ≥ 30% (Margin Shield 확인)', checked: false },
    { id: 2, label: '무게 ≤ 500g (경량)', checked: false },
    { id: 3, label: '부피 소형 (30x30x15cm 이내)', checked: false },
    { id: 4, label: '판매가 $25~80 (충동구매 구간)', checked: false },
    { id: 5, label: '깨지지 않는 소재 (파손 방지)', checked: false },
    { id: 6, label: '계절 무관 (연중 수요)', checked: false },
    { id: 7, label: '15초 숏폼 시연 가능 (바이럴)', checked: false },
  ]);

  const handleCheck = (id: number) => {
    setCriteria(criteria.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
  };

  const passCount = criteria.filter(c => c.checked).length;
  const isGo = passCount === 7;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="text-2xl mr-2">🔍</span> Opportunity Scanner
      </h2>
      <p className="text-sm text-gray-500 mb-6">7대 Kill Criteria를 모두 통과해야 리서치를 통과합니다.</p>
      
      <div className="space-y-4 flex-grow">
        {criteria.map(c => (
          <div key={c.id} 
               className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors border ${c.checked ? 'bg-indigo-50 border-indigo-200' : 'hover:bg-gray-50 border-transparent'}`}
               onClick={() => handleCheck(c.id)}>
            <div className={`flex-shrink-0 h-6 w-6 rounded-md border flex items-center justify-center mr-3 ${c.checked ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300 bg-white'}`}>
              {c.checked && <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
            <label className={`text-sm font-medium ${c.checked ? 'text-indigo-800' : 'text-gray-700'} cursor-pointer select-none`}>
              {c.label}
            </label>
          </div>
        ))}
      </div>

      <div className={`mt-8 p-5 rounded-xl border text-center transition-all ${isGo ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-500 text-white shadow-md' : 'bg-gray-50 border-gray-200'}`}>
        <h3 className={`text-2xl font-black mb-1 ${!isGo && 'text-gray-400'}`}>
          {isGo ? '🎉 GO (소싱 진행)' : '🛑 DROP (조건 미달)'}
        </h3>
        <p className={`text-sm font-medium ${isGo ? 'text-green-50' : 'text-gray-500'}`}>
          {passCount} / 7 항목 통과
        </p>
      </div>
    </div>
  );
}
