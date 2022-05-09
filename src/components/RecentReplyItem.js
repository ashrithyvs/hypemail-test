import React from "react";

export default function RecentReplyItem({
  body,
  mailId,
  timeStamp,
  profilePicture,
}) {
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="border-b-2 bg-white flex py-3 items-center space-x-4">
      <img
        src={profilePicture}
        className="rounded-full w-[50px] h-[50px]"
        alt={mailId}
      />
      <div className="flex-col">
        <div className="2xl:flex justify-between">
          <h4 className="text-md font-semibold text-gray-900">{mailId}</h4>
          <h4 className="text-md text-gray-400">{timeStamp}</h4>
        </div>

        <div className="flex items-center">
          <p className="text-md text-gray-900">{truncateString(body, 80)}</p>
          <span className="text-md font-semibold cursor-pointer p-1 h-min rounded hover:bg-secondary-hover text-primary">
            View
          </span>
        </div>
      </div>
    </div>
  );
}
