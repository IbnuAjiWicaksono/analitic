import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const potentialreach = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [35.1, 23.5, 2.4, 5.4, 2.1],
    options: {
      chart: {
        type: "donut",
        height: 320,
      },
      colors: ["#6CA6F8", "#7AD965", "#99A2FF", "#FF6A6C","#FFC03F"],
      labels: ["Keywords","Keywords","Keywords","Keywords","Keywords"],
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Ganti URL di bawah dengan URL API yang sesuai
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      updateChartSeries(data); // Update series based on API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateChartSeries = (data) => {
    // Misalkan respons API berisi array yang sesuai dengan series
    const newSeries = [...data];
    setChartOptions({
      ...chartOptions,
      series: newSeries,
    });
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
      <h5 className="text-xl font-bold leading-none text-gray-900 pe-1">
      Potential Reach
      </h5>
      <div className="flex justify-between mb-3 items-center">
        <div className="relative invisible text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72">
          <div data-popper-arrow></div>
        </div>
      </div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        height={320}
      />
    </div>
  );
};

export default potentialreach;
