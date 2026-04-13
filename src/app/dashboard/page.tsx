const startupCards = [
  {
    name: "OrbitalOS",
    stage: "Draft",
    url: "orbitalos.startupquick.online",
    score: 92,
    status: "Ready to publish",
  },
  {
    name: "GridPilot AI",
    stage: "Live",
    url: "gridpilotai.startupquick.online",
    score: 88,
    status: "Collecting leads",
  },
  {
    name: "ClinicNova",
    stage: "Draft",
    url: "clinicnova.startupquick.online",
    score: 79,
    status: "Needs refinement",
  },
];

const generationSteps = [
  "Startup name and category",
  "Problem and solution framing",
  "Hero copy and CTA",
  "Business model summary",
  "Go-to-market strategy blocks",
  "Visual scorecards and charts",
  "Startup artwork and design theme",
  "Subdomain publish",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(97,178,255,0.12),transparent_24%),linear-gradient(180deg,#07111f_0%,#08121e_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/42">
              Founder dashboard
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Create and manage startup websites fast
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">
              This is the V1 dashboard shell for StartupQuick. Next steps are auth, persistence,
              startup creation form, AI generation, domain management, billing, and publish flow.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Back to homepage
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-6">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/75">
              New startup flow
            </div>
            <h2 className="mt-4 text-2xl font-semibold">What StartupQuick generates</h2>

            <div className="mt-6 space-y-3">
              {generationSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm text-white/75">
                    {index + 1}
                  </div>
                  <div className="text-sm text-white/75">{step}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-300/8 p-4">
              <div className="text-sm font-semibold text-emerald-200">V1 build direction</div>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Add Supabase auth, a startup creation wizard, saved startups, AI generation actions,
                and wildcard subdomain routing for public startup pages.
              </p>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/75">
                  Startups
                </div>
                <h2 className="mt-3 text-2xl font-semibold">Workspace overview</h2>
              </div>
              <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                + New startup
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              {startupCards.map((card) => (
                <div key={card.name} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">{card.name}</div>
                      <div className="mt-2 text-sm text-white/48">{card.url}</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
                        {card.stage}
                      </div>
                      <div className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs text-sky-200">
                        {card.status}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">Site score</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{card.score}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">Visual quality</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{Math.max(card.score - 3, 72)}%</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">Share readiness</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{Math.min(card.score + 4, 99)}%</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-xs text-white/42">
                      <span>Readiness</span>
                      <span>{card.score}%</span>
                    </div>
                    <div className="metric-bar">
                      <span style={{ width: `${card.score}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
