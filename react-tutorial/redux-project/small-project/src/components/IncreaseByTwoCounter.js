import React, { Component } from 'react'
import { increasByTwoCounter } from '../redux/actions/counterActions';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';


 class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                 <button onClick={e=>{this.props.dispatch(increasByTwoCounter())
                }}>
                +2
                </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increasByTwoCounter,dispatch)}
    
}


export default connect(mapDispatchToProps)(IncreaseByTwoCounter);