"use client";
import React from "react";
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("../_components/charts/Spline"), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <Spline />
    </div>
  );
}

export default Page;
