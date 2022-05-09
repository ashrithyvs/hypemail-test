import React from "react";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function CreateCampaignModal({ toggleModal }) {
  const emailStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: "#E1EFFE",
      color: "#1E429F",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "#1E429F",
      fontWeight: 500,
    }),
  };
  const tagsStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: "#FEECDC",
      color: "#B43403",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "#B43403",
      fontWeight: 500,
    }),
  };
  const options = [
    { value: "thomas@hypemail.io", label: "thomas@hypemail.io" },
    { value: "thomas@ionio.io", label: "thomas@ionio.io" },
    { value: "rohan@ionio.io", label: "rohan@ionio.io" },
    { value: "pranav@ionio.io", label: "pranav@ionio.io" },
  ];
  const tags = [
    { value: "Product Launch", label: "Product Launch" },
    { value: "Marketing", label: "Marketing" },
  ];
  const navigate = useNavigate();
  return (
    <div
      className="hidden w-full bg-black/40 fixed z-50 flex justify-center items-center md:inset-0 h-modal sm:h-full"
      id="large-modal"
    >
      <div className="relative w-1/2 bg-white rounded-lg shadow">
        <header className="flex justify-between items-center p-5 rounded-t border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 ">
            Create a New Campaign
          </h3>
          <button
            type="button"
            data-modal-toggle="large-modal"
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("large-modal").classList.toggle("hidden");
            }}
          >
            <AiOutlineClose fontSize={20} />
          </button>
        </header>
        <div className="p-6 flex flex-col space-y-6">
          <form className="flex-col space-y-6">
            <div className="flex-col space-y-3">
              <label htmlFor="name">
                <span className="font-semibold">Name</span>
              </label>
              <input
                id="name"
                placeholder="29th June 2022 Campaign for Lawyers"
                className="input"
                type="text"
              />
            </div>
            <div className="flex-col space-y-3">
              <label className="font-semibold">Email accounts</label>
              <Select
                styles={emailStyles}
                options={options}
                isSearchable
                isMulti
              />
            </div>
            <div className="flex-col space-y-3">
              <label htmlFor="tags">
                <span className="font-semibold">Tags</span>
              </label>
              <Select styles={tagsStyles} options={tags} isSearchable isMulti />
            </div>
          </form>
        </div>
        <div className="px-6 py-6 flex space-x-6">
          <button
            className="primary-btn flex space-x-3"
            onClick={() => {
              navigate(`/create-campaign?campaign=${1}`);
              toggleModal("large-modal");
            }}
          >
            <AiOutlinePlus />
            <span>Create</span>
          </button>
          <button
            className="secondary-btn px-7"
            onClick={() => toggleModal("large-modal")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
