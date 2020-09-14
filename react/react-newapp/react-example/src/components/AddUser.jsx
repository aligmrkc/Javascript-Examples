import React from 'react';

class AddUser extends React.Component{
    state={
        name:""
    }

    submitHandler=(e)=>{
        this.props.addMethod(this.state.name)
        e.preventDefault();
        this.setState({
            name:''
        })
    }
    changeHandler=(e)=>{
        this.setState({
            name:e.target.value
        })

        
    }

    render() {
        return (
           <form onSubmit={this.submitHandler}>
               <h3>Kullanıcı Formu</h3>
               <input type="text" id="name" onChange={this.changeHandler} value={this.state.name}/>
               <button>Kaydet</button>
           </form>
        )
    }
}


export default AddUser;