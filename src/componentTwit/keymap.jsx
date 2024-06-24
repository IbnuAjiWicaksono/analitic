import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Keymap = () => {
  // Definisikan opsi diagram
  const options = {
    series: [
      {
        name: "",
        data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false, // Menonaktifkan toolbar (termasuk tombol download)
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Keymap',
      align: 'middle',
    },
    xaxis: {
      categories: ['GP2', 'Pembalap', 'Hujan', 'IP', 'Indonesia', 'BRI', 'Telkomsel', 'bola'],
    },
    legend: {
      show: "bottom",
    },
  };

  // Gunakan useEffect untuk menginisialisasi dan merender chart
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }, []); // Pastikan useEffect dijalankan ulang saat opsi berubah

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div id="chart"></div>
    </div>
  );
};

export default Keymap;
