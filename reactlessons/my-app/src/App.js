import React, { Component } from 'react';
// import './App.css';
import './Deneme.css';
import Ali from "./Ali";
import Arakatman from "./Arakatman";
import Counter from "./Counter";

// const dizim=[{
//   id:1,
//   title:"Hiper",
//   description:"Hiper AÇıklama"
// },
// {
//   id:2,
//   title:"Süper",
//   description:"Süper Açıklama"
// },
// {
//   id:3,
//   title:"Ciger",
//   description:"Ciger Açıklama"
// },

// ]


class App extends Component {

  // state={
  //   name:"RESULO"
  // }

  // addnews(){
  //   console.log("Ekledim")
  //   dizim.push({
  //     id:5,
  //     title:'Muhtesem',
  //     description:'Muhtesem Otesi'
  //   })
  //   console.log(dizim)
  // }

  // changeName(){
  //   this.setState({
  //     name:'canan'
  //   })
  // }
  render()
  {
   

    return (
      <div className="App">
          Merhaba Dünya

        {/* <h1>{this.state.name}</h1> */}
        {/* <Arakatman dizim={dizim} addnews={this.addnews}/> */}
       
       {/* <button onClick={this.changeName.bind(this)}>Değiştir</button> */}
        <Counter/>
      </div>
    );
  }
 
}

export default App;
