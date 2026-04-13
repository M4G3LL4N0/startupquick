export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#07111f_0%,#08111b_100%)] px-6 text-white">
      <div className="glass max-w-xl rounded-[2rem] p-8 text-center">
        <div className="text-xs uppercase tracking-[0.28em] text-white/42">StartupQuick</div>
        <h1 className="mt-4 text-4xl font-semibold">Startup page not found</h1>
        <p className="mt-4 text-base leading-8 text-white/62">
          This startup slug does not exist yet in the current local build. Create one from the dashboard
          to preview how StartupQuick generates public startup pages.
        </p>
        <a
          href="/dashboard"
          className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
        >
          Go to dashboard
        </a>
      </div>
    </main>
  );
}
