
export default function MissionPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <section className="relative w-full px-4 md:px-12 py-20 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-2xl min-h-[500px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(15, 17, 22, 0.3) 0%, rgba(15, 17, 22, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtwc2dWJFuN6u0jsjoe7C66TTAx8lIjhup47w5coEoSRCBbeoMswXqGiPxCndsr5q4vh1pxjnYOY5SCrdr2VB7MI256qT-UXHfULJHwCoQAoEFjwuKOUadjvdZdZ7wvx1Lnn1XXJdr-u6fcQP-xywMfUuZg3N3ufzBKXWhaFF9Ibeb2Nl5NGapcuYUDPfarTZUKvuO36kt2jWwaUFe16XmgnpRdKlsKDRRz9xtVjon8ZWdgXaD1CHNkuJvhVnqvKP3sVfAwokzYcM')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-transparent to-transparent opacity-90"></div>
            <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-2 w-fit mx-auto">Est. 2015</span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">Our Mission<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">In Action</span></h1>
              <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">Empowering the next generation of elite female athletes through basketball excellence, academic rigor, and character development.</p>
            </div>
          </div>

          <div className="-mt-24 relative z-20 mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { label: "College Placement", val: "100%", icon: "school" },
               { label: "Scholarships Raised", val: "$2M+", icon: "payments" },
               { label: "D1 Commits", val: "50+", icon: "trophy" }
             ].map((stat, i) => (
               <div key={i} className="glass-card p-6 rounded-xl flex flex-col items-center text-center border-t-4 border-primary shadow-lg">
                  <span className="material-symbols-outlined text-primary mb-3 text-4xl">{stat.icon}</span>
                  <p className="text-white text-4xl font-black">{stat.val}</p>
                  <p className="text-gray-400 text-sm font-medium uppercase mt-1">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111318] py-24">
         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Where Your Support Goes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Your contributions directly fund critical pillars of our academy.</p>
         </div>
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {['Gym Time', 'Travel', 'Academic Support', 'Media/Recruiting', 'Scholarship Fund'].map((item, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                 <h3 className="text-white font-bold mb-2">{item}</h3>
                 <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
