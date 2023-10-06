import { IExperience } from "@/models/general";
import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: IExperience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <>
      <div className="drop-shadow-xl text-3xl font-semibold text-primary-teal mt-5 mb-8">
        Experience
      </div>
      <div className="flex flex-wrap justify-between">
        {experiences.map((item: IExperience) => (
          <ExperienceCard exp={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ExperienceSection;
