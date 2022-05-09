import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineCalendar } from "react-icons/ai";
import CampaignListItem from "../components/CampaignListItem";
import RecentReplyItem from "../components/RecentReplyItem";
import { emailPicture } from "../assets/index";
import { RiFilter2Fill } from "react-icons/ri";
import CreateCampaignModal from "../components/CreateCampaignModal";
import Pagination from "../components/Pagination";
export default function Campaigns() {
  const [dataRange, setDataRange] = useState("All");

  const statusTypes = ["All", "Running", "Stopped", "Draft"];
  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    // document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    // document.getElementById(modalID).classList.toggle("flex");
    // document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }
  const campaignsData = [
    {
      title: "Product Launch Campaign V2.0",
      emailAccounts: [
        "thomas@hypemail.io",
        "thomas@ionio.io",
        "thomas@hypemail.io",
        "thomas@ionio.io",
        "thomas@hypemail.io",
        "thomas@ionio.io",
      ],
      meta: {
        tags: ["Product Launch", "Marketing"],
        prospectsCount: 556,
        sentCount: 556,
        openedPercentage: 62,
        openedCount: 28,
        repliedPercentage: 3,
        repliedCount: 4,
        currentStep: 1,
        maxSteps: 3,
        status: "Running",
        elapsedTime: "6 Days ago",
        ETL: 22,
      },
    },
    {
      title: "Product Launch Campaign V2.0",
      emailAccounts: [
        "thomas@hypemail.io",
        "thomas@ionio.io",
        "thomas@hypemail.io",
        "thomas@ionio.io",
      ],
      meta: {
        tags: ["Product Launch", "Marketing"],
        prospectsCount: 556,
        sentCount: 556,
        openedPercentage: 62,
        openedCount: 28,
        repliedPercentage: 3,
        repliedCount: 4,
        currentStep: 1,
        maxSteps: 3,
        status: "Stopped",
        elapsedTime: "6 Days ago",
        ETL: 22,
      },
    },
    {
      title: "Product Launch Campaign V2.0",
      emailAccounts: [
        "thomas@hypemail.io",
        "thomas@ionio.io",
        "thomas@hypemail.io",
        "thomas@ionio.io",
        "thomas@hypemail.io",
      ],
      meta: {
        tags: ["Product Launch", "Marketing"],
        prospectsCount: 556,
        sentCount: 556,
        openedPercentage: 62,
        openedCount: 28,
        repliedPercentage: 3,
        repliedCount: 4,
        currentStep: 1,
        maxSteps: 3,
        status: "Running",
        elapsedTime: "6 Days ago",
        ETL: 22,
      },
    },
  ];
  const repliesData = [
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
    {
      profilePicture: emailPicture,
      mailId: "email@example.com",
      body: "I am facing problem as i can not select currency on buy order page. Can you guys let me know what I am doing to get this thing working",
      timeStamp: "Today, 12:48 PM",
    },
  ];
  return (
    <div className="flex-col items-center justify-center">
      <div className="xl:flex items-center justify-between py-2">
        <div className="flex justify-start xl:w-1/2 items-center space-x-10 ">
          <h4 className="text-2xl font-bold">Campaigns</h4>
          <div className="w-full flex self-center">
            <input
              type="search"
              name="search"
              className="bg-gray-50 w-full text-gray-500 border-gray-200 rounded-xl"
              placeholder="Search for all Campaigns by Name & Tags"
            />
            <label
              htmlFor="search"
              style={{ position: "relative", left: -30, top: 12 }}
            >
              <RiFilter2Fill />
            </label>
          </div>
        </div>
        <div className="mt-4 xl:mt-0 xl:w-1/2 justify-end flex space-x-2 items-center">
          <button
            onClick={() => toggleModal("large-modal")}
            className="flex space-x-2 primary-btn"
          >
            <AiOutlinePlus />
            <span>Create a Campaign</span>
          </button>
          <Pagination />
        </div>
      </div>
      <div className="xl:flex xl:space-x-6 flex-wrap">
        <div className="flex-col space-y-6 xl:w-[55%]">
          <div className="2xl:flex 2xl:space-x-12 items-center">
            <ul className=" flex-wrap text-sm font-medium text-center flex text-gray-900 dark:text-gray-100 rounded-lg my-6">
              {statusTypes.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      dataRange === item ? `active-tab ` : "inactive-tab"
                    } ${
                      idx === 0
                        ? "rounded-l-lg"
                        : idx + 1 === statusTypes.length
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
            <button className="flex secondary-btn shadow-sm space-x-2">
              <AiOutlineCalendar />
              <span>This week</span>
            </button>
          </div>
          <div className="flex-col space-y-4">
            {campaignsData.map((campaign, idx) => {
              return (
                <CampaignListItem
                  key={idx}
                  title={campaign.title}
                  emailAccounts={campaign.emailAccounts}
                  meta={campaign.meta}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-col shadow bg-white rounded px-6 h-min pt-4 mt-6 xl:w-[40%]">
          <h4 className="font-semibold text-gray-900 text-xl my-4">
            Recent Replies
          </h4>
          <div className="flex-col">
            {repliesData.map((reply, idx) => {
              return (
                <RecentReplyItem
                  profilePicture={reply.profilePicture}
                  key={idx}
                  mailId={reply.mailId}
                  body={reply.body}
                  timeStamp={reply.timeStamp}
                />
              );
            })}
          </div>
          <h4 className="text-primary text-center cursor-pointer rounded-lg my-1 hover:bg-secondary-hover py-3">
            View More
          </h4>
        </div>
      </div>
      <CreateCampaignModal toggleModal={toggleModal} />
    </div>
  );
}
