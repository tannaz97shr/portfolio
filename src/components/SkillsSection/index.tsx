import dynamic from "next/dynamic";
import Description from "../UI/SectionDescription";
import Header from "../UI/SectionHeader";

const DynamicComponent = dynamic(() => import("./BarChart"), {
  ssr: false,
});

function SkillsSection() {
  return (
    <>
      <Header id="skills">Skills</Header>
      <Description>
        In the dynamic world of front-end development, having the right skills
        is crucial. My skill chart provides a visual representation of my
        proficiency in various key technologies and tools. Each bar&apos;s
        height corresponds to the number of years I&apos;ve dedicated to honing
        that particular skill, reflecting my experience and commitment to
        mastering the craft.Explore this section to get an at-a-glance view of
        my expertise, and see how I&apos;ve invested my time and effort into
        becoming a well-rounded front-end developer. From HTML, CSS, and
        JavaScript to frameworks and libraries, my skills are at your service to
        create exceptional web experiences.
      </Description>
      <DynamicComponent />
    </>
  );
}

export default SkillsSection;
