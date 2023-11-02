import { MonthNames } from "@/data/constants";
import { skills } from "@/data/skills";
import { IExperience, ISkill } from "@/models/general";
import SkillTag from "./SkillTag";

interface ExperienceCardProps {
  exp: IExperience;
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  const startDate = new Date(exp.startDate);
  const endDate = new Date(exp.endDate);
  return (
    <div
      className="flex flex-col overflow-hidden rounded-md 
    bg-primary-navy border border-secondary-navy
    w-full lg:w-[49%] min-h-[20rem] mb-6"
    >
      <div className="flex flex-col p-4 bg-secondary-navy">
        <div className="flex flex-row flex-wrap items-center">
          <span className="text-lg font-semibold text-primary-teal mr-2">
            {exp.companyName}
          </span>
          {exp.jobType && (
            <span className="text-sm text-light-grey">{exp.jobType}</span>
          )}
        </div>
        <div className="text-sm text-light-grey">
          {MonthNames[startDate.getMonth()]} {startDate.getFullYear()} -{" "}
          {MonthNames[endDate.getMonth()]} {endDate.getFullYear()}
        </div>
      </div>
      <div className="px-4 mt-4 text-sm text-light-grey">{exp.description}</div>
      <div className="flex flex-row flex-wrap px-4 mt-4">
        {exp.skills.map((skillId: number) => {
          const skillName = skills.find(
            (skill: ISkill) => skill.id === skillId
          );
          if (skillName) {
            return <SkillTag key={skillId} name={skillName.name} />;
          }
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
