import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex-1 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="px-2 py-1 rounded bg-primary-navy/20 text-primary-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">Compliance</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Legal Center</h1>
            <p className="text-slate-400 mt-4 max-w-2xl text-lg">Review our terms, policies, and NIL compliance guidelines designed to protect our student-athletes and partners.</p>
          </div>
          <div className="flex gap-3">
             <button className="h-11 px-5 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">Print</button>
             <button className="h-11 px-5 rounded-xl bg-white text-black font-bold text-sm">Download PDF</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           <aside className="lg:col-span-3 hidden lg:block">
              <nav className="sticky top-24 flex flex-col gap-2 text-sm text-slate-400">
                 {['Introduction', 'NIL Compliance', 'Data Collection', 'User Rights', 'Contact Legal'].map(item => (
                   <Link key={item} href="#" className="p-2 hover:text-white hover:bg-white/5 rounded transition-all">{item}</Link>
                 ))}
              </nav>
           </aside>
           <div className="lg:col-span-9">
              <div className="glass-panel p-8 md:p-12 rounded-2xl">
                 <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                       <span className="size-8 rounded-full bg-primary-navy/20 text-primary-navy flex items-center justify-center text-sm">1</span> Introduction
                    </h2>
                    <p className="text-slate-400 leading-relaxed">Welcome to the NJ Scholars Elite Academy Privacy Policy. We respect your privacy and are committed to protecting your personal data.</p>
                 </section>
                 <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                       <span className="size-8 rounded-full bg-primary-navy/20 text-primary-navy flex items-center justify-center text-sm">2</span> NIL Agreements
                    </h2>
                    <p className="text-slate-400 leading-relaxed">All agreements brokered through our platform are subject to strict compliance review by our legal department and collegiate associations.</p>
                 </section>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
