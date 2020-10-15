import React,{Component} from 'react';
import './App.css';
import Child from './Child'

class App extends Component {
  state={
  tl:0    
  };
 
  change=(e)=>{
    this.setState({
      tl:e.target.value
    })
  }
  shouldComponentUpdate(nextProps,nexState){
    console.log('shouldComponentUpdate',nextProps,nexState)

    return (nexState.tl % 5) === 0;
  }

  render(){
    return(
      <div className="App">
        <input name="tl" id="tl" onChange={this.change}/>
        <br/> <br/>
      <p>Her Portakal 5 TL</p>
      {this.state.tl / 5}
    
      </div>
    )
  }
  
}

export default App;
