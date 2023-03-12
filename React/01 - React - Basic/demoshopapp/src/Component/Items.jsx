import React from 'react'
import './items.css'
const Items = (props) => {
    const itemName = props.name;
    return (
        <div className='itemContainer'>
            <p className="itemName">{itemName}</p>
            <pre>{props.children}</pre>
        </div>
    )
}

export default Items