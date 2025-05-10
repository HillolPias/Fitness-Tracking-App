import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
}