
export default function PartnersPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <section className="w-full flex justify-center py-8 px-4 sm:px-8">
        <div className="w-full max-w-[1280px] relative rounded-2xl overflow-hidden min-h-[560px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(16, 22, 34, 0.3) 0%, rgba(16, 22, 34, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6VIW-0eNmEXZE1SO41FVuOnBMKW6HotBwAtch0eEU-Iobpjk1EpmkdD3lEjegyVHWCOx9jTXk76nlxNpxJ_Erbpy5RaiFP6yqO_911YmLwODmd2lAFgf_HM2lGpfrczWi-JDaAt5hOxM23RYaUAIPOl_99VdjePxUE4kpF1LZLiw2JDM7c5vq-vBWXcPZv3OlrdqQi7dD9cQmXXIMELuV6n9JJq3UkH2Z_bBV7wjELyokSs_-cc18XC0wDYMoq1JIJ8GV9vtg3qc')" }}>
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            <h1 className="text-white text-5xl sm:text-7xl font-black leading-tight">Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Excellence</span></h1>
            <p className="text-gray-200 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">Empowering the Next Generation of Elite Athletes through premier Name, Image, and Likeness (NIL) opportunities. Join the legacy.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <button className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all shadow-lg">View Sponsorship Tiers</button>
              <button className="h-12 px-8 rounded-lg bg-white/10 text-white font-bold text-base border border-white/20">Contact Team</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Sponsorship Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { name: "Bronze", price: "500", color: "orange-300" },
             { name: "Silver", price: "1,500", color: "gray-300" },
             { name: "Gold", price: "5,000", color: "yellow-400", popular: true },
             { name: "Platinum", price: "10k+", color: "white" }
           ].map((tier, i) => (
             <div key={i} className={`glass-panel p-8 rounded-2xl flex flex-col gap-6 relative ${tier.popular ? 'border-2 border-primary scale-105 z-10 bg-[#151b28]/90' : ''}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase py-1 px-4 rounded-full">Most Popular</div>}
                <div>
                   <h3 className={`text-${tier.color} text-xl font-bold uppercase tracking-wider`}>{tier.name}</h3>
                   <p className="text-4xl font-black mt-2">${tier.price}</p>
                   <p className="text-slate-500 text-xs mt-1">/season</p>
                </div>
                <div className="h-px bg-white/10"></div>
                <ul className="flex-1 space-y-4 text-sm text-slate-300">
                   <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Benefit Description</li>
                   <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Another Benefit</li>
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${tier.popular ? 'bg-primary' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>Select {tier.name}</button>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
