import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import EmailAccountItem from "../components/EmailAccountItem";
import Pagination from "../components/Pagination";
import { Google, Twitch, Apple, ColdMailCourse, Blog } from "../assets";
export default function EmailAccounts() {
  const emailAccounts = [
    {
      name: "Thomas Manwaring",
      mailId: "thomas@hypemail.io",
      status: "Connected",
      meta: {
        totalEmailsSent: 29102,
        runningCampaigns: 6,
        emailsSentToday: 32,
        emailsSentThisMonth: 1652,
        lastSent: "10 mins ago",
      },
    },
    {
      name: "Rohan Sawant",
      mailId: "rohan@ionio.io",
      status: "Disconnected",
      meta: {
        totalEmailsSent: 29102,
        runningCampaigns: 6,
        emailsSentToday: 32,
        emailsSentThisMonth: 1652,
        lastSent: "10 mins ago",
      },
    },
    {
      name: "Pranav Patel",
      mailId: "pranav@ionio.io",
      status: "Connected",
      meta: {
        totalEmailsSent: 29102,
        runningCampaigns: 6,
        emailsSentToday: 32,
        emailsSentThisMonth: 1652,
        lastSent: "10 mins ago",
      },
    },
  ];
  return (
    <div className="flex-col items-center justify-center my-4">
      <div className="xl:flex  xl:justify-between">
        <div className="w-full flex items-center space-x-6">
          <h4 className="text-2xl font-bold">Email Accounts</h4>
          <input
            type="search"
            name="search"
            className="bg-gray-50 w-1/2 text-gray-500 border-gray-200 rounded-xl"
            placeholder="Search for connected email accounts"
          />
        </div>
        <div className="xl:w-1/2 my-2 xl:my-0 justify-end flex space-x-2 items-center">
          <button
            // onClick={() => toggleModal("large-modal")}
            className="flex space-x-2 primary-btn"
          >
            <AiOutlinePlus />
            <span>Add an account</span>
          </button>
          <Pagination />
        </div>
      </div>
      <div className="2xl:flex space-x-6">
        <div className="flex-col space-y-6 w-full 2xl:w-4/6 mt-6">
          {emailAccounts.map((account, idx) => {
            return <EmailAccountItem key={idx} {...account} />;
          })}
        </div>
        <div className="flex-col  px-6 h-min pt-4 mt-6  2xl:w-2/6">
          <h4 className="font-semibold text-xl">Help & Support</h4>
          <div className="flex space-x-5 border-b-2 py-5">
            <img src={Twitch} className="rounded-lg w-[50px]" alt="twitch" />
            <div className="flex-col">
              <h4 className="font-semibold text-lg">Text us</h4>
              <h4 className="text-sm text-gray-500">
                And we’ll reach back to you ASAP
              </h4>
            </div>
          </div>
          <div className="flex space-x-5 py-5 border-b-2">
            <img src={Apple} className="rounded-lg w-[50px]" alt="twitch" />
            <div className="flex-col">
              <h4 className="font-semibold text-lg">Email us</h4>
              <h4 className="text-sm text-gray-500">Emails go brrrrr</h4>
            </div>
          </div>{" "}
          <div className="flex space-x-5 py-5">
            <img src={Google} className="rounded-lg w-[50px]" alt="twitch" />
            <div className="flex-col">
              <h4 className="font-semibold text-lg">Google</h4>
              <h4 className="text-sm text-gray-500">Just google it</h4>
            </div>
          </div>
          <h4 className="font-semibold text-xl">Help & Support</h4>
          <div className="flex space-x-5 py-5 border-b-2">
            <img
              src={ColdMailCourse}
              className="rounded-lg w-[50px]"
              alt="twitch"
            />
            <div className="flex-col">
              <h4 className="font-semibold text-lg">Cold emailing course</h4>
              <h4 className="text-sm text-gray-500">
                Learn and send better emails
              </h4>
            </div>
          </div>
          <div className="flex space-x-5 py-5">
            <img src={Blog} className="rounded-lg w-[50px]" alt="twitch" />
            <div className="flex-col">
              <h4 className="font-semibold text-lg">Blog</h4>
              <h4 className="text-sm text-gray-500">
                Check out our blog for updates{" "}
              </h4>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
