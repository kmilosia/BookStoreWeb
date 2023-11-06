import React from 'react'
import { Outlet } from 'react-router-dom'

function Order() {
  return (
    <div className='default-page-wrapper'>
      <Outlet />
    </div>
  )
}

export default Order
