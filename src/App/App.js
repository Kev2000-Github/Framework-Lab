import './App.css';
import {LineChart} from '../Components/Charts'
import {dataProjection, dataReal, labels as saleYears} from '../Data/lineChartSales'

function App() {
  return (
    <div className="App">
      <main>
        <LineChart 
          dataProjection={dataProjection}
          dataReal={dataReal}
          years={saleYears}
        />
      </main>
    </div>
  );
}

export default App;
