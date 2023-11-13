import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import ReturnButton from '../../../components/buttons/ReturnButton'
import { MdEmail } from 'react-icons/md'

function RecoverPasswordResetLink() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <ReturnButton />
    <div className='rounded-3xl p-1 bg-purple-500/50'>
      <div className='rounded-3xl bg-purple-500/90 text-white text-xl p-2 '>
        <MdEmail />
      </div>
    </div>
    <h1 className='login-header'>Sprawdź swój email</h1>
    <p className='login-text'>Wysłaliśmy Ci link resetujący hasło.</p>
    <div className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <a href='https://g.co/kgs/bdAn8t' target='_blank' className='purple-button w-full text-center my-2'>Przejdź do skrzynki</a>
    <div className='flex items-center justify-center my-2'>
      <p className='login-text w-max mr-1 font-normal text-xs'>Nie otrzymałeś kodu?</p>
      <button className='login-page-text-button'>Wyślij kod ponownie</button>
    </div>
    <ReturnToLoginButton />
    </div>
  </div> 
  )
}

export default RecoverPasswordResetLink
