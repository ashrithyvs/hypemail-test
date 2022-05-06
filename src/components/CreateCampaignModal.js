import React from "react";
import { Modal, Button } from "flowbite-react";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function CreateCampaignModal({ toggleModal }) {
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
              <label for="name">
                <span className="font-semibold">Name</span>
              </label>
              <input
                id="name"
                placeHolder="29th June 2022 Campaign for Lawyers"
                className="input"
                type="text"
              />
            </div>
            <div className="flex-col space-y-3">
              <label className="font-semibold">Email accounts</label>
              <Select options={options} isSearchable isMulti />
            </div>
            <div className="flex-col space-y-3">
              <label for="tags">
                <span className="font-semibold">Tags</span>
              </label>
              <Select options={tags} isSearchable isMulti />
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
