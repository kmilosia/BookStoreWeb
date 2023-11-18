import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/LogoButton'
import {isAuthorised} from '../../utils/functions/isAuthorised'
import { useEffect } from 'react'

function Access() {
  const navigate = useNavigate()
  useEffect(() => {
    const auth = isAuthorised()
    if(auth){
      navigate('/')
    }
  },[])
  return (
    <div className='forest-bg w-screen h-screen relative overflow-x-hidden'>
      <div className='w-full h-full flex flex-col justify-center items-center bg-black/50 backdrop-blur-md'>
        <Outlet />
      </div>
      <div className='absolute top-5 left-5'>
        <LogoButton color="light" />
      </div>
    </div>
  )
}

export default Access
