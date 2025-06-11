import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { CtaSection } from "@/components/home/cta-section";
import { TimelineSection } from "@/components/home/timeline-demo";
import { SkillSection } from "@/components/home/skill-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillSection />
      <CtaSection />
    </div>
  );
}
