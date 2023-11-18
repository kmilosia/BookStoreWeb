import React from 'react'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'

function RegisterConfirmEmail() {
  return (
    <div className='login-container'>
    <AccessIconElement />
    <h1 className='login-header'>Potwierdź swój adres email</h1>
    <p className='login-text'>Wysłaliśmy Ci link do aktywacji na Twój adres email.</p>
    <div className='lg:w-[20rem] w-full flex flex-col'>
    <a href='https://g.co/kgs/bdAn8t' rel="noreferrer" target='_blank' className='purple-button w-full text-center my-2'>Przejdź do skrzynki</a>
    <ReturnToLoginButton />
    </div>
  </div> 
  )
}

export default RegisterConfirmEmail
