import "./App.css";
import { LineChart } from "../Components/Charts";
import {
  dataProjection,
  dataReal,
  labels as saleYears,
} from "../Data/lineChartSales";
import { Table } from "../Components/Table";

function App() {
  return (
    <div className="App">
      <main>
        <div className="grid grid-col-1 gap-2">
          <div>
            <LineChart
              dataProjection={dataProjection}
              dataReal={dataReal}
              years={saleYears}
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
