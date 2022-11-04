import './App.css';
import {
  LineChart,
  BarChart,
} from '../Components/Charts';
import {
  dataProjection,
  dataReal,
  labels as saleYears,
} from '../Data/lineChartSales';
import {
  app,
  goals,
  web,
  labels as leadYears,
} from '../Data/BarChartData';
import { Table } from '../Components/Table';
import { Lista } from '../Components/Menu/BarraLateral';

function App() {
  return (
    <div className='App'>
      <main>
        <div className='grid grid-col-1 gap-2'>
          <div>
            <Lista />
            <LineChart
              dataProjection={dataProjection}
              dataReal={dataReal}
              years={saleYears}
            />
            <BarChart
              app={app}
              goals={goals}
              web={web}
              years={leadYears}
            />
          </div>
          <div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
