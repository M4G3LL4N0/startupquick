const examples = [
  {
    name: "FluxLedger",
    type: "Fintech infrastructure",
    url: "fluxledger.startupquick.online",
    copy:
      "AI-powered treasury workflows for modern finance teams with a clean investor-ready launch page and market positioning blocks.",
  },
  {
    name: "TerraMesh",
    type: "Climate tech",
    url: "terramesh.startupquick.online",
    copy:
      "A grid intelligence startup page using category visuals, roadmap cards, and readiness metrics to explain the vision fast.",
  },
  {
    name: "ClinicPilot",
    type: "Health operations SaaS",
    url: "clinicpilot.startupquick.online",
    copy:
      "A patient operations product page with business model bars, go-to-market sections, and CTA capture designed to win interest quickly.",
  },
];

export default function ExampleSection() {
  return (
    <section id="examples" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="glass rounded-[2rem] p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-300/80">
              Example startup pages
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Show the idea. Don’t just describe it.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              StartupQuick gives every startup a public presence that looks organized, visual, and real from day one.
            </p>
          </div>
          <a
            href="/dashboard"
            className="inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Create your version
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {examples.map((example) => (
            <div key={example.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-white">{example.name}</div>
                  <div className="mt-1 text-sm text-white/45">{example.type}</div>
                </div>
                <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs text-sky-200">
                  Live
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/65">
                {example.url}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/60">{example.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
