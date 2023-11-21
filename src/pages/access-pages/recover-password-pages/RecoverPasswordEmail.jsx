import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate } from 'react-router-dom'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useState } from 'react'
import { useEffect } from 'react'
import { emailValidate } from '../../../utils/validation/emailValidation'
import { resetPasswordEmail, resetState } from '../../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import SubmitLoadingButton from '../../../components/buttons/SubmitLoadingButton'

function RecoverPasswordEmail() {
  const dispatch = useDispatch()
  const {success,loading,error} = useSelector((state) => state.user)
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
    let data = {
      email: email, 
    }
    dispatch(resetPasswordEmail(data))
  }
  useEffect(() => {
    if(success){
      navigate(`/dostep/odzyskaj-konto/email?email=${email}`)
      dispatch(resetState())
    }
  },[success])
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
        <input value={email} onChange={handleChange} type="text" id='email' name='email' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='email' className="floating-form-label">Adres email</label>
      </div>
      {errors.email && <span className='error-text'>{errors.email}</span>}
    </div>
    <SubmitLoadingButton title="Dalej" loading={loading} />
    {error && <p className='error-text my-1'>{error}</p>}
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordEmail
