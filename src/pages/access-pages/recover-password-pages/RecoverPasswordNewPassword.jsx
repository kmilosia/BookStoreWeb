import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate } from 'react-router-dom'
import ShowPasswordButton from '../../../components/buttons/ShowPasswordButton'
import { useState } from 'react'
import { BiSolidLockOpen } from 'react-icons/bi'

function RecoverPasswordNewPassword() {
  const navigate = useNavigate()
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isHiddenRepeatPassword, setIsHiddenRepeatPassword] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dostep/odzyskaj-konto/potwierdzenie')
  }
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='rounded-3xl p-1 bg-purple-500/50'>
      <div className='rounded-3xl bg-purple-500/90 text-white text-xl p-2 '>
        <BiSolidLockOpen />
      </div>
    </div>    <h1 className='login-header'>Resetuj hasło</h1>
    <p className='login-text'>Nowe hasło musi się różnić od poprzedniego.</p>
    <form className='w-[20rem] items-center justify-center flex flex-col my-3'>
    <div className="relative my-1 w-full">
      <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
      <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' name='password' className="floating-form-input peer" placeholder=" " />
      <label for='password-input' className="floating-form-label">Nowe hasło</label>
    </div>
    <div className="relative my-1 w-full">
      <ShowPasswordButton setIsHiddenPassword={setIsHiddenRepeatPassword} isHiddenPassword={isHiddenRepeatPassword} />
      <input type={`${isHiddenRepeatPassword ? 'password' : 'text'}`} id='password-input' name='password' className="floating-form-input peer" placeholder=" " />
      <label for='password-input' className="floating-form-label">Powtórz hasło</label>
    </div>
    <button onClick={handleSubmit} type='submit' className='purple-button w-full my-2'>Zmień hasło</button>
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordNewPassword
