import React from "react";
import LineChart from "./LineChart";

export default function Visitors() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
            weight: "bold",
          },
          padding: 20,
        },
      },
    },

    scales: {
      x: {
        display: false,
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
        display: false,
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
  };
  const labels = ["", "", "", "", "", ""];
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0.2, "rgba(26,86,219,0.05)");
      gradient.addColorStop(0.1, "rgba(26,86,219,0.025)");
      gradient.addColorStop(0, "rgba(26,86,219,0)");
    }

    return gradient;
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Visitors",
        data: [65, 43, 67, 88, 56],
        fill: "origin",
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "#1A56DB",
        maxBarThickness: 15,
        borderRadius: 15,
        categoryPercentage: 0.7,
      },
    ],
  };
  return (
    <div className="flex-col space-y-4 p-4 w-1/3 rounded-md shadow-sm border">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-2xl">6,438</h4>
          <span className="text-sm text-gray-500">Today visitors</span>
        </div>
        <span className="text-sm font-bold text-green-400">4.3% +</span>
      </div>
      <LineChart options={options} width={400} height={300} data={data} />
    </div>
  );
}
