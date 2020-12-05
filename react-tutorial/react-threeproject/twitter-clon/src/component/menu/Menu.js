import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions'
class Menu extends Component{

    render(){
        const {isLoggedIn}=this.props.auth;
        return isLoggedIn === true ? (
            <div className='ui secondary  menu'>
                <Link className='item' to='/'>Tweetlerim</Link>
                <Link className='item' to='/myTweets'>Benim Tweetlerim</Link>    
            <div className='right menu'> 
                <Link className='item' to='/login' onClick={()=>{
                    this.props.logout();
                }}>Çıkış Yap</Link>
            </div>
            </div>
        ):(
            <div className='ui secondary  menu'>
                    <Link className='item' to='/'>Tweetlerim</Link>
                <div className='right menu'> 
                    <Link className='item' to='/login'>Giriş Yap</Link>
                </div>
            </div>
        )
    }
    

}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth:state.auth
    }
}

export default  connect(mapStateToProps,{logout})(Menu);