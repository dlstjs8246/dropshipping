import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function LectureReader({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // course_materials 디렉토리의 파일 읽기
  const filePath = path.join(process.cwd(), '../course_materials', `${slug}.md`);
  
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    content = '# Error\n파일을 찾을 수 없습니다. 경로(`course_materials/`)를 확인해주세요.';
  }

  return (
    <div className="py-10 px-8 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <Link href="/curriculum" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          목차로 돌아가기
        </Link>
      </div>

      <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <article className="
          [&_h1]:text-4xl [&_h1]:font-black [&_h1]:mb-8 [&_h1]:pb-6 [&_h1]:border-b [&_h1]:border-slate-200 [&_h1]:text-slate-900
          [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-slate-800 [&_h2]:flex [&_h2]:items-center
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-slate-800
          [&_p]:text-slate-700 [&_p]:leading-loose [&_p]:mb-5 [&_p]:text-lg
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
          [&_li]:text-slate-700 [&_li]:text-lg [&_li]:leading-relaxed
          [&_strong]:font-extrabold [&_strong]:text-indigo-900
          [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-500 [&_blockquote]:bg-indigo-50/50 [&_blockquote]:p-6 [&_blockquote]:rounded-r-2xl [&_blockquote]:text-slate-700 [&_blockquote]:my-8 [&_blockquote]:italic
          [&_hr]:my-10 [&_hr]:border-slate-200
          [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-left
          [&_th]:border-b-2 [&_th]:border-slate-300 [&_th]:p-4 [&_th]:bg-slate-50 [&_th]:font-bold [&_th]:text-slate-800
          [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-4 [&_td]:text-slate-700
          [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-pink-600 [&_code]:font-mono [&_code]:text-sm
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
