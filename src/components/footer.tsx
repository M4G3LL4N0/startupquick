export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          © 2026 StartupQuick. Build startup sites fast.
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="mailto:hello@startupquick.online">hello@startupquick.online</a>
        </div>
      </div>
    </footer>
  );
}
