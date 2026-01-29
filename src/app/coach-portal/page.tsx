
export default function CoachPortal() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto p-6 lg:p-10 gap-8">
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               { label: "Active Prospects", val: "142", icon: "groups", color: "primary-blue" },
               { label: "Committed", val: "28", icon: "school", color: "yellow-500" },
               { label: "New Clips", val: "15", icon: "videocam", color: "emerald-500" }
             ].map((stat, i) => (
               <div key={i} className="bg-surface-navy border border-white/5 p-5 rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-white text-3xl font-bold">{stat.val}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl opacity-50">{stat.icon}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Scouting Database</h2>
                <button className="text-primary-blue text-sm font-medium border border-primary-blue/20 px-3 py-1.5 rounded hover:bg-primary-blue/10">Export CSV</button>
             </div>
             <div className="bg-surface-navy border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-white/5 text-xs font-bold uppercase text-slate-400">
                            <th className="px-6 py-4">Athlete</th>
                            <th className="px-6 py-4">Position</th>
                            <th className="px-6 py-4">Class</th>
                            <th className="px-6 py-4">GPA</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {[
                           { name: "Maya Williams", pos: "PG", class: "2025", gpa: "3.8" },
                           { name: "Sarah Jones", pos: "SF", class: "2024", gpa: "4.0" }
                         ].map((player, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors cursor-pointer">
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-white/10"></div>
                                    <span className="font-bold">{player.name}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-slate-300">{player.pos}</td>
                              <td className="px-6 py-4 text-slate-300">{player.class}</td>
                              <td className="px-6 py-4 text-slate-300">{player.gpa}</td>
                              <td className="px-6 py-4 text-right">
                                 <button className="text-primary-blue font-bold text-sm">View Profile</button>
                              </td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>

        <aside className="w-full lg:w-80 flex flex-col gap-6">
           <div className="bg-surface-navy border border-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6">Recruiting Calendar</h3>
              <div className="space-y-6">
                 {[
                   { date: "July 12-14", title: "NCAA Live Period", loc: "Chicago, IL" },
                   { date: "August 05", title: "Scholars Showcase", loc: "Newark, NJ" }
                 ].map((ev, i) => (
                   <div key={i} className="pl-4 border-l-2 border-primary-blue relative">
                      <div className="absolute -left-[5px] top-0 size-2 rounded-full bg-primary-blue"></div>
                      <p className="text-xs font-bold text-slate-500 uppercase">{ev.date}</p>
                      <h4 className="font-bold text-sm mt-1">{ev.title}</h4>
                      <p className="text-xs text-slate-400">{ev.loc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </aside>
      </main>
    </div>
  );
}
