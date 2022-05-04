import React from "react";
import {
  logo,
  logoText,
  Overview,
  Templates,
  Campaign,
  Help,
  EmailAccounts,
} from "../assets";
import NavbarItem from "../components/NavbarItem";
import { Link } from "react-router-dom";
function Sidebar() {
  const navList = [
    { logo: Overview, title: "Overview", slug: "/" },
    { logo: Campaign, title: "Campaigns", slug: "/campaigns" },
    { logo: Templates, title: "Templates", slug: "/templates" },
    { logo: EmailAccounts, title: "Email Accounts", slug: "/email-accounts" },
    { logo: Help, title: "Help", slug: "/help" },
  ];
  return (
    <div className="h-screen hidden lg:block relative w-80">
      <div className="bg-white h-full dark:bg-gray-700">
        <Link to="/">
          <div className="flex items-center justify-center pt-6">
            <img src={logo} className="w-1/6" alt="Hypemail logo" />
            <img src={logoText} alt="Hypemail logo text" />
          </div>
        </Link>
        <nav className="mt-6 px-5">
          <div>
            {navList.map((item) => {
              return <NavbarItem {...item} />;
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
