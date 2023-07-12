import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponentOnly = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const renderChart = () => {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'line', // Line chart
        data: {
          labels: [24,25,26,27,28,29,30,31,32,33,34,35,40], // Replace with your own labels
          datasets: [
            {
              label: 'Dataset 1',
              data: [10,5,10,15,10,25,30,35,40,45,50,55,60], // Replace with your own data
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Replace with your desired color or array of colors
              borderColor: '#F0D697',// Replace with your desired color or array of colors
              borderWidth: 2,
              fill: false, // Disable filling area under the line
            },
          ],
        },

        options: {

            responsive: true, // Make the chart responsive
            scales: {
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Y-axis Label', // Customize Y-axis label
                  },
                  ticks: {
                    // Customize the Y-axis number formatting
                    callback: function (value, index, values) {
                      return value.toLocaleString('en-US'); // Format the value with commas (e.g., 1,000)
                    },
                  },
                },
              },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          // Specify additional chart options and configurations here
        },
      });
    };

    renderChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponentOnly;
