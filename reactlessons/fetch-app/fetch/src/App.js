import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class  App extends Component {

  state={
    users:[],
    isLoading:true
  }

  componentDidMount(){
    setTimeout(()=>{

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(can=>can.data).then(can=>
    {
      this.setState(
        {
        users:can,
        isLoading:false
        }
    );
    
  
  },2000)

    });
  }
  render(){

    const {isLoading}=this.state;
    return (
      <div className="App">
        <h1>Users</h1>
        {isLoading ? 'Loading...':''}
        {
          this.state.users.map(user=>
            <div key={user.id}>
              {user.name}

            </div>
            )
          
        }
      </div>
    );
  }
 
}

export default App;
