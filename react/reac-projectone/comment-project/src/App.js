import React from 'react';
import Comment from "./Comment";
import Card from "./Card";

const App = () => {
  return (
    <div classNameName="ui comments">
    <Card>
      <Comment name="ADEM GUMRUKCU" timeAgo="2" star="4" comment="REACT BİR BAŞKA DOSTUM"/>
    </Card>
    <Card>
    <Comment name="TUBA GUMRUKCU" timeAgo="2" star="4" comment="VUE BİR  DOSTUM"/>
    </Card>
  </div>
  )
}

export default App;