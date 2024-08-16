import React from "react";
import { Link } from "react-router-dom";
import "./../Security/Security.css";
import Notification from "../../../mock/notification";

export const Notifications = () => {
  return (
    <div className="h-screen">
      <div className="header">
        <div>
          <span className="text-2xl" style={{ fontWeight: 500 }}>
            Settings
          </span>
        </div>

        <div className=" space-x-3 text-lg">
          <Link to="/settings/preference">
            <span>Preferences</span>
          </Link>
          <Link to="/settings/notifications">
            <span>Notifications</span>
          </Link>
          {/**<input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md border border-gray-300"
          /> */}
        </div>
      </div>

      <div className="flex justify-between items-center border-b-2 pb-5 mt-7">
        <div style={{ fontWeight: 600, fontSize: "20px" }}>
          <span>Notifications</span>
        </div>
      </div>

      <div className="mt-5">
        {Notification.map((notification, index) => {
          return (
            <div key={index} className="mb-4">
              <div style={{display: "flex", flexDirection:"column"}}>
              
                <span style={{ fontWeight: "bold" }}>{notification.title}</span>
                <span>{notification.message}</span>
              </div>
              <switch />
            </div>
          );
        })}
      </div>
    </div>
  );
};
