// GraphComponent.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js
import data from "../assets/dataset.csv"

import downsample from './downsample';

const GraphComponent = () => {
    const [downsampledData, setDownsampledData] = useState([]);

    useEffect(() => {
      const windowSize = 100;
      const downsampled = downsample(data, windowSize);
      setDownsampledData(downsampled);
    }, [data]);
  
    const chartData = {
      datasets: [
        {
          label: 'Profit Percentage',
          data: downsampledData.map(point => ({ x: point.timestamp, y: point.profit })),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          pointRadius: 5,
          pointHoverRadius: 8,
        },
      ],
    };
  
    const chartOptions = {
      scales: {
        x: {
          type: 'category',
          labels: downsampledData.map(point => point.timestamp),
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div>
        <Line data={chartData} options={chartOptions} />
      </div>
    );
  };
  
  export default GraphComponent;