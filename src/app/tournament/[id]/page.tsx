
export default function TournamentDetail() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow flex flex-col">
        <section className="relative w-full h-[500px] flex items-end">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(to top, #101e22 5%, rgba(16, 30, 34, 0.6) 50%, rgba(16, 30, 34, 0.3) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXSaDW93md-wh42wTZuD3sqr3spCpisnFn0d2HdkneSLlSA7WQjZvnxLRWn2P7DsJAhUq5UKLtyQQMmDqQ6vrNu0Nb9DCCbSnChWsF7g6VuAlbjCnNT_ewDbhoh9MEIRPLJMGWqYfo6gQthGycmsa1RShz1le8rY-rEFNciO6nmSx3lEwGSbeFlsQyPC0pCpiYZdxojgpgGYiJL-SyELbR-3eWgVJP1JcwsxE1oXEDEx2yG4eV0YW-wWJ626_Le-zh7issJ3hcK2c')" }}
          ></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-3xl space-y-4">
              <div className="flex gap-3">
                <span className="bg-primary-cyan/20 px-3 py-1 rounded-full text-xs font-bold text-primary-cyan ring-1 ring-primary-cyan/30">14U - 17U Girls</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white ring-1 ring-white/20">Elite Circuit</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">NJ Scholars Summer Showdown</h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300">
                 <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-cyan">calendar_today</span> July 15-17, 2024</span>
                 <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-cyan">location_on</span> Hoop Group HQ, Neptune, NJ</span>
              </div>
              <button className="h-14 px-8 rounded-xl bg-primary-cyan text-black font-bold text-lg shadow-[0_0_20px_rgba(37,192,244,0.4)] hover:scale-105 transition-all flex items-center gap-4">
                 Register Team <span className="bg-black/10 px-2 py-0.5 rounded text-sm">$450</span>
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-8 space-y-12">
              <section>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-cyan rounded-full"></span> Event Overview
                 </h3>
                 <p className="text-slate-300 leading-relaxed">
                    Join the elite competition at the <strong className="text-white">Summer Showdown</strong>. This marquee event features the top 50 ranked teams on the East Coast, providing unparalleled exposure for athletes looking to compete at the collegiate level.
                 </p>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                      { val: "50+", label: "Teams" },
                      { val: "4", label: "Games" },
                      { val: "30+", label: "Scouts" },
                      { val: "Live", label: "Streaming" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                         <div className="text-3xl font-black text-primary-cyan">{stat.val}</div>
                         <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-cyan rounded-full"></span> Schedule Highlights
                 </h3>
                 <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden divide-y divide-white/10">
                    <div className="px-6 py-4 flex flex-col sm:flex-row justify-between gap-4">
                       <div className="flex items-center gap-4">
                          <span className="text-primary-cyan font-bold font-mono">5:00 PM</span>
                          <div>
                             <p className="font-medium">Court 1: NJ Scholars vs. NY Gauchos</p>
                             <p className="text-xs text-slate-500">17U Elite Division</p>
                          </div>
                       </div>
                       <button className="text-xs font-bold text-slate-400 border border-white/10 rounded px-3 py-1 hover:bg-white/5">Matchup</button>
                    </div>
                 </div>
              </section>
           </div>

           <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                 <h4 className="text-lg font-bold mb-4">Venue Details</h4>
                 <div className="aspect-video bg-black rounded-lg mb-4"></div>
                 <p className="font-bold">Hoop Group Headquarters</p>
                 <p className="text-sm text-slate-400">1930 Heck Ave, Neptune City, NJ 07753</p>
                 <button className="w-full mt-6 py-2 rounded-lg bg-white text-black font-bold text-sm">Get Directions</button>
              </div>
           </aside>
        </div>
      </main>
    </div>
  );
}
