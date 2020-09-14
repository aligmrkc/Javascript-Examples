import React from 'react';
import UserList from './components/UserList'
import AddUser from './components/AddUser'

class App extends React.Component {
  state={
    idx:4,
    users:[
      {name:"Ali",state:"Online",id:1},
      {name:"Ahmet",state:"Offline",id:2},
      {name:"CAFER",state:"Offline",id:3},
    ]
  }

  addMethod =(name)=>{
    console.log('App modülü içerisinde', name)
    //[...arrayadi,nesne]
    let id = this.state.idx;
    let user = {
      name:name,
      state:'online',
      id:id
    }
    let tUsers = [...this.state.users,user]
    this.setState({
      users:tUsers,
      idx: id+1
    })
  } 
  

  render(){
    return (
      <div className="container-fluid">
        <div class="row">
          <div className="col-4-md-8">
               <UserList users={this.state.users}/>
               <hr/>
               <AddUser addMethod={this.addMethod}/>
            </div>  
        </div>
      
        
      </div>
    );
  }
 
}

export default App;
