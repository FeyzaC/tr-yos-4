import React from "react";
import Dashboard from "./Dashboard";
import MyAccount from "./MyAccount";

const MyProfile = () => {
  return (
    <div>
      <div className="bg-black text-white-cream w-full flex-auto h-36 flex items-center justify-start text-5xl pl-20">
        <h1>My Account</h1>
      </div>
      <div className="border-2 flex flex-col items-center rounded-lg shadow-grey-primary h-full">
        <p className="text-4xl font-bold p-5">My Account</p>
        <div className="flex w-full h-full">
          <Dashboard />
          <MyAccount />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;