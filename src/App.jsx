import "./App.css";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";


function App() {
  const [count, setCounter]=useState(0);

  const increment = () => {
    setCounter(count + 1);
  }
  const decrement = () => {
    setCounter(count - 1);
  }
  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="w-1/2 mx-auto mt-28 text-center">
      <h1 className="text-5xl line-height max-w-2xl">Counter App</h1>
      <h6 className="font-sm text-5xl mt-5 mr-8"> Result:{count}
        <br></br>
        <div>
          
        </div>
      <button className="p-3.5 m-4 text-6xl cursor-pointer bg-green-400 rounded-2xl" onClick={increment}><IoAdd /></button>
      <button className="p-3.5 text-6xl cursor-pointer bg-red-500 rounded-2xl" onClick={decrement}><FaMinus /></button>
      <button className="p-3.5 ml-4 text-6xl cursor-pointer  bg-amber-500 rounded-2xl" onClick={reset}><GrPowerReset /></button>
      </h6> 
    </div>
  )
}

export default App;