import React from 'react'
import {Container} from "reactstrap"
import Navi from "../navi/Navi"
import DashBoard from './DashBoard'
function App() {
  return (
    <div className="App">
      <Container>
          <Navi/>
          <DashBoard/>
      </Container>
    
    </div>
  );
}

export default App;
