import Link from 'next/link';

export default function SchedulePage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="layout-content-container flex flex-col w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 gap-8 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary-orange font-bold text-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary-orange"></span>
            2024 Season
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">Season Schedule</h1>
          <p className="text-[#baad9c] text-lg font-normal">Elite Division - Road to the Championship</p>
        </div>

        {/* Roadmap */}
        <div className="w-full overflow-x-auto scrollbar-hide pb-4">
          <div className="glass-panel rounded-xl p-6 md:p-8 min-w-[800px]">
            <div className="grid grid-cols-5 gap-4">
              {[
                { month: "November", title: "Pre-Season Training", icon: "fitness_center", done: true },
                { month: "December", title: "Regular Season", icon: "sports_score", done: true },
                { month: "Late Dec", title: "Holiday Classic", icon: "ac_unit", done: true },
                { month: "Current", title: "State Regionals", icon: "trophy", active: true },
                { month: "April", title: "National Champ", icon: "workspace_premium" }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 ${!step.done && !step.active ? 'opacity-50' : ''}`}>
                   <div className={`p-2 rounded-full ${step.active ? 'bg-primary-orange/20 border border-primary-orange text-primary-orange' : 'text-[#baad9c]'}`}>
                      <span className="material-symbols-outlined">{step.icon}</span>
                   </div>
                   <p className="text-xs font-bold uppercase text-[#baad9c]">{step.month}</p>
                   <p className="text-sm font-medium text-white text-center">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-6 flex flex-col h-full border-t-4 border-t-primary-orange">
              <h3 className="text-white text-xl font-bold mb-6">The Gauntlet: Regional Finals Bracket</h3>
              <div className="relative flex-1 min-h-[300px] flex flex-col justify-center overflow-hidden bg-white/5 rounded-lg p-4">
                <svg className="w-full h-auto drop-shadow-lg" fill="none" viewBox="0 0 500 160">
                  <path d="M20 30 H50 V60 H80" stroke="#544a3b" strokeWidth="2"></path>
                  <path d="M20 90 H50 V60" stroke="#544a3b" strokeWidth="2"></path>
                  <path d="M180 60 H210 V80 H240" stroke="#f2930d" strokeWidth="2"></path>
                  <path d="M180 130 H210 V80" stroke="#544a3b" strokeWidth="2"></path>
                  <path d="M340 80 H400" stroke="#f2930d" strokeDasharray="4 4" strokeWidth="2"></path>
                  <rect fill="#231f1a" height="30" rx="4" stroke="#544a3b" width="100" x="80" y="45"></rect>
                  <text fill="white" fontFamily="Lexend" fontSize="10" fontWeight="bold" x="90" y="65">NJ Scholars</text>
                  <rect fill="#231f1a" height="30" rx="4" stroke="#544a3b" width="100" x="80" y="115"></rect>
                  <text fill="#baad9c" fontFamily="Lexend" fontSize="10" x="90" y="135">Team Takeover</text>
                  <rect fill="#f2930d" height="30" rx="4" stroke="#f2930d" width="100" x="240" y="65"></rect>
                  <text fill="#181511" fontFamily="Lexend" fontSize="10" fontWeight="bold" x="250" y="85">Semi-Finals</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="glass-panel rounded-xl p-4 h-full">
                <h3 className="text-white text-lg font-bold mb-4">Game Locations</h3>
                <div className="aspect-square bg-white/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuARPUCZk__KbmfGOMcFdILSDw9Y6RNUpNrf4ta42YtzvvK99MhTA0LQ9dfL-bTebogIdnoWlqSWj3jMMO6Uoa1eQBswqTCxOSB1xa6INWWJi0rcGZ9MHDsQVwc-IRf0NNrBvxuEvLKpPkKj2j-ThkzgPLvaQ83HsThVOQtrnWHbXPqJ0LK8B5qBJdhEBA98lQhC587FFCbR50EJHvJU1tDRKV2Qn9rK2ilD6utUPITLoaRiObhc17wpjzFwJsww-M8iYxtJ0F1E6po" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                   <p className="text-white text-sm font-bold">Next Stop: Spooky Nook</p>
                   <p className="text-[#baad9c] text-xs">Manheim, PA • 120mi away</p>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-8">
           <h3 className="text-white text-2xl font-bold tracking-tight">Upcoming Matchups</h3>
           <div className="space-y-4">
              {[
                { date: "MAR 16", time: "7:00 PM", vs: "NY Gauchos", loc: "Barclays Center, NY" },
                { date: "MAR 18", time: "4:30 PM", vs: "Philly Rise", loc: "Spooky Nook, PA" }
              ].map((game, i) => (
                <div key={i} className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-center gap-8 border border-white/5">
                   <div className="flex flex-col items-center min-w-[80px] md:border-r border-white/10 md:pr-6">
                      <span className="text-[#baad9c] text-sm font-bold">{game.date.split(' ')[0]}</span>
                      <span className="text-3xl font-black">{game.date.split(' ')[1]}</span>
                      <span className="text-white/50 text-xs font-medium">{game.time}</span>
                   </div>
                   <div className="flex-1 flex items-center justify-center gap-4">
                      <span className="text-lg font-bold">NJ Scholars</span>
                      <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-[#baad9c]">VS</span>
                      <span className="text-lg font-bold">{game.vs}</span>
                   </div>
                   <div className="flex flex-col md:items-end gap-3 min-w-[200px]">
                      <div className="flex items-center gap-2 text-[#baad9c]">
                         <span className="material-symbols-outlined text-sm">stadium</span>
                         <span className="text-sm font-medium">{game.loc}</span>
                      </div>
                      <Link href={`/tournament/${i}`} className="bg-primary-orange text-black px-4 py-2 rounded font-bold text-sm hover:bg-white transition-all text-center w-full md:w-auto">
                         Get Tickets
                      </Link>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
