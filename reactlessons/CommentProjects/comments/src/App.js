import React from 'react'
import Comment from "./Comment";
import faker from "faker";
import Card from "./Card";


 const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop:'10px',
      paddingLeft:'15px'
      }}>
     
      <Card>
      <Comment name="Hilal Kamil" timeAgo="2" avatar={faker.image.avatar()} star="5" comment="React On Numara"/>
      </Card>
      <Card>
      <Comment name="ALİ GÜMRÜKÇÜ" timeAgo="4" avatar={faker.image.avatar()} star="3" comment="Yapma On Numara"/>

      </Card>
     
      </div>
  )
}
export default App;