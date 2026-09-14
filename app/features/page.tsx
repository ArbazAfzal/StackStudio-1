import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Split, StatRow } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { services } from "@/lib/data";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Stack Studio's capabilities — full-stack engineering, MERN, AI model integration, AI agents, SaaS, WordPress, Shopify, and Wix Studio development, with cloud delivery and ongoing support.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features & Capabilities | Stack Studio",
    description: "Full-stack, AI, cloud, e-commerce, and ongoing partnership — all in one studio.",
    url: `${SITE_URL}/features`,
  },
};

export default function FeaturesPage() {
  const featureItems = services.map((s) => ({
    icon: s.icon,
    title: s.title,
    description: s.description,
  }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stack Studio Features",
          url: `${SITE_URL}/features`,
        }}
      />
      <main>
        <PageHero
          eyebrow="— CAPABILITIES"
          title="Everything You Need to Ship and Scale"
          description="From first prototype to a production-grade platform — explore the capabilities Stack Studio brings to every engagement."
          image={images.heroTech.src}
          imageAlt={images.heroTech.alt}
        />

        <FeatureGrid items={featureItems} />

        <Split
          eyebrow="— AI & AUTOMATION"
          title="Intelligent features, built in"
          description="We integrate LLMs, retrieval (RAG), and autonomous agents directly into your product — with guardrails and evaluation so AI behaves predictably in production, not just in demos."
          bullets={[
            "LLM integration (OpenAI, Anthropic, or open-source)",
            "Retrieval-Augmented Generation over your own data",
            "Custom agents that orchestrate tools and APIs",
            "Monitoring, logging, and cost controls by default",
          ]}
          image={images.aiAbstract}
          cta={{ label: "Explore AI services", href: "/services/ai-agent-creation" }}
        />

        <StatRow
          stats={[
            { value: "50+", label: "Projects delivered" },
            { value: "30+", label: "Happy clients" },
            { value: "3–10", label: "Days avg. delivery" },
            { value: "100%", label: "Source code ownership" },
          ]}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
