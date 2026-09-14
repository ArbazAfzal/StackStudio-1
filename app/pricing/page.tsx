import type { Metadata } from "next";
import { PricingPlansSection } from "@/components/sections/pricing-plans";
import { PageHero } from "@/components/sections/page-hero";
import { Split, StatRow } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { pricingTiers } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Stack Studio's software and AI development services — Starter, Growth, and Enterprise plans with a full feature comparison.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Stack Studio",
    description: "Starter, Growth, and Enterprise plans with a full feature comparison table.",
    url: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Stack Studio Pricing",
    url: `${SITE_URL}/pricing`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pricingTiers.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        description: t.tagline,
      })),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHero
          eyebrow="— PRICING"
          title="A Clear Investment in Better Software"
          description="Choose a starting point for your build, compare what is included, and get a final fixed quote after a short discovery call."
          image={images.dashboard.src}
          imageAlt={images.dashboard.alt}
        />
        <PricingPlansSection />
        <Split
          eyebrow="— WHAT YOU ARE INVESTING IN"
          title="More than a launch day deliverable"
          description="Every plan is shaped around shipping a useful, maintainable product. You get a thoughtful technical foundation, a clear handoff, and support that keeps the work moving after launch."
          bullets={[
            "A focused scope and practical technical plan",
            "Production-ready implementation and deployment",
            "Clear ownership of source code and documentation",
            "A partner available for the next stage of growth",
          ]}
          image={images.codeReview}
          cta={{ label: "Discuss your scope", href: "/contact" }}
        />
        <StatRow
          stats={[
            { value: "Fixed", label: "Quotes after discovery" },
            { value: "3–28", label: "Typical delivery days" },
            { value: "Daily", label: "Progress visibility" },
            { value: "30+", label: "Days of support" },
          ]}
        />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
