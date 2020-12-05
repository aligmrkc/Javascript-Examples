import React,{Component} from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import Menu from './menu/Menu';
import Tweets from './tweet/Tweets';
import Mytweets from './tweet/Mytweets';
import Login from './login/Login';
import firebase from 'firebase/app'
import history from '../history'
import { isLoggedIn } from '../actions'; 
import { connect} from 'react-redux';

class App extends Component {
    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCXcv2yEOMPcTVxIon3Ewk5JamBrtVKDz8",
            authDomain: "twitterklon-react-d3534.firebaseapp.com",
            databaseURL: "https://twitterklon-react-d3534.firebaseio.com",
            projectId: "twitterklon-react-d3534",
            storageBucket: "twitterklon-react-d3534.appspot.com",
            messagingSenderId: "957807847304",
            appId: "1:957807847304:web:ee6c1482f0cfc0d78e7c3d",
            measurementId: "G-ZZRJC58FE6"
        });
         
        this.props.isLoggedIn();
    }
    render(){
        return(
            <Router history={history}>
               <div>
                  <Menu/>
               <Switch>
                    <Route path='/' exact component={Tweets}/>
                    <Route path='/mytweets'  component={Mytweets}/>
                    <Route path='/login'  component={Login}/>
                </Switch>
               </div>
               
            </Router>
         
        )
    }
    
}

export default connect(null,{isLoggedIn})(App);