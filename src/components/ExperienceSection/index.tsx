import { IExperience } from "@/models/general";
import Description from "../UI/SectionDescription";
import Header from "../UI/SectionHeader";
import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: IExperience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <>
      <Header>Experience</Header>
      <Description>
        Explore my journey as a front-end developer, where I&apos;ve honed my
        skills and delivered exceptional results for various projects. Each card
        below represents a unique chapter in my career, showcasing the skills
        utilized, the companies I&apos;ve worked with, and the duration of each
        experience. Dive into my professional background to learn more about my
        capabilities and achievements.
      </Description>
      <div className="flex flex-wrap justify-between">
        {experiences.map((item: IExperience) => (
          <ExperienceCard exp={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ExperienceSection;
