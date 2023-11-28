import React from 'react'
import { Outlet } from 'react-router-dom'

function Documents() {
  return (
    <div className='default-page-wrapper'>
      <Outlet />
    </div>
  )
}

export default Documents
