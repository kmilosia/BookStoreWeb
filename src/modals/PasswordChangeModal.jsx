import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword, deleteAccount, resetState } from '../store/userSlice'
import Spinner from '../components/elements/Spinner'
import ShowPasswordButton from '../components/buttons/ShowPasswordButton'
import { resetPasswordValidate } from '../utils/validation/resetPasswordValidation'

function PasswordChangeModal(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {success,error,loading} = useSelector((state) => state.user)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false); 
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isHiddenRepeatPassword, setIsHiddenRepeatPassword] = useState(true)
  const [isHiddenOldPassword, setIsHiddenOldPassword] = useState(true)
  const [inputValues, setInputValues] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  })
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }
  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(deleteAccount())
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(resetPasswordValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    const data = {
        oldPassword: inputValues.oldPassword,
        newPassword: inputValues.password,
        repeatNewPassword: inputValues.confirmPassword,
    }
    dispatch(changePassword(data))
  }
  useEffect(() => {
    if (success) {
      props.setPasswordModule(false)
      dispatch(resetState())
    }
  }, [success])
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])



  return (
    <div className='fixed flex justify-center items-center top-0 left-0 w-screen h-full z-100 bg-black/50'>
    <div className='bg-white px-10 py-10 rounded-md w-auto h-auto flex flex-col items-center justify-center dark:bg-midnight-800 mx-3 lg:mx-0'>
      <h1 className='text-2xl font-semibold my-2 text-center lg:text-start'>Zmień hasło</h1>
      <form onSubmit={handleSubmit} className='lg:w-[30rem]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 my-2 w-full'>

      <div className="col-span-2">
      <div className="relative">
        <ShowPasswordButton setIsHiddenPassword={setIsHiddenOldPassword} isHiddenPassword={isHiddenOldPassword} />
        <input value={inputValues.oldPassword} onChange={handleChange} type={`${isHiddenOldPassword ? 'password' : 'text'}`} id='oldPassword' name='oldPassword' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='oldPassword' className="floating-form-label">Stare hasło</label>
      </div>
      {errors.oldPassword && <span className='error-text'>{errors.oldPassword}</span>}
    </div>

      <div className="col-span-2">
      <div className="relative">
        <ShowPasswordButton setIsHiddenPassword={setIsHiddenPassword} isHiddenPassword={isHiddenPassword} />
        <input value={inputValues.password} onChange={handleChange} type={`${isHiddenPassword ? 'password' : 'text'}`} id='password' name='password' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='password' className="floating-form-label">Nowe hasło</label>
      </div>
      {errors.password && <span className='error-text'>{errors.password}</span>}
    </div>
    <div className="col-span-2">
      <div className="relative">
        <ShowPasswordButton setIsHiddenPassword={setIsHiddenRepeatPassword} isHiddenPassword={isHiddenRepeatPassword} />
        <input value={inputValues.confirmPassword} onChange={handleChange} type={`${isHiddenRepeatPassword ? 'password' : 'text'}`} id='confirmPassword' name='confirmPassword' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='confirmPassword' className="floating-form-label">Powtórz nowe hasło</label>
      </div>
      {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
    </div>
        <button type='submit' className='bordered-purple-button'>{loading ? <Spinner size={6}/> : <span>Zmień hasło</span>}</button>
        <button onClick={() => props.setPasswordModule(false)} className='purple-button'>Anuluj</button>
      </div>
      </form>
      {error && <p className='my-1 error-text'>{error}</p>}
    </div>
  </div>
  )
}

export default PasswordChangeModal
