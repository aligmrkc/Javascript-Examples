import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';

function App() {
const counter=useSelector(state=>state.counter)
const dispatch=useDispatch();
  return (
    <div className="App">
         <button onClick={()=>dispatch(increment())}>+</button> <br></br>

   <h1>Ali {counter}</h1>
   <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
