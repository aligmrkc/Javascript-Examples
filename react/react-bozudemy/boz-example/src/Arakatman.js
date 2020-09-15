import React, { Component } from 'react'
import Can from "./Can";
import Form from "./Form";



 class Arakatman extends Component {
    render() {
        return (
            <div>
                {
                this.props.dizim.map(dizim =>
                    <Can key={dizim.id} baslik={dizim.title} aciklama={dizim.description}/>)
                }

                <Form addnews={this.props.addnews}  />
            </div>
           
           
        )


    }
}
export default Arakatman;