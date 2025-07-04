import Image from "next/image";
import React from "react";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { SideBarItem } from "./SideBarItem";
import { IoCalendar } from "react-icons/io5";
import path from "path";

const menuItems = [
  {
    icon: <IoCalendar />,
    path: '/dashboard',
    title: "Dashboard",
  },
  {
    icon: <IoCalendar />,
    path: '/dashboard/rest-todos',
    title: "Todo",
  }, {
    icon: <IoCalendar />,
    path: '/dashboard/server-todos',
    title: "Server actions",
  }, {
    icon: <IoCalendar />,
    path: '/dashboard/cookies',
    title: "Cookes",
  }, {
    icon: <IoCalendar />,
    path: '/dashboard/products',
    title: "Products",
  },
]

export const SideBar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <a href="#" title="home">
            {/* Next/Image */}

            <Image
              src="/images/bigon.png"
              className="w-32"
              alt="tailus logo"
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <img
            src="/images/user30.jpg"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map((menuItem, index) => {
              return (
                <li key={index}>
                  <SideBarItem {...menuItem} />
                </li>
              );
            })
          }

        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};

