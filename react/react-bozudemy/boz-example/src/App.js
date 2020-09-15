import React, { Component } from 'react';
import './App.css';
// import Arakatman from "./Arakatman";
// import Form from "./Form"
import Counter from "./Counter";

// const dizim=[{
//   id:1,
//   title:"Ali",
//   description:"GUMRUKCU"
// },
// {
//   id:2,
//   title:"AHMET",
//   description:"ATEŞ"
  
// },
// {
//   id:3,
//   title:"CAN",
//   description:"KAYA"
  
// },
// {
//   id:4,
//   title:"CANAN",
//   description:"KAYA"
  
// }];

class App extends Component {

  // state={
  //   name:"BUSE"
  // }

  // addnews(){
  //   console.log("Aferin Dostım");
  //   dizim.push({
  //     id:6,
  //     title:'Muhtesem',
  //     description:'Muhtesem Otesi'
  //   })
  // }

  // changeName(){
  //   this.setState(
  //     {
  //       name:"Canan"
  //     }
  //   )
  // }
  render()
  {
    

    return(
      <div className="App">
        {/* <Arakatman dizim={dizim} addnews={this.addnews}/>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this)}>Değiştir</button> */}
        <Counter/>
       
      </div>
    );
  }

}


export default App;
