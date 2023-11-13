import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ReturnToLoginButton() {
  return (
    <Link to='/dostep/logowanie' className='login-page-text-button my-2'>
        <FiArrowLeft className='text-xs'/>
        <p className='ml-1 text-xs'>Wróć do logowania</p>
    </Link>
  )
}

export default ReturnToLoginButton
