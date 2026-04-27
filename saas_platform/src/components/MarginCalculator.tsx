'use client';
import { useState } from 'react';

export default function MarginCalculator() {
  const [sourcingPrice, setSourcingPrice] = useState<number>(10);
  const [shippingPrice, setShippingPrice] = useState<number>(4);
  const [sellingPrice, setSellingPrice] = useState<number>(45);
  
  const tariffRate = 1.25; // 125% tariff on sourcing price
  const landedCost = sourcingPrice * tariffRate + shippingPrice;
  const netProfit = sellingPrice - landedCost;
  const marginRate = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="text-2xl mr-2">🛡️</span> Margin Shield
      </h2>
      <p className="text-sm text-gray-500 mb-6">숨겨진 관세(125%)를 포함한 정확한 순이익을 계산합니다.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">소싱가 (Sourcing Price) - $</label>
          <input 
            type="number" 
            className="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 p-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
            value={sourcingPrice || ''} 
            onChange={(e) => setSourcingPrice(Number(e.target.value))} 
            placeholder="예: 10"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">국제 배송비 (Shipping) - $</label>
          <input 
            type="number" 
            className="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 p-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
            value={shippingPrice || ''} 
            onChange={(e) => setShippingPrice(Number(e.target.value))} 
            placeholder="예: 4"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">판매가 (Selling Price) - $</label>
          <input 
            type="number" 
            className="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 p-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
            value={sellingPrice || ''} 
            onChange={(e) => setSellingPrice(Number(e.target.value))} 
            placeholder="예: 45"
          />
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">📊 계산 결과</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>수입 관세 (125% 적용)</span>
            <span className="font-medium">${(sourcingPrice * 0.25).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Landed Cost (진짜 원가)</span>
            <span className="font-medium text-gray-900">${landedCost.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-blue-200">
          <div className="flex justify-between items-center mb-1">
            <span className="text-md font-bold text-gray-800">순이익 (Net Profit)</span>
            <span className="text-xl font-black text-blue-600">${netProfit.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-md font-bold text-gray-800">마진율 (Margin)</span>
            <span className={`text-lg font-black ${marginRate >= 30 ? 'text-green-500' : 'text-red-500'}`}>
              {marginRate.toFixed(1)}%
            </span>
          </div>
          <div className="mt-3 text-right">
             {marginRate >= 30 ? 
               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">✅ PASS (진행 가능)</span> : 
               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">❌ FAIL (30% 미만)</span>
             }
          </div>
        </div>
      </div>
    </div>
  );
}
