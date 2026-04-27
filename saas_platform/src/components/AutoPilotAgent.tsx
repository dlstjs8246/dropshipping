'use client';
import { useState } from 'react';

export default function AutoPilotAgent() {
  const [autoFulfill, setAutoFulfill] = useState(false);
  const [ragCs, setRagCs] = useState(false);
  const [priceMonitor, setPriceMonitor] = useState(true);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <span className="text-2xl mr-2">🤖</span> Auto-Pilot Agent
        </h2>
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">Phase 3</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">복잡한 Make.com 시나리오를 숨기고, 버튼 하나로 AI 운영을 시작합니다.</p>
      
      <div className="space-y-4">
        {/* Toggle 1 */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-gray-800">자동 발주 (Auto-Fulfillment)</h3>
            <p className="text-xs text-gray-500 mt-1">Shopify 주문 발생 시 CJ Dropshipping 자동 발주</p>
          </div>
          <button 
            onClick={() => setAutoFulfill(!autoFulfill)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${autoFulfill ? 'bg-green-500' : 'bg-gray-200'}`}
          >
            <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${autoFulfill ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 2 */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-gray-800">RAG 기반 고객센터 AI</h3>
            <p className="text-xs text-gray-500 mt-1">상점 매뉴얼 학습 후 고객 이메일 자동 응답 초안 작성</p>
          </div>
          <button 
            onClick={() => setRagCs(!ragCs)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${ragCs ? 'bg-green-500' : 'bg-gray-200'}`}
          >
            <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${ragCs ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 3 */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-gray-800">소싱가 방어 봇</h3>
            <p className="text-xs text-gray-500 mt-1">알리/CJ 원가 인상 시 즉시 Slack 알림 전송</p>
          </div>
          <button 
            onClick={() => setPriceMonitor(!priceMonitor)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${priceMonitor ? 'bg-green-500' : 'bg-gray-200'}`}
          >
            <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${priceMonitor ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
