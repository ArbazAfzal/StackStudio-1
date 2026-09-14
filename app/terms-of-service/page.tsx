import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Stack Studio's website and development services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHeader eyebrow="— LEGAL" title="Terms of Service" description="Last updated: August 2026." />
      <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-foreground/80">
          <p>
            These terms govern your use of the Stack Studio website and any development services you
            engage us for. By using our site or services, you agree to these terms.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Engagements</h2>
          <p>
            Project scope, timeline, deliverables, and pricing are agreed in writing (proposal or quote)
            before work begins. Fixed-price engagements are delivered per the agreed specification.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>
            Upon full payment, you own the source code and design assets we create for your project.
            Stack Studio retains no rights to your delivered work.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Confidentiality</h2>
          <p>
            We treat your ideas, data, and business information as confidential and sign NDAs on request.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>Questions about these terms? Reach out via our contact page.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
