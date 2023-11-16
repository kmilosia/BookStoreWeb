import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ReturnToLoginButton() {
  return (
    <div className='w-full flex items-center justify-center'>
    <Link to='/dostep/logowanie' className='login-page-text-button my-2'>
        <FiArrowLeft className='text-base lg:text-xs'/>
        <p className='ml-1 text-base lg:text-xs'>Wróć do logowania</p>
    </Link>
    </div>
  )
}

export default ReturnToLoginButton
