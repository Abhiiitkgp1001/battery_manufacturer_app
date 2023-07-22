import React,{useState, useEffect} from 'react';
import MobileApp from './screens/MobileApp';
import Home from './screens/Home';



const App = () => {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <Home width={width}/>
  );
};

export default App;
