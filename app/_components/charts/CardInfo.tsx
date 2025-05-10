import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

function CardInfo() {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-4">
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl flex items-center gap-3">
        <div className="w-20 h-16 flex justify-center items-center rounded-full bg-slate-300">
          <Icon
            icon="ph:chart-bar-fill"
            width={30}
            className=" text-purple-600"
          />
        </div>
        <div>
          <p className="text-slate-400">Earnings</p>
          <p className="text-2xl font-bold text-slate-700">$350.4</p>
        </div>
      </div>
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl flex items-center gap-3">
        <div className="w-20 h-16 flex justify-center items-center rounded-full bg-slate-300">
          <Icon
            icon="ph:currency-dollar-bold"
            width={30}
            className=" text-purple-600"
          />
        </div>
        <div>
          <p className="text-slate-400">Spend this month</p>
          <p className="text-2xl font-bold text-slate-700">$642.39</p>
        </div>
      </div>
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl">
        <p className="text-slate-400">Sales</p>
        <p className="text-2xl font-bold text-slate-700">$574.34</p>
        <span className="text-green-500">
          +23% <span className="text-slate-400">since last month</span>
        </span>
      </div>
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-slate-400">Your balance</p>
          <p className="text-2xl font-bold text-slate-700">$1,000</p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" rounded-full w-16 h-16 relative cursor-pointer ">
            <Image
              alt="pic"
              fill
              className=" rounded-full"
              src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=400&h=750&dpr=1"
            />
          </div>
          <Icon
            icon="ph:caret-down-bold"
            width={17}
            className=" text-slate-500"
          />
        </div>
      </div>
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl flex items-center gap-3">
        <div className="p-3 w-fit rounded-full bg-linear-65 from-blue-500 to-cyan-500">
          <Icon
            icon="ph:check-square-offset-fill"
            width={30}
            className=" text-white"
          />
        </div>
        <div>
          <p className="text-slate-400">New Tasks</p>
          <p className="text-2xl font-bold text-slate-700">154</p>
        </div>
      </div>
      {/* SECTION CARD */}
      <div className="bg-white py-3 px-6 rounded-2xl flex items-center gap-3">
        <div className="w-20 h-16 flex justify-center items-center rounded-full bg-slate-300">
          <Icon
            icon="ph:copy-simple-fill"
            width={30}
            className=" text-purple-600"
          />
        </div>
        <div>
          <p className="text-slate-400">Total projects</p>
          <p className="text-2xl font-bold text-slate-700">2935</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
