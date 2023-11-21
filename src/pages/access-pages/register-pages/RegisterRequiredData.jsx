import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShowPasswordButton from '../../../components/buttons/ShowPasswordButton'
import AccessIconElement from '../../../components/elements/AccessIconElement'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, resetState } from '../../../store/userSlice'
import { useEffect } from 'react'
import { registerValidate } from '../../../utils/validation/registerValidation'
import SubmitLoadingButton from '../../../components/buttons/SubmitLoadingButton'


function RegisterRequiredData() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const {loading,error,success} = useSelector((state) => state.user)
  const [inputValues, setInputValues] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    username: '',
    email: "",
    password: "",
    conditions: false,
    isSubscribed: false
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputValues((prevValues) => ({
        ...prevValues,
        [name]: type === 'checkbox' ? checked : value,
      }));  
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(registerValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    let userCredentials = {
        name: inputValues.name,
        surname: inputValues.surname,
        phoneNumber: inputValues.phoneNumber,
        username: inputValues.username, 
        email: inputValues.email, 
        password: inputValues.password,
        isSubscribed: inputValues.isSubscribed,
      }
    dispatch(registerUser(userCredentials))
  }
  useEffect(() => {
    dispatch(resetState())
  },[])
  useEffect(() => {
    if (success) {
      navigate('/dostep/rejestracja/potwierdz-email');
    }
  }, [success, navigate]);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])
  return (
    <>
    <div className='login-container'>
    <AccessIconElement icon="key" />
        <h1 className='login-header'>Zarejestruj się</h1>
        <form onSubmit={handleSubmit} className='lg:w-[30rem] w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <div>
            <div className="relative">
              <input value={inputValues.name} onChange={handleChange} type="text" id='name' name='name' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='name' className="floating-form-label">Imię</label>
            </div>
            {errors.name && <span className='error-text'>{errors.name}</span>}
            </div>
            <div>
            <div className="relative">
              <input value={inputValues.surname} onChange={handleChange} type="text" id='surname' name='surname' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='surname' className="floating-form-label">Nazwisko</label>
            </div>
            {errors.surname && <span className='error-text'>{errors.surname}</span>}
            </div>
            </div>
            <div className='my-2'>
            <div className="relative">
              <input value={inputValues.phoneNumber} onChange={handleChange} type="text" id='phoneNumber' name='phoneNumber' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='phoneNumber' className="floating-form-label">Numer telefonu</label>
            </div>
            {errors.phoneNumber && <span className='error-text'>{errors.phoneNumber}</span>}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div>
            <div className="relative">
              <input value={inputValues.email} onChange={handleChange} type="text" id='email' name='email' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='email' className="floating-form-label">Adres email</label>
            </div>
            {errors.email && <span className='error-text'>{errors.email}</span>}
            </div>
            <div>
            <div className="relative">
              <input value={inputValues.username} onChange={handleChange} type="text" id='username' name='username' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='username' className="floating-form-label">Nazwa użytkownika</label>
            </div>
            {errors.username && <span className='error-text'>{errors.username}</span>}
            </div>
            </div>
            <div className='my-2'>
            <div className="relative">
              <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
              <input value={inputValues.password} onChange={handleChange} type={`${isHiddenPassword ? 'password' : 'text'}`} id='password' name='password' className="floating-form-input peer" placeholder=" " />
              <label htmlFor='password' className="floating-form-label">Hasło</label>
            </div>
            {errors.password && <span className='error-text'>{errors.password}</span>}
          </div>
            <div className='flex flex-col w-full mt-4 mb-3'>
            <div className="flex items-start justify-start mb-2">
                <input checked={inputValues.isSubscribed} onChange={handleChange} id="isSubscribed" name='isSubscribed' type="checkbox" value="" className="purple-checkbox mt-0.5"/>
                <label htmlFor="isSubscribed" className="checkbox-label my-0 flex flex-row">Chcę zapisać się do Newslettera</label>
            </div>
            <div className="flex items-start justify-start">
                <input checked={inputValues.conditions} onChange={handleChange} id="conditions" name='conditions' type="checkbox" value="" className="purple-checkbox mt-0.5"/>
                <label htmlFor="conditions" className="checkbox-label my-0 flex flex-row"><span>Akceptuję</span> <Link target='_blank' to='/dokumenty/regulamin' className='text-button-link mx-1'>regulamin sklepu</Link><span>internetowego</span></label>
            </div>
            {errors.conditions && <span className='error-text'>{errors.conditions}</span>}
            </div>
            <SubmitLoadingButton title="Zarejestruj się" loading={loading} />
        </form>
        {error && <p className='error-text my-1'>{error}</p> }
        <div className='flex flex-row justify-center my-1'>
            <p className='lg:text-xs text-base text-white'>Posiadasz już konto?</p>
            <Link to='/dostep/logowanie' className='text-button-link mx-1'>Zaloguj się</Link>
          </div>
    </div>
  </>
  )
}

export default RegisterRequiredData
