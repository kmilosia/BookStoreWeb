import React from 'react'
import ShowPasswordButton from '../../components/buttons/ShowPasswordButton'
import SubmitLoadingButton from '../../components/buttons/SubmitLoadingButton'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {loginValidate} from '../../utils/validation/loginValidation'
import { useEffect } from 'react'
import AccessIconElement from '../../components/elements/AccessIconElement'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, resetState } from '../../store/userSlice'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const {loading,error,isAuth} = useSelector((state) => state.user)
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    let userCredentials = {
      email: inputValues.email, 
      password: inputValues.password,
      audience: 'www',
    }
    dispatch(loginUser(userCredentials))
  }
  useEffect(() => {
    if (isAuth) {
      navigate('/')
      dispatch(resetState())
    }
  }, [isAuth])
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])
   return (
    <>
        <div className='login-container'>
          <AccessIconElement icon="key" />
          <h1 className='login-header'>Zaloguj się</h1>
          <form onSubmit={handleSubmit} className='w-full lg:w-[20rem]'>
            <div className='my-2'>
            <div className="relative">
              <input value={inputValues.email} onChange={handleChange} type="text" id='email' name='email' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='email' className="floating-form-label">Wprowadź email</label>
            </div>
            {errors.email && <span className='error-text'>{errors.email}</span>}
            </div>
          <div className="my-2">
            <div className="relative">
              <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
              <input value={inputValues.password} onChange={handleChange} type={`${isHiddenPassword ? 'password' : 'text'}`} id='password' name='password' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='password' className="floating-form-label">Wprowadź hasło</label>
            </div>
            {errors.password && <span className='error-text'>{errors.password}</span>}
          </div>
          <SubmitLoadingButton title="Zaloguj się" loading={loading} />
          </form>
          {error &&
          <p className='error-text my-1'>{error}</p>
          }
          <Link to='/dostep/odzyskaj-konto' className='text-button-link my-2 w-max'>Zapomniałeś hasła?</Link>
          <div className='flex flex-row justify-center my-1'>
            <p className='lg:text-xs text-base text-white'>Nie masz jeszcze konta?</p>
            <Link to='/dostep/rejestracja' className='text-button-link mx-1'>Zarejestruj się</Link>
          </div>
        </div>    
  </>
  )
}

export default Login
