import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about")
  }
  return (
    <div>
      <div>Labs</div>
      <button onClick={clickHandler}>Move to About PAge</button>
    </div>
  )
}

export default Labs