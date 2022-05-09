import React from "react";
import Select from "react-select";
import { MdOutlineHelp } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
export default function CampaignOptions() {
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
  return (
    <div className="flex space-x-4 text-black">
      <div className="p-6 flex-col bg-white w-1/2 space-y-6 text-left border shadow-sm rounded-xl">
        <h4 className="font-semibold text-lg">Campaign</h4>
        <form className="flex-col space-y-6 ">
          <div className="flex-col space-y-3 ">
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
          <div className="flex-col space-y-3 ">
            <label className="font-semibold">Email accounts</label>
            <Select
              styles={emailStyles}
              options={options}
              isSearchable
              isMulti
            />
          </div>
          <div className="flex-col space-y-3 ">
            <label for="tags">
              <span className="font-semibold">Tags</span>
            </label>
            <Select styles={tagsStyles} options={tags} isSearchable isMulti />
          </div>
        </form>
        <button className="primary-btn px-6">Save</button>
      </div>
      <div className="flex-col space-y-4  w-1/2 text-left">
        <div className="p-6 bg-white shadow-sm border rounded-xl">
          <h4 className="font-semibold text-lg">Email</h4>
          <div className="font-medium flex space-x-2 items-center text-md mt-6">
            <span>Enable tracking & include tracking code?</span>
            <MdOutlineHelp color="#A1A1AA" />
          </div>
        </div>
        <div className="p-6 flex-col space-y-3 bg-white shadow-sm border rounded-xl">
          <h4 className="font-semibold text-lg">Delete Campaign</h4>
          <span className="font-medium flex space-x-2 items-center text-md mt-6">
            Deleting a campaign will delete all of stats associated with it.
          </span>
          <button className="secondary-btn flex space-x-2 font-semibold text-red-600">
            <RiDeleteBinLine color="#E02424" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
