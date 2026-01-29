"use client";

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart
} from 'recharts';

const radarData = [
  { subject: 'REACH', A: 120, fullMark: 150 },
  { subject: 'ENGAGEMENT', A: 98, fullMark: 150 },
  { subject: 'CONSISTENCY', A: 86, fullMark: 150 },
  { subject: 'AUTHENTICITY', A: 99, fullMark: 150 },
  { subject: 'GROWTH', A: 85, fullMark: 150 },
];

const growthData = [
  { month: 'JAN', followers: 4000 },
  { month: 'FEB', followers: 5000 },
  { month: 'MAR', followers: 4500 },
  { month: 'APR', followers: 6000 },
  { month: 'MAY', followers: 8500 },
  { month: 'JUN', followers: 9000 },
];

export default function NilAnalytics() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-10 flex flex-col gap-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">MAYA ROBINSON <span className="text-primary-purple">#23</span></h1>
              <div className="bg-primary-purple/20 border border-primary-purple/40 text-primary-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Top Prospect</div>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-purple text-[20px]">monetization_on</span>
                <span>Current Valuation: <span className="text-white font-bold">$45,000</span></span>
              </div>
              <div className="w-[1px] h-4 bg-gray-700 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0bda76] text-[20px]">trending_up</span>
                <span>Composite Score: <span className="text-white font-bold">88/100</span></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 h-11 px-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">share</span>
              Share Profile
            </button>
            <button className="flex items-center gap-2 h-11 px-6 rounded-xl bg-primary-purple text-white text-sm font-bold shadow-lg hover:bg-primary-purple/80 transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Report
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Marketability Index */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col h-[420px] relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Marketability Index</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Composite Breakdown</p>
              </div>
              <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-primary-purple">radar</span>
              </div>
            </div>
            <div className="flex-1 w-full h-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#999', fontSize: 10 }} />
                  <Radar
                    name="Maya"
                    dataKey="A"
                    stroke="#930df2"
                    fill="#930df2"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#1c1022]/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-primary-purple/30">
                <span className="text-2xl font-bold text-white">88</span>
              </div>
            </div>
          </div>

          {/* Projected Growth */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-6 flex flex-col h-[420px]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Projected Follower Growth</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Next 12 Months Forecast</span>
                  <span className="px-2 py-0.5 rounded bg-[#0bda76]/10 text-[#0bda76] text-[10px] font-bold border border-[#0bda76]/20">+125% High Probability</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#930df2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#930df2" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} dy={10} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#930df2' }}
                  />
                  <Area type="monotone" dataKey="followers" stroke="#930df2" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Other components remain similar but updated with style consistency */}
        <div className="lg:col-span-12 glass-card rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-1 flex items-center gap-6 justify-center md:justify-start border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
             <div className="relative size-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-white/5"></div>
                <div className="absolute inset-0 rounded-full border-8 border-primary-purple border-t-transparent -rotate-45"></div>
                <div className="flex flex-col items-center">
                   <span className="text-[10px] text-gray-400">TOTAL</span>
                   <span className="text-xl font-black text-white">$45k</span>
                </div>
             </div>
             <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                   <div className="size-2 rounded-full bg-primary-purple"></div>
                   <span className="text-xs font-bold">Social (60%)</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="size-2 rounded-full bg-[#0bda76]"></div>
                   <span className="text-xs font-bold">Merch (25%)</span>
                </div>
             </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Recent Deal Activity</h3>
            <div className="space-y-3">
               {[
                 { title: "Nike - Fall Campaign", type: "Merchandise", val: "+ $5,000", status: "Active" },
                 { title: "Gatorade - TikTok Series", type: "Social Media", val: "+ $12,500", status: "In Progress" }
               ].map((deal, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-transparent hover:border-primary-purple/30 transition-all">
                    <div className="flex items-center gap-3">
                       <div className="size-10 rounded bg-background-dark flex items-center justify-center"><span className="material-symbols-outlined text-primary-purple">checkroom</span></div>
                       <div>
                          <p className="text-sm font-bold">{deal.title}</p>
                          <p className="text-[10px] text-gray-500 uppercase">{deal.type}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold text-[#0bda76]">{deal.val}</p>
                       <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">{deal.status}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
