import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <div className='spinner'></div>
      <p className='font-bold text-lg'>Loading...</p>
    </div>
  )
}

export default Spinner