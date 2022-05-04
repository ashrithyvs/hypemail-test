import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineCalendar } from "react-icons/ai";
import CampaignListItem from "../components/CampaignListItem";
import RecentReplyItem from "../components/RecentReplyItem";
import { emailPicture } from "../assets/index";
import { RiFilter2Fill } from "react-icons/ri";
import CreateCampaignModal from "../components/CreateCampaignModal";
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
    <div className="flex-col items-center justify-center my-4">
      <div className="flex items-center justify-between ">
        <div className="flex justify-start w-1/2 items-center space-x-10">
          <h4 className="text-2xl font-bold">Campaigns</h4>
          <div>
            <input
              type="search"
              name="search"
              className="bg-gray-50 w-full text-gray-500 border-gray-200 rounded-xl"
              placeholder="Search for all Campaigns"
            />
            <label
              for="search"
              style={{ position: "relative", left: 250, top: -28 }}
            >
              <RiFilter2Fill />
            </label>
          </div>
        </div>
        <div className="w-1/2 justify-end flex space-x-2">
          <button
            onClick={() => toggleModal("large-modal")}
            className="flex space-x-2 primary-btn"
          >
            <AiOutlinePlus />
            <span>Create a Campaign</span>
          </button>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="flex-col space-y-6 w-4/6">
          <div className="flex space-x-12 items-center">
            <ul class=" flex-wrap text-sm font-medium text-center flex text-gray-900 dark:text-gray-100 rounded-lg my-6">
              {statusTypes.map((item, idx) => {
                return (
                  <li
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
            <button className="flex secondary-btn space-x-2">
              <AiOutlineCalendar />
              <span>This week</span>
            </button>
          </div>
          <div className="flex-col space-y-4">
            {campaignsData.map((campaign, idx) => {
              return (
                <CampaignListItem
                  title={campaign.title}
                  emailAccounts={campaign.emailAccounts}
                  meta={campaign.meta}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-col space-y-4 w-2/6">
          <h4 className="font-semibold text-gray-900 text-xl">
            Recent Replies
          </h4>
          {repliesData.map((reply) => {
            return (
              <RecentReplyItem
                profilePicture={reply.profilePicture}
                mailId={reply.mailId}
                body={reply.body}
                timeStamp={reply.timeStamp}
              />
            );
          })}
        </div>
      </div>
      <CreateCampaignModal toggleModal={toggleModal} />
    </div>
  );
}