import React, { useState } from "react";
import useQuery from "../utils/useQuery";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { HiShieldExclamation } from "react-icons/hi";
import { IconContext } from "react-icons";
export default function EmailAccountSettings() {
  const query = useQuery();
  const emailQueryId = query.get("email");
  const emailAccountDetails = {
    emailId: "thomas@hypemail.io",
    status: "Setting up",
    connection: "Connected",
    checked: true,
  };
  const [toggle, setToggle] = useState(emailAccountDetails.checked);
  const toggleClass = " transform translate-x-6 bg-slate-100";

  return (
    <div>
      <div className="2xl:flex 2xl:justify-between py-3">
        <div className="flex space-x-6 items-center">
          <IoMdArrowRoundBack className="icon" size={40} />
          <h4 className="text-xl font-semibold">Email Account Settings</h4>
          <h4 className="text-xs text-gray-500">
            {emailAccountDetails.emailId}
          </h4>
        </div>
        <div className="justify-end items-center flex space-x-4 h-min">
          <AiFillQuestionCircle color="#E02424" />
          <h4 className="text-sm text-red-600 font-semibold">
            Some things are missing
          </h4>
          <span className="bg-gray-200 px-4 text-xs py-1 rounded-full text-gray-500">
            {emailAccountDetails.status}
          </span>
        </div>
      </div>
      <div className="3xl:flex 3xl:space-x-12 py-4 px-16">
        <div className="3xl:w-4/6 flex-col space-y-6">
          <div className="shadow-sm bg-white px-6 flex-col space-y-4 py-3 border rounded-lg">
            <h4 className="font-semibold text-lg">Basic Details</h4>
            <div className="flex space-x-4 w-full">
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  className="input"
                  placeholder="Jesse"
                  type="text"
                />
              </div>
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  className="input"
                  placeholder="Leos"
                  type="text"
                />
              </div>
            </div>
            <button className="primary-btn px-6">Save</button>
          </div>
          <div className="shadow-sm bg-white px-6 flex-col space-y-4 py-3 border rounded-lg">
            <h4 className="font-semibold text-lg">Connection Details</h4>
            <a href="/" className="text-sm mt-1 text-primary font-semibold">
              Hey check out this Loom
            </a>
            <div className="flex space-x-4 w-full">
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  placeholder="example@company.com"
                  type="email"
                />
              </div>
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="app-password">App Password</label>
                <input
                  id="app-password"
                  className="input"
                  placeholder="*******"
                  type="password"
                />
              </div>
            </div>
            <div className="flex space-x-4 w-full">
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="email-provider">Email Provider</label>
                <input
                  id="email-provider"
                  className="input"
                  placeholder="Gmail"
                  type="text"
                />
              </div>
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="sending-limit">Daily Sending Limit</label>
                <input
                  id="sending-limit"
                  className="input"
                  placeholder={250}
                  type="number"
                />
              </div>
            </div>
            <div className="flex space-x-4 w-full">
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="smtp-host">SMTP Host</label>
                <input
                  id="smtp-host"
                  className="input"
                  placeholder="imap.gmail.com"
                  type="email"
                />
              </div>
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="smtp-port">SMTP Port</label>
                <input
                  id="smtp-port"
                  className="input"
                  placeholder={250}
                  type="number"
                />
              </div>
            </div>
            <div className="flex space-x-4 w-full">
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="imap">IMAP</label>
                <input
                  id="smtp-host"
                  className="input"
                  placeholder="imap.gmail.com"
                  type="email"
                />
              </div>
              <div className="flex-col space-y-1 w-1/2">
                <label htmlFor="imap-port">IMAP Port</label>
                <input
                  id="imap-port"
                  className="input"
                  placeholder={143}
                  type="number"
                />
              </div>
            </div>
            <button className="primary-btn px-6">Save</button>
          </div>
          <div className="shadow-sm bg-white px-6 py-3 border rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <h4 className="font-semibold text-lg">Connection Details</h4>
                <span
                  className={`${
                    emailAccountDetails.connection === "Connected"
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  } text-xs px-4 h-min font-medium rounded-full py-1 `}
                >
                  {emailAccountDetails.connection}
                </span>
              </div>
              <div
                className={`md:w-14 md:h-8 w-12 h-6 flex items-center px-1 ml-auto rounded-full cursor-pointer ${
                  toggle ? "bg-primary" : "bg-slate-300"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <div
                  className={` md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                    toggle ? toggleClass : "bg-black"
                  }`}
                ></div>
              </div>
            </div>
            <p className="mt-4">Use your own domain to track opens.</p>
            <div className="flex-col space-y-1 w-3/4 mt-2">
              <p>
                1. Use your domain provider to create a CNAME record that points
                to tracking.hypemail.io
              </p>
              <p>2. Enter your sub-domain below. Click “Check”</p>
            </div>
            <div className="flex-col space-y-1 w-1/2 my-6">
              <label htmlFor="tracking-domain" className="font-medium text-md">
                Tracking domain
              </label>
              <input
                id="tracking-domain"
                className="input"
                placeholder="tracking.ionio.io"
                type="text"
              />
            </div>
            <div className="my-2 flex space-x-4">
              <button className="primary-btn px-8">Check</button>
              <button className="secondary-btn px-8">Reset</button>
            </div>
          </div>
          {/* <div className="shadow-sm bg-white px-6 py-3 border rounded-lg"></div> */}
        </div>
        <div className="mt-6 3xl:mt-0 3xl:w-2/6 shadow-sm bg-white h-min px-6 py-3 border rounded-lg">
          <h4 className="font-semibold text-lg">Configuration Checkup</h4>
          <div className="flex-col space-y-4 my-6">
            <IconContext.Provider value={{ color: "#31C48D" }}>
              <div className="flex space-x-4 ">
                <AiTwotoneLock size={20} />
                <span className="text-gray-700 text-sm">
                  DKIM is setup properly
                </span>
              </div>
              <div className="flex space-x-4">
                <AiTwotoneLock size={20} />
                <span className="text-gray-700 text-sm">
                  SPF is setup properly
                </span>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#F98080" }}>
              <div className="flex space-x-4 ">
                <HiShieldExclamation size={20} />
                <span className="text-gray-700 text-sm">
                  DMARC configuration is missing
                </span>
              </div>
            </IconContext.Provider>
          </div>
          <button className="secondary-btn px-8">Fix Now</button>
        </div>
      </div>
    </div>
  );
}
