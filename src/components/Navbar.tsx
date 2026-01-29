import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b-0 border-b-white/5 shadow-2xl shadow-black/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-purple-500/20">
              <img
                alt="NJ Scholars Logo"
                className="w-full h-full object-cover transform scale-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQkHpSFktaDYAx8_AIszjsqrqo3zUXa-Y7rZWPcnZ4DVAecGXF1EiHerW04lmO4HKOb6WWl-f3BP_O73_Ed5gB_KFozGGDWLBZdaX6wvEDbH42d2zQrBQ0-sWjnQni2x9vYLprquQ0KGQMe-52GhnV__EnbsCo_7QxQ1SA38FRZlXnRF_J-__LG_3f-EKsRB3cY44RAyFSZKPGEzdvNh_d8_NNv2DT3vdJ7X8uNWSyiLysreGXwW9qGocdlNklkHrMHlH6Um3rjVc"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-cream text-lg font-bold tracking-tight leading-none uppercase">NJ Scholars</h1>
              <span className="text-[10px] text-primary tracking-[0.2em] font-semibold uppercase">Elite Academy</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-smoke hover:text-white transition-colors" href="/roster">Team</Link>
            <Link className="text-sm font-medium text-smoke hover:text-white transition-colors" href="/nil">NIL</Link>
            <Link className="text-sm font-medium text-smoke hover:text-white transition-colors" href="/about">About</Link>
            <Link className="text-sm font-medium text-smoke hover:text-white transition-colors" href="/media">News</Link>
            <Link className="text-sm font-medium text-smoke hover:text-white transition-colors" href="/contact">Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 border border-white/10">
              Login
            </button>
          </div>
          <div className="md:hidden text-white">
            <span className="material-symbols-outlined cursor-pointer">menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
