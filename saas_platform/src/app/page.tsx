import MarginCalculator from '@/components/MarginCalculator';
import OpportunityScanner from '@/components/OpportunityScanner';
import CreatorPipeline from '@/components/CreatorPipeline';
import AutoPilotAgent from '@/components/AutoPilotAgent';
import ProfitDashboard from '@/components/ProfitDashboard';

export default function Home() {
  return (
    <div className="py-8 px-8 max-w-[1600px] mx-auto w-full">
      {/* Header Area */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Overview Dashboard</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            14주차 드랍쉬핑 파이프라인이 정상적으로 자동화되어 가동 중입니다.
          </p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Shopify Live
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            TikTok Ads Live
          </span>
        </div>
      </div>

      {/* Top Row: Phase 4 & Phase 3 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2">
          <ProfitDashboard />
        </div>
        <div className="xl:col-span-1">
          <AutoPilotAgent />
        </div>
      </div>

      {/* Middle Row: Phase 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <OpportunityScanner />
        <MarginCalculator />
      </div>

      {/* Bottom Row: Phase 2 */}
      <div className="grid grid-cols-1 gap-6 pb-12">
        <CreatorPipeline />
      </div>
      
    </div>
  );
}
