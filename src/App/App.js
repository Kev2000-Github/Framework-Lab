import './App.css';
import {LineChart} from '../Components/Charts'
import {Donut} from '../Components/Charts'
import {dataProjection, dataReal, labels as saleYears} from '../Data/lineChartSales'

function App() {
  return (
    <div className="App">
      <main >
        <div>
        <doughnutChart/>
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
