import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

// Main application component
const App = () => {
  const [chartData, setChartData] = useState(null);

  // Fetching chart data from the public directory
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error.message);
      }
    };

    fetchData();
  }, []);

  // Show a loading message until data is available
  if (!chartData) {
    return <div>Loading data, please wait...</div>;
  }

  return (
    <div>
      <header>
        <h1>Financial Insights Dashboard</h1>
        <p>An interactive way to explore your financial data.</p>
      </header>
      
      <section>
        <h2>Sales Overview</h2>
        <p>Visualizing monthly sales data using a bar chart.</p>
        <BarChart data={chartData} />
      </section>

      <section>
        <h2>Profit Trends</h2>
        <p>Track how your profits change over time with a line chart.</p>
        <LineChart data={chartData} />
      </section>

      <section>
        <h2>Expenses vs Profits</h2>
        <p>Analyze the relationship between your expenses and profits using a scatter chart.</p>
        <ScatterChart data={chartData} />
      </section>

      <section>
        <h2>Comprehensive Metrics</h2>
        <p>See how sales, expenses, and profits interact with a bubble chart.</p>
        <BubbleChart data={chartData} />
      </section>
    </div>
  );
};

export default App;
