"use client";
import { useEffect } from "react";

// import "tw-elements/dist/css/tw-elements.min.css";

function BarChart() {
  useEffect(() => {
    const init = async () => {
      const { Chart } = await import("tw-elements");
      const dataBar = {
        type: "bar",
        data: {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday ",
          ],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
          ],
        },
      };
      const myBarChart = new Chart(
        document.getElementById("myBarChart"),
        dataBar
      );
    };
    init();
  }, []);

  return (
    <>
      <div className="mx-auto w-3/5 overflow-hidden">
        <canvas id="myBarChart"></canvas>
      </div>
    </>
  );
}

export default BarChart;
