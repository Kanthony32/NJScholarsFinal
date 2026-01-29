
export default function AboutPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/60 to-transparent z-10"></div>
          <img className="h-full w-full object-cover object-top opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMQXu8B09a9S-cKK9-aklnS1wtUnBHzAXuF5b7hFHYa6XIOdS1cSgL87z7CmN5YfIsZ9ZoFZLxdVN6DfBXLqMiguwBbJ4GbUz9kFzn6qUB3JwO1TE5MMcAo6Zf44219iU83DOr2aF5F8gJ3ar8uFa3d3HNPAtf8v6ob4idkb4ZBfTzhcG7xXlg66wDRTDfN2876qZQPT_l388upYzmGSFdzUDLScQ90dPT0l5rlhL_yZqVddnTG_Ts-MCWrZsQbetjAJJZg7gTsA" />
        </div>
        <div className="relative z-20 flex flex-col items-center gap-6 px-4 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm">Our Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white uppercase drop-shadow-xl">
            Built Different.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scholars Forever.</span>
          </h1>
          <p className="max-w-xl text-lg text-gray-300 md:text-xl font-light">
            We don&apos;t just build elite athletes. We forge future leaders through a relentless commitment to excellence on and off the court.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
             <button className="h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-bold tracking-wide transition-all shadow-lg shadow-primary/40">Explore Our Pillars</button>
             <button className="h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white font-bold tracking-wide backdrop-blur-sm">Watch The Film</button>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">The Scholars Way</h2>
        <h3 className="text-4xl font-bold mb-12">Program Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Academics", icon: "school", desc: "Excellence in the classroom is non-negotiable. We provide tutoring, SAT prep, and college counseling." },
             { title: "Athletics", icon: "trophy", desc: "Elite skill development, competitive exposure circuits, and high-level coaching tailored to the modern game." },
             { title: "Character", icon: "diversity_3", desc: "Leadership, integrity, and community service. We build women who lead with confidence." }
           ].map((pillar, i) => (
             <div key={i} className="glass-panel p-8 rounded-xl border-t-4 border-t-primary/50 hover:-translate-y-2 transition-transform h-full">
                <div className="size-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                   <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-white uppercase mb-4">{pillar.title}</h4>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
