import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { experience } from "@/data/experience";

export const metadata = {
  title: "About",
  icons: "/front-end.png",
  description:
    "Discover the technical underpinnings of my portfolio. Explore the tools, technologies, and responsive design that power this showcase of my front-end development skills.",
};
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
    </main>
  );
}
