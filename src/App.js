import './App.css';
import React, { createContext } from 'react';
import ChildA from './ChildA';
import Array from './Array';

const data=createContext();
const data1=createContext();
//create context --> provider --->consumer
function App() {
  const name="saket";
  const gender = "male";
  return (
    <data.Provider value={name} >
      <data1.Provider value = {gender}>
    <ChildA/>
    <Array/>
    </data1.Provider>
    </data.Provider>

    
  );
}

export default App;
export {data,data1} ;
