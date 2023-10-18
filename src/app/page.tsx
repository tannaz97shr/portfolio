import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { experience } from "@/data/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div
        className="flex flex-col
      xl:w-[1200px] lg:w-[1000px] lg:mx-auto w-full px-4"
      >
        <ExperienceSection experiences={experience} />
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
