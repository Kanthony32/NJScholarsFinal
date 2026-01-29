import Link from 'next/link';

const players = [
  { id: '1', name: "Sarah Jones", number: "4", pos: "PG", class: "25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG_yHLRlHV9kmxUefnSwlB1Hao3cu2AlYsp75mPVqEaBybLV6BIi5I0TQa8U670oBDZKygm_aK47GalyfMr_XTFvjnYYs89N91fnwn4UxtOHxfEDSS42QpHz_E8wARmX2tmR5BDIocbkIRccqqWlr11gXOfhG5Q8tsIWCILPYcjkbqqoMrwYRqGZuE-PWuYY6uPYxCMwXcvA0r9r28uCkpOlyyUvlh3aJZ9fus1VKX2DO1qww54ozbaNRgR4HllH1f8sAkWo6Ky0c", nil: true },
  { id: '2', name: "Emily Chen", number: "12", pos: "SG", class: "25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN0FvydKKSUmAwowE7XUDqML4v3nCrXHUbWlF7jABOwdi98tr1WmpuxufJWRPxptzuBdB_aXhoDp4fWWIgiL6cZMzvCEcvNd9r6TjWYkoIfiLjw6EFU2nTU-2Mo0sjoBZpg2bCIekaz0A95A-Nou0dOgSxaVlhoUF2aJjQ-dQCmhda9BgVDsr6GQkXSskOMii22dJXfyJCsqYpuF8spXP3WcIECRHrBdPJCHU3fkG6JcKc-h1QWSNOZnzEs80tK065G_P1LNI4fjI", nil: false },
  { id: '3', name: "Mia Williams", number: "23", pos: "SF", class: "26", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3QWC6CgYRyqvYHweIRzq3MpT480m2TT0atn1un1DKpXOYmkinZLMABFJag99QK4TN7F8xcCUjuK5NIobE7dTb5sWLAIbhWe28DP2y_ievPzcXAeAUcwY1ctHQ5dYPO_uwklWMYoIlQj78nGGIFxN7o6i2CGEyDTRqIiFaD_16GiGRkBeWn7ynIr7DMbcydzF7llndJ1ifMA6YrpIMpldAG7nqMEHL1D5eaQByJCxNsdzivin_xyqU9z45AFXM-YYnNRy4a15n7LA", nil: true },
  { id: '4', name: "Sofia Rodriguez", number: "33", pos: "C", class: "25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqYKyh-a37zCiCySmpu3146OaV8vtkHHfeJ2KtlT5BGqICF9isT1Ib5cGPZStrVk86cPbXy2TTWajj7fzvNbvFEmW-JPNbHSHiL9P1YajZSbDuAZkyDGxvJujo3NUvhJx2Z83u0vlU106mZ4INuQ-PkL8w6A0tx74mm4ZlvnL8D4A7tHZBPlkQi49dLpFBNpqVsVgT7JLYAmEe90yxjg1vHJN4q_zlaDh693RLl-7_JDfCO8rAOKEifWSBDnf8JMt569IY_YWg180", nil: false },
];

export default function RosterPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1">
        <div className="relative w-full px-4 pt-12 pb-8 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111518] to-[#0f1923]">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Elite Roster
              </h1>
              <p className="max-w-2xl text-lg font-normal leading-normal text-slate-400">
                Featuring the top talent from the NJ Scholars Elite Academy. Browse our roster of future collegiate stars.
              </p>
            </div>

            <div className="glass-panel mt-6 flex flex-col gap-4 rounded-xl p-4 lg:flex-row lg:items-center lg:justify-between shadow-xl">
              <div className="relative flex-1 min-w-[300px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="block w-full rounded-lg border-0 bg-[#27313a]/50 py-2.5 pl-10 pr-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6" placeholder="Search by player name..." type="text"/>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative group">
                  <select className="appearance-none cursor-pointer rounded-lg border-0 bg-[#27313a] py-2.5 pl-4 pr-10 text-sm font-medium text-white focus:ring-2 focus:ring-primary hover:bg-[#323e4a] transition-colors">
                    <option>Class Year</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-white">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="relative group">
                  <select className="appearance-none cursor-pointer rounded-lg border-0 bg-[#27313a] py-2.5 pl-4 pr-10 text-sm font-medium text-white focus:ring-2 focus:ring-primary hover:bg-[#323e4a] transition-colors">
                    <option>Position</option>
                    <option>PG - Point Guard</option>
                    <option>SG - Shooting Guard</option>
                    <option>SF - Small Forward</option>
                    <option>PF - Power Forward</option>
                    <option>C - Center</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-white">
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="h-6 w-px bg-white/10 hidden sm:block mx-1"></div>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => (
              <Link key={player.id} href={`/player/${player.id}`} className="group relative flex flex-col gap-3 rounded-2xl bg-card-dark p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-primary/50">
                <div className="relative w-full overflow-hidden rounded-xl aspect-[3/4]">
                  <img alt={player.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={player.img} />
                  {player.nil && (
                    <div className="absolute top-2 right-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold text-black backdrop-blur-sm uppercase tracking-wider">
                      NIL Eligible
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="flex flex-col px-1 pb-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">{player.name}</h3>
                    <span className="text-sm font-bold text-slate-500">#{player.number}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                    <span className="font-medium text-primary">{player.pos}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                    <span>Class of &apos;{player.class}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#27313a] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#323e4a]">
              Load More Players
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
