import React,{Component} from 'react';
import './App.css';
import Contacts from './Contacts';
import PropTypes from 'prop-types';


class App extends Component {

  constructor(props){
    super(props)
    this.addContact=this.addContact.bind(this)
  }

  state={
    contacts:[{
      name:'Kamuran',
      phone:'0553 815 08 61'
    },
    {
      name:'Ali',
      phone:'0216 125 54 78'
    },
    {
      name:'Tuba',
      phone:'0212 478 45 55'
    }]
  }

  addContact(a){
   const{contacts}=this.state;
   contacts.push(a)
   this.setState({
     contacts:contacts
   })
  }

  render(){

    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
  
}

export default App;
