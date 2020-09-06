import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/examples';
import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';



class App extends Component{
  state={
    users:[
      {
        id:1,
        name:"ALİ GUMRUKCU",
        department:"Bilişim",

      },
      {
        id:2,
        name:"Ahmet Kaya",
        department:"Yazılım",
        
      },
      {
        id:3,
        name:"Fatih Ayfam",
        department:"Bilişim",
        
      }
     
    ]

  }
    render(){
      return (
        <div className="container">
         
         < Users users={this.state.users}/>
        </div>
      
      )
    }
  

}



export default App;
