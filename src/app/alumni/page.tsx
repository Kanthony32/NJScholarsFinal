
const alumni = [
  { name: "Sarah Jenkins", class: "21", college: "UConn Huskies", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPZcK1SAVCxar1dNIJGQsdATPrbJRwx7Pft1KH7iDz7d1WmeSZHxBkfFcA2i2sqEuiiI74U4ZaxIKYR0_o5u4U3kmkEersHCR3e419XWW1D5rUXJg4GuYvTeua4IsnhIfySBjXZD8_7sBLT2Bag1MfsmX4Bo3SJMV3RCyZIagMoNY5KkUWbHwKxovozoDFz3RZE48u16TD6VWzGvIFwllkvqCeNhfQqUquGcjwJkSkCN0Txftq7zdycjCE9hkWf72OC2rsPqW5v4", desc: "2x NCAA Champion, Big East Player of the Year. Drafted 1st round WNBA." },
  { name: "Maya Robinson", class: "19", college: "South Carolina", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr3oJ6O03ouX0LQ-CqMuyOp1bUKDwqjdu6AHFbCnapTzJ-P1jf_3Nc9WcE6XHGzDHywOFqn1KHs_qPBWu1CnpYFegsyPzcgN75qxu91OK6ihbBsDU6e4Sb6GKcBfpW9X1p26JYAs1GPTl43lp_fGGXJR6SRBk4R01tTp3uSG52yjJVF7Q1fg1Ow0ZSFd78QXzn9octswFhw2SX5PqBGFgzfFLOEp8_QU0xm-mlEmzGPKzK7UY12jiyx-5tdM-C8J223LF5DDH5l94", desc: "National Defensive Player of the Year. Currently playing in EuroLeague." },
  { name: "Keisha Williams", class: "23", college: "Stanford", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWJjcCjTJdTb7k2O2q6yeVEhVv6Cwqbj0qkX3dCqh7iLh1oDSi_ONkFp5_RaeSNlUj_AtF1wggbSCmQxuJaJbQSR-Lwu0mf3zwE-GwToo0UUldeFiBcJF3y7IDM8b7SuOm_xr-_mytUHbGCz57FCsAXhMhFVSkBxgpg4SCPRipPjzUVJW0OJVYSy64Jxratb2bUOfDc9i89WvNp_pQtA9USw-nYWLGlraO3rOtxhGzA8JRNtZVO85V8J3HAB55nfp1raWPVFzeUvY", desc: "Pac-12 Freshman of the Year. Averaging 15.5 PPG." },
  { name: "Alex Morgan", class: "20", college: "Notre Dame", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSBSsFl_aV-PZqnbo_J2CdsE5cWseExLs2-GxRHLVUIMMXPZ8vUhKXKReyXGatZBQ-pjVwYK3AiCe8OxF5f6CUVOr7-KExIquwliFtChyZFZYiN68E66iDRSwAKoq1jxIyp18d9f2pYMtEhLt9ThIh33bKKnnCpRw13m678_F3auJTXZgIlgpW0gTEeHyYwSLBEFsEA6FeAtpJ7rhZNOUwBODrn1L0DOh3nnCGB7NOrTBjhvDz3hduZsC-uxZVOT0tdBOWiJ2rla4", desc: "ACC Tournament MVP. Academic All-American." },
];

export default function AlumniPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <section className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-primary/20 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV-AOa1SbykN1D2EmhSoR0fii9zto-Zw_3ak8JUICWOVY6KoOBFFTYarSESj3V0wkjnaQoVehn98l_5eE5HLywXRHQ1NIX-ol6xOdVm_Z2kc1dsXBJp8NyDW4HVWMWqNlh3n8m8erlCxMN0dLjoH374Tyn_H2ZmaDhliC9UAx6Cv4MEhLCLbuPQWUf1Ijke4U_BpEuL7nzQGrI8_A5s3EQiuPbmmF7oW2It-OxiEaddPFCvtBC8ErUMjxiKc6n_QbzmqOsxkJxmuU" />
        </div>
        <div className="relative z-20 flex max-w-4xl flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Hall of Fame</span>
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight text-cream sm:text-6xl md:text-7xl">
            Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Excellence</span>
          </h1>
          <p className="max-w-2xl text-lg text-smoke md:text-xl">
            Celebrating the journey of our athletes from the local court to the world stage. Over a decade of dominance, leadership, and scholarship.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="h-12 rounded-xl bg-primary-navy px-8 text-base font-bold text-white shadow-lg transition hover:bg-blue-700">
              View Directory
            </button>
            <button className="h-12 rounded-xl border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/10">
              Explore Map
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {alumni.map((alum, i) => (
            <div key={i} className="group relative flex flex-col overflow-hidden rounded-xl bg-[#1a202c] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c] via-transparent to-transparent z-10 opacity-90"></div>
                <img alt={alum.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={alum.img} />
                <div className="absolute top-3 right-3 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-bold text-cream shadow-sm">&apos;{alum.class}</div>
                </div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-cream leading-tight">{alum.name}</h3>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">{alum.college}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1 justify-end border-t border-white/5">
                <p className="text-sm text-smoke leading-snug line-clamp-2">{alum.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
