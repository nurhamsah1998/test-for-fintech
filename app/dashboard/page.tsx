"use client";
import React from "react";
import dynamic from "next/dynamic";
import CardInfo from "../_components/charts/CardInfo";

const TableTodo = dynamic(() => import("../_components/TableTodo"), {
  ssr: false,
});

const Spline = dynamic(() => import("../_components/charts/Spline"), {
  ssr: false,
});
const Column = dynamic(() => import("../_components/charts/Column"), {
  ssr: false,
});

const PieChart = dynamic(() => import("../_components/charts/PieChart"), {
  ssr: false,
});
const StackedColumn = dynamic(
  () => import("../_components/charts/StackedColumn"),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div className="flex flex-col gap-4">
      <CardInfo />
      <div className="flex gap-4">
        <Spline />
        <StackedColumn />
      </div>
      <div className="flex gap-4">
        <TableTodo />
        <div className="flex-1">
          <Column />
        </div>
        <div className="flex-1">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Page;
