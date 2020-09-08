import React from 'react';
import './App.css';

import Weather from "./app_components/weather.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.css";

const API_key="dea05d9703afc8d153d63c0989bbb81d";
class App extends  React.Component{
    constructor(){
      super();
      this.state={}
      this.getWeather();
      

    }

    getWeather=async()=>{
      const api_call=await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid= ${API_key}');
      
      const response=await api_call.json();

      console.log(response);
    }
    render(){
      return(
        <div className="App">
          <Weather/>
        </div>
      )
    }
  
}


export default App;
