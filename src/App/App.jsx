import './App.css';
import { Button } from 'flowbite-react';
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
import { DoughnutChart } from '../Components/Charts/Donut';

function App() {
  return (
    <div className='App'>
      <main className='mainPage'>
        <Lista className='sideMenu' />
        <div className='rightBody'>
          <NavBar className='topMenu' />
          <div className='dashboard'>
            <div className='head'>
              <h1>
                Analíticas
              </h1>
              <Button className='btn-cvs' color='dark'>
                Exportar como CVS
              </Button>
            </div>
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
              <DoughnutChart className='box' />
            </div>
            <Table className='table box' />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
