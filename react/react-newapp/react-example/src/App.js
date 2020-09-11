import React from 'react';
import User from './components/User'

function ConsoleLog(data){
  console.log('Ali');
}


function App() {
  return (
    <div>
      <User name ="Ali" state="online" method={ConsoleLog}/>
      <User name ="Ahmet" state="offline" method={ConsoleLog}/>
      <User name ="Ramazan" state="busy" method={ConsoleLog}/>
    </div>
  );
}

export default App;
