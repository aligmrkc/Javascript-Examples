import React,{Component} from 'react';
import './App.css';
import Contacts from './Contacts';

class App extends Component() {
  state={
    contacts:[{
      name:'Can',
      phone:'0555 584 69 85'
    },
    {
      name:'ALİ',
      phone:'0555 584 58 85'
    }]
  }

  render()
  {
    return (
      <div className="App">
       
       <Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
 
}

export default App;
