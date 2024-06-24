import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15) //hooks use -> useState() [variable,method]
  //let counter = 15;

  const addValue = ()=>{
    counter++;
    setCounter(counter);
  } 
  const removeValue = ()=>{
    counter--;
    if(counter<0){
      counter = 0;
      setCounter(counter)
    }
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
