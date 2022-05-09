import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Pagination() {
  return (
    <div className="flex space-x-3 items-center">
      <div className="icon">
        <IoIosArrowBack fontWeight={800} />
      </div>
      <div className="icon">
        <IoIosArrowForward />
      </div>
      <span className="text-gray-400 text-sm">Show 1-20</span>
    </div>
  );
}
