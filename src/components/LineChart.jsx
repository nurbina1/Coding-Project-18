import React from 'react';
import ChartComponent from './ChartComponent';

// LineChart for tracking monthly profit trends
const LineChart = ({ data }) => {
  const lineChartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Profits ($)',
        data: data.profits,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
