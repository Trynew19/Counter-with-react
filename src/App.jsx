import { useState } from 'react'

import './App.css'

function App() {
    //  let counter = 15
     let [counter,setcounter] = useState(0)

     const addvalue = ()=>{
      // console.log("value added",Math.random());
      // counter = counter + 1;
      if (counter <= 19) {
      setcounter(counter + 1)
        
      }
     }


     const removevalue = ()=>{
      if (counter >= 1) {
       setcounter(counter - 1)
        
      }
     }

  return (
    <>
      <h1>counter</h1>
      <h2>count value : {counter}</h2>
      <button onClick={addvalue} >add value {counter}</button>
      <br /> <br />
      <button onClick={removevalue} >remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
