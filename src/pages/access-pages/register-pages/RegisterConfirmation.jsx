import React from 'react'
import { Link } from 'react-router-dom'

function RegisterConfirmation() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='login-header'>Potwierdź swój email</h1>
    <p className='login-text'>Możesz teraz pomyślnie zalogować się do swojego konta.</p>
    <div className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <Link to='/dostep/logowanie' className='purple-button w-full'>Zaloguj się</Link>
    </div>
  </div> 
  )
}

export default RegisterConfirmation
