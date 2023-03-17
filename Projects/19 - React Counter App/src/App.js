import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] grid place-items-center">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-[#0398d4] text-2xl font-medium">
          Increment & Decrement
        </h2>
        <div className="flex bg-white justify-center gap-12 rounded-sm py-3 text-[25px] text-[#344151]">
          <button className="border-r-2 border-[#bfbfbf]  text-center w-20 text-5xl" onClick={()=>{
            setCounter(counter-1);
          }}>
            -
          </button>
          <div className="text-5xl font-bold">{counter}</div>
          <button className="border-l-2 border-[#bfbfbf] text-center w-20 text-5xl" onClick={()=>{
            setCounter(counter+1)
          }}>
            +
          </button>
        </div>

        <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={()=>{
          setCounter(0)
        }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
