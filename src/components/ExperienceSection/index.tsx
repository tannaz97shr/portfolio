import { IExperience } from "@/models/general";
import Header from "../UI/SectionHeader";
import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: IExperience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <>
      <Header>Experience</Header>
      <div className="flex flex-wrap justify-between">
        {experiences.map((item: IExperience) => (
          <ExperienceCard exp={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ExperienceSection;
