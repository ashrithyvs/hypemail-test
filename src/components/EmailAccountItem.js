import React from "react";

export default function EmailAccountItem({ name, mailId, status, meta }) {
  return (
    <div className="flex-col rounded-2xl space-y-2 pt-4 py-4 bg-white border shadow px-4">
      <div className="flex-col space-y-2">
        <div className="flex justify-between">
          <div className="flex-col space-y-1">
            <h4 className="font-semibold text-lg">{name}</h4>
            <h4 className="text-gray-500 text-sm">{mailId}</h4>
          </div>
          <span
            className={`${
              status === "Connected"
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            } text-xs px-4 h-min font-medium rounded-full py-1 `}
          >
            {status}
          </span>
        </div>
        <div className="flex flex-wrap space-x-16 p-4">
          <div className="flex-col space-y-3">
            <h4 className="text-2xl font-medium">{meta.runningCampaigns}</h4>
            <span className="text-md text-gray-500">Running campaigns</span>
          </div>
          <div className="flex-col space-y-3">
            <h4 className="text-2xl font-medium">{meta.emailsSentToday}</h4>
            <span className="text-md text-gray-500">Today emails sent</span>
          </div>
          <div className="flex-col space-y-3">
            <h4 className="text-2xl font-medium">{meta.emailsSentThisMonth}</h4>
            <span className="text-md text-gray-500">
              This months emails sent
            </span>
          </div>
          <div className="flex-col space-y-3">
            <h4 className="text-2xl font-medium">{meta.totalEmailsSent}</h4>
            <span className="text-md text-gray-500">Total emails sent</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center text-sm py-1 space-x-1 px-2 h-min text-gray-500 rounded-xl ">
            <span>Last sent : {meta.lastSent}</span>
          </div>
          <div className="flex space-x-4">
            <button className="secondary-btn px-8 shadow-sm text-gray-600 ">
              Disconnect
            </button>
            <button className="primary-btn  px-8  shadow-sm">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
