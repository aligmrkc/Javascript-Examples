import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'


function App() {
  return (
    <div className="App" >
     <Greet name="Bruce " heroName="Batman"/>
     <Greet name="Clark " heroName="SuperMan"/>
     <Greet name="Diana "heroName="Wonder Women"/>
     
     
    </div>
  );
}

export default App;
