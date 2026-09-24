import { DirectionalPage } from "@/components/DirectionalPage";
import { ContactSection } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/Hero";
import { MethodSection } from "@/components/sections/Method";
import { PracticeAreasSection } from "@/components/sections/PracticeAreas";
import { ResultsSection } from "@/components/sections/Results";
import { TeamSection } from "@/components/sections/Team";

export default function HomePage() {
  return (
    <DirectionalPage>
      <HeroSection />
      <PracticeAreasSection />
      <MethodSection />
      <ResultsSection />
      <TeamSection />
      <ContactSection />
    </DirectionalPage>
  );
}
