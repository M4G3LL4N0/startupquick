import {
  BarChart3,
  Globe,
  Image as ImageIcon,
  LayoutTemplate,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI startup generation",
    body: "Generate positioning, headlines, business model summaries, go-to-market blocks, and investor-ready language from a simple idea prompt.",
  },
  {
    icon: LayoutTemplate,
    title: "Premium venture-grade design",
    body: "Launch pages inspired by polished startup and portfolio sites, with refined hierarchy, trust signals, and clean visual organization.",
  },
  {
    icon: BarChart3,
    title: "Charts, bars, and proof visuals",
    body: "Transform startup information into visual scorecards, milestone blocks, opportunity bars, readiness panels, and traction dashboards.",
  },
  {
    icon: ImageIcon,
    title: "Startup-specific visuals",
    body: "Give each startup a branded hero image and category-relevant visual system so it feels real immediately, not like a blank template.",
  },
  {
    icon: Globe,
    title: "Instant live subdomains",
    body: "Publish to yourstartup.startupquick.online in minutes, then upgrade to connect your own domain whenever you're ready.",
  },
  {
    icon: Zap,
    title: "Built to share fast",
    body: "Designed for founder DMs, investor links, accelerator cohorts, agency delivery, and immediate proof-of-work presentation.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-sm font-medium uppercase tracking-[0.28em] text-sky-300/80">
          Platform features
        </div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          More than a website builder.
          <span className="text-white/55"> It is startup presentation infrastructure.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
          StartupQuick is built for speed, credibility, and visual clarity. It turns rough startup concepts
          into polished public pages with the structure founders actually need.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="glass rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                <Icon className="h-5 w-5 text-sky-200" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{feature.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
