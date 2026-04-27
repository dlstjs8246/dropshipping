import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Command Center | AI Dropshipping SaaS",
  description: "AI-powered dropshipping automation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:flex flex-col shadow-2xl z-10">
            <div className="h-20 flex items-center px-6 border-b border-slate-800">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <div>
                  <span className="block text-lg font-black text-white tracking-tight leading-tight">Command Center</span>
                  <span className="block text-xs text-indigo-400 font-bold">by Master Class</span>
                </div>
              </div>
            </div>
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
              <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4">Main</p>
              <Link href="/" className="hover:bg-indigo-600 hover:text-white group flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition-colors">
                <span className="mr-3 text-lg">📊</span> SaaS Dashboard
              </Link>
              <Link href="/curriculum" className="hover:bg-indigo-600 hover:text-white group flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition-colors">
                <span className="mr-3 text-lg">📚</span> Curriculum Reader
              </Link>
              
              <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-8">SaaS Modules</p>
              <Link href="/" className="hover:bg-slate-800 hover:text-white group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors">
                <span className="mr-3 text-lg">🔍</span> Research (Ph 1)
              </Link>
              <Link href="/" className="hover:bg-slate-800 hover:text-white group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors">
                <span className="mr-3 text-lg">🤝</span> Creator CRM (Ph 2)
              </Link>
              <Link href="/" className="hover:bg-slate-800 hover:text-white group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors">
                <span className="mr-3 text-lg">🤖</span> Auto-Pilot (Ph 3)
              </Link>
            </nav>
            <div className="p-4 border-t border-slate-800 bg-slate-950/50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">1기</div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-white">강사 / 수강생</p>
                  <p className="text-xs text-emerald-400 font-medium">Lifetime Free</p>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
