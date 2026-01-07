import React from 'react'
import HelloWorld from './components/Hello'
import Greetings from './components/Class';
import Render from './components/Render';
import Renderr from './components/Renderr';

function App() {
  return (
    <div>
      <HelloWorld />
      <Greetings  
      name="alen"/>
      <Render/>
      <Renderr/>
    </div>
  )
}

export default App;
