/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import LineChart from "./LineChart";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Tooltip } from "flowbite-react";

export default function EmailChart() {
  const [dataRange, setDataRange] = useState("Day");
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
      gradient.addColorStop(0.2, "rgba(26,86,219,0.03)");
      gradient.addColorStop(0.1, "rgba(26,86,219,0.01)");
      gradient.addColorStop(0, "rgba(26,86,219,0)");
    }

    return gradient;
  }
  const chartData3 = {
    labels: ["a", "b", "a", "b", "a", "b", "a", "b"],
    datasets: [
      {
        label: "Templates",
        fill: "origin",
        data: [12, 52, 77, 65, 24, 43, 75, 45, 33, 13, 55, 34],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "#1C64F2",
        borderWidth: 3,
        smooth: true,
      },
      {
        label: "Hosting",
        data: [12, 52, 45, 33, 13, 55, 34, 77, 65, 24, 43, 75],
        backgroundColor: "rgba(255, 103, 70, 0)",
        borderColor: "#FDBA8C",
        borderWidth: 3,
        smooth: true,
      },
    ],
  };

  const dataTypes = ["Year", "Month", "Day"];
  return (
    <div className="rounded-md shadow-sm border px-4 py-3 h-1/2 flex-col space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <h4 className="font-semibold">Emails</h4>
          <Tooltip content="Tooltip content" style="light">
            <AiOutlineInfoCircle className="cursor-pointer" />
          </Tooltip>
        </div>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 rounded-lg">
          {dataTypes.map((item, idx) => {
            return (
              <li
                key={idx}
                className={`${
                  dataRange === item ? `active-tab ` : "inactive-tab"
                } ${
                  idx === 0
                    ? "rounded-l-lg"
                    : idx + 1 === dataTypes.length
                    ? "rounded-r-lg"
                    : null
                }`}
                onClick={() => {
                  setDataRange(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <LineChart resp data={chartData3} height={60} />
    </div>
  );
}
