import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [text, setText] = useState('')

  function changeHandler(event) {
    setText(event.target.value);
  }

  // Variation1 - Every Render 
  // useEffect(() => {
  //   console.log("UI Renderer changed")
  // });

  // Variation2 - First Render
  // useEffect(() => {
  //   console.log("UI Renderer changed");
  // },[]);

  // Variation3 - On First Render + Whenever Dependencies CHanges
  useEffect(() => {
    console.log("UI Renderer changed");
  }, [text]);

  // Variation4 - To Handler Unmounting of Component  
  useEffect(() => {
    console.log("Added");
    return () => {
      console.log("Removed");
    }
  }, [text]);

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
