import { notFound } from "next/navigation";
import { generateStartupFromIdea } from "@/lib/startup-generator";
import { getStartupBySlug } from "@/lib/startup-data";
import { slugify } from "@/lib/utils";
import type { StartupCategory, StartupFormInput, StartupRecord } from "@/lib/types";

function resolveQueryStartup(
  slug: string,
  searchParams: Record<string, string | string[] | undefined>
): StartupRecord | undefined {
  const name = typeof searchParams.name === "string" ? searchParams.name : "";
  const idea = typeof searchParams.idea === "string" ? searchParams.idea : "";
  const audience = typeof searchParams.audience === "string" ? searchParams.audience : "";
  const category = typeof searchParams.category === "string" ? searchParams.category : "";
  const monetization =
    typeof searchParams.monetization === "string" ? searchParams.monetization : "";
  const vibe = typeof searchParams.vibe === "string" ? searchParams.vibe : "";

  if (!name || !idea || !audience || !monetization || slugify(name) !== slug) {
    return undefined;
  }

  const input: StartupFormInput = {
    name,
    idea,
    audience,
    category: (category as StartupCategory) || "Other",
    monetization,
    vibe,
  };

  const generated = generateStartupFromIdea(input);

  return {
    ...generated,
    slug,
  };
}

function Metric({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] uppercase tracking-[0.2em] text-white/35">{label}</div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-3 metric-bar">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default async function StartupSlugPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  const startup =
    getStartupBySlug(slug) ?? resolveQueryStartup(slug, resolvedSearchParams);

  if (!startup) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,rgba(97,178,255,0.16),transparent_20%),radial-gradient(circle_at_80%_16%,rgba(124,247,212,0.12),transparent_18%),linear-gradient(180deg,#07111f_0%,#08111b_100%)] text-white">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className={`rounded-[2.2rem] border border-white/10 bg-gradient-to-br ${startup.accent} p-[1px]`}>
          <div className="rounded-[2.1rem] bg-[rgba(5,10,18,0.88)] p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-sky-300/15 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-sky-200">
                  {startup.slug}.startupquick.online
                </div>
                <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                  {startup.name}
                </h1>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-white/68">
                  {startup.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                    {startup.category}
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                    {startup.stage}
                  </div>
                  <div className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                    {startup.status}
                  </div>
                </div>
              </div>

              <div className="glass w-full max-w-md rounded-[1.7rem] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                  Startup signal
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Metric label="Overall" value={`${startup.score}%`} progress={startup.score} />
                  <Metric label="Traction" value={`${startup.tractionReadiness}%`} progress={startup.tractionReadiness} />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {startup.metrics.map((metric) => (
                <Metric
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  progress={metric.progress}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/75">
                Summary
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.summary}</p>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/75">
                Problem
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.problem}</p>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300/75">
                Solution
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.solution}</p>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/75">
                Features
              </div>
              <div className="mt-4 grid gap-3">
                {startup.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Audience
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.audience}</p>

              <div className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Business model
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.businessModel}</p>

              <div className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Go to market
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.goToMarket}</p>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Market
              </div>
              <div className="mt-4 text-3xl font-semibold text-white">{startup.marketSize}</div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.marketInsight}</p>

              <div className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Pricing
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">{startup.pricing}</p>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Roadmap
              </div>
              <div className="mt-4 space-y-3">
                {startup.milestones.map((milestone, index) => (
                  <div
                    key={milestone}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm text-white/75">
                      {index + 1}
                    </div>
                    <div className="text-sm text-white/72">{milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[1.8rem] p-6">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/44">
                Built with StartupQuick
              </div>
              <p className="mt-4 text-base leading-8 text-white/68">
                This page demonstrates the StartupQuick product direction: fast startup creation,
                premium public presentation, proof bars, and a founder-friendly structure that feels
                ready to show customers, partners, or investors.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                >
                  Create your startup page
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Back to homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
