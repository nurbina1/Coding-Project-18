import React from 'react';
import ChartComponent from './ChartComponent';

// BarChart for visualizing monthly sales data
const BarChart = ({ data }) => {
  const barChartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: data.sales,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: { ticks: { maxRotation: 45, minRotation: 0 } },
    },
  };

  return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;
