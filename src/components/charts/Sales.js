import React from "react";
import { Bar } from "react-chartjs-2";

export default function Sales() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [65, 43, 67, 88, 56],
        backgroundColor: "#1A56DB",
        maxBarThickness: 15,
        borderRadius: 15,
        categoryPercentage: 0.7,
      },
      {
        label: "Profit",
        data: [13, 54, 34, 23, 65],
        backgroundColor: "#FDBA8C",
        maxBarThickness: 15,
        borderRadius: 15,
      },
    ],
  };
  return (
    <div className="flex-col space-y-4 p-4 w-1/3 rounded-md shadow-sm border">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-2xl">$45,897</h4>
          <span className="text-sm text-gray-500">Today Sales</span>
        </div>
        <span className="text-sm font-bold text-green-400">4.3% +</span>
      </div>
      <Bar options={options} width={400} height={300} data={data} />
    </div>
  );
}
