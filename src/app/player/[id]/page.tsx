
export default function PlayerProfile() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <section className="relative w-full flex-1 flex flex-col pb-12 hero-glow-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-900/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Active Recruit</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 mb-2">
              JADA SMITH
            </h1>
            <p className="text-xl md:text-2xl text-primary-purple font-bold tracking-tight">
              #23 <span className="text-gray-400 font-medium text-lg mx-2">|</span> CLASS OF 2025 <span className="text-gray-400 font-medium text-lg mx-2">|</span> 5-STAR PG
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
              {[
                { label: "Season PPG", val: "24.5", change: "+2.1", color: "primary" },
                { label: "Rebounds (RPG)", val: "8.2", color: "blue-500" },
                { label: "Assists (APG)", val: "5.8", color: "purple-500" },
                { label: "Academic GPA", val: "4.0", badge: "Honor Roll", color: "yellow-500" }
              ].map((stat, i) => (
                <div key={i} className={`glass-panel rounded-xl p-5 border-l-4 border-${stat.color}`}>
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">{stat.val}</span>
                    {stat.change && (
                      <span className="text-green-400 text-sm font-medium mb-1 flex items-center">
                        <span className="material-symbols-outlined text-sm">trending_up</span> {stat.change}
                      </span>
                    )}
                    {stat.badge && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded uppercase font-bold mb-1">{stat.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                <div
                  className="w-full h-full bg-gray-800 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlzShV_JlxIrz8o22Qwv7XC27FfP_NtUrbI8F9FBbQG5Kje5Svv4W_naTljQnBL5I6GBF2YfdSh891PkUSZJbLUIXCabZ59H16jz1nurdoxTrRqKcVH5yxOldNR-EphEAhN2cfam_kIk7vixq_wNM8fhpXSvxDwBPI721ubR75nANQzukD8DsYh5QNmdx1MIAQZDn3FmXHKp6tlEIteKmD_NtEYPvT47s96pFN-UFCYKONyWPIIJlGX1m9JWulBod5PO76_CleME4')" }}
                ></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 w-max">
                  <button className="flex items-center gap-2 bg-white text-background-dark hover:bg-gray-100 px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-[20px]">play_circle</span>
                    Highlights
                  </button>
                  <button className="flex items-center gap-2 bg-primary-purple/90 text-white hover:bg-primary-purple px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-[0_0_20px_rgba(147,13,242,0.3)] backdrop-blur-md">
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                    Contact
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6 order-3">
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">id_card</span>
                  Player Bio
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Position", val: "Point Guard" },
                    { label: "Height", val: "5'9\"" },
                    { label: "Hometown", val: "Newark, NJ" },
                    { label: "High School", val: "Newark Tech" },
                    { label: "AAU Team", val: "NJ Scholars" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-purple border border-primary-purple/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(147,13,242,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/20 blur-[60px] rounded-full"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-white text-lg font-bold">NIL Scorecard</h3>
                    <p className="text-xs text-gray-400">Powered by On3</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Valuation</p>
                    <p className="text-2xl font-bold text-primary-purple">$145k</p>
                  </div>
                </div>
                <div className="relative w-full aspect-square rounded-full border border-white/5 mb-6 flex items-center justify-center">
                   {/* Radar Chart Placeholder */}
                   <div className="absolute inset-4 bg-primary-purple/20 opacity-50" style={{ clipPath: 'polygon(50% 5%, 90% 30%, 80% 85%, 20% 85%, 10% 30%)' }}></div>
                   <div className="text-[10px] font-bold text-white uppercase">Analytics</div>
                </div>
                <button className="w-full py-2 rounded-lg border border-primary-purple/50 text-primary-purple text-xs font-bold uppercase tracking-wider hover:bg-primary-purple hover:text-white transition-all">
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
