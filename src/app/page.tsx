const examples = [
  {
    name: "OrbitalOS",
    category: "Infrastructure",
    copy: "A startup page for an operating layer that helps teams understand execution health and venture momentum.",
  },
  {
    name: "ClinicNova",
    category: "Health SaaS",
    copy: "A polished page for clinic operations, patient follow-up, and care workflow clarity.",
  },
  {
    name: "FluxLedger",
    category: "Fintech",
    copy: "A premium launch page for finance teams that need cleaner treasury and reporting workflows.",
  },
];

const features = [
  "AI-assisted startup copy",
  "Premium public launch pages",
  "Founder dashboard",
  "Visual scorecards and proof bars",
  "Startup-specific artwork sections",
  "Subdomain-ready publishing model",
  "Custom domain upgrade path",
  "Stripe-ready pricing layer",
];

const workflow = [
  "Enter your startup idea",
  "Generate structured positioning",
  "Preview a premium startup page",
  "Edit sections and visual direction",
  "Share the public startup link",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050a13] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050a13]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-bold">
              SQ
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em]">
                StartupQuick
              </div>
              <div className="text-xs text-white/45">Build startup sites fast</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/68 lg:flex">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#examples" className="hover:text-white">Examples</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/dashboard" className="hover:text-white">Dashboard</a>
          </nav>

          <a
            href="/dashboard"
            className="rounded-2xl bg-white px-4 py-2.5 text-sm font-bold !text-[#050a13] shadow-[0_12px_34px_rgba(255,255,255,0.14)]"
          >
            Create startup
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="premium-shell rounded-[2.4rem] p-5 lg:p-10">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center">
              <div className="w-fit rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Startup websites in minutes
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Turn startup ideas into{" "}
                <span className="bg-gradient-to-r from-white via-cyan-100 to-orange-200 bg-clip-text text-transparent">
                  premium launch pages
                </span>{" "}
                instantly.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                StartupQuick helps founders, studios, and creators turn raw startup ideas into polished,
                investor-friendly pages with structured messaging, visuals, proof bars, and shareable links.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/dashboard"
                  className="rounded-2xl bg-gradient-to-r from-cyan-200 via-white to-orange-100 px-6 py-4 text-center text-sm font-bold !text-[#050a13] shadow-[0_12px_40px_rgba(255,255,255,0.16)] transition hover:scale-[1.015] hover:shadow-[0_18px_50px_rgba(125,232,255,0.24)]"
                >
                  Create My Startup
                </a>
                <a
                  href="/startups/startupquick"
                  className="rounded-2xl border border-white/12 bg-white/7 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Example Page
                </a>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  ["Minutes", "Idea to page"],
                  ["Proof", "Structured blocks"],
                  ["Pro", "Domain path"],
                ].map(([value, label]) => (
                  <div key={label} className="premium-card rounded-[1.6rem] p-4">
                    <div className="relative text-2xl font-semibold">{value}</div>
                    <div className="relative mt-2 text-xs uppercase tracking-[0.18em] text-white/42">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="premium-card rounded-[2rem] p-4">
                <div className="premium-art rounded-[1.6rem]">
                  <div className="absolute inset-x-5 bottom-5 z-10 rounded-[1.4rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">
                      Example generated page
                    </div>
                    <div className="mt-3 text-2xl font-semibold">OrbitalOS</div>
                    <p className="mt-2 text-sm leading-6 text-white/66">
                      A premium public page with startup positioning, visual proof, market framing, and launch-ready CTAs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Clarity", "Positioning"],
                  ["Shareability", "Public link"],
                  ["Visual polish", "Page craft"],
                ].map(([label, value]) => (
                  <div key={label} className="premium-card rounded-[1.5rem] p-4">
                    <div className="relative text-xs uppercase tracking-[0.18em] text-white/42">
                      {label}
                    </div>
                    <div className="relative mt-3 text-xl font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              Product
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for the moment when an idea needs to look real.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              Most founders can explain an idea in a message, but turning it into something organized,
              visual, and credible still takes too long. StartupQuick makes that first public version fast.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="premium-card rounded-[1.5rem] p-5">
                <div className="relative text-lg font-semibold">{feature}</div>
                <p className="relative mt-3 text-sm leading-7 text-white/58">
                  Designed to help founders move from scattered notes to a polished page people can actually understand and share.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="premium-shell rounded-[2.2rem] p-6 lg:p-9">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-100/70">
            How it works
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step} className="premium-card rounded-[1.5rem] p-5">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <div className="relative mt-5 text-sm font-semibold leading-6">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
            Example startups
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Premium pages for ideas across categories.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {examples.map((example) => (
            <div key={example.name} className="premium-card rounded-[2rem] p-5">
              <div className="premium-art min-h-[190px] rounded-[1.5rem]" />
              <div className="relative mt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-semibold">{example.name}</div>
                  <div className="mt-1 text-sm text-cyan-100/62">{example.category}</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-white/70">
                  Draft
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-7 text-white/62">{example.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="premium-shell rounded-[2.2rem] p-6 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-100/75">
                Pricing path
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Start free. Upgrade when the startup gets serious.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/62">
                The MVP supports the core free flow now, with a clear path to paid plans for custom domains,
                richer visuals, analytics, and studio workflows.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Free", "$0", "One startup page"],
                ["Pro", "$19/mo", "Domains and premium controls"],
                ["Studio", "$79/mo", "Multi-startup workflows"],
              ].map(([name, price, copy]) => (
                <div key={name} className="premium-card rounded-[1.6rem] p-5">
                  <div className="relative text-xl font-semibold">{name}</div>
                  <div className="relative mt-4 text-3xl font-semibold">{price}</div>
                  <p className="relative mt-3 text-sm leading-7 text-white/58">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/46 sm:flex-row sm:items-center sm:justify-between">
          <div>StartupQuick • Premium startup generation</div>
          <p>Intended pricing path. No live customer or conversion figures on this page.</p>
        </div>
      </footer>
    </div>
  );
}
