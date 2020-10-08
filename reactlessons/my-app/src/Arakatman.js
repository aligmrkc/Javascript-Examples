import React, { Component } from 'react'
import Ali from "./Ali";
import PropTypes from 'prop-types';
import Form from "./Form";


 class Arakatman extends Component {
     static propTypes={
         dizim:PropTypes.array
     }
    render() {
        return (
            <div>{
                this.props.dizim.map(dizim=>
                    <Ali key={dizim.id} baslik={dizim.title} aciklama={dizim.description}
                    />)
                }
                 <Form addnews={this.props.addnews}/>
            </div>
        )
    }
}

export default Arakatman;