import React from 'react'
import { Link } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'

function RegisterConfirmation() {
  return (
    <div className='login-container'>
    <AccessIconElement />
    <h1 className='login-header'>Konto zostało utworzone</h1>
    <p className='login-text'>Możesz teraz dokończyć rejestrację i wprowadzić swoje dane osobowe.</p>
    <div className='lg:w-[20rem] w-full flex flex-col'>
    <Link to='/dostep/rejestracja/dokoncz-rejestracje' className='purple-button w-full mb-1 mt-3'>Dokończ rejestrację</Link>
    <ReturnToLoginButton />
    </div>
  </div> 
  )
}

export default RegisterConfirmation
