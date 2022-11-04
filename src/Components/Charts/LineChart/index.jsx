import { Line } from 'react-chartjs-2';
import { numberFormatter } from '../../../Utils/common';
import './index.css';

const options = {
  responsive: true,
  aspectRatio: 1.3,
  tension: 0.2,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const getDiffPercent = (numbers) => {
  const latestNumber = numbers[numbers.length - 1];
  const originalNumber = numbers[numbers.length - 2];
  const difference = (latestNumber - originalNumber);
  return (difference / originalNumber) * 100;
};

export function LineChart({ years = [], dataReal = [], dataProjection = [] }) {
  const totalSales = dataReal.reduce((a, b) => a + b, 0);
  const diffPercent = getDiffPercent(dataReal);
  const isDecrease = diffPercent < 0;
  return (
    <div className='lineChart'>
      <div className='lineHeader'>
        <h1>Sales</h1>
        <a href='#'>All sales</a>
      </div>
      <div className='lineSubHeader'>
        <h1>
          $
          {numberFormatter(totalSales)}
        </h1>
        <p className={`diffPercent ${isDecrease ? 'decrease' : 'increase'}`}>
          {isDecrease ? '' : '+'}
          {diffPercent.toFixed(2)}
          %
        </p>
      </div>
      <div className='avgSales'>
        <p>
          $
          {numberFormatter(totalSales / dataReal.length | 0)}
          {' '}
          avg sales
        </p>
      </div>
      <div className='lineGraph'>
        <Line
          options={options}
          data={{
            labels: years,
            datasets: [
              {
                label: 'projection',
                data: dataProjection,
                backgroundColor: 'rgb(172, 186, 194, 0.3)',
                borderColor: 'rgb(172, 186, 194, 0.5)',
              },
              {
                label: 'real',
                data: dataReal,
                borderColor: 'rgb(15, 153, 237)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                fill: {
                  target: 'origin',
                  above: 'rgba(53, 162, 235, 0.05)',
                },
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
