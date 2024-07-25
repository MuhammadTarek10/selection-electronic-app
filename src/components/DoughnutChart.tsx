"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register([ArcElement, Tooltip, Legend]);

export const DoughnutChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
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
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ["red", "green"],
            hoverBackgroundColor: ["red", "green"],
          },
        ],
      }}
    />
  );
};
