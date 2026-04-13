import { NextResponse } from "next/server";
import { generateStartupFromIdea } from "@/lib/startup-generator";
import { slugify } from "@/lib/utils";
import type { StartupFormInput } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as StartupFormInput;
  const generated = generateStartupFromIdea(body);

  return NextResponse.json({
    ...generated,
    slug: slugify(body.name || "startup"),
  });
}
