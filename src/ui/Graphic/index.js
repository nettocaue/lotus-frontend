import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return value + "%";
        },
        stepSize: 20,
        min: 0,
        max: 100,
        color: "rgba(43, 48, 52, 0.4)",
        font: {
          size: 14,
        },
      },
    },
    x: {
      ticks: {
        color: "rgba(43, 48, 52, 0.4)",
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "5k",
  "10k",
  "15k",
  "20k",
  "25k",
  "30k",
  "35k",
  "40k",
  "45k",
  "50k",
  "55k",
  "60k",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgba(67, 121, 238, 1)",
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(67, 121, 238, 0.16)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.18)");

        return gradient;
      },
      pointRadius: 8,
      pointBackgroundColor: "rgba(67, 121, 238, 1)",
    },
  ],
};

const Graphic = () => {
  return <Line options={options} data={data} />;
};

export default Graphic;
