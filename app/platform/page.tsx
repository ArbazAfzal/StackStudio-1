import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PlatformsSection } from "@/components/sections/platforms";
import { Split, StatRow } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Every Stack Studio build ships the full stack — a client-facing app, an admin dashboard, APIs & backend, and a post-launch support panel, all included.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Platform & Deliverables | Stack Studio",
    description: "Client app, admin dashboard, API & backend, and post-launch support — all included.",
    url: `${SITE_URL}/platform`,
  },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stack Studio Platform",
          url: `${SITE_URL}/platform`,
        }}
      />
      <main>
        <PageHero
          eyebrow="— THE PLATFORM"
          title="One Product, Every Layer Covered"
          description="When Stack Studio ships a build, you receive the complete stack — not just a front end. Here is what is included by default."
          image={images.clientApp.src}
          imageAlt={images.clientApp.alt}
        />

        <PlatformsSection />

        <Split
          eyebrow="— CUSTOMER EXPERIENCE"
          title="A front end your customers actually enjoy"
          description="We design conversion-first interfaces that are fast, accessible, and on-brand — mobile-first, with motion that guides rather than distracts."
          bullets={[
            "Responsive, mobile-first layouts",
            "Accessible markup and clear focus states",
            "Performance tuned for Core Web Vitals",
            "Brand-matched design system",
          ]}
          image={images.clientApp}
        />

        <Split
          eyebrow="— YOUR TEAM"
          title="Dashboards your team can actually run"
          description="Admins, agents, and operators get the controls they need — content, users, orders, and analytics in one clean place, with role-based access."
          bullets={[
            "Secure admin and agent panels",
            "Role-based access control",
            "Real-time analytics and reporting",
            "Easy content and catalog management",
          ]}
          image={images.adminDashboard}
          reverse
        />

        <StatRow
          stats={[
            { value: "4", label: "Panels included" },
            { value: "100%", label: "Source code ownership" },
            { value: "30+", label: "Days support included" },
            { value: "24/7", label: "Monitoring available" },
          ]}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
