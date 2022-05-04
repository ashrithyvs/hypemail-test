import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
export default function CampaignListItem({ title, emailAccounts, meta }) {
  return (
    <div className="flex-col rounded-lg space-y-2 pt-4 py-2 bg-white border shadow px-4">
      <div className="flex-col space-y-2">
        <div className="flex justify-between">
          <h4 className="font-semibold text-lg">{title}</h4>{" "}
          <span
            className={`${
              meta.status === "Running"
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            } text-xs px-4 font-medium rounded-full py-2 inline`}
          >
            {meta.status} | {meta.elapsedTime}
          </span>
        </div>

        {emailAccounts.map((email, idx) => {
          if (idx < 2) {
            return (
              <span className="text-gray-400 font-medium text-sm">
                {email},{" "}
              </span>
            );
          }
        })}
        {emailAccounts.length > 2 ? (
          <span className="text-gray-400 font-medium text-sm">
            & {emailAccounts.length - 2} others
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap space-x-16 p-4">
        <div className="flex-col space-y-3">
          <h4 className="text-2xl font-medium">{meta.prospectsCount}</h4>
          <span className="text-md text-gray-500">Prospects</span>
        </div>
        <div className="flex-col space-y-3">
          <div className="flex items-end">
            <h4 className="text-2xl font-medium">{meta.sentCount}</h4>
            <span className="text-xs mb-1 m-1 text-red-400">(3)</span>
          </div>
          <span className="text-md text-gray-500">Sent</span>
        </div>
        <div className="flex-col space-y-3">
          <div className="flex items-end">
            <h4 className="text-2xl font-medium">{meta.openedPercentage}%</h4>
            <span className="text-xs mb-1 m-1 text-gray-500">
              ({meta.openedCount})
            </span>
          </div>
          <span className="text-md text-gray-500">Opened</span>
        </div>{" "}
        <div className="flex-col space-y-3">
          <div className="flex items-end">
            <h4 className="text-2xl font-medium">{meta.repliedPercentage}%</h4>
            <span className="text-xs mb-1 m-1 text-gray-500">
              ({meta.repliedCount})
            </span>
          </div>
          <span className="text-md text-gray-500">Replied</span>
        </div>{" "}
        <div className="flex-col space-y-3">
          <div className="flex items-end">
            <h4 className="text-2xl font-medium">{meta.currentStep}</h4>
            <span className="text-xs mb-1 m-1 text-gray-500">
              /{meta.maxSteps}
            </span>
          </div>
          <span className="text-md text-gray-500">Step</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center space-x-2 px-2 py-[0.1rem] rounded-xl w-1/6 bg-purple-200 text-purple-800">
          <AiFillClockCircle color="#5521B5" />{" "}
          <span>{meta.ETL} days left</span>
        </div>
        <div className="flex space-x-4">
          <button className="secondary-btn px-8 shadow-sm text-gray-600">
            More
          </button>
          <button className="secondary-btn text-primary px-8  shadow-sm">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
