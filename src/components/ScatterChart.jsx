import React from 'react';
import ChartComponent from './ChartComponent';

// ScatterChart for analyzing the relationship between expenses and profits
const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((expense, i) => ({ x: expense, y: data.profits[i] })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const scatterChartOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses ($)' } },
      y: { title: { display: true, text: 'Profits ($)' } },
    },
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;
