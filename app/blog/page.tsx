import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { blogPosts } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering and product insights from Stack Studio — MERN, AI agents, SaaS architecture, and practical guides for shipping software faster.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Stack Studio",
    description: "Engineering and product insights on MERN, AI, SaaS, and shipping software faster.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Stack Studio Blog",
    url: `${SITE_URL}/blog`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHeader
          eyebrow="— BLOG"
          title="Insights on Building Software"
          description="Practical guides and field notes from the Stack Studio team on engineering, AI, and shipping products faster."
        />

        <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:gap-2">
                    Read more <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
