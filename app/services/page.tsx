import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FeatureGrid, Split } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { services, whyUsPoints } from "@/lib/data";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Stack Studio's software and AI services: Full Stack, MERN, AI Model Integration, AI Agent Creation, SaaS, WordPress, Shopify, and Wix Studio development.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software & AI Services | Stack Studio",
    description: "Full Stack, MERN, AI agents, SaaS, WordPress, Shopify, and Wix Studio development services.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stack Studio Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
  };

  const whyItems = whyUsPoints.map((p) => {
    const [title, description] = p.split(" — ");
    return {
      icon: "check",
      title: title ?? p,
      description: description ?? "",
    };
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHeader
          eyebrow="— SERVICES"
          title="Software & AI Services, Built to Scale"
          description="From full-stack web apps to autonomous AI agents and e-commerce stores — explore what Stack Studio can build for you."
        />

        <section className="bg-background px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h2 className="text-base font-semibold leading-snug">{service.title}</h2>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{service.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:gap-2">
                    Learn more <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Split
          eyebrow="— OUR APPROACH"
          title="One team, from idea to launch"
          description="You work directly with the engineers and designers building your product. We plan, design, build, and ship — then stay on for support."
          bullets={[
            "Clear scope and fixed timeline up front",
            "Daily updates and live previews",
            "Production-grade, scalable code",
            "Source code and docs handed over",
          ]}
          image={images.heroTech}
          cta={{ label: "See how we work", href: "/process" }}
        />

        <FeatureGrid items={whyItems} columns={3} />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
