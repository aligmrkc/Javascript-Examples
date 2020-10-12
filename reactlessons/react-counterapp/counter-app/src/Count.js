import React, { Component } from 'react'

 class Count extends Component {

   state={
       number:0
      
   }

   decrement =()=>{
       this.setState({
           number:--this.state.number
       })
   }

   increment=()=>{
       this.setState({
           number:++this.state.number
       })
   }
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <h1>{this.state.number}</h1>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default Count;