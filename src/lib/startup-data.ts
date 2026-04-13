import { generateStartupFromIdea } from "@/lib/startup-generator";
import { slugify } from "@/lib/utils";
import type { StartupRecord } from "@/lib/types";

const seedInputs = [
  {
    name: "StartupQuick",
    idea:
      "A premium startup website generator that turns ideas into polished, shareable microsites with visuals, bars, structure, and founder-ready messaging.",
    audience: "Founders, creators, startup studios, agencies, accelerators",
    category: "SaaS" as const,
    monetization: "Subscription pricing plus paid upgrades for custom domains and premium generation",
    vibe: "Premium venture-grade",
  },
  {
    name: "OrbitalOS",
    idea:
      "A modern command layer for managing distributed operations, project signals, and execution health from one interface.",
    audience: "Operators, founders, startup teams",
    category: "Infrastructure" as const,
    monetization: "Seat-based SaaS with enterprise expansion",
    vibe: "Mission control",
  },
  {
    name: "ClinicNova",
    idea:
      "A patient operations platform that improves intake, follow-up, and clinic communication with clearer workflows and automation.",
    audience: "Clinics, care teams, patient operations managers",
    category: "Health" as const,
    monetization: "Per-location subscription with premium analytics",
    vibe: "Calm and trusted",
  },
  {
    name: "FluxLedger",
    idea:
      "Treasury and finance workflow software for modern operators who need visibility, automation, and a cleaner system of record.",
    audience: "Finance teams, operators, controllers",
    category: "Fintech" as const,
    monetization: "Subscription plus premium reporting",
    vibe: "Crisp and institutional",
  },
];

export const startupRecords: StartupRecord[] = seedInputs.map((input) => {
  const generated = generateStartupFromIdea(input);
  return {
    ...generated,
    slug: slugify(input.name),
    stage: input.name === "StartupQuick" ? "Live" : "Draft",
  };
});

export function getAllStartups(): StartupRecord[] {
  return startupRecords;
}

export function getStartupBySlug(slug: string): StartupRecord | undefined {
  return startupRecords.find((startup) => startup.slug === slug);
}
