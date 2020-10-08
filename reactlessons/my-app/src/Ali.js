import React, { Component } from 'react'

class Ali extends Component {

    constructor(props){
        super();
        console.log(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                 <p>{this.props.id}</p>
               <h1>{this.props.baslik}</h1>
               <p>{this.props.aciklama}</p>
            </div>
        )
    }
}
export default Ali;