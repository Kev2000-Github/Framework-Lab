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
import { NavBar } from '../Components/NavBar/Navbar';

function App() {
  return (
    <div className='App'>
      <NavBar className='topMenu' />
      <main className='mainPage'>
        <Lista className='sideMenu' />
        <div className='dashboard'>
          <h1>
            Analíticas
          </h1>
          <div className='charts'>
            <LineChart
              dataProjection={dataProjection}
              dataReal={dataReal}
              years={saleYears}
              className='lineChart box'
            />
            <BarChart
              app={app}
              goals={goals}
              web={web}
              years={leadYears}
              className='barChart box'
            />
          </div>
          <Table className='table box' />
        </div>
      </main>
    </div>
  );
}

export default App;
