import React from "react";
import ReactApexChart from "react-apexcharts";
import { Icon } from "@iconify/react";

function PieChart() {
  const [state] = React.useState({
    series: [44, 55, 13],
    options: {
      colors: ["#9810fa", "#0ea5e9", "#cad5e2"],
      chart: {
        width: 380,
        type: "pie",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className=" bg-white p-5 rounded-2xl w-full">
      <div className=" flex justify-between items-center">
        <p className="text-slate-700 text-lg font-bold">Your Pie Chart</p>
        <div className="flex items-center gap-1">
          <p className="rounded-2xl font-bold text-slate-400">Monthly</p>
          <Icon
            icon="ph:caret-down-bold"
            width={14}
            className=" text-slate-500"
          />
        </div>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={state.options as any}
          series={state.series}
          type="pie"
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
}

export default PieChart;
