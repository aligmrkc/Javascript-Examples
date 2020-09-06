import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/examples';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar title="User App 2"/>
      <User
      name="ALİ GÜMRÜKÇÜ"
      salary="5500"
      Job="Yazılım"
      />
       <User
      name="Ahmet GÜMRÜKÇÜ"
      salary="6500"
      Job="Yazılım"
      />
       <User
      name="Furkan GÜMRÜKÇÜ"
      salary="6500"
      Job="Yazılım"
      />
    </div>
  
  )

}



export default App;
