import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./BarChart"), {
  ssr: false,
});

function SkillsSection() {
  return (
    <>
      <div>skills section</div>
      <DynamicComponent />
    </>
  );
}

export default SkillsSection;
