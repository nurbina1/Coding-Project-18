import React from 'react';
import ChartComponent from './ChartComponent';

// BubbleChart for visualizing sales, expenses, and profits
const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [
      {
        label: 'Comprehensive Metrics',
        data: data.expenses.map((expense, i) => ({
          x: expense,
          y: data.profits[i],
          r: data.sales[i] / 20, // Scale bubbles for better visualization
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const bubbleChartOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses ($)' } },
      y: { title: { display: true, text: 'Profits ($)' } },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;
