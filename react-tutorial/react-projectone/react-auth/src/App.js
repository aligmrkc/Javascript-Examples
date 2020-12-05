import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Login from './components/Login';
import axios from 'axios';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>

    <div className="auth-wrapper">
      <div className="auth-inner">
    
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
        </div> 
    </div>
     
</div>
</BrowserRouter>
  );
}

export default App;
