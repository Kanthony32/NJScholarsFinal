
export default function EventsPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-4 sm:px-8 py-8">
          <div className="relative overflow-hidden rounded-xl bg-surface-navy shadow-2xl border border-white/5">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent z-10"></div>
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLX8hR0QpWqOBr8uPamcY31Ostdij7gup0hCBpqb3CGmwCcWpg-rxLWs7aqRCcnhb90EwjO2NlhepmUwVTIbQFZR3p_SQYjZDYaQfQNWYILuOvkY52m_5rrhhZ-wRI9uTAEyPMHInlDjRdVgqPEuCUJnvZ7jVVkCJOd7S4ublPkX_v2UXguSwpAmVUs-R0dGW6mk4QYOnANDKNXny9Fj7rIOrY4-MDG28gNyDeZa4nES3Djkjn1cIaEE3msvCv8_dUgT5BBzLTItA" />
            </div>
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 min-h-[400px]">
              <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
                <div className="inline-flex self-center md:self-start items-center rounded-full bg-primary-blue/20 border border-primary-blue/30 px-3 py-1 text-xs font-medium text-blue-300">
                  Featured Showcase
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">The Nike Tournament of Champions</h1>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-300">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-blue">location_on</span> Chicago, IL</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-blue">verified</span> Elite Division</span>
                </div>
                <div className="mt-4 flex gap-4 justify-center md:justify-start">
                   <button className="h-12 px-8 rounded-lg bg-primary-blue text-white font-bold hover:bg-blue-600 transition shadow-lg">Register Now</button>
                   <button className="h-12 px-8 rounded-lg bg-white/10 text-white font-medium border border-white/10">View Roster</button>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 min-w-[300px]">
                <div className="text-center text-xs font-bold uppercase text-slate-400">Tip Off In</div>
                <div className="grid grid-cols-4 gap-2 text-center">
                   {['04', '12', '30', '00'].map((val, i) => (
                     <div key={i} className="flex flex-col gap-1">
                        <div className="h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 font-bold text-2xl">{val}</div>
                        <span className="text-[10px] text-slate-400">UNIT</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 max-w-5xl mx-auto px-4 sm:px-8">
           <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Calendar of Excellence</h2>
           <div className="flex flex-col gap-4">
              {[
                { date: "Jul 23-25", title: "Blue Star Nationals", loc: "Orlando, FL", tags: ["NCAA Certified", "Scouts"] },
                { date: "Jul 26-28", title: "Select 40 Session II", loc: "Hamilton, OH", tags: ["NIL Opportunity"] },
                { date: "Aug 01-03", title: "UA Association Finals", loc: "Manheim, PA", tags: ["Championship"] }
              ].map((event, i) => (
                <article key={i} className="glass-panel p-4 rounded-xl flex flex-col md:flex-row items-center gap-6 group hover:bg-white/5 transition-all border-none shadow-none">
                   <div className="flex flex-col items-center justify-center bg-[#1a253a] w-full md:w-24 p-4 rounded-lg">
                      <span className="text-xs font-bold text-primary-blue uppercase">{event.date.split(' ')[0]}</span>
                      <span className="text-2xl font-black text-white">{event.date.split(' ')[1]}</span>
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <div className="flex gap-2 justify-center md:justify-start mb-2">
                         {event.tags.map(tag => (
                           <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/5 text-slate-400 border border-white/10">{tag}</span>
                         ))}
                      </div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">{event.loc}</p>
                   </div>
                   <button className="h-10 px-5 rounded-lg border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all">Details</button>
                </article>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
