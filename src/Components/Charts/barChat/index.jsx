import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Bar } from "react-chartjs-2";

const labels = ["00", "06", "12", "18", "24"];

const contador = 0;

let goals = [];
let web = [];
let app = [];


for (let i = 0; i <= 4; i++) {
  goals.push(Math.floor(0 + Math.random() * (800 - 0 + 1)));
}
for (let i = 0; i <= 4; i++) {
  web.push(Math.floor(0 + Math.random() * (800 - 0 + 1)));
}
for (let i = 0; i <= 4; i++) {
  app.push(Math.floor(0 + Math.random() * (800 - 0 + 1)));
}

const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 900,
      stacked: false,
    },
    x: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
  },

  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Leads",
      font: {
        size: 16,
      },
    },
  },
};

export default function LineChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Goals",
          data: app,
          pointRadius: 6,
          backgroundColor: "rgb(0 , 0 , 0, 0)",
          borderColor: "rgb(0,0,0)",
          borderWidth: {
            left: 0,
            right: 0,
            top: 6,
            bottom: 0,
          },
        },
        {
          label: "Web",
          data: goals,
          pointRadius: 6,
          backgroundColor: "rgb( 0 , 0 , 255 )",
        },
        {
          label: "App",
          data: web,
          pointRadius: 6,
          backgroundColor: "rgb( 185 , 0 , 255 )",
        },
      ],
      labels,
    };
  }, []);

  return <Bar data={data} options={options} />;
}