import React from "react";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react";

export const randomArrayNum = (length = 6) => {
  const result = [];
  for (let index = 0; index < length; index++) {
    const randomNum = Math.floor(Math.random() * 100);
    result.push(randomNum ? randomNum : 34);
  }
  return result;
};
function StackedColumn() {
  const [state] = React.useState({
    series: [
      {
        name: "PRODUCT A",
        data: randomArrayNum(9),
      },
      {
        name: "PRODUCT B",
        data: randomArrayNum(9),
      },
      {
        name: "PRODUCT C",
        data: randomArrayNum(9),
      },
    ],
    options: {
      colors: ["#9810fa", "#0ea5e9", "#cad5e2"],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          columnWidth: "30%",
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            enabled: false,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
    },
  });
  return (
    <div className=" bg-white p-5 rounded-2xl w-full">
      <div className="flex justify-between items-center">
        <p className="text-slate-700 text-2xl font-bold">Weekly Revenue</p>
        <div className="p-2 rounded-xl bg-slate-100">
          <Icon
            icon="ph:chart-bar-fill"
            width={20}
            className=" text-purple-600"
          />
        </div>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={state.options as any}
          series={state.series}
          type="bar"
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
}

export default StackedColumn;
