"use client";
import { skills } from "@/data/skills";
import { ISkill } from "@/models/general";
import { useEffect } from "react";

// import "tw-elements/dist/css/tw-elements.min.css";

function BarChart() {
  const extractChartLabels = () => {
    const names = skills.flatMap((skill: ISkill) => skill.name);
    return names;
  };
  const extractChartdata = () => {
    const years = skills.flatMap((skill: ISkill) => skill.years);
    return years;
  };
  const dataBar = {
    type: "bar",
    data: {
      labels: [...extractChartLabels()],
      datasets: [
        {
          label: "Skill (years)",
          backgroundColor: "#1A5F7A",
          data: [...extractChartdata()],
        },
      ],
    },
  };
  useEffect(() => {
    const years = extractChartdata();
    const init = async () => {
      const { Chart } = await import("tw-elements");
      const myBarChart = new Chart(
        document.getElementById("myBarChart"),
        dataBar
      );
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="mx-auto lg:w-2/3 w-full overflow-hidden
      flex items-center
      bg-primary-teal p-2 rounded-md border border-primary-navy"
      >
        <canvas id="myBarChart"></canvas>
      </div>
    </>
  );
}

export default BarChart;
