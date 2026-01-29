
export default function ContactPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow flex flex-col items-center py-10 px-4 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col gap-10">
          <div className="flex flex-col gap-3 py-4">
            <h1 className="text-white text-4xl lg:text-5xl font-black tracking-tight">Connect with Elite</h1>
            <p className="text-slate-400 text-lg font-light max-w-2xl">Empowering the next generation of athletes and business leaders. Reach out to discuss recruiting, partnerships, or general program details.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-xl p-6 lg:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-blue">mail</span> Send us a Message
                </h3>
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="flex flex-col">
                      <span className="text-slate-300 text-sm font-medium pb-2">Full Name</span>
                      <input className="bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:border-primary-blue focus:ring-0 outline-none transition-all" placeholder="Enter your full name" />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-slate-300 text-sm font-medium pb-2">Email Address</span>
                      <input className="bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:border-primary-blue focus:ring-0 outline-none transition-all" placeholder="you@example.com" type="email" />
                    </label>
                  </div>
                  <label className="flex flex-col">
                    <span className="text-slate-300 text-sm font-medium pb-2">Message</span>
                    <textarea className="bg-white/5 border border-white/10 rounded-lg h-32 p-4 text-white focus:border-primary-blue focus:ring-0 outline-none transition-all resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                  </label>
                  <button className="bg-primary-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5">Send Message</button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
               <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
               {[
                 { q: "How does the recruitment process work?", a: "Our recruitment process typically begins in the spring season. We evaluate players based on skill, academic standing, and team fit." },
                 { q: "What NIL opportunities are available?", a: "We partner with local and national brands to provide our athletes with legitimate Name, Image, and Likeness opportunities." }
               ].map((faq, i) => (
                 <details key={i} className="group glass-panel rounded-lg overflow-hidden border-none shadow-none bg-white/5">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                       <span className="font-medium">{faq.q}</span>
                       <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="p-5 pt-0 text-slate-300 text-sm border-t border-white/5 mt-2">{faq.a}</div>
                 </details>
               ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
