import React from 'react'
import './itemDate.css';

const ItemDate = (props) => {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div>
            <span >{day} </span>
            <span >{month} </span>
            <span >{year} </span>
        </div>
    )
}

export default ItemDate