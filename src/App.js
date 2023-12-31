// import all the required module here

import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Calculator from './Component/mainCalculator/Calculator';
import {useSelector } from 'react-redux';
import { calculatorToggleSelector } from './Redux/Reducers/calculatorReducer';


function App() {
  // assign all the required action into variable
  const isToggle = useSelector(calculatorToggleSelector)
  return (
    <div className={`App ${isToggle? "lightBlue": "darkBlue"}`}>
      <Navbar/>
      <Calculator/>
    </div>
  );
}

export default App;
