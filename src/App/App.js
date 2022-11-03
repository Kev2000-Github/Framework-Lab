import './App.css';
import {LineChart} from '../Components/Charts'
import {dataProjection, dataReal, labels as saleYears} from '../Data/lineChartSales'
import {DoughnutChart} from '../Components/Charts/Donut'
function App() {
  return (
    <div className="App">
      <main >
        <div>
        <DoughnutChart/>
        </div>
        <div>
        <LineChart 
          dataProjection={dataProjection}
          dataReal={dataReal}
          years={saleYears}
        />
        </div>
      </main>
    </div>
  );
}

export default App;
