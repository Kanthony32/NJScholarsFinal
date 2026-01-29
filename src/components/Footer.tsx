import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#021020] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-full overflow-hidden border border-white/10">
                <img
                  alt="NJ Scholars Logo"
                  className="w-full h-full object-cover transform scale-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpKP-8RmvL6Yvhy3PRfmADW86tAww6ImQ1r--9ud9YH-OFdcrntAZ0xnGLo6ZQE-RUyX8CVdi1GkRlNR-3PAcVAGEU8TFqU_10ccOLv6JhT_Fs6FW3PYHbWSCZ5ATIKExEz67RbMUW43jSLG0MnSdYsJMEFbgEoWz8RJ4k8WkrvT-67OQ67ihWgLI40PD0v-Qbfp3jFuxTc0ytcK58ShVpARWGvlFGLSQQVl7TuVs8sCWM3nWcDLscgP05WNHn4BDcsJM6dnDfLTY"
                />
              </div>
              <span className="text-xl font-bold text-cream uppercase tracking-wide">NJ Scholars</span>
            </div>
            <p className="text-smoke text-sm leading-relaxed mb-6">
              Empowering the next generation of female athletes and leaders through basketball, education, and character development.
            </p>
            <div className="flex gap-4">
              <a className="text-smoke hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-primary" href="#"><span className="text-xs">TW</span></a>
              <a className="text-smoke hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-accent-pink" href="#"><span className="text-xs">IG</span></a>
              <a className="text-smoke hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-blue-600" href="#"><span className="text-xs">FB</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Program</h4>
            <ul className="flex flex-col gap-3">
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/roster">Elite Teams</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/events">Training Camps</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/roster">College Recruiting</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/alumni">Alumni</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">NIL & Business</h4>
            <ul className="flex flex-col gap-3">
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/partners">Partner With Us</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/roster">Athlete Directory</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/partners">Brand Resources</Link></li>
              <li><Link className="text-sm text-smoke hover:text-primary transition-colors" href="/legal">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-smoke mb-4">Get the latest updates on game schedules and player news.</p>
            <form className="flex flex-col gap-3">
              <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="Enter your email" type="email"/>
              <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 NJ Scholars Elite Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-xs text-gray-500 hover:text-white transition-colors" href="/legal">Privacy Policy</Link>
            <Link className="text-xs text-gray-500 hover:text-white transition-colors" href="/legal">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
