import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate } from 'react-router-dom'
import { BiSolidLockOpen } from 'react-icons/bi'

function RecoverPasswordEmail() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dostep/odzyskaj-konto/email')
  }
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='rounded-3xl p-1 bg-purple-500/50'>
      <div className='rounded-3xl bg-purple-500/90 text-white text-xl p-2 '>
        <BiSolidLockOpen />
      </div>
    </div>
    <h1 className='login-header'>Odzyskaj hasło</h1>
    <p className='login-text'>Wprowadź swój email aby otrzymać kod resetujący hasło.</p>
    <form className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <div className="relative my-1 w-full">
      <input required type="text" name='email' id='username-input' className="floating-form-input peer" placeholder=" " />
      <label for='username-input' className="floating-form-label">Wprowadź adres e-mail</label>
    </div>
    <button onClick={handleSubmit} type='submit' className='purple-button w-full my-2'>Dalej</button>
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordEmail
