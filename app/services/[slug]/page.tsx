import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Clock,
  DollarSign,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { services, servicesDetails, getServiceBySlug } from "@/lib/data";
import { TechChip } from "@/components/ui/tech-logo";
import { PageHeader } from "@/components/sections/page-header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return servicesDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const description = `${service.tagline}. ${service.description}`;

  return {
    title: service.title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Stack Studio`,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const cover = services.find((s) => s.slug === service.slug)?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "Stack Studio", url: SITE_URL },
    areaServed: "Worldwide",
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <PageHeader eyebrow="— SERVICE" title={service.title} description={service.tagline} />

        <section className="bg-background px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[3fr_2fr]">
            <div>
              <Link
                href="/services"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <ArrowLeft size={16} /> All services
              </Link>

              {cover && (
                <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              )}

              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 leading-relaxed text-foreground/80">{service.description}</p>

              <h3 className="mt-10 text-sm uppercase tracking-widest text-muted">What you get</h3>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-sm uppercase tracking-widest text-muted">Perfect for</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.useCases.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside>
              <div className="sticky top-28 rounded-2xl border border-border bg-surface p-5">
                <p className="mb-3 text-sm uppercase tracking-widest text-muted">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <TechChip key={tech.name} name={tech.name} />
                  ))}
                </div>

                <div className="gradient-line my-5" />
                <div className="flex items-center justify-between text-foreground/80">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Clock size={18} />
                    </span>
                    <span>Delivery Time</span>
                  </div>
                  <span className="font-medium">{service.deliveryTime}</span>
                </div>
                <div className="gradient-line my-5" />
                <div className="flex items-center justify-between text-foreground/80">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <DollarSign size={18} />
                    </span>
                    <span>Typical Budget</span>
                  </div>
                  <span className="font-medium">{service.budget}</span>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)]"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> Back to all services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
