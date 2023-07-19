import FlavanoidsStatistics from "./page/FlavanoidsStatistics";
import GammaStatistics from "./page/GammaStatistics";
import './App.css'

function App() {
  return (
    <div>
      <h1 className="header">****Data Visulization*****</h1> 
      <h1>Flavanoids</h1> 
     <FlavanoidsStatistics/>
      <h1>GammaStatistics</h1> 
     <GammaStatistics/>

    </div>
  );
}

export default App;
