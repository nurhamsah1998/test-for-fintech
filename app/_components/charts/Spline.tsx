import React from "react";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react";

function Spline() {
  const [state, setState] = React.useState({
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
        type: "area",
        toolbar: {
          show: false,
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <div className=" bg-white p-5 rounded-2xl">
      <div className="flex gap-3">
        <div>
          <p className="text-3xl text-slate-700 font-bold">$36.6K</p>
          <span className=" text-slate-700 text-nowrap">
            Total spent{" "}
            <span className="bg-green-200 rounded-2xl px-3 ml-3 py-1 text-green-600">
              + 23%
            </span>
          </span>
          <div className="flex items-center gap-3 mt-5">
            <div className="bg-green-500 w-fit p-1 rounded-full">
              <Icon icon="ph:check-bold" width={16} color="#fff" />
            </div>
            <p className="text-green-500 font-bold">Ontrack</p>
          </div>
        </div>
        <div>
          <ReactApexChart
            options={state.options as any}
            series={state.series}
            type="area"
            height={350}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Spline;
