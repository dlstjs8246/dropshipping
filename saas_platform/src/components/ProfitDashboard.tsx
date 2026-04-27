'use client';
import { useState } from 'react';

export default function ProfitDashboard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 transition-all h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <span className="text-2xl mr-2">📈</span> Profit Dashboard
        </h2>
        <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold border border-emerald-200 shadow-sm">Phase 4</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">Shopify(매출)와 TikTok Ads(광고비), 공급처(원가) 데이터를 통합하여 **진성 순이익(Net Profit)**을 실시간으로 추적합니다.</p>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">총 매출 (Revenue)</p>
          <p className="text-2xl font-black text-gray-900">$1,240.00</p>
          <p className="text-xs text-green-500 font-medium mt-2 flex items-center">↑ 12% vs last week</p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">총 원가 (Landed Cost)</p>
          <p className="text-2xl font-black text-red-500">-$450.00</p>
          <p className="text-xs text-gray-400 font-medium mt-2">관세 125% 반영됨</p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">광고비 (Ad Spend)</p>
          <p className="text-2xl font-black text-orange-500">-$150.00</p>
          <p className="text-xs text-gray-400 font-medium mt-2">ROAS: 8.26</p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-emerald-200 rounded-full opacity-20 blur-xl"></div>
          <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-1">순이익 (Net Profit)</p>
          <p className="text-3xl font-black text-emerald-600">$640.00</p>
          <p className="text-xs text-emerald-600 font-bold mt-2">마진율 51.6%</p>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <h3 className="text-sm font-black text-blue-900 mb-3 flex items-center">
          <span className="mr-2 text-lg">🧠</span> AI Actionable Insights
        </h3>
        <ul className="text-sm text-blue-800 space-y-3">
          <li className="flex items-start bg-white p-3 rounded-lg border border-blue-50 shadow-sm">
            <span className="mr-3 text-green-500 text-lg">✨</span> 
            <span>현재 <b>[스마트 자세 교정기]</b>의 ROAS가 8.26으로 타겟(3.0)을 크게 상회합니다. 즉시 틱톡 Spark Ads 일일 예산을 $50로 스케일업(Scale-up) 할 것을 권장합니다.</span>
          </li>
          <li className="flex items-start bg-white p-3 rounded-lg border border-blue-50 shadow-sm">
            <span className="mr-3 text-orange-500 text-lg">⚠️</span> 
            <span><b>[LED 무드등]</b>의 원가가 CJ Dropshipping에서 어제 대비 $1.50 인상되었습니다. 이에 따라 마진율이 28%로 하락했습니다. 판매가를 $3 인상하세요.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
