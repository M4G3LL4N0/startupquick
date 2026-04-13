export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,17,31,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold">
            SQ
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-white/90 uppercase">
              StartupQuick
            </div>
            <div className="text-[11px] text-white/45">
              Build startup sites fast
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#examples" className="transition hover:text-white">Examples</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="/dashboard" className="transition hover:text-white">Dashboard</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/dashboard"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Sign in
          </a>
          <a
            href="/dashboard"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:opacity-90"
          >
            Create startup
          </a>
        </div>
      </div>
    </header>
  );
}
