"use client";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { registerables } from "chart.js";
Chart.register(...registerables);
export function CustomBarChart({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) {
  return (
    <div>
      <Bar
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
              backgroundColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
}
