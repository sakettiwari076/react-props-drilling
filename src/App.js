import './App.css';
import React, { createContext } from 'react';
import ChildA from './ChildA';
import Array from './Array';

const data=createContext();
//create context --> provider --->consumer
function App() {
  const name="saket";
  return (
    <data.Provider value={name} >
    <ChildA/>
    <Array/>
    </data.Provider>

    
  );
}

export default App;
export {data} ;
