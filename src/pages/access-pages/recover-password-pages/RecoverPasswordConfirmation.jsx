import React from 'react'
import { Link } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'

function RecoverPasswordConfirmation() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <AccessIconElement />  
    <h1 className='login-header'>Hasło zostało zmienione</h1>
    <p className='login-text'>Twoje hasło zostało pomyślnie zmienione. Możesz teraz przejść do logowania.</p>
    <div className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <Link to='/dostep/logowanie' className='purple-button w-full'>Zaloguj się</Link>
    </div>
  </div> 
  )
}

export default RecoverPasswordConfirmation
