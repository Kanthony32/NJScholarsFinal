import Link from 'next/link';

export default function NilHub() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 px-6 lg:px-12 py-8 max-w-[1500px] mx-auto w-full flex flex-col gap-8">
        {/* Hero Section */}
        <section className="relative w-full rounded-3xl overflow-hidden glass-panel border-white/10 min-h-[480px] flex items-center group shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div
            className="absolute inset-0 bg-cover bg-[center_top] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA27aTWl3_rTfaa_HceL7Lv6HlFg0Utvg_OJSDOjAJA2ZLDILvK2wqtB3YvmeViox9yYtBTZqluzTirWMc9B08FtMF_zqWSLUlEVjdEQFxQpgjn5wHxto2ij5_1aVzpQMiFf_KATJ9sEgobrl2tyCOlGA36fLMZhzqybUPG73uFceRdIEwWiOcdmbgliw6A2ADHfeKKGEoqchKxstBI1oMwmFHYE57mYIUgX9KIzpWLDvY0bFdaEyZ2JGHcwLlFXpWAh_XnxPr180A")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0518] via-[#0f0518]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent"></div>
          <div className="relative z-10 p-8 md:p-16 w-full max-w-3xl flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-electric-fuchsia/20 border border-electric-fuchsia/50 text-electric-fuchsia text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                Trending Up
              </span>
              <span className="text-white/70 text-sm font-medium tracking-wide">Update: Valuation refreshed 2h ago</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white drop-shadow-xl">
              NIL COMMAND <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">CENTER</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg font-light leading-relaxed border-l-2 border-electric-purple/50 pl-4">
              Ready to dominate? Your market activity is surging. Manage your deals and track your empire with precision.
            </p>
            <div className="flex flex-wrap gap-5 mt-4">
              <Link href="/nil/analytics" className="bg-gradient-to-r from-electric-purple to-electric-fuchsia hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all flex items-center gap-2 group/btn">
                View Full Valuation
                <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">trending_up</span>
              </Link>
              <Link href="/nil/deals" className="bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 group/btn">
                Deal Desk
                <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Earnings", val: "$45,200", change: "12%", color: "electric-purple", icon: "payments" },
            { label: "Social Reach", val: "1.2M", change: "5%", color: "electric-fuchsia", icon: "groups" },
            { label: "Current Valuation", val: "$85k", change: "8%", color: "neon-cyan", icon: "diamond" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ color: `var(--color-${stat.color})` }}>{stat.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white/60 text-xs font-bold uppercase tracking-[0.1em]">{stat.label}</p>
                <p className="text-5xl font-bold text-white tracking-tight">{stat.val}</p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-4 rounded-full overflow-hidden">
                <div className="h-full w-[75%]" style={{ backgroundColor: `var(--color-${stat.color})` }}></div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-green-400 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">arrow_upward</span> {stat.change}
                </span>
                <span className="text-white/40 text-xs">vs last month</span>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-electric-fuchsia">handshake</span>
                </div>
                Deal Desk Overview
              </h3>
              <Link href="/nil/deals" className="text-sm text-electric-purple hover:text-white transition-colors font-medium flex items-center gap-1 uppercase tracking-wider">
                View All Deals <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
            <div className="glass-panel rounded-2xl overflow-hidden border-0 bg-[#160d26]/60">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/5">
                      <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Brand Partner</th>
                      <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Deal Value</th>
                      <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    {[
                      { brand: "Nike Basketball", status: "Pending Review", val: "$15,000", color: "yellow-400" },
                      { brand: "Gatorade", status: "Signed", val: "Product + Cash", color: "green-400" },
                      { brand: "BodyArmor", status: "Negotiating", val: "$5,000", color: "purple-400" }
                    ].map((deal, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-8 py-5 font-medium text-white flex items-center gap-4">
                          <div className="size-10 rounded-lg bg-white p-1 flex items-center justify-center text-black font-black text-xs">{deal.brand[0]}</div>
                          <span className="text-base">{deal.brand}</span>
                        </td>
                        <td className="px-8 py-5">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-${deal.color}/10 text-${deal.color} border border-${deal.color}/20`}>
                            {deal.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-white/90 font-medium font-mono">{deal.val}</td>
                        <td className="px-8 py-5 text-right">
                          <button className="text-electric-fuchsia hover:text-white hover:bg-electric-fuchsia/20 font-medium text-xs border border-electric-fuchsia/30 px-4 py-2 rounded-lg transition-all">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl flex flex-col relative overflow-hidden bg-[#160d26]/80">
              <div className="border-b border-white/5 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Athlete Scorecard</h3>
                  <p className="text-xs text-white/40">Holistic Performance Metrics</p>
                </div>
                <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-white/60">LIVE</span>
              </div>
              <div className="aspect-square relative flex items-center justify-center">
                 {/* Radial/Radar Chart placeholder */}
                 <div className="absolute inset-0 rounded-full border border-white/5"></div>
                 <div className="text-3xl font-black text-white">98.5</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
