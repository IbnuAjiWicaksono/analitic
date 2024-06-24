import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const trendline = () => {
  // Dummy data for keyword analytics
  const keywordData = {
    series: [
      { name: 'Keyword 1', data: [30, 40, 35, 50, 49] },
      { name: 'Keyword 2', data: [45, 60, 55, 70, 69] },
      { name: 'Keyword 3', data: [35, 50, 45, 60, 59] },
      { name: 'Keyword 4', data: [50, 65, 60, 75, 74] },
      { name: 'Keyword 5', data: [40, 55, 50, 65, 64] },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ['#1A56DB', '#7E3BF2', '#34D399', '#F87171', '#FCD34D'],
      xaxis: {
        categories: ['1 Juni','2 Juni','3 Juni','4 Juni','5 Juni'],
      },
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  };

  useEffect(() => {
    // Optionally, you can perform any chart initialization or rendering here
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trendline</h3>
      <div className="flex justify-between mb-4">
        <Chart
          options={keywordData.options}
          series={keywordData.series}
          type="line"
          width="100%"
          height={280}
        />
      </div>
    </div>
  );
};

export default trendline;
