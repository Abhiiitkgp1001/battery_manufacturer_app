import BatteryScreen from './screens/BatteryScreen';
import { Routes, Route } from "react-router-dom";
import FinishedBatteryPackScreen from './screens/FinishedBatteryPackScreen';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BatteryScreen/>}/>
      <Route path='/readyBatteryPacks' element={<FinishedBatteryPackScreen/>}/>
    </Routes>
  );
}

export default App;
