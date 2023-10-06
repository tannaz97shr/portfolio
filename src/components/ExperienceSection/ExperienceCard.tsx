import { IExperience } from "@/models/general";

interface ExperienceCardProps {
  exp: IExperience;
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-md 
    bg-primary-navy border border-secondary-navy
    w-full lg:w-[49%] h-80 mb-6 p-4"
    >
      <div className="text-lg font-semibold text-primary-teal">
        {exp.companyName}
      </div>
      <div className="flex">Right</div>
    </div>
  );
}

export default ExperienceCard;
