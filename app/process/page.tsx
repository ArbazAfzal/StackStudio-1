import type { Metadata } from "next";
import { Search, Pen, Code, Rocket } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Split, StatRow } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { processSteps } from "@/lib/data";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const detailCopy: Record<string, string> = {
  "01": "We start with a short call to understand your goals, scope, users, and success metrics — then map a clear plan with a fixed timeline.",
  "02": "You get wireframes, a technical blueprint, and a transparent quote before any code is written. No surprises later.",
  "03": "We build in tight iterations with daily updates, so you always know exactly where the project stands and can request changes early.",
  "04": "We deploy to your preferred host, hand over the source code and docs, and stay on for post-launch support and monitoring.",
};

const iconMap = { search: Search, pen: Pen, code: Code, rocket: Rocket };

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Stack Studio works: Discovery Call, Proposal & Planning, Build & Iterate, and Launch & Support — a fast, transparent process from idea to production.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process | Stack Studio",
    description: "Discovery, planning, build, and launch — a transparent path from idea to production.",
    url: `${SITE_URL}/process`,
  },
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stack Studio Process",
          url: `${SITE_URL}/process`,
        }}
      />
      <main>
        <PageHero
          eyebrow="— HOW WE WORK"
          title="From Idea to Launch, Without the Guesswork"
          description="A simple, transparent four-step process designed to get you to production fast — with daily updates along the way."
          image={images.codeReview.src}
          imageAlt={images.codeReview.alt}
        />

        <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-4xl space-y-6">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <div
                  key={step.step}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    {Icon && <Icon size={28} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-widest text-accent">{step.step}</span>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="mt-2 text-muted">{detailCopy[step.step]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Split
          eyebrow="— HOW WE COLLABORATE"
          title="You talk to the people building it"
          description="No account managers, no hand-offs. You work directly with the engineers and designers shipping your product, so decisions are fast and context is never lost."
          bullets={[
            "Direct communication, no middlemen",
            "Daily progress updates",
            "Shared repo and live previews",
            "Fixed timeline agreed up front",
          ]}
          image={images.team}
          reverse
        />

        <StatRow
          stats={[
            { value: "3–5", label: "Days for landing pages" },
            { value: "10–28", label: "Days for web apps" },
            { value: "Daily", label: "Progress updates" },
            { value: "30+", label: "Days support" },
          ]}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
