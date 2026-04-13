const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For testing startup ideas fast.",
    features: [
      "1 startup site",
      "startupquick.online subdomain",
      "basic layout",
      "basic editing",
      "StartupQuick branding",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "For founders who want a premium public startup page.",
    features: [
      "3 startup sites",
      "remove branding",
      "better visuals and structure",
      "charts and proof blocks",
      "lead capture",
      "custom domain support",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Studio",
    price: "$79/mo",
    description: "For agencies, startup studios, and accelerators.",
    features: [
      "multiple startup sites",
      "client-ready workflows",
      "premium templates",
      "team collaboration",
      "priority generations",
      "agency delivery speed",
    ],
    cta: "Start Studio",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-300/80">
          Pricing
        </div>
        <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Start free. Upgrade when the idea gets real.
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60">
          Simple pricing for founders, creators, consultants, and startup communities.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-[1.8rem] p-6 ${
              tier.featured
                ? "glass border border-sky-300/20"
                : "glass-soft border border-white/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-white">{tier.name}</div>
              {tier.featured ? (
                <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs text-sky-200">
                  Most popular
                </div>
              ) : null}
            </div>

            <div className="mt-5 text-4xl font-semibold text-white">{tier.price}</div>
            <p className="mt-3 text-sm leading-7 text-white/60">{tier.description}</p>

            <div className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-white/8 bg-black/15 px-3 py-2 text-sm text-white/72">
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="/dashboard"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                tier.featured
                  ? "bg-white text-slate-900 hover:opacity-90"
                  : "border border-white/15 text-white hover:bg-white/10"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
