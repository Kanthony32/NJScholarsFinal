import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-navy-gradient">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden hero-glow-bg">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#021a32]/90 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1Y4wI0dWKA2EDkHscKDsccX15fa9nLlNN6OtoiNmlqnrFm8reNxn8362H9VpN7AKkrIhNDFhFVXa54EHOz78x021VID37F_oBhyZ7zauQ7qxPHq8_5PQKq1fU4DOADEisKC3dbNGIJm17f9O1WIiUuut1lZX-fWyCvWnRz4IOg7OF8ywUYMxw8s9_tThDnqzmgpb5NIM6FEgItubxYOw80tFXKjHOv6riHh_fCrtdUUMqm44BSAPIaQ-KEx8QwAkYiGQkV2q_hzU")' }}
          ></div>
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1 pt-10 lg:pt-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse shadow-[0_0_10px_#d946ef]"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Now Recruiting Class of 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-xl">
              EXCELLENCE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-accent-pink">PERSONIFIED.</span>
            </h1>
            <p className="text-lg md:text-xl text-smoke leading-relaxed max-w-xl mx-auto lg:mx-0">
              The premier destination for girls basketball and NIL opportunities in New Jersey. We don&apos;t just build athletes; we build brands and leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:to-primary text-white font-bold h-14 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/30 w-full sm:w-auto hover:scale-105 duration-300 border border-white/10">
                Join the Program
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <button className="flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-cream font-semibold h-14 px-8 rounded-lg transition-all w-full sm:w-auto hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-[24px] text-accent-pink">play_circle</span>
                Watch Highlights
              </button>
            </div>
            <div className="flex items-center gap-6 mt-6 justify-center lg:justify-start opacity-80">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#021a32] bg-gray-600 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDfBquRU01AnJ9AJJgZc0qpo0nOaRI1e8y6jIZEzglHEw0arocpBjUxqJVC07skWFBcmrF-az0dE71mcqP6mQ0HxueFAOyx8vmi0ekYVABfI2GmQ1wQc6OCB4QI-p_fMFNnVVLHnA-bc4uDorOZesuT06Rm-baHAbObMJjm-AkhbPY_K3AKPy-sKXGigIKRpEZkUYLUpWq7l0XOt49v3nZVPbxkEDDkPorjZEv-fBraDdVANFb52j6H4DNZF86M58VUBN31eKhe5A" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#021a32] bg-gray-500 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6Fpu1dBc54VWUjBVjuuV1TFrijxBLJI9LMzbJdeJjw8hMny2kUfzyFag5Dn6eBAX7dLjr-jbfmp0fWzX35qWdNDrSzX6lz2A06mUIAshA0OB1M1naaS6LVyk3VGLR8_jeW_Wft30k7fmMITY_o78VJdAbVuC9oag43zxaGbToJe3caNkI1uOPHXxRG_mhgTkTFrR2GXPlF_VLlN6VQxz_4ZFisPgXNkSZIxlYpVgrU9OsLRvn6zRCeW2hnMK55NxT65FPQ3bGsE" style={{ objectPosition: 'top' }} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#021a32] bg-primary flex items-center justify-center text-xs font-bold text-white">+200</div>
              </div>
              <div className="text-sm text-smoke font-medium">
                Athletes placed in <span className="text-white font-bold">D1 Colleges</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[50vh] lg:h-[80vh]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-pink/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
            <img
              alt="Featured Scholar Athlete Illustration"
              className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL0M8dXbMthKoz1xoVk1GjyRXN9rmmLUwdEa6-y8qUcHSlfIK9pwtt71mgoQIC0IsKmhBN5Xr-v61qcgvhj62eyeZERFItL5NItaVaJGbclJEezix-uGjO14fSKeJS1ORabfGyMZuaDFqjXEGY7_qIjZSWowSDTXFCKeYg75BxtSrcDuvtwRTktAWkMKB1jdSAGfEg2uLEO5R6ZMmzz64VQYWxWmytFJhDiPGGIiJgYeZJLvwOOhAuMGoDsNVARdlAZJ5xn8MeIKw"
              style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full border-t border-white/5 bg-[#021020]/50 backdrop-blur-sm py-4 hidden md:block">
          <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center text-smoke/40 text-sm font-bold tracking-widest uppercase">
            <span>Under Armour</span>
            <span>Gatorade</span>
            <span>Nike Elite</span>
            <span>Hudl</span>
            <span>NIL Network</span>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full relative">
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-accent-pink font-bold tracking-widest text-sm uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">The Pillars of <br/>Success</h2>
          </div>
          <div className="max-w-md">
            <p className="text-smoke text-lg leading-relaxed">Our program is built on a foundation of excellence in three key areas, ensuring success well beyond the game.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="size-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shadow-lg">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Academic</h3>
              <p className="text-smoke leading-relaxed">Excellence in the classroom is our top priority. We provide tutoring, SAT prep, and college counseling for every scholar.</p>
            </div>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 group relative overflow-hidden border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="size-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-accent-pink group-hover:text-white group-hover:bg-accent-pink transition-colors duration-300 shadow-lg">
              <span className="material-symbols-outlined text-3xl">sports_basketball</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Athletic</h3>
              <p className="text-smoke leading-relaxed">Elite training and national competition exposure. Our coaching staff focuses on skill development and game IQ.</p>
            </div>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col gap-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="size-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shadow-lg">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Character</h3>
              <p className="text-smoke leading-relaxed">Building leadership on and off the court. We empower young women to become community leaders and role models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholars Section */}
      <section className="py-20 bg-[#021528] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Scholars</h2>
              <p className="text-smoke mt-2">The next generation of stars.</p>
            </div>
            <div className="flex gap-3">
              <button className="size-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-primary transition-colors hover:scale-110">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-primary transition-colors hover:scale-110">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x px-2">
            {[
              { name: "Ava London", class: "2024", pos: "Point Guard", stats: { ppg: "18.5", apg: "6.2" }, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8VnEwEkvPQblAj-fkzrWHI_MIktwAm4ILRDS9GffVNUUJumZMsgqhx27c2YW4ZOH1HMGtG-YlfiBK3ArDtSirRAsATlD4y3EoT4K4IeCO22_WsXK921_Jgm6axsZ-0Vw0C6yLFg4xvM4ERyd36VkVfexKE4UEov9_hEOCOwwO5SxisppTrArQoJDRhVv5hwMcIQInFXz7HhB6Q9J0RkJNQzXuq-_OE-UBu5vQolvIKSI54I39X5ujZ6g9xkacixbCrOZaUA-0sto" },
              { name: "Maya Johnson", class: "2025", pos: "Small Forward", stats: { rpg: "12.0", bpg: "2.5" }, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmssWWzOA5TgMYHmpso7wcJXeOQa15Oz_0zoNyScEXL5C8nwWzm70ce_0tnICHYKwdOl21CkNTqAzTXYNm4G4v0valTeq_uz2Uu2VcLgbYCHqjdYAoAxI0g4ARX9io0dHoVgctMLrXEd4fSswaAxoNv7u_fQoGGJxKGP-yuMYye_dmZ2EYMh2RwvKTQoQGQgi4dY9Ity49laeglspJNeEDrHUmgL9bjbOMZ7ol8YDWD4JV6bvbDHa7aCcxDlYSPJvVCHoJfo6BOIc" },
              { name: "Jessica Thompson", class: "2024", pos: "Shooting Guard", stats: { ppg: "15.2", "3pt": "42%" }, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLJMii1U2SRE_sM7QXcJZc3tVaj5RRBHhDKBCAh_Vd0xxbQ26ZtmLWe46ke0z-gHoPs054_3_7qAIg3u8AGZ1hVQAXMCSeYulxbCDV5KJ70w4vmQzM6dUNxJ1LD0v61df4tQieu5hjbdotBqlDwyAMwm0-cMRyp7FrqTcsRob0lMFlDpgY-e7Gm1cEi2S3sdv0H7-7lbTL6GJzxlhkY7Y4WEAdCEyshp-ecuDkB2Z0u7X7yLjJVQQSkX2xl3QuIzNuh31UrWOJDmg" }
            ].map((player, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[340px] snap-center">
                <div className="relative group rounded-2xl overflow-hidden h-[480px] glass-card border-white/5 transition-all hover:border-primary/50">
                  <div className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${player.img}")` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021a32] via-[#021a32]/40 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-black text-white bg-primary rounded uppercase tracking-wider">{player.pos}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase italic">{player.name}</h3>
                    <p className="text-sm text-gray-300 mb-4 font-medium">Class of {player.class}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(player.stats).map(([label, val]) => (
                        <div key={label} className="bg-white/10 rounded px-2 py-1 text-center">
                          <div className="text-[10px] text-gray-400 uppercase">{label}</div>
                          <div className="text-sm font-bold text-white">{val}</div>
                        </div>
                      ))}
                    </div>
                    <Link className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors border border-white/5" href={`/player/${idx}`}>
                      View NIL Profile <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-1 bg-primary rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Scholars take home the Regional Championship title", category: "Tournament", color: "primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGt_j8PTJD6fUMpwBB4g58W2RSXO9K-tIdvgvvpnQUtWCsz4eLVOlDfUogxYv33MNi99Tj3qSdL4x0oSLtNFtwo5ZohITJ5vCpvKAMs6lPTd00X2anL7y7sx7rj73p7lIjo_hf-Mi-Bjt3rYh4f_bp9nISD2fzE1ACP8LAenyYdDrbIiXYKRxki7dtBIuCW5PvG34m5VbgJl3d2WQIWUwM7_9yapWfRemgsZoolldJlig8tdy7hIpfIBmbPNu53TlHrq0SaKfWG7s" },
            { title: "100% College Acceptance Rate for Class of 2024", category: "Academics", color: "accent-pink", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4V4N5StSzWWTXfU9_vpOR5htw0mUjA8GI3tzS40pRTQlfX3jmMDtDsP7DKY8V2C_SecTQApoe1ZEk4uJ2qTTBMu_MJa_ceDHGdEHwG1dE5fomCuwrMnh__oVmRktCU9-q-sCotQ_w05hCQMb5dDfmPms-RVIZqXdBH7KJSVovJiw6zn1Y8XM-TAZRr56MqHOK_qJSxAcUFaL0n6cb6_AswVsjo74swTGsqutBhZR8j-f0R6Kx93SR68hiTfzYq8ckC887JkdYNc4" },
            { title: "New Partnership Announced with Local Brands", category: "NIL Business", color: "blue-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv1x7CH4Fi2a78tTBYWiSluPlcuxFhAg8K1A7e-6A2hYR146f4V1hv7w4FL5ljjeu0Z_Gv05SA_4mHxek2F_IecDpKH2QlFv5jmI_Xjo6droDa8CZ6nHJDIarLTAMPfquhDhe9kotoTzjtxFzrrBHXyidIz071zNKGlhVYuMcaCWFMNvr7iGGySj_LufuHTfc9ljCCfEuoZcaVvkUe2BpOAqq92ZxjO3dq48UPg_uhwMMUTtDsjmK35w43gnCF-mlRLq913KgXZSA" }
          ].map((news, idx) => (
            <article key={idx} className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-shadow group">
              <div className="h-56 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url("${news.img}")` }}></div>
              <div className="p-8 flex flex-col flex-1 relative bg-[#021528]/80 backdrop-blur-sm">
                <div className={`text-xs text-${news.color} font-bold mb-3 uppercase tracking-wider flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-${news.color}`}></span>
                  {news.category}
                </div>
                <h3 className="text-xl font-bold text-cream mb-4 group-hover:text-primary transition-colors">{news.title}</h3>
                <p className="text-smoke text-sm mb-6 line-clamp-3 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className="mt-auto text-sm text-white font-bold hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wide" href="/media">
                  Read Full Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
