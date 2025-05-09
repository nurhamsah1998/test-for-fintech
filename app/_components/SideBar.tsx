"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icon } from "@iconify/react";

export type NavProps = {
  title: string;
  path: string;
  icon: string;
  headerTitle?: string;
};
export const navMenu: NavProps[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "ph:house-fill",
    headerTitle: "Main Dashboard",
  },
  {
    title: "NFT Marketplace",
    path: "/nft",
    icon: "ph:shopping-cart-bold",
    headerTitle: "NFT Marketplace",
  },
  {
    title: "Tables",
    path: "/tables",
    icon: "ph:chart-bar-fill",
    headerTitle: "Tables",
  },
  {
    title: "Kanban",
    path: "/kanban",
    icon: "ph:clipboard-fill",
    headerTitle: "Kanban",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: "ph:user-fill",
    headerTitle: "Profile",
  },
  {
    title: "Sign in",
    path: "/",
    icon: "ph:lock-key-fill",
    headerTitle: "",
  },
];
function SideBar() {
  const location = usePathname();
  return (
    <div className="w-sm p-2 pr-0">
      {/* HEADER TITLE */}
      <div className="p-8 flex items-center gap-2">
        <p className=" text-2xl font-black text-purple-600">Fintech App</p>
        <p className=" text-2xl text-slate-600">FREE</p>
      </div>
      {/* NAV MENU */}
      <div className="pl-7 flex flex-col gap-1 mt-10">
        {navMenu.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className={`${
              location === item.path
                ? "border-r-[5px] border-r-purple-600 text-purple-600 font-bold"
                : "text-slate-500"
            } p-3 cursor-pointer flex items-center gap-3`}
          >
            <Icon width={17} icon={item.icon} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
