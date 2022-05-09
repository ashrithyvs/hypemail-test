import React from "react";
export default function NavbarItem({ logo, title, slug, notifs, className }) {
  return (
    <div
      className={`w-full cursor-pointer text-gray-900 dark:text-gray-200 flex items-center px-4 py-2 transition-colors duration-200 justify-between hover:text-blue-500 ${className}`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          className="fill-grey-100 hover:fill-blue-500 "
          alt={slug}
        />
        <span className="mx-4 text-sm font-semibold">{title}</span>
      </div>
      {notifs ? (
        <div
          color="#000"
          fontSize="12px"
          className="bg-green-200  flex items-center justify-center text-xs w-[20px] h-[20px] p-2 text-black rounded-full"
        >
          <span>{notifs}</span>
        </div>
      ) : null}
    </div>
  );
}
