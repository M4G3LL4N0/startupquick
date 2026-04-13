import { clamp } from "@/lib/utils";
import type { StartupFormInput, StartupRecord } from "@/lib/types";

const accentMap: Record<string, string> = {
  AI: "from-sky-400/30 via-cyan-300/10 to-indigo-400/20",
  SaaS: "from-blue-400/30 via-sky-300/10 to-cyan-300/20",
  Marketplace: "from-fuchsia-400/30 via-purple-300/10 to-pink-400/20",
  Consumer: "from-emerald-400/30 via-lime-300/10 to-cyan-300/20",
  Fintech: "from-cyan-400/30 via-sky-300/10 to-blue-400/20",
  Health: "from-emerald-400/30 via-teal-300/10 to-sky-400/20",
  Climate: "from-lime-400/30 via-emerald-300/10 to-teal-400/20",
  Robotics: "from-indigo-400/30 via-slate-300/10 to-cyan-400/20",
  Infrastructure: "from-violet-400/30 via-slate-300/10 to-blue-400/20",
  Other: "from-white/20 via-slate-300/10 to-sky-400/20",
};

function scoreFromText(input: StartupFormInput) {
  const sizeSignal = input.idea.length + input.audience.length + input.monetization.length;
  const base = 72 + (sizeSignal % 17);
  return {
    score: clamp(base + 7, 65, 97),
    clarity: clamp(base + 4, 60, 98),
    monetization: clamp(base - 2, 55, 96),
    market: clamp(base + 1, 58, 98),
    shareability: clamp(base + 8, 60, 99),
    tractionReadiness: clamp(base - 3, 50, 95),
  };
}

export function generateStartupFromIdea(input: StartupFormInput): StartupRecord {
  const scores = scoreFromText(input);
  const accent = accentMap[input.category] ?? accentMap.Other;

  const oneLineIdea =
    input.idea.length > 180 ? `${input.idea.slice(0, 177)}...` : input.idea;

  return {
    slug: "",
    name: input.name,
    tagline: `The fastest way to launch ${input.category.toLowerCase()} momentum around ${input.name}.`,
    category: input.category,
    stage: "Draft",
    summary: `${input.name} helps ${input.audience.toLowerCase()} solve a painful workflow with a premium, focused product experience. ${oneLineIdea}`,
    problem: `${input.audience} still rely on fragmented tools, vague explanations, and slow execution. That creates confusion, weak conversion, and low confidence from customers, partners, or investors.`,
    solution: `${input.name} turns the core idea into a cleaner, faster, and more credible system with sharper positioning, a simpler user flow, and a public-facing presentation that is easy to share.`,
    audience: input.audience,
    businessModel: `${input.monetization} with a freemium-to-paid path, premium features, and higher-value upgrades as users move from exploration to serious adoption.`,
    goToMarket: `Launch through founder communities, targeted social proof, sharp before-and-after demos, startup directories, referral loops, and partnerships with agencies, accelerators, or niche operators in ${input.category.toLowerCase()}.`,
    marketSize: "$1B–$10B+ expandable category",
    marketInsight: `${input.category} buyers reward products that reduce friction, improve perceived professionalism, and make a new workflow feel immediately real.`,
    pricing: `Free entry tier, premium monthly plan, and upgraded domain / analytics / collaboration add-ons.`,
    status: "Ready for public draft",
    accent,
    score: scores.score,
    clarity: scores.clarity,
    monetization: scores.monetization,
    market: scores.market,
    shareability: scores.shareability,
    tractionReadiness: scores.tractionReadiness,
    features: [
      "Premium startup landing page",
      "Structured business model blocks",
      "Charts, bars, and proof visuals",
      "Public startup URL for sharing",
      "Founder-ready presentation format",
      "Upgradable premium feature ladder",
    ],
    milestones: [
      "Publish initial startup page",
      "Collect first interest and feedback",
      "Refine positioning and pricing",
      "Add premium domain and analytics",
      "Launch repeatable acquisition loop",
    ],
    metrics: [
      { label: "Clarity", value: `${scores.clarity}%`, progress: scores.clarity },
      { label: "Monetization", value: `${scores.monetization}%`, progress: scores.monetization },
      { label: "Market", value: `${scores.market}%`, progress: scores.market },
      { label: "Shareability", value: `${scores.shareability}%`, progress: scores.shareability },
    ],
  };
}
