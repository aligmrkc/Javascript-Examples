import React, { Component } from 'react'

 class Child extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        favoritecolor:"red",
        date: new Date()
      }
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    componentWillMount() {
      console.log(" will Memrhaba")
    }
    
    componentDidMount() {
      console.log("child did ALi")
      setTimeout(()=>{
        this.setState({
          favoritecolor:"blue"
        });
      },2000)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Child;
