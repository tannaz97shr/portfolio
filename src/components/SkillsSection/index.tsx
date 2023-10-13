"use client";
import { useEffect } from "react";

// import "tw-elements/dist/css/tw-elements.min.css";

function SkillsSection() {
  useEffect(() => {
    const init = async () => {
      const { Chart, initTE } = await import("tw-elements");
      initTE({ Chart });
    };
    init();
  }, []);
  return (
    <>
      <div>skills section</div>
      <div className="mx-auto w-3/5 overflow-hidden">
        <canvas
          data-te-chart="bar"
          data-te-dataset-label="Traffic"
          data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
          data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
        ></canvas>
      </div>
    </>
  );
}

export default SkillsSection;
