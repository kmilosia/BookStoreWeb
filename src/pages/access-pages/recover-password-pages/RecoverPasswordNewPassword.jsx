import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate } from 'react-router-dom'
import ShowPasswordButton from '../../../components/buttons/ShowPasswordButton'
import { useState } from 'react'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useEffect } from 'react'
import { resetPasswordValidate } from '../../../utils/validation/resetPasswordValidation'

function RecoverPasswordNewPassword() {
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState({
    password: "",
    repeatPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false); 
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isHiddenRepeatPassword, setIsHiddenRepeatPassword] = useState(true)
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(resetPasswordValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    console.log(inputValues);
    navigate('/dostep/odzyskaj-konto/potwierdzenie')
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])
  return (
    <div className='login-container'>
    <AccessIconElement icon="lock" />  
    <h1 className='login-header'>Resetuj hasło</h1>
    <p className='login-text'>Nowe hasło musi się różnić od poprzedniego.</p>
    <form onSubmit={handleSubmit} className='lg:w-[20rem] w-full'>
    <div className="my-2">
      <div className="relative">
        <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
        <input value={inputValues.password} onChange={handleChange} type={`${isHiddenPassword ? 'password' : 'text'}`} id='password' name='password' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='password' className="floating-form-label">Hasło</label>
      </div>
      {errors.password && <span className='error-text'>{errors.password}</span>}
    </div>
    <div className="my-2">
      <div className="relative">
        <ShowPasswordButton setIsHiddenPassword={setIsHiddenRepeatPassword} isHiddenPassword={isHiddenRepeatPassword} />
        <input value={inputValues.repeatPassword} onChange={handleChange} type={`${isHiddenRepeatPassword ? 'password' : 'text'}`} id='repeatPassword' name='repeatPassword' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='repeatPassword' className="floating-form-label">Powtórz hasło</label>
      </div>
      {errors.repeatPassword && <span className='error-text'>{errors.repeatPassword}</span>}
    </div>
    <button type='submit' className='purple-button w-full'>Resetuj hasło</button>
    {errors.submit && <span className='error-text'>{errors.submit}</span>}
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordNewPassword
