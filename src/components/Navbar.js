import React from "react";
import { Avatar, Collapse } from "../assets";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar({ utils, setUtils }) {
  return (
    <div className="flex flex-col w-full">
      <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="w-3/4">
              <img
                src={Collapse}
                onClick={() => {
                  setUtils({ sideBar: !utils.sideBar });
                }}
                alt="Collapse"
                className="cursor-pointer px-3"
              />
            </div>
            <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
              <div className="flex items-center justify-center space-x-4 cursor-pointer relative">
                <img
                  alt="profile"
                  src={Avatar}
                  className="mx-auto rounded-full object-cover rounded-full h-10 w-10 "
                />
                <span className="text-bold font-medium">Thomas Manwaring</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
