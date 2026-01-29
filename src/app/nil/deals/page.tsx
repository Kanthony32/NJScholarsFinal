
export default function NilDeals() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
        <header className="mb-10">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Deal Desk</h1>
              <p className="text-gray-400">Manage your brand partnerships and active opportunities.</p>
            </div>
            <button className="flex items-center gap-2 bg-primary-pink/10 hover:bg-primary-pink/20 text-primary-pink border border-primary-pink/20 px-4 py-2 rounded-lg transition-all text-sm font-bold">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span>New Proposal</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { brand: "Nike", title: 'Campaign: "Next Gen Hoops"', type: "SOCIAL MEDIA", val: "$1,500 - $2,500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-wtrjSzny02-I2fEG5KOFUrJzUSOE1zo_j7u9oipKD1ZQH3dE92-zGaeeRrHs4KJFRkdwsScxcygYAJR5XYkSiDx4uR2lcAeQMZydH2Tdoer9J8ApzFOepKTKDg6WCXIvr03yYi60nYQUkubgEr0AviprO6nV6MgjxlL9to3hvsoQJdHtDCoG2Iq_O81d86Et5ErRh3w-pHg9lPeC6nTgkio-pHLO_VeymrKKQj6GsR80LhUM0_0L-_FE-0ox6bRZ3wpL4QGj-fY" },
                { brand: "Gatorade", title: "Fuel Tomorrow Series", type: "CONTENT", val: "$3,000", color: "orange-500" },
                { brand: "Iron City Gym", title: "Grand Opening Guest", type: "APPEARANCE", val: "$500", color: "purple-500" },
                { brand: "Hoop Talk", title: "Podcast Feature", type: "MEDIA", val: "$750", color: "indigo-600" }
              ].map((deal, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary-pink/50 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-12 w-12 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden">
                        {deal.img ? <img src={deal.img} className="object-contain" /> : <span className="material-symbols-outlined text-black text-3xl">bolt</span>}
                      </div>
                      <span className="bg-white/5 text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase">{deal.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-pink transition-colors">{deal.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Compensation</p>
                      <p className="text-lg font-bold text-white">{deal.val}</p>
                    </div>
                    <button className="bg-primary-pink hover:bg-primary-pink/80 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-1 flex flex-col gap-8">
             <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                   <h3 className="text-lg font-bold text-white">Upcoming Deadlines</h3>
                </div>
                <div className="p-6 space-y-6">
                   {[
                     { date: "Today, 4:00 PM", title: "Contract Signing", sub: "Under Armour Deal" },
                     { date: "Tomorrow, 11:00 AM", title: "Brand Zoom Call", sub: "Wilson Basketball" }
                   ].map((item, i) => (
                     <div key={i} className="relative pl-6 pb-6 border-l border-white/10 last:pb-0 last:border-0">
                        <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary-pink shadow-[0_0_10px_#f4259d]"></div>
                        <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
