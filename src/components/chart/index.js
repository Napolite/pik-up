import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ChartDiv({ title, chartdata }) {
  const data = {
    labels,
    datasets: [
      {
        label: "This Year",
        data: chartdata || [],
        borderColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 350,
      },
      tick: {
        display: false,
      },
    },
    responsive: true,

    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: title,
      },
    },
  };
  return (
    <div style={{ width: 440, marginLeft: "10px" }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default ChartDiv;
