import React from "react";
import { Bar } from "react-chartjs-2";

export default function WeekVisitors() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Inter",
            weight: 800,
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
  const labels = ["M", "T", "W", "T", "F", "S", "S"];

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [65, 43, 67, 88, 56, 45, 52],
        backgroundColor: "#1A56DB",
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
          <h4 className="font-bold text-2xl">566,768</h4>
          <span className="text-sm text-gray-500">This week visitors</span>
        </div>
        <span className="text-sm font-bold text-green-400">10% +</span>
      </div>
      <Bar options={options} width={400} height={300} data={data} />
    </div>
  );
}
