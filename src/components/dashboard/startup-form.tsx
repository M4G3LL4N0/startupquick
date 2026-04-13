"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { StartupCategory } from "@/lib/types";
import { slugify } from "@/lib/utils";

const categories: StartupCategory[] = [
  "AI",
  "SaaS",
  "Marketplace",
  "Consumer",
  "Fintech",
  "Health",
  "Climate",
  "Robotics",
  "Infrastructure",
  "Other",
];

export default function StartupForm() {
  const router = useRouter();
  const [name, setName] = useState("NovaPilot");
  const [idea, setIdea] = useState(
    "An AI operating layer that helps startup founders turn ideas into investor-friendly, visual launch pages instantly."
  );
  const [audience, setAudience] = useState("Founders, startup studios, agencies, accelerators");
  const [category, setCategory] = useState<StartupCategory>("SaaS");
  const [monetization, setMonetization] = useState(
    "Freemium startup page builder with premium plans and domain upgrades"
  );
  const [vibe, setVibe] = useState("Premium venture-grade");

  const previewSlug = useMemo(() => slugify(name || "your-startup"), [name]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      name,
      idea,
      audience,
      category,
      monetization,
      vibe,
    });

    router.push(`/startups/${previewSlug}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
        <label className="mb-2 block text-sm text-white/70">Startup name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/25"
          placeholder="Startup name"
        />
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
        <label className="mb-2 block text-sm text-white/70">What does it do?</label>
        <textarea
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/25"
          placeholder="Describe the startup idea"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <label className="mb-2 block text-sm text-white/70">Target audience</label>
          <input
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/25"
            placeholder="Who is this for?"
          />
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <label className="mb-2 block text-sm text-white/70">Category</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as StartupCategory)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
          >
            {categories.map((option) => (
              <option key={option} value={option} className="bg-slate-950">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <label className="mb-2 block text-sm text-white/70">Monetization</label>
          <input
            value={monetization}
            onChange={(event) => setMonetization(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/25"
            placeholder="How will it make money?"
          />
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <label className="mb-2 block text-sm text-white/70">Visual vibe</label>
          <input
            value={vibe}
            onChange={(event) => setVibe(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/25"
            placeholder="Premium, bold, futuristic..."
          />
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-emerald-300/15 bg-emerald-300/10 p-4">
        <div className="text-sm font-semibold text-emerald-200">Preview URL</div>
        <div className="mt-2 text-sm text-white/80">{previewSlug}.startupquick.online</div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:opacity-90"
      >
        Generate startup page
      </button>
    </form>
  );
}
