import React, { Component } from 'react'
import {Link} from "react-router-dom";
 class Navbar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Home</Link>
                </div> 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to={'/login'}>Login </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={'/register'}>SignUp</Link>
                        </li>
                       
                    
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;
 