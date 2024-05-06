import './App.css';
import React from 'react';
import ChildA from './ChildA';
import Array from './Array';


function App() {
  const name="saket";
  return (
    <>
    <ChildA name={name}/>
    <Array/>
    </>
    
  );
}

export default App;
