import React from 'react'
import { Link } from 'react-router-dom'

function AccessModal() {
  return (
    <div className='fixed z-50 w-full lg:w-max bottom-12 lg:top-20 lg:bottom-auto right-0 lg:right-24 px-5 py-5 rounded-md flex flex-col items-center justify-center shadow-lg bg-white dark:bg-midnight-900 lg:dark:bg-midnight-950'>
        <Link to='/dostep/logowanie' className='rounded-purple-button'>Zaloguj się</Link>
        <p className='text-xs mt-2 dark:text-white'>Nie masz jeszcze konta?</p>
        <Link to='/dostep/rejestracja' className='text-xs font-medium text-purple-500 underline-hover-purple'>Utwórz nowe konto</Link>
    </div>
  )
}

export default AccessModal
