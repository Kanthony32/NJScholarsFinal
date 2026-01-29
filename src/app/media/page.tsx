
export default function MediaPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full flex-1">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">Featured Highlights</h1>
              <p className="text-slate-400 mt-4 max-w-2xl text-lg">Watch the latest game reels, exclusive locker room footage, and player interviews.</p>
            </div>
            <button className="text-primary-blue font-bold flex items-center gap-2">View All Videos <span className="material-symbols-outlined">arrow_forward</span></button>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 group shadow-2xl">
             <div className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLJXojhyGqq7g0VjCgJv2xcDoZEX4-ds-CX42h7ELspWAvSuNMJ_lhrpAmpownf2przJ7ruKxGGnKKLpMgjEVf11F5FJBcCEc5URE4A1-HgzlkIy64_HW9bqx81XqZDZrJdw0hHzq1WojuQU4zvMiCwqDD2wak7_2OVp2JvdLTISB5RZ3Gbv5tFCujB7rHkUhdlga28MsFDaVEDAHEEdJrvr6013oDboY00ePIC0LnPwXQ7xxoB1JHVbpKPsec1TwSghhtDgL6H5k')" }}></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-20 bg-primary-blue rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-all">
                   <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
             </div>
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-2xl md:text-3xl font-bold">NJ Scholars vs. Team Takeover</h2>
                <p className="text-slate-300 mt-2">October 12, 2024 • Championship Recap</p>
             </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map(i => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
                   </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary-blue transition-colors">Season Highlight Reel #{i}</h3>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Tournament • 2k views</p>
             </div>
           ))}
        </section>
      </main>
    </div>
  );
}
