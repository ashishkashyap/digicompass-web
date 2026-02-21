import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pillars } from "@/components/landing/Pillars";
import { Comparison } from "@/components/landing/Comparison";
import { DemoPlaceholder } from "@/components/landing/DemoPlaceholder";
import { Section } from "@/components/landing/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EarlyAccessStrip } from "@/components/landing/EarlyAccessStrip";
import { EarlyAccessIncludesStrip } from "@/components/landing/EarlyAccessIncludesStrip";
import { TrackWaitlistView } from "@/components/landing/TrackWaitlistView";
import { Waitlist } from "@/components/landing/Waitlist";
import { FAQ } from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Pillars />
      <Comparison />
      <div className="w-full bg-stone-100/50 border-t border-b border-stone-200/50">
        <DemoPlaceholder />
      </div>
      <Section id="waitlist" ariaLabelledBy="waitlist-heading">
        <Reveal>
          <TrackWaitlistView />
          <EarlyAccessStrip />
          <EarlyAccessIncludesStrip />
          <Waitlist />
        </Reveal>
      </Section>
      <FAQ />
    </main>
  );
}
