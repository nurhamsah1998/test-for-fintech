import React from "react";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react";

function Spline() {
  const [state] = React.useState({
    series: [
      {
        name: "A",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "B",
        data: [11, 20, 8, 31, 22, 89, 80],
      },
    ],
    options: {
      colors: ["#9810fa", "#0ea5e9"],
      chart: {
        height: 350,
        width: "100%",
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        colors: ["#ffffff", "#ffffff"],
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      markers: {
        strokeColors: "#9810fa",
        strokeWidth: 3,
        colors: ["#ffffff", "#ffffff"],
      },
      tooltip: {
        shared: false,
        x: {
          show: false,
        },
        custom: function ({ series, seriesIndex, dataPointIndex }: any) {
          return (
            '<div class="arrow_box">' +
            "<span class='bg-purple-600 text-white p-2 font-bold'>" +
            "$" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
        y: {
          show: false,
          title: {
            formatter: () => null,
          },
        },
      },
    },
  });
  return (
    <div className=" bg-white p-5 rounded-2xl w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl">
          <Icon icon="ph:calendar-blank-bold" width={20} color="#90a1b9" />
          <p className="text-slate-400">This month</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-100">
          <Icon
            icon="ph:chart-bar-fill"
            width={20}
            className=" text-purple-600"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <div>
          <p className="text-3xl text-slate-700 font-bold">$36.6K</p>
          <span className=" text-slate-700 text-nowrap">
            Total spent{" "}
            <span className="rounded-2xl px-3 font-bold ml-1 py-1 text-green-600">
              - + 23%
            </span>
          </span>
          <div className="flex items-center gap-3 mt-5">
            <div className="bg-green-500 w-fit p-1 rounded-full">
              <Icon icon="ph:check-bold" width={10} color="#fff" />
            </div>
            <p className="text-green-500 font-bold">Ontrack</p>
          </div>
        </div>
        <div className="w-full">
          <ReactApexChart
            options={state.options as any}
            series={state.series}
            type="area"
            height={350}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Spline;
