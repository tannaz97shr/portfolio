import dynamic from "next/dynamic";
import Header from "../UI/SectionHeader";

const DynamicComponent = dynamic(() => import("./BarChart"), {
  ssr: false,
});

function SkillsSection() {
  return (
    <>
      <Header>Skills</Header>
      <DynamicComponent />
    </>
  );
}

export default SkillsSection;
