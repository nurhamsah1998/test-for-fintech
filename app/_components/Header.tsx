"use client";
import React from "react";
import { navMenu } from "./SideBar";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";

function Header() {
  const location = usePathname();
  const activePage = navMenu.find((item) => item.path === location);
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="text-md text-slate-700">
          Pages / {activePage?.title ?? "-"}
        </p>
        <p className="text-3xl font-bold text-slate-900">
          {activePage?.headerTitle ?? "-"}
        </p>
      </div>
      <div className="flex items-center gap-3 bg-white p-3 rounded-full">
        <div className=" relative">
          <Icon
            className=" absolute top-2 left-3"
            icon="ph:magnifying-glass-duotone"
            width={18}
            color="#757575"
          />
          <input
            placeholder="Search"
            className="bg-slate-300 border-none rounded-full h-10 px-4 pl-10 outline-0"
          />
        </div>
        <div className="p-1 rounded-full hover:bg-slate-300 cursor-pointer duration-200">
          <Icon icon="ph:bell-fill" width={18} color="#757575" />
        </div>
        <div className="p-1 rounded-full hover:bg-slate-300 cursor-pointer duration-200">
          <Icon icon="ph:moon-fill" width={18} color="#757575" />
        </div>
        <div className="p-1 rounded-full hover:bg-slate-300 cursor-pointer duration-200">
          <Icon icon="ph:info-bold" width={18} color="#757575" />
        </div>
        <div className=" rounded-full w-10 h-10 relative cursor-pointer">
          <Image
            alt="avatar"
            fill
            className=" rounded-full"
            src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
