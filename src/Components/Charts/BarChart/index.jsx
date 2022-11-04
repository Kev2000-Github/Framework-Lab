import { Bar } from 'react-chartjs-2';

const options = {
  responsive: true,
  aspectRatio: 1,
  interaction: {
    intersect: false,
  },
  scales: {
    y: {
      stacked: true,
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
  app, web, years,
  className,
}) {
  return (
    <div className={`${className} w-full h-auto p-3`}>
      <Bar
        options={options}
        data={{
          datasets: [
            {
              label: 'Web',
              data: app,
              backgroundColor: 'rgb( 0 , 0 , 255, 0.3 )',
              borderColor: 'rgb( 0 , 0 , 255, 0.7)',
              borderWidth: 2,
              pointRadius: 6,
            },
            {
              label: 'App',
              data: web,
              backgroundColor: 'rgb( 185 , 0 , 255, 0.3 )',
              borderColor: 'rgb( 185 , 0 , 255, 0.7)',
              borderWidth: 2,
              pointRadius: 6,
            },
          ],
          labels: years,
        }}
      />
    </div>
  );
}
