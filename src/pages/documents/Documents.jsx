import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { scrollTop } from '../../utils/functions/scrollTop'

function Documents() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <Outlet />
    </div>
  )
}

export default Documents
