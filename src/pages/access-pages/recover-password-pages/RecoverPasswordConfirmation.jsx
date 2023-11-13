import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function RecoverPasswordConfirmation() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='rounded-3xl p-1 bg-purple-500/50'>
      <div className='rounded-3xl bg-purple-500/90 text-white text-xl p-2 '>
        <BsCheck2Circle />
      </div>
    </div>
    <h1 className='login-header'>Hasło zostało zmienione</h1>
    <p className='login-text'>Twoje hasło zostało pomyślnie zmienione. Możesz teraz przejść do logowania.</p>
    <div className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <Link to='/dostep/logowanie' className='purple-button w-full'>Zaloguj się</Link>
    </div>
  </div> 
  )
}

export default RecoverPasswordConfirmation
