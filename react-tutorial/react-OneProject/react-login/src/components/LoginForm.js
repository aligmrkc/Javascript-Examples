import React, {useState} from 'react';
import * as EmailValidator from "email-validator"

 function LoginForm({Login,error,name,email,password}) {
     const [details,setDetails]=useState({name:"" ,email:"", password:""});

       
     const submitHandler = e =>{
         
            e.preventDefault();
            Login(details);
         

         
        
        
     }

     return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error!="")?(<div className="error">{error}{this.state.name} </div>):""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input required onChange={e=>setDetails({...details,name:e.target.value})} value={details.name} type="text" name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input required onChange={e=>setDetails({...details,email:e.target.value})}  value={details.email} type="email" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input required onChange={e=>setDetails({...details,password:e.target.value})}   value={details.password} type="password" name="password" id="password"/>
                </div>
                <input  type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;