import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'
const App = () =>{
   return(
    
       <div className="ui comments">
           <Comment 
           name='Mehmet Can'
           timeAgo='3'
           start='4'
           comment='Merhaba Can'
           />
           <Comment 
           name='Ali Can'
           timeAgo='2'
           start='4'
           comment='Merhaba React'
           />
       </div>
    
   )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)