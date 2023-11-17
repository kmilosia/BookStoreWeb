import React from 'react'
import { Link } from 'react-router-dom'

function AccessModal() {
  return (
    <div className='fixed z-50 w-full lg:w-max bottom-12 lg:top-20 lg:bottom-auto right-0 lg:right-32 px-5 py-7 lg:py-5 rounded-none lg:rounded-md flex
     flex-col items-center justify-center lg:shadow-lg default-bg' >
        <Link to='/dostep/logowanie' className='rounded-purple-button'>Zaloguj się</Link>
        <p className='text-base lg:text-xs mt-2 dark:text-white'>Nie masz jeszcze konta?</p>
        <Link to='/dostep/rejestracja' className='text-base lg:text-xs font-medium text-purple-500 underline-hover-purple'>Utwórz nowe konto</Link>
    </div>
  )
}

export default AccessModal
