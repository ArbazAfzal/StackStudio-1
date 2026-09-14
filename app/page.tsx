import { HeroSection } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { StatsSection } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services";
import { ServicesDetailSection } from "@/components/sections/services-detail";
import { ProcessSection } from "@/components/sections/process";
import { PlatformsSection } from "@/components/sections/platforms";
import { WhyUsSection } from "@/components/sections/why-us";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingPlansSection } from "@/components/sections/pricing-plans";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechMarquee />
      <StatsSection />
      <ServicesSection />
      <ServicesDetailSection />
      <ProcessSection />
      <PlatformsSection />
      <WhyUsSection />
      <PortfolioSection />
      <PricingPlansSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaBand />
      <ContactSection />
      <Footer />
    </main>
  );
}
