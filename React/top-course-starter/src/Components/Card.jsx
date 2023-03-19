import React from 'react'
import {FcLike} from 'react-icons/fc';

const Card = (props) => {
  return (
    <div>
        <div>
            <img src={props.course.image.url} alt="Course Image" />
            <div>
                <button>
                    <FcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>

        <div>
            <p>{props.course.title}</p>
            <p>{props.course.description}</p>
        </div>

    </div>
  )
}

export default Card