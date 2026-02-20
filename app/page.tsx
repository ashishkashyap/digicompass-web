import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 flex flex-col flex-1">
      <HeroSection />
      <HowItWorksSection />
      <DifferentiatorsSection />
      <DemoSection />
      <WaitlistSection />
      <FAQSection />
    </main>
  );
}
