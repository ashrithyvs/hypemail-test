import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const LineChart = ({ data, width, height, resp, optionsP }) => {
  const options = optionsP || {
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    responsive: resp,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Inter",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Inter", // Your font family
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: "average",
      },
    },
  };

  return <Line data={data} width={width} height={height} options={options} />;
};
export default LineChart;
