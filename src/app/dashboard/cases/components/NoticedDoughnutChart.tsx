import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
ChartJS.register([ArcElement, Tooltip, Legend]);

import { Doughnut } from "react-chartjs-2";
export const NoticedDoughnutChart = ({
  noticed,
  examiners,
}: {
  noticed: number;
  examiners: number;
}) => {
  return (
    <Doughnut
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={{
        labels: ["ملحوظ", "غير ملحوظ"],
        datasets: [
          {
            data: [noticed, examiners - noticed],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      }}
    />
  );
};
