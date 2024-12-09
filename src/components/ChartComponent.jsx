import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

// A reusable chart component for all chart types
const ChartComponent = ({ type, data, options }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Initializing the chart instance
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type,
        data,
        options,
      });
    }

    return () => {
      // Cleanup the chart instance on component unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={canvasRef} />;
};

export default ChartComponent;
