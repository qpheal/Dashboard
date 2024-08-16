import React from "react";
import { Link } from "react-router-dom";
import user1 from "./../../../assets/user1.jpg";
import { GiChoice } from "react-icons/gi";
import { MdSecurity,  } from "react-icons/md";

export const Preferences = () => {
  return (
    <div className="h-screen">
      <div className="header">
        <div>
          <span className="text-2xl" style={{ fontWeight: 500 }}>
            Settings
          </span>
        </div>

        <div className="space-x-3 flex text-2xl text-[orange] block float-left">
          <Link to="/settings/notifications">
            <span className=""><GiChoice/></span>
          </Link>
          <Link to="/settings/security">
            <span><MdSecurity/></span>
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
          <span>Preference</span>
        </div>
       
          
        
      </div>

            {/** Profile Picture*/}

            <div className="justify-center" style={{marginHorizontal: "auto"}}>
      <div className="mt-4 " >
        <span style={{ fontWeight: "bold" }}>Profile Picture Upload</span>
        <div className="mt-3 ">
          <div className="w-16 h-16  rounded-full flex items-center justify-center">
            <img
              src={user1}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex mt-2 space-x-2">
            <div className="border px-2 py-1 rounded-md bg-green-600 text-white">
              <span> Upload Image</span>
            </div>
            <div className="border px-2 py-1 rounded-md bg-red-600 text-white">
              <span> Delete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mt-8">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <form className="space-y-4" >
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                <input type="text" id="name" placeholder="Enter your name" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
                <input type="text" id="phone" placeholder="Enter your phone number" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="fax" className="block font-semibold mb-1">Fax</label>
                <input type="file"  id="fax" className="w-full p-2 border rounded-md"/>
              </div>
              </form>

              
            <h3 className="text-lg font-semibold mb-4 mt-8">Address</h3>
              <form>
              <div>
                <label htmlFor="country" className="block font-semibold mb-1">Country</label>
                <input type="text" id="country" placeholder="Country of residence" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="city" className="block font-semibold mb-1">City</label>
                <input type="text" id="city" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="postcode" className="block font-semibold mb-1">Postcode</label>
                <input type="text" id="postcode" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="state" className="block font-semibold mb-1">State</label>
                <input type="text" id="state" className="w-full p-2 border rounded-md"/>
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Save Changes</button>
              </div>
            </form>
          </div>

          </div>
    </div>
  );
};
