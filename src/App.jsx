import React from 'react'
import HelloWorld from './components/Hello'
import Greetings from './components/Class';
import Render from './components/Render';

function App() {
  return (
    <div>
      <HelloWorld />
      <Greetings  
      name="alen"/>
      <Render/>
    </div>
  )
}

export default App;
