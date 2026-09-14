import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid, Split, StatRow } from "@/components/sections/content";
import { TechStackShowcaseSection } from "@/components/sections/tech-stack-showcase";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const integrationItems = [
  { icon: "code", title: "Frontend", description: "Next.js, React, TypeScript, and Tailwind — fast, modern interfaces." },
  { icon: "server", title: "Backend & APIs", description: "Node.js, Python, and GraphQL APIs built for scale and security." },
  { icon: "database", title: "Databases", description: "PostgreSQL, MongoDB, Redis, and vector stores for RAG." },
  { icon: "bot", title: "AI & ML", description: "OpenAI, Anthropic, and LangChain for models and agents." },
  { icon: "layout", title: "CMS & Commerce", description: "WordPress, Shopify, WooCommerce, and Wix Studio." },
  { icon: "cloud", title: "Cloud & DevOps", description: "AWS, Vercel, Railway, Docker, and CI/CD pipelines." },
];

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Stack Studio builds on proven, modern technologies — Next.js, MERN, OpenAI, LangChain, WordPress, Shopify, Wix Studio, AWS, Vercel — and integrates the tools your business already runs on.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations & Tech Stack | Stack Studio",
    description: "Next.js, MERN, AI, WordPress, Shopify, Wix Studio, AWS, Vercel and more.",
    url: `${SITE_URL}/integrations`,
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stack Studio Integrations",
          url: `${SITE_URL}/integrations`,
        }}
      />
      <main>
        <PageHero
          eyebrow="— INTEGRATIONS"
          title="The Stack Behind Your Product"
          description="We build on proven, modern technologies and connect to the tools your business already runs on. If you need something specific, we integrate it."
          image={images.apiBackend.src}
          imageAlt={images.apiBackend.alt}
        />

        <FeatureGrid items={integrationItems} columns={3} />

        <TechStackShowcaseSection />

        <Split
          eyebrow="— CUSTOM INTEGRATIONS"
          title="Need a supplier or tool we don't have?"
          description="Payment gateways, CRMs, ERPs, and internal APIs — our team extends your product to connect whatever your business needs. Tell us what you use and we'll wire it in, end to end."
          bullets={[
            "Payment providers (Stripe, Razorpay, Payoneer)",
            "CRMs and marketing automation",
            "Internal or legacy APIs",
            "Regional suppliers and data sources",
          ]}
          image={images.apiBackend}
          cta={{ label: "Talk to us", href: "/contact" }}
        />

        <StatRow
          stats={[
            { value: "20+", label: "Technologies used" },
            { value: "99.9%", label: "Target uptime" },
            { value: "CI/CD", label: "Automated delivery" },
            { value: "AWS", label: "Cloud ready" },
          ]}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
