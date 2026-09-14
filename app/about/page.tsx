import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { stats, whyUsPoints, processSteps } from "@/lib/data";
import { PageHero } from "@/components/sections/page-hero";
import { Split } from "@/components/sections/content";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { SITE_URL } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stack Studio is a software development agency helping startups and businesses ship full-stack, MERN, AI, and SaaS products — fast and built to scale.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Stack Studio",
    description: "A software development agency building full-stack, AI, and SaaS products.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    title: "Speed without shortcuts",
    body: "We deliver in days, not months — but never at the cost of code quality or stability.",
  },
  {
    title: "Radical transparency",
    body: "Fixed pricing, clear timelines, and direct communication with the people building your product.",
  },
  {
    title: "Built to scale",
    body: "Modern, maintainable architecture so your product grows with your business, not against it.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Stack Studio",
    url: `${SITE_URL}/about`,
    mainEntity: { "@type": "Organization", name: "Stack Studio", url: SITE_URL },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHero
          eyebrow="— ABOUT US"
          title="A Studio That Ships"
          description="Stack Studio is a software development agency partnering with founders and teams to design, build, and scale digital products — from first prototype to production."
          image={images.team.src}
          imageAlt={images.team.alt}
        />

        <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our story</h2>
              <p className="mt-6 leading-relaxed text-foreground/80">
                We started Stack Studio with a simple belief: great software shouldn&apos;t take
                quarters to ship. By combining senior engineering with AI-accelerated workflows,
                we help businesses launch full-stack apps, AI agents, and SaaS platforms in a
                fraction of the usual time — without sacrificing craft.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                Whether you need a single landing page or a multi-tenant SaaS product, you work
                directly with the team building it. No account managers, no hand-offs, no surprises.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)]"
              >
                Start a project <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="section-label mb-6">BY THE NUMBERS</p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-5xl font-bold text-gradient">
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Split
          eyebrow="— THE WAY WE WORK"
          title="Small team, close collaboration, serious output"
          description="The best product decisions happen when the people shaping the strategy can speak directly with the people writing the code. That is why every Stack Studio project stays close, transparent, and focused."
          bullets={[
            "Senior builders involved from day one",
            "Fast decisions with fewer hand-offs",
            "Live previews throughout the build",
            "A maintainable product your team can own",
          ]}
          image={images.supportPanel}
          cta={{ label: "Meet us on your project", href: "/contact" }}
          reverse
        />

        <section className="bg-bg-secondary px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold lg:text-4xl">Why teams choose us</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyUsPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold lg:text-4xl">How we work</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-surface p-6">
                  <span className="text-xs font-semibold tracking-widest text-accent">{step.step}</span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Our values</h2>
            <div className="mt-10 space-y-6 text-left">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-semibold text-accent">{v.title}</h3>
                  <p className="mt-2 text-foreground/80">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
