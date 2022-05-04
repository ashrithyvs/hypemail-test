import React from "react";
import { Link } from "react-router-dom";
export default function NavbarItem({ logo, title, slug }) {
  return (
    <Link to={slug}>
      <div className="w-full cursor-pointer text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
        <img
          src={logo}
          className="fill-grey-100 hover:fill-blue-500 "
          alt={slug}
        />
        <span className="mx-4 text-sm font-semibold">{title}</span>
      </div>
    </Link>
  );
}
