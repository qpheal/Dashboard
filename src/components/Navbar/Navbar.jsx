import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inline-flex">
        <h1
          className={`text-[orange] origin-left font-bold text-2xl duration-150 
            `}
        >
          ReaderApp
        </h1>
      </div>
      <div className="icons">
        <IoSearch className="text-2xl" />
        <div className="notification">
          <IoIosNotificationsOutline className="text-2xl" />
          <span> 1</span>
        </div>
        <div className="user">
          <FaRegUser className="text-xl text-[orange] " />
          <span> Carl</span>
        </div>
        <AiOutlineSetting />
      </div>
    </div>
  );
};
