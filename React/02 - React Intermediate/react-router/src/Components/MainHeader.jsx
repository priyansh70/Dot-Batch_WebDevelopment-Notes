import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
    <Outlet />
    </div>
  )
}

export default MainHeader