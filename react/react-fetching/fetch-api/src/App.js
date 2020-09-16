import React,{Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state={
    posts:[],
    isLoading:true
  };

  componentDidMount() {

    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
    .then(can=>can.data).then(can=>
        
        {
          // console.log(can);
          this.setState(
            {
              posts:can,
              isLoading:false
            }
          )
        });
      
    }, 1000);
    
    
  }
  
  render(){
    const{isLoading}=this.state;
    return (
      <div className={"App"}>
          <h1>Users</h1>
          {isLoading ? 'Loading...':''}
          {
            this.state.posts.map(user=>
              <div key={user.id}>
                  {
                    user.name
                  }
                  -@
                   {
                    user.username
                  }
                   {
                    user.email
                  }
                  
                 
                </div>
            ) 
          }
      </div>
    );
  }
 
}

export default App;
