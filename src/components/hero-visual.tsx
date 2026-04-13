const cards = [
  {
    title: "AI Grid Forecast",
    subtitle: "Energy infrastructure startup",
    score: 91,
    market: "$8.2B",
    status: "Investor-ready",
  },
  {
    title: "QuickPitch Robotics",
    subtitle: "Warehouse automation",
    score: 87,
    market: "$14.7B",
    status: "Launch page live",
  },
  {
    title: "CareLoop",
    subtitle: "Patient follow-up platform",
    score: 84,
    market: "$5.1B",
    status: "Collecting leads",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative">
      <div className="hero-orb one rounded-full" />
      <div className="hero-orb two rounded-full" />
      <div className="hero-orb three rounded-full" />

      <div className="glass grid-bg overflow-hidden rounded-[2rem] p-4 lg:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="glass-soft rounded-[1.5rem] p-4 lg:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Live startup generator
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Premium startup site in progress
                </h3>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Publishing
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-[rgba(5,10,18,0.85)] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">orbitalos.startupquick.online</p>
                  <p className="mt-1 text-xs text-white/45">SaaS • Infrastructure • Seed stage</p>
                </div>
                <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-200">
                  Live URL
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Investor score</div>
                  <div className="mt-3 text-3xl font-semibold text-white">92</div>
                  <div className="mt-2 metric-bar"><span style={{ width: "92%" }} /></div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Page quality</div>
                  <div className="mt-3 text-3xl font-semibold text-white">A+</div>
                  <div className="mt-2 metric-bar"><span style={{ width: "89%" }} /></div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Traction readiness</div>
                  <div className="mt-3 text-3xl font-semibold text-white">81%</div>
                  <div className="mt-2 metric-bar"><span style={{ width: "81%" }} /></div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/15 to-fuchsia-400/10 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">Auto-generated positioning</div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    The fastest startup presentation engine for founders, agencies, and accelerators.
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Create an investor-friendly startup website with messaging, business model blocks,
                    launch visuals, and a live subdomain in minutes.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Signal graph</div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-white/55">
                        <span>Clarity</span><span>94%</span>
                      </div>
                      <div className="metric-bar"><span style={{ width: "94%" }} /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-white/55">
                        <span>Monetization</span><span>83%</span>
                      </div>
                      <div className="metric-bar"><span style={{ width: "83%" }} /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-white/55">
                        <span>Market size</span><span>88%</span>
                      </div>
                      <div className="metric-bar"><span style={{ width: "88%" }} /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-white/55">
                        <span>Shareability</span><span>97%</span>
                      </div>
                      <div className="metric-bar"><span style={{ width: "97%" }} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {cards.map((card) => (
              <div key={card.title} className="glass-soft rounded-[1.5rem] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{card.title}</div>
                    <div className="mt-1 text-sm text-white/50">{card.subtitle}</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {card.status}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">Score</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{card.score}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">Market</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{card.market}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-xs text-white/45">
                    <span>Launch quality</span>
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
  );
}
