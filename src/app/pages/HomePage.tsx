import { HeroSection } from "../components/HeroSection";
import { SolutionSection } from "../components/SolutionSection";
import { CaseSection } from "../components/CaseSection";
import { FaqSection } from "../components/FaqSection";
import { CtaSection } from "../components/CtaSection";

export function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <SolutionSection />
      <CaseSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
