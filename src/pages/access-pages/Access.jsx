import React from 'react'
import { Outlet } from 'react-router-dom'
import forest from '../../assets/forestlogin.jpg'


function Access() {
  return (
    <div className='bg-center flex items-center justify-center bg-cover w-screen h-screen' style={{backgroundImage: `url(${forest})`}}>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='bg-black/30 flex flex-col rounded-md backdrop-blur-md w-auto h-auto px-20 py-12 relative'>   
         <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Access
