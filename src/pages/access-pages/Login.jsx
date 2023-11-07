import React from 'react'
import ReturnButton from '../../components/buttons/ReturnButton'
import ShowPasswordButton from '../../components/buttons/ShowPasswordButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  return (
    <>
    <ReturnButton />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='login-header'>Zaloguj się</h1>
          <form className='w-[20rem]'>
          <div className="relative my-1">
            <input type="text" id='username-input' className="floating-form-input peer" placeholder=" " />
            <label for='username-input' className="floating-form-label">Nazwa użytkownika</label>
          </div>
          <div className="relative my-1">
            <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
            <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' className="floating-form-input peer" placeholder=" " />
            <label for='password-input' className="floating-form-label">Hasło</label>
          </div>
          <div className="flex items-center justify-start w-full my-2">
            <input id="remember-checkbox" type="checkbox" value="" class="purple-checkbox"/>
            <label for="remember-checkbox" className="checkbox-label">Zapamiętaj mnie</label>
          </div>
          <button className='purple-button w-full'>Zaloguj się</button>
          </form>
          <button className='text-button-link my-2 w-full'>Zapomniałeś hasła?</button>
          <div className='flex flex-row justify-center my-1'>
            <p className='text-xs text-white'>Nie masz jeszcze konta?</p>
            <Link to='/dostep/rejestracja' className='text-button-link mx-1'>Zarejestruj się</Link>
          </div>
        </div>    
  </>
  )
}

export default Login
