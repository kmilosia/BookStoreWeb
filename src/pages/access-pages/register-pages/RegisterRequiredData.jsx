import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReturnButton from '../../../components/buttons/ReturnButton'
import ShowPasswordButton from '../../../components/buttons/ShowPasswordButton'

function RegisterRequiredData() {
    const navigate = useNavigate()
    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dostep/rejestracja/dane-osobowe')
    }
  return (
    <>
    <ReturnButton />
    <div className='flex flex-col items-center justify-center'>
        <h1 className='login-header'>Zarejestruj się</h1>
        <form className='w-[20rem]'>
            <div className="relative my-1">
                <input type="text" id='email-input' name='email' className="floating-form-input peer" placeholder=" " />
                <label for='email-input' className="floating-form-label">Adres e-mail</label>
            </div>
            <div className="relative my-1">
                <input type="text" id='username-input' name='username' className="floating-form-input peer" placeholder=" " />
                <label for='username-input' className="floating-form-label">Nazwa użytkownika</label>
            </div>
            <div className="relative my-1">
                <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
                <input type={`${isHiddenPassword ? 'password' : 'text'}`} id='password-input' name='password' className="floating-form-input peer" placeholder=" " />
                <label for='password-input' className="floating-form-label">Hasło</label>
            </div>
            <div className="flex items-start justify-start w-full mt-4 mb-3">
                <input required id="newsletter-checkbox" name='checkbox' type="checkbox" value="" class="purple-checkbox mt-0.5"/>
                <label for="newsletter-checkbox" className="checkbox-label my-0 flex flex-row"><span>Akceptuję</span> <Link to='/dokumenty/regulamin' className='whitespace-nowrap mx-1 login-page-text-button'>regulamin sklepu</Link><span>internetowego</span></label>
            </div>
            <button onClick={handleSubmit} type='submit' className='purple-button w-full'>Zarejestruj się</button>
        </form>
        <div className='flex items-center justify-center my-2'>
            <p className='login-text w-max mr-1 font-normal text-xs'>Posiadasz już konto?</p>
            <Link to='/dostep/logowanie' className='login-page-text-button'>Zaloguj się</Link>
        </div>
    </div>
  </>
  )
}

export default RegisterRequiredData
