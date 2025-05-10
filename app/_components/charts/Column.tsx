import React from "react";
import ReactApexChart from "react-apexcharts";
import { randomArrayNum } from "./StackedColumn";

function Column() {
  const [state] = React.useState({
    series: [
      {
        name: "Inflation",
        data: randomArrayNum(7),
      },
    ],
    options: {
      colors: ["#9810fa"],
      chart: {
        height: 350,
        type: "bar",
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
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          columnWidth: "30%",
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            enabled: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    },
  });
  return (
    <div className=" bg-white p-5 rounded-2xl w-full">
      <div className=" flex justify-between items-center">
        <div>
          <p className="text-slate-400 font-semibold"> Daily Traffic</p>
          <div className="flex items-end gap-1">
            <p className="text-3xl text-slate-700 font-black">2.579</p>
            <p className="text-slate-400 font-semibold"> Visitors</p>
          </div>
        </div>
        <p className="rounded-2xl px-3 ml-1 py-1 font-bold text-green-600">
          - + 23%
        </p>
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

export default Column;
