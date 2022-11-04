import { Bar } from 'react-chartjs-2';

const options = {
  responsive: true,
  aspectRatio: 1.3,
  tension: 0.2,
  scales: {
    y: {
      max: 1000,
      stacked: false,
      grid: {
        display: false,
      },
    },
    x: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
      grid: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Leads',
      font: {
        size: 16,
      },
    },
  },
};

export function BarChart({
  app, goals, web, years,
}) {
  return (
    <Bar
      options={options}
      data={{
        datasets: [
          {
            label: 'Goal',
            data: goals,
            borderColor: 'rgb(0,0,0, 0.8)',
            backgroundColor: 'rgb(207,203,203, 0.3)',
            pointRadius: 6,
            borderWidth: {
              left: 0,
              right: 0,
              top: 4,
              bottom: 0,
            },
          },
          {
            label: 'Web',
            data: app,
            backgroundColor: 'rgb( 0 , 0 , 255, 0.3 )',
            borderColor: 'rgb( 0 , 0 , 255, 0.7)',
            borderWidth: 3,
            pointRadius: 6,
          },
          {
            label: 'App',
            data: web,
            backgroundColor: 'rgb( 185 , 0 , 255, 0.3 )',
            borderColor: 'rgb( 185 , 0 , 255, 0.7)',
            borderWidth: 3,
            pointRadius: 6,
          },
        ],
        labels: years,
      }}
    />
  );
}
