"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { randomArrayNum } from "./charts/StackedColumn";

function TableTodo() {
  return (
    <div className="bg-white p-5 rounded-2xl w-full">
      <div className=" flex justify-between items-center">
        <p className=" text-3xl font-bold">Check Table</p>
        <Icon
          icon="ph:dots-three-outline-fill"
          width={20}
          className=" text-slate-500"
        />
      </div>
      <table className="w-full mt-5">
        <tbody>
          <tr>
            <th className="text-left uppercase text-slate-400">Name</th>
            <th className="text-left uppercase text-slate-400">Progress</th>
            <th className="text-left uppercase text-slate-400">Quantity</th>
            <th className="text-left uppercase text-slate-400">Date</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="flex gap-3 pt-4">
              <input type="checkbox" className=" text-red-400 w-10" />
              <p className="font-bold text-xl text-slate-700">Nurhamsah</p>
            </td>
            <td className="font-bold pt-4 text-xl text-slate-700">23%</td>
            <td className="font-bold pt-4 text-xl text-slate-700">2.458</td>
            <td className="font-bold pt-4 text-xl text-slate-700">
              24.Jan.2021
            </td>
          </tr>
          {randomArrayNum(4).map((item, index) => (
            <tr key={index}>
              <td className="flex gap-3 pt-4">
                <input
                  defaultChecked
                  type="checkbox"
                  className=" text-red-400 w-10"
                />
                <p className="font-bold text-slate-700 text-xl">
                  Todo {index + 1}
                </p>
              </td>
              <td className="font-bold pt-4 text-xl text-slate-700">{item}%</td>
              <td className="font-bold pt-4 text-xl text-slate-700">
                {item * 10}
              </td>
              <td className="font-bold pt-4 text-xl text-slate-700">
                24.Jan.2021
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTodo;
