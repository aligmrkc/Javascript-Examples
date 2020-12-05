import React, { Component } from 'react'

const initialState={
    name:"",
    email:"",
    password:"",
    nameError:"",
    emailError:"",
    passworError:""
}

 class ValidationForm extends Component {
     state=initialState;
     handleChange=event=>{
         const isCheckbox=event.target.type === "checkbox";
         this.setState({
             [event.target.name]:isCheckbox
             ? event.target.checked
             : event.target.value
         });

     };

     validate=()=>{
        let nameError="";
        let emailError="";
        // let passworError="";

        if(!this.state.name){
            nameError="name cannot be blank"
        }

        if(!this.state.email.includes('@')){
            emailError='invalid email'
        }
        if(emailError||nameError){
            this.setState({emailError,nameError});
            return false;
        }
        return true;
     };

     handleSubmit = event => {
         event.preventDefault();
         const isValid=this.validate();
         if(isValid){
            console.log(this.state)
            this.setState(initialState);
         }
     }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontsize:20,color:"red"}}>
                            {this.state.nameError}
                            </div>
                    </div>
                     <div>
                        <input name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                         <div style={{ fontsize:20,color:"red"}}>
                            {this.state.emailError}
                            </div>
                    </div>
                    <div>
                        <input name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                         <div style={{ fontsize:20,color:"red"}}>
                            {this.state.passworError}
                            </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
           
        )
    }
}
export default ValidationForm;