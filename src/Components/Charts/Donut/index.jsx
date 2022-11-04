import { Doughnut } from 'react-chartjs-2';

const options = {
  responsive: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Ordenes',
      font: {
        size: 16,
      },
    },
  },
};

const oilData = {
  labels: [
    'Youtube',
    'Facebook',
    'Instagram',
    'TikTok',
    'Twitter',
  ],
  datasets: [
    {
      data: [92, 92, 88, 86, 84],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }],
};

export function DoughnutChart({ className }) {
  return (
    <div className={`${className} w-full h-auto p-3`}>
      <Doughnut
        data={oilData}
        options={options}
      />
    </div>
  );
}
