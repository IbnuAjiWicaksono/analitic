import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Opinion = () => {
  // Data dummy untuk 5 keywords
  const keywordSentiments = [
    { keyword: 'Keyword 1', positive: 20, negative: 5, neutral: 10 },
    { keyword: 'Keyword 2', positive: 15, negative: 8, neutral: 5 },
    { keyword: 'Keyword 3', positive: 25, negative: 3, neutral: 8 },
    { keyword: 'Keyword 4', positive: 18, negative: 7, neutral: 12 },
    { keyword: 'Keyword 5', positive: 12, negative: 6, neutral: 9 }
  ];

  // Mengumpulkan data untuk chart
  const chartData = {
    positive: keywordSentiments.map(item => item.positive),
    negative: keywordSentiments.map(item => item.negative),
    neutral: keywordSentiments.map(item => item.neutral)
  };

  // Options untuk chart
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: keywordSentiments.map(item => item.keyword),
    },
    yaxis: {
      title: {
      }
    },
    colors: ['#44C137', '#FF3A4E', '#4A4A4A']
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card untuk diagram sentimen */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold mb-4 text-black">Opinion Dashboard</h2>
          <div className="flex justify-center">
            <ReactApexChart
              options={chartOptions}
              series={[
                { name: 'Positive', data: chartData.positive },
                { name: 'Negative', data: chartData.negative },
                { name: 'Neutral', data: chartData.neutral }
              ]}
              type="bar"
              height={350}
            />
          </div>
        </div>

        {/* Card untuk tabel ringkasan sentimen */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold mb-4 text-black">Keywords Opinion Summary</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-violet-400">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Keyword</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Positive</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Negative</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Neutral</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {keywordSentiments.map((keywordSentiment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{keywordSentiment.keyword}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">{keywordSentiment.positive}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">{keywordSentiment.negative}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">{keywordSentiment.neutral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
