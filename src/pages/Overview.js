/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import EmailChart from "../components/charts/EmailChart";
import Sales from "../components/charts/Sales";
import Visitors from "../components/charts/Visitors";
import WeekVisitors from "../components/charts/WeekVisitors";

export default function Overview() {
  return (
    <div className="py-4 w-full flex-col space-y-4">
      <EmailChart />
      <div className="flex space-x-6">
        <Sales />
        <Visitors />
        <WeekVisitors />
      </div>
    </div>
  );
}
