import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom";

const MyMenu = () => {
  const { logout } = useAuthCall();
  return (
    <div className="fixed top-10 right-36  w-32 text-start ">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="font-bold  w-full rounded-md px-4 py-3 underline  text-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            My Account
        
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-lg bg-white shadow-lg focus:outline-none">
           
            <div className="h-10 flex p-2 bg-white-500 text-center rounded-t-lg">
              <Menu.Item>
                <Link to="/MyProfile" className=" bg-white-500 w-full">
                  User Dashboard
                </Link>
              </Menu.Item>
            </div>

            <div className="h-10 flex  p-2 bg-white-500 ">
              <Menu.Item>
                <button className=" bg-white-500 w-full">
                  Favorite Departments
                </button>
              </Menu.Item>
            </div>

            <div className="h-10 flex ">
              <Menu.Item>
                <button className=" bg-white-500 w-full">
                  Compare Departments
                </button>
              </Menu.Item>
            </div>

            <div className="h-10 flex rounded-b-lg">
              <Menu.Item>
                <button className=" bg-white-500 w-full" onClick={logout}>
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};


export default MyMenu;
