import React, { Component } from 'react';
import './App.css';
import{BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

const news=(route)=>{
  return (<h1>Yeni Sayfa</h1>)
}
class App extends Component {

 
  render(){


    return (
      <Router>
        <div className="App">
          <NavLink activeClassName="x" to="/">Anasayfa</NavLink> <br/>
          <NavLink activeClassName="y" to="/iletisim">iletisim</NavLink> <br/>
          <NavLink activeClassName="z" to="/news/1">YeniSayfa</NavLink> <br/>

          <Route path="/" exact render={
            ()=>
          {
            return(<h1>Anasayfa</h1>)
          }
          }/>
           <Route path="/iletisim" exact render={
            ()=>
          {
            return(<h1>İletişim</h1>)
          }
          }/>

          <Route path="/news/:id" exact strict component={news}/>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
