import React from 'react';
import ApexCharts from 'apexcharts';
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/X.png";
import Youtube from "../images/Youtube.png";
import DigitalNews from "../images/DigitalNews.png";
import Marketplace from "../images/Marketplace.png";

const Chart = () => {
  const options = {
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
      y: {
        show: true,
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: "Telkom",
        data: [1500, 1418, 1456, 1526, 1356, 1456],
        color: "#1A56DB",
      }
    ],
    chart: {
      height: 350, // Adjust height as needed
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + " Data";
        },
      },
    },
  };

  React.useEffect(() => {
    if (document.getElementById("tooltip-chart") && typeof ApexCharts != 'undefined') {
      const chart = new ApexCharts(document.getElementById("tooltip-chart"), options);
      chart.render();
    }
  },[]);

  return (
    <div>
      <div className="grid bg-white rounded-lg shadow dark:bg-gray-800 p-2 md:p-6" style={{ width: "964px" }}>
        <div className="flex justify-between mb-5">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2" >Result</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Keywords: {"Telkom"}</p>
          </div>
          <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
            {"2%"}
            <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
          </div>
        </div>
        <div id="tooltip-chart" style={{ width: "900px"}}></div>
        <div className="grid grid-cols-2 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
  <div className="flex justify-between items-center pt-5">
    <p>Last Analyzed: {""}</p>
  </div>
  <div className="flex text-sm font-semibold rounded-lg px-60 py-6">
    {/* Menggunakan div dengan kelas flex untuk membuat gambar sejajar */}
    <div className="flex text-right">
      <img className="w-6 h-6 mr-1" src={Facebook} alt="Facebook" />
      <img className="w-6 h-6 mr-1" src={Instagram} alt="Instagram" />
      <img className="w-6 h-6 mr-1" src={Twitter} alt="Twitter" />
      <img className="w-6 h-6 mr-1" src={Youtube} alt="Youtube" />
      <img className="w-6 h-6 mr-1" src={Marketplace} alt="Marketplace" />
      <img className="w-6 h-6 mr-1" src={DigitalNews} alt="DigitalNews" />
    </div>
  </div>
</div>
        </div>
      </div>
  );
};

export default Chart;
