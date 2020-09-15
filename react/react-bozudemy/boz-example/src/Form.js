import React, { Component } from 'react'

 class Form extends Component {

    addButton(){
        this.props.addnews();
        console.log("Hi");
        
    }
    render() {
        return (
            <div>
                <button onClick={this.addButton.bind(this)}>Ekle</button>
            </div>
        )
    }
}

export default Form;