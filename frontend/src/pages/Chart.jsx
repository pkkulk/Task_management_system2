import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart() {
  const data = {
    labels: ['Pending', 'In-Progress', 'Completed'],
    datasets: [
      {
        label: 'Tasks',
        data: [10, 5, 15], // Replace with actual counts
        backgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="bg-white mt-6 p-4 rounded-xl border-4 border-blue-400 shadow-lg w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-4">Task Overview</h2>
      <div className="w-full overflow-x-auto">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default Chart;