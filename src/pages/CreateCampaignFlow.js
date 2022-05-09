/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import useQuery from "../utils/useQuery";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import Leads from "../components/Leads";
import Sequence from "../components/Sequence";
import CampaignOptions from "../components/CampaignOptions";
export default function CreateCampaignFlow() {
  const query = useQuery();
  const [currentStep, setCurrentStep] = useState(1);
  const campaignId = query.get("campaign");
  const campaignDetails = {
    title: "Product Launch Campaign V2.0",
    timeStamp: "Today, 08:34 AM",
    status: "Draft | Created now",
  };
  const steps = [
    {
      name: "Overview",
      component: null,
      status: false,
    },
    {
      name: "Leads",
      component: <Leads setCurrentStep={setCurrentStep} />,
      status: true,
    },
    {
      name: "Sequence",
      component: <Sequence setCurrentStep={setCurrentStep} />,
      status: true,
    },
    {
      name: "Options",
      component: <CampaignOptions setCurrentStep={setCurrentStep} />,
      status: true,
    },
  ];
  return (
    <div className="flex-col space-y-4">
      <div className="2xl:flex 2xl:justify-between py-3">
        <div className="flex space-x-6 items-center">
          <IoMdArrowRoundBack className="icon" size={40} />
          <h4 className="text-xl font-semibold">{campaignDetails.title}</h4>
          <h4 className="text-xs text-gray-500">{campaignDetails.timeStamp}</h4>
        </div>
        <div className="justify-end items-center flex space-x-4 h-min">
          <AiFillQuestionCircle color="#E02424" />
          <FaUserPlus color="#E02424" />
          <h4 className="text-sm text-red-600 font-semibold">
            Some things are missing
          </h4>
          <span className="bg-gray-200 px-4 text-xs py-1 rounded-full text-gray-500">
            {campaignDetails.status}
          </span>
        </div>
      </div>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          {steps.map((step, idx) => {
            return (
              <li
                onClick={() => (step.status ? setCurrentStep(idx) : null)}
                className={`${
                  step.status
                    ? currentStep === idx
                      ? "active-step"
                      : "inactive-step"
                    : "disabled-step"
                }`}
              >
                {step.name}
              </li>
            );
          })}
        </ul>
        <div className="w-full my-3">{steps[currentStep].component}</div>
      </div>
    </div>
  );
}
