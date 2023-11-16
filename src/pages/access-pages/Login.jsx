import React from 'react'
import ShowPasswordButton from '../../components/buttons/ShowPasswordButton'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {loginValidate} from '../../utils/validation/loginValidation'
import { useEffect } from 'react'
import AccessIconElement from '../../components/elements/AccessIconElement'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/userSlice'

function Login() {
  const {loading,error} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [inputValues, setInputValues] = useState({
    login: "",
    password: "",
    remember: false,
  })
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInputValues({ ...inputValues, [name]: inputValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    console.log(inputValues);
    let userCredentials = {
      login: inputValues.login, 
      password: inputValues.password,
    }
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        navigate('/')
      }
    })
  }
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
              <input value={inputValues.login} onChange={handleChange} type="text" id='login' name='login' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='login' className="floating-form-label">Email lub nazwa użytkownika</label>
            </div>
            {errors.login && <span className='error-text'>{errors.login}</span>}
            </div>
          <div className="my-2">
            <div className="relative">
              <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
              <input value={inputValues.password} onChange={handleChange} type={`${isHiddenPassword ? 'password' : 'text'}`} id='password' name='password' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='password' className="floating-form-label">Hasło</label>
            </div>
            {errors.password && <span className='error-text'>{errors.password}</span>}
          </div>
          <div className="flex items-center justify-start w-full my-2">
            <input onChange={handleChange} id="remember" name='remember' type="checkbox" checked={inputValues.remember} className="purple-checkbox"/>
            <label htmlFor="remember" className="checkbox-label">Zapamiętaj mnie</label>
          </div>
          <button type='submit' className='purple-button w-full'>Zaloguj się</button>
          </form>
          <Link to='/dostep/odzyskaj-konto' className='text-button-link my-2 w-max'>Zapomniałeś hasła?</Link>
          <div className='flex flex-row justify-center my-2 lg:my-1'>
            <p className='lg:text-xs text-base text-white'>Nie masz jeszcze konta?</p>
            <Link to='/dostep/rejestracja' className='text-button-link mx-1'>Zarejestruj się</Link>
          </div>
        </div>    
  </>
  )
}

export default Login
