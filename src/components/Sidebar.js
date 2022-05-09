import React, { useState } from "react";
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
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
function Sidebar({ utils }) {
  const navList = [
    { logo: Overview, title: "Overview", slug: "/", notifs: 3 },
    { logo: Campaign, title: "Campaigns", slug: "/campaigns", notifs: 2 },
    { logo: Templates, title: "Templates", slug: "/templates" },
    { logo: EmailAccounts, title: "Email Accounts", slug: "/email-accounts" },
    { logo: Help, title: "Help", slug: "/help" },
  ];
  const [activePage, setActivePage] = useState(null);

  function handleActive(event) {
    if (!event.target.firstChild.classList.value.includes("active-page")) {
      event.target.firstChild.classList.toggle("active-page");
      event.target.firstChild.classList.toggle("text-gray-900");
      if (activePage) {
        activePage.firstChild.classList.remove("active-page");
        activePage.firstChild.classList.toggle("text-gray-900");
      }
      setActivePage(event.target);
    }
  }

  // useEffect(() => {
  //   navList.forEach((item, idx) => {
  //     if (window.location.pathname === item.slug) {
  //       const el =
  //         document.getElementsByClassName("pro-inner-item")[idx].firstChild
  //           .firstChild.firstChild;
  //       el.classList.toggle("active-page");
  //       el.classList.toggle("text-gray-900");
  //     } else {
  //       const el =
  //         document.getElementsByClassName("pro-inner-item")[idx].firstChild
  //           .firstChild.firstChild;
  //       el.classList.remove("active-page");
  //       el.classList.toggle("text-gray-900");
  //     }
  //   });
  // }, [window.location.pathname]);

  return (
    <div
      className={`${
        utils.sideBar ? "translate-x-0 " : "translate-x-full"
      }h-screen xl:block relative w-80`}
    >
      <div className="bg-white h-full dark:bg-gray-700">
        <Link to="/">
          <div className="flex items-center justify-center pt-6">
            <img src={logo} className="w-1/6" alt="Hypemail logo" />
            {utils.sideBar && <img src={logoText} alt="Hypemail logo text" />}
          </div>
        </Link>
        {/* <nav className="mt-6 px-5">
          <div>
            {navList.map((item) => {
              return <NavbarItem {...item} />;
            })}
          </div>
        </nav> */}

        <ProSidebar
          // collapsed={utils.sideBar}
          collapsedWidth="10%"
          className="mt-4"
          style={{ color: "black" }}
        >
          <Menu>
            {navList.map((item, idx) => {
              return (
                <MenuItem
                  key={idx}
                  onClick={(e) => {
                    handleActive(e);
                  }}
                  className=" text-gray-900 text-base"
                >
                  <Link to={item.slug}>
                    <NavbarItem className="text-gray-900" {...item} />
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
}

export default Sidebar;
