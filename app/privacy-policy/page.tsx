import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Stack Studio collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader eyebrow="— LEGAL" title="Privacy Policy" description="Last updated: August 2026." />
      <section className="bg-background px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-foreground/80">
          <p>
            Stack Studio (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This
            policy explains what information we collect when you use our website and services, and how
            we use it.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p>
            When you submit our contact form, we collect your name, email, optional phone number,
            selected service, budget, and message. We use this only to respond to your inquiry and
            deliver the requested work.
          </p>
          <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
          <p>
            We use your information to communicate about your project, provide quotes, and improve our
            services. We do not sell your personal data to third parties.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Data retention</h2>
          <p>
            Project inquiries are stored securely (in our CRM or a local fallback) and retained only as
            long as necessary to serve you and meet legal obligations.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${SITE_URL ? "hello@stackstudio.org" : ""}`} className="text-accent">
              hello@stackstudio.org
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
