import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FAQSection } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with Stack Studio — timelines, support, existing codebases, source code ownership, AI development, NDAs, and pricing.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Stack Studio",
    description: "Timelines, support, code ownership, AI development, NDAs, and pricing — answered.",
    url: `${SITE_URL}/faq`,
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most websites and landing pages ship in 3–5 business days; larger SaaS or web apps take 10–28 days.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer ongoing support after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — every plan includes post-launch support, and monthly retainers are available for ongoing work.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the source code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100%. Once a project is complete and paid for, you own the source code, design files, and assets.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHero
          eyebrow="— FAQ"
          title="Questions, Answered"
          description="The things prospective clients ask us most. Still curious? Reach out and we'll help personally."
          image={images.supportPanel.src}
          imageAlt={images.supportPanel.alt}
        />
        <FAQSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
