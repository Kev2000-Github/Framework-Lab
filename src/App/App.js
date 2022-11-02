import './App.css';
import {LineChart} from '../Components/Charts'
import NavBar from '../Components/NavBar/Navbar'
import React from 'react'
import {dataProjection, dataReal, labels as saleYears} from '../Data/lineChartSales'

function App() {
  return (
    <div className="App">
      <main>
      
			<NavBar/>
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
