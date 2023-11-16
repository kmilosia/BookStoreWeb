import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useState } from 'react'
import { useEffect } from 'react'
import { emailValidate } from '../../../utils/validation/emailValidation'

function RecoverPasswordEmail() {
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(emailValidate(email))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    console.log(email);
    navigate('/dostep/odzyskaj-konto/email')
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])
  return (
    <div className='login-container'>
    <AccessIconElement icon="lock" />  
    <h1 className='login-header'>Odzyskaj hasło</h1>
    <p className='login-text'>Wprowadź swój email aby otrzymać kod resetujący hasło.</p>
    <form onSubmit={handleSubmit} className='lg:w-[20rem] w-full'>
    <div className='my-2'>
      <div className="relative">
        <input value={email} onChange={handleChange} type="text" id='login' name='login' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='login' className="floating-form-label">Email lub nazwa użytkownika</label>
      </div>
      {errors.email && <span className='error-text'>{errors.email}</span>}
    </div>
    <button onClick={handleSubmit} type='submit' className='purple-button w-full my-2'>Dalej</button>
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordEmail
