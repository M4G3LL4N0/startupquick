import type { StartupRecord } from "@/lib/types";

export default function StartupCard({ startup }: { startup: StartupRecord }) {
  return (
    <a
      href={`/startups/${startup.slug}`}
      className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="text-xl font-semibold text-white">{startup.name}</div>
          <div className="mt-2 text-sm text-white/48">{startup.slug}.startupquick.online</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
            {startup.stage}
          </div>
          <div className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs text-sky-200">
            {startup.category}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/60">{startup.summary}</p>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {startup.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">{metric.label}</div>
            <div className="mt-2 text-2xl font-semibold text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs text-white/42">
          <span>Overall readiness</span>
          <span>{startup.score}%</span>
        </div>
        <div className="metric-bar">
          <span style={{ width: `${startup.score}%` }} />
        </div>
      </div>
    </a>
  );
}
