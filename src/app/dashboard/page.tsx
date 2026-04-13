import StartupCard from "@/components/dashboard/startup-card";
import StartupForm from "@/components/dashboard/startup-form";
import { getAllStartups } from "@/lib/startup-data";

export default function DashboardPage() {
  const startups = getAllStartups();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(97,178,255,0.12),transparent_24%),linear-gradient(180deg,#07111f_0%,#08121e_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/42">
              Founder dashboard
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Build startup pages fast
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">
              Generate a premium startup website draft locally, preview it instantly, and evolve it into
              a fundable-looking public page with clearer structure and stronger visuals.
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
              New startup
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Generate a live-ready draft</h2>
            <p className="mt-3 text-sm leading-7 text-white/58">
              Fill in the startup idea, audience, category, and monetization. StartupQuick will build
              a polished presentation page with proof bars, business framing, and shareable structure.
            </p>

            <div className="mt-6">
              <StartupForm />
            </div>
          </div>

          <div className="glass rounded-[2rem] p-6">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/75">
              Workspace
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Startup library</h2>
            <p className="mt-3 text-sm leading-7 text-white/58">
              Seed examples and product previews. These are the pages the platform can generate and
              organize into a founder-friendly workspace.
            </p>

            <div className="mt-6 grid gap-4">
              {startups.map((startup) => (
                <StartupCard key={startup.slug} startup={startup} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
