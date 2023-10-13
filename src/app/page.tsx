import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import { experience } from "@/data/experience";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("@/components/SkillsSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div
        className="flex flex-col
      xl:w-[1200px] lg:w-[1000px] lg:mx-auto w-full px-4"
      >
        <ExperienceSection experiences={experience} />
        <DynamicComponent />
      </div>
    </main>
  );
}
