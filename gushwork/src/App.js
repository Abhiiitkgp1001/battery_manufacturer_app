import './App.css';
import AIPage from './screens/aiPage';
import CustomProcessPage from './screens/customProcessPage';
import SelectionPage from './screens/selectionPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<SelectionPage/>}/>
      <Route path='/custom/:processId' element={<CustomProcessPage/>}/>
      <Route path='/ai' element={<AIPage/>}/>
    </Routes>
 
  );
}

export default App;
