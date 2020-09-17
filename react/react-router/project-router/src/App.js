import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';


const news=({match})=>{
 
return(<h1>Yeni Sayfa:{match.params.id} News</h1>)
}

const Profile = () => {
 
  return(<h1>Profile:ALİ GÜMRÜKÇÜ</h1>)
  }
class App extends Component {
  state={
    loggedIn:false
  }

  ClickButton=()=>
  {
    this.setState(prevState=>({
      loggedIn:!prevState.loggedIn
    }))
  };
    render(){
        return (
          <Router>
            <div>
              <NavLink activeStyle={{color:"blue"}} to="/Anasayfa">Anasayfa</NavLink>
              <NavLink activeStyle={{color:"red"}} to="/iletisim">İletişim</NavLink>
              <NavLink activeStyle={{color:"yellow"}} to="/news/1">News</NavLink> <br/>
              <NavLink activeStyle={{color:"yellow"}} to="/profile">Profile</NavLink>
              <br/>
              <br/>
              <input type="button" onClick={this.ClickButton}  value={this.state.loggedIn ? 'Log out':'Login'}></input>
              <Route path="/" exact strict render={
                ()=>
                  {
                    return (<h1>Anasayfa</h1>)
                  }
              }>
              </Route>
              <Route path="/iletisim" exact strict render={
                ()=>
                  {
                    return (<h1>İletişim</h1>)
                  }
              }/>
                
                <Route path="/news/:id" exact strict component={news}/>
                    
                
                <Route path="/profile" exact strict render={ () => (
                  this.state.loggedIn ? (<Profile/>): (<Redirect to="/" />)
                )}/>
           
            </div>
          </Router>
        );
    }
  }
  

export default App;
