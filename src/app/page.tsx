import ExampleSection from "@/components/example-section";
import FeatureGrid from "@/components/feature-grid";
import Footer from "@/components/footer";
import HeroVisual from "@/components/hero-visual";
import PricingSection from "@/components/pricing-section";
import SiteHeader from "@/components/site-header";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-sky-300/15 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-sky-200">
              Startup websites in minutes
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Turn startup ideas into
              <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                {" "}premium launch pages{" "}
              </span>
              instantly.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              StartupQuick helps founders create polished, visual, investor-friendly startup websites
              with strategy blocks, branding, charts, and live subdomains fast.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:opacity-90"
              >
                Create My Startup
              </a>
              <a
                href="#examples"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                See Startup Examples
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["Live in minutes", "3"],
                ["Templates", "12+"],
                ["Visual proof blocks", "40+"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/42">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <FeatureGrid />
      <ExampleSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
