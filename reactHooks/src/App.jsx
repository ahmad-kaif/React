import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)



  //let counter = 15;

  const addValue = ()=>{
    counter++;
    console.log("value added", counter);
    setCounter(counter);
    
  } 
  const removeValue = ()=>{
    counter--;
    setCounter(counter)
  }


  return (
    <>
      <h1>Ahmad Kaif</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button> 
      <br />  
      <button onClick={removeValue} >Remove Value {counter}</button> 
    </>
  )
}

export default App
