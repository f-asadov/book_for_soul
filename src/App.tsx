import React, { useState } from 'react';
import Greeting from './components/greeting';
import './App.css'
import Survey from './components/survey';

const state = {
  is:true
}



function App() {
  const [greetingVisible , setGreetingVisible] = useState<boolean>(true)
  const [anketaVisible,setAnketaVisible] = useState<boolean>(false)
  
  const updateState = (greetingState:boolean) =>{
    setGreetingVisible(greetingState)
    setAnketaVisible(true)
  }
  return (
    <div className='main'>
     {greetingVisible && <Greeting updateState = {updateState}/>}
     {anketaVisible && <Survey/>}
    </div>
  );

  
}

export default App;
