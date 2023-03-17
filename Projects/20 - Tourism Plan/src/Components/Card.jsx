import React, { useState } from 'react'

const Card = (props) => {
    const [readmore, setReadmore] = useState(false)

    let description = readmore ? props.tour.info : `${props.tour.info.substring(0, 200)}....`;
    return (
        <div className="card">
            <img className='cityImage' src={props.tour.image} alt="cityImage" />
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{props.tour.price}</h4>
                    <h4 className="tourCityName">{props.tour.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className='readMore' onClick={() => { setReadmore(!readmore) }}>
                        {readmore ? " Show Less" : " Read More"}
                    </span>
                </div>
            </div>
            <button className='notIntrestedBtn' onClick={() => props.getRemoveId(props.tour.id)}>Not Intrested</button>
        </div>
    )
}

export default Card