'use client';
import { useState } from 'react';

type Creator = {
  id: number;
  handle: string;
  status: '발굴' | 'DM발송' | '샘플배송' | '영상게시';
  followers: string;
};

export default function CreatorPipeline() {
  const [creators] = useState<Creator[]>([
    { id: 1, handle: '@tech_review_jane', status: '발굴', followers: '15K' },
    { id: 2, handle: '@desk_setup_bro', status: 'DM발송', followers: '42K' },
    { id: 3, handle: '@wfh_mom', status: '샘플배송', followers: '8.5K' },
    { id: 4, handle: '@gadget_guru', status: '영상게시', followers: '110K' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case '발굴': return 'bg-gray-100 text-gray-700';
      case 'DM발송': return 'bg-blue-100 text-blue-700';
      case '샘플배송': return 'bg-purple-100 text-purple-700';
      case '영상게시': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <span className="text-2xl mr-2">🤝</span> Creator Pipeline
        </h2>
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-bold">Phase 2</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">틱톡 제휴 크리에이터 아웃리치 및 협업 현황(CRM)을 관리합니다.</p>
      
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">크리에이터</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">팔로워</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">진행 상태</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {creators.map((creator) => (
              <tr key={creator.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {creator.handle}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {creator.followers}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(creator.status)}`}>
                    {creator.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="mt-4 w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold py-2 px-4 rounded transition-colors text-sm border border-indigo-200">
        + AI 맞춤형 DM 대량 생성하기
      </button>
    </div>
  );
}
