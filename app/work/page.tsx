import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Split } from "@/components/sections/content";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { projects } from "@/lib/projects";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent projects by Stack Studio — SaaS dashboards, AI agents, Shopify stores, and MERN marketplaces built for real businesses.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Recent Work | Stack Studio",
    description: "SaaS, AI, e-commerce, and marketplace projects built by Stack Studio.",
    url: `${SITE_URL}/work`,
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stack Studio Portfolio",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/work/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHeader
          eyebrow="— OUR WORK"
          title="Products We've Shipped"
          description="A sample of products we've built — from SaaS platforms to AI agents and conversion-focused stores. (Placeholder samples — swap in your real case studies anytime.)"
        />

        <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-75`} />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">{project.category}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:gap-2">
                    View Project <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Split
          eyebrow="— CASE STUDIES"
          title="Want a deeper look?"
          description="Each project page breaks down the challenge, the solution, and the tech stack we used — so you can see exactly how we approach real product work."
          bullets={[
            "Challenge, solution, and outcome for each build",
            "Full tech stack and architecture notes",
            "Real metrics where available",
            "Next-project suggestions to keep exploring",
          ]}
          image={images.dashboard}
          cta={{ label: "Start your project", href: "/contact" }}
        />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
