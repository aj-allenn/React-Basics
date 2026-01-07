import React from 'react'
import HelloWorld from './components/Hello'
import Greetings from './components/Class';
import Render from './components/Render';
import Renderr from './components/Renderr';
import Alert from './components/Alert';
import Clock from './components/Date';
import Props from './components/Props';

function App() {
  return (
    <div>
      <HelloWorld />
      <Greetings  
      name="alen"/>
      <Render/>
      <Renderr/>
      <Alert/>
      <Clock/> 
      <Props/>
    </div>
  )
}

export default App;
