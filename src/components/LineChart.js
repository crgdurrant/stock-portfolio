import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Normalised Returns',
    },
  },
};

const labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'My Portfolio',
      data: [10, 30, 20,33,55,66,77,55],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Benchmark',
      data: [13,18,25,29,31,45,55,60,50],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function LineChart() {
  return (
    <div className='chart-wrapper'>
      <Line options={options} data={data} />
    </div>
  );
}