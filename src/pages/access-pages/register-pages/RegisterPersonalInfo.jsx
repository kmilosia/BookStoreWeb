import React from 'react'
import ReturnButton from '../../../components/buttons/ReturnButton'
import { useNavigate } from 'react-router-dom'
import SkipStepButton from '../../../components/buttons/SkipStepButton'

function RegisterPersonalInfo() {
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dostep/rejestracja/adres')
    }
  return (
    <>
    <ReturnButton />
    <div className='flex flex-col items-center justify-center'>
        <h1 className='login-header'>Uzupełnij swoje dane</h1>
        <form className='w-[30rem] my-3'>
            <div className='grid grid-cols-2 gap-3'>
            <div className="relative">
                <input type="text" id='email-input' name='email' className="floating-form-input peer" placeholder=" " />
                <label for='email-input' className="floating-form-label">Imię</label>
            </div>
            <div className="relative">
                <input type="text" id='email-input' name='email' className="floating-form-input peer" placeholder=" " />
                <label for='email-input' className="floating-form-label">Nazwisko</label>
            </div>
            <div className="relative">
                <select id='email-input' name='email' className="floating-form-input peer" placeholder=" ">
                  <option>Kobieta</option>
                  <option>Mężczyzna</option>
                  <option>Nieokreślono</option>
                </select>
                <label for='email-input' className="floating-form-label">Płeć</label>
            </div>
            <div className="relative">
                <input type="date" id='birthday-input' name='date of birth' className="floating-form-input peer" placeholder=" " />
                <label for='birthday-input' className="floating-form-label">Data urodzenia</label>
            </div>
            </div>
            <button onClick={handleSubmit} type='submit' className='purple-button w-full mb-1 mt-3'>Zarejestruj się</button>
        </form>
        <SkipStepButton path="adres"/>
    </div>
  </>
  )
}

export default RegisterPersonalInfo
