import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import collapseright from "../assets/Collapse-right.png";
import collapseleft from "../assets/Collapse-left.png";
import logo from "../assets/Logo.png";
import bar from "../assets/Bar.png";
import setting from "../assets/setting.png";
import profile from "../assets/profile.png";
import logout from "../assets/logout.png";
import search from "../assets/search.png";
import logoicon from "../assets/Logo-icon.png";
import { Link } from "react-router-dom";
import { navItems } from "../utils/constants";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const inputRef = useRef();

  const ClickedOnSearchButton = () => {
    setIsCollapsed(false);
  };

  useEffect(() => {
    if (!isCollapsed) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isCollapsed]);

  return (
    <div
      className={`flex flex-col max-w-[320px] items-start 
      rounded-2xl gap-4 p-4 bg-white text-black h-full ${
        isCollapsed ? "w-28" : "w-1/4"
      } transition-width shadow-2xl duration-300`}
    >
      <div className="w-full flex justify-center items-center p-4">
        {/* Logo here */}
        {
          <Link to={"/"} className="">
            <img src={!isCollapsed ? logo : logoicon} />
          </Link>
        }
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          className={`w-full flex justify-center gap-1 items-center ${
            !isCollapsed && "px-4 py-1 rounded-3xl border-2 border-[#f1f1f1]"
          }`}
        >
          <button onClick={ClickedOnSearchButton}>
            <img
              className={isCollapsed ? "" : "w-4 h-4"}
              src={isCollapsed ? bar : search}
              alt="search-button"
            />
          </button>
          {!isCollapsed && (
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none"
            />
          )}
        </div>
      </div>

      <nav className="w-full flex flex-col justify-center gap-4">
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} isCollapsed={isCollapsed} />
        ))}
      </nav>

      <div className="mt-auto p-4 ">
        <button
          className={`relative ${
            isCollapsed ? "-top-4 left-16" : "-top-4 left-[270px]"
          } flex justify-center p-2 bg-gray-300 items-center rounded-full`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            className="w-6 h-6"
            src={isCollapsed ? collapseright : collapseleft}
            alt="collapse-sidebar"
          />
        </button>
        {/* Bottom section with user profile, settings, and logout */}

        {/* User Profile */}
        <div className="flex items-center gap-2 mb-4">
          <img src={profile} alt="profile-icon"/>
          {!isCollapsed && (
            <div>
              <div className="text-[#131313] text-sm font-medium">Pawan Kumar</div>
              <span className="bg-[#FFCD71] rounded-3xl font-normal text-[10px] px-1.5">Admin</span>
            </div>
          )}
        </div>

        {/* Settings Button */}
        <button className="flex items-center gap-2 p-2 rounded-3xl hover:bg-[#FFF7E8] w-full">
          <img src={setting} alt="setting-icon"/>
          {/* Placeholder for settings icon */}
          {!isCollapsed && <span className="font-normal text-sm">Settings</span>} 
        </button>

        {/* Logout Button */}
        <button className="flex items-center gap-2 p-2 w-full mt-2">
          <img src={logout} alt="logout-icon"/>
          {/* Placeholder for logout icon */}
          {!isCollapsed && <span className="font-normal text-sm text-[#B01212]">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
