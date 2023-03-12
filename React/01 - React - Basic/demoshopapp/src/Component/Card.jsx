import React from 'react'
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Card