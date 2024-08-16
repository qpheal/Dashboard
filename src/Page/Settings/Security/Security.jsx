import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Security.css";
import { Link } from "react-router-dom";

export const Security = () => {
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
          <span>Security</span>
        </div>
        <div style={{ gap: "20px" }}>
          <span
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 8,
              borderRadius: 10,
              marginRight: "10px",
            }}
          >
            Cancel
          </span>
          <span
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 8,
              borderRadius: 10,
            }}
          >
            Save Changes
          </span>
        </div>
      </div>

      <div>
        <div className="mt-5">
          <span className="border-b-2 pb-1 border-b-black">
            Password Management
          </span>
        </div>

        <div className="mt-4 space-y-4" style={{ fontWeight: "bold" }}>
          <div>
            <span>Login Two-Step Verification</span>
            <switch />
          </div>
          <div>
            <span>Login Two-Step Verification</span>
            <switch />
          </div>
          <div>
            <span>Login Two-Step Verification</span>
            <switch />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <span className="border-b-2 pb-1 border-b-black">
            Password Security
          </span>
        </div>

        <div className="mt-4 space-y-4" style={{ fontWeight: "bold" }}>
          <div>
            <span>Password Change</span>
            <switch />
          </div>
        </div>
      </div>
    </div>
  );
};
