import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";
import { PageHero } from "@/components/sections/page-hero";
import { Split, StatRow } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { SITE_URL, SITE_EMAIL } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from Stack Studio. Tell us about your project — full-stack, MERN, AI, SaaS, WordPress, Shopify, or Wix — and we'll respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Stack Studio",
    description: "Get a free quote for your software or AI project.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Stack Studio",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Stack Studio",
      email: SITE_EMAIL,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHero
          eyebrow="— START A CONVERSATION"
          title="Bring Us the Problem. Leave With a Clear Next Step."
          description="Tell us what you are building, what is blocked, or what needs to move faster. We will reply within 24 hours with an honest first direction."
          image={images.team.src}
          imageAlt={images.team.alt}
        />
        <ContactSection />
        <Split
          eyebrow="— WHAT HAPPENS NEXT"
          title="A straightforward path from message to momentum"
          description="Your first conversation is practical and low-pressure. We clarify the goal, identify the right scope, and tell you what it will take to ship well."
          bullets={[
            "We review your brief and reply within 24 hours",
            "We clarify goals, users, constraints, and priorities",
            "You receive a practical scope and delivery range",
            "We start only when the plan feels right",
          ]}
          image={images.supportPanel}
          cta={{ label: "Explore our process", href: "/process" }}
          reverse
        />
        <StatRow
          stats={[
            { value: "24h", label: "Typical reply time" },
            { value: "Direct", label: "Builder communication" },
            { value: "Fixed", label: "Clear project scope" },
            { value: "30+", label: "Days post-launch support" },
          ]}
        />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
