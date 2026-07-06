import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { ProcessSection } from "@/components/sections/process";
import { PortfolioSection } from "@/components/sections/portfolio";
import { WhyUsSection } from "@/components/sections/why-us";
import { ServicesDetailSection } from "@/components/sections/services-detail";
import { PricingPlansSection } from "@/components/sections/pricing-plans";
import { FAQSection } from "@/components/sections/faq";
import { TechStackShowcaseSection } from "@/components/sections/tech-stack-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <TechStackShowcaseSection /> {/* NEW (Section D) */}
      <ServicesSection />
      <ServicesDetailSection /> {/* NEW (Section A) */}
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyUsSection />
      <PricingPlansSection /> {/* NEW (Section B) */}
      <FAQSection /> {/* NEW (Section C) */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
