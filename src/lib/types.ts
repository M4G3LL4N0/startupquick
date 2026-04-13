export type StartupCategory =
  | "AI"
  | "SaaS"
  | "Marketplace"
  | "Consumer"
  | "Fintech"
  | "Health"
  | "Climate"
  | "Robotics"
  | "Infrastructure"
  | "Other";

export type StartupStage =
  | "Idea"
  | "Draft"
  | "Prototype"
  | "Live"
  | "Growing";

export type StartupRecord = {
  slug: string;
  name: string;
  tagline: string;
  category: StartupCategory;
  stage: StartupStage;
  summary: string;
  problem: string;
  solution: string;
  audience: string;
  businessModel: string;
  goToMarket: string;
  marketSize: string;
  marketInsight: string;
  pricing: string;
  status: string;
  accent: string;
  score: number;
  clarity: number;
  monetization: number;
  market: number;
  shareability: number;
  tractionReadiness: number;
  features: string[];
  milestones: string[];
  metrics: {
    label: string;
    value: string;
    progress: number;
  }[];
};

export type StartupFormInput = {
  name: string;
  idea: string;
  audience: string;
  category: StartupCategory;
  monetization: string;
  vibe: string;
};
