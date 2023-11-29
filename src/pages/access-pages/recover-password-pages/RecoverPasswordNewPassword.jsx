import React from 'react'
import ReturnToLoginButton from '../../../components/buttons/ReturnToLoginButton'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ShowPasswordButton from '../../../components/buttons/ShowPasswordButton'
import { useState } from 'react'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, resetState } from '../../../store/userSlice'
import SubmitLoadingButton from '../../../components/buttons/SubmitLoadingButton'
import { recoverPasswordValidate } from '../../../utils/validation/recoverPasswordValidation'

function RecoverPasswordNewPassword() {
  const [searchParams, setSearchParams] = useSearchParams()
  const userId = searchParams.get('userId')
  const token = searchParams.get('token')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    userId: userId,
    token: token,
    password: "",
    confirmPassword: "",
  })
  const {loading,error,success} = useSelector((state) => state.user)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false); 
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isHiddenRepeatPassword, setIsHiddenRepeatPassword] = useState(true)
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(recoverPasswordValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    dispatch(resetPassword(inputValues))
  }
  useEffect(() => {
    if (success) {
      navigate('/dostep/odzyskaj-konto/potwierdzenie')
      dispatch(resetState())
    }
  }, [success, navigate]);
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
        <input value={inputValues.confirmPassword} onChange={handleChange} type={`${isHiddenRepeatPassword ? 'password' : 'text'}`} id='confirmPassword' name='confirmPassword' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='confirmPassword' className="floating-form-label">Powtórz hasło</label>
      </div>
      {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
    </div>
    <SubmitLoadingButton title="Resetuj hasło" loading={loading} />
    {errors.submit && <span className='error-text'>{errors.submit}</span>}
    {error && <span className='error-text'>{error}</span>}
    <ReturnToLoginButton />
    </form>
  </div> 
  )
}

export default RecoverPasswordNewPassword
