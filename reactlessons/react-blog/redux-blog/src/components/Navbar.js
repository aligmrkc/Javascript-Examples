import React from 'react';
import {Link,withRouter} from 'react-router-dom'


const Navbar=(props)=>{
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },3000);

    return(
        <nav>
          <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
          </div>
       </nav>
    )
}

export default withRouter(Navbar) ;