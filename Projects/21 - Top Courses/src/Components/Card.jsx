import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const Card = (props) => {
    // console.log(props)
    const course = props.course;
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} className="w-full min-h-[168px] object-cover" />
                <div className='w-[40px] h-[40px] rounded-full bg-white grid place-items-center absolute right-2 -bottom-3 shadow-xl'>
                    <button><FcLike fontSize="1.75rem" /></button>
                </div>
            </div>

            <div className='p-4 text-white'>
                <p className='font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-base mt-2'>{course.description.length > 100 ? course.description.substring(0, 100) + "..." : course.description}</p>
            </div>

        </div>
    )
}

export default Card