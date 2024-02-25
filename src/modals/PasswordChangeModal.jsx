import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword, resetState } from '../store/userSlice'
import { resetPasswordValidate } from '../utils/validation/resetPasswordValidation'
import { AiFillEye } from 'react-icons/ai'
import SubmitLoadingButton from '../components/buttons/SubmitLoadingButton'
import { showMessage } from '../store/messageSlice'

function PasswordChangeModal(props) {
  const dispatch = useDispatch()
  const {success,error,loading} = useSelector((state) => state.user)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false); 
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const [isHiddenRepeatPassword, setIsHiddenRepeatPassword] = useState(true)
  const [isHiddenOldPassword, setIsHiddenOldPassword] = useState(true)
  const [inputValues, setInputValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(resetPasswordValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    const data = {
        oldPassword: inputValues.oldPassword,
        newPassword: inputValues.newPassword,
        repeatNewPassword: inputValues.confirmPassword,
    }
    dispatch(changePassword(data))
  }
  useEffect(() => {
    if (success) {
      props.setPasswordModule(false)
      dispatch(resetState())
      console.log("hello");
      dispatch(showMessage({title: "Hasło zostało zmienione!"}))
    }
  }, [success])
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors])

  return (
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-center lg:items-center'>
    <div className='bg-gray-100 px-10 py-10 rounded-md w-auto h-auto flex flex-col items-center justify-center dark:bg-midnight-800 mx-3 lg:mx-0'>
      <h1 className='text-2xl font-semibold text-center lg:text-start'>Zmień hasło</h1>
      <form onSubmit={handleSubmit} className='lg:w-[30rem]'>
      <div className='flex flex-col w-full'>
      <div className='flex flex-col'>
          <label htmlFor='oldPassword' className='label-input'>Stare hasło</label>
          <div className='relative'>
          <input value={inputValues.oldPassword} onChange={handleChange} name='oldPassword' className='form-input w-full'  type={`${isHiddenOldPassword ? 'password' : 'text'}`}/>
          <button type='button'><AiFillEye onClick={() => {setIsHiddenOldPassword(!isHiddenOldPassword)}} className='eye-password-button'/></button>
          </div>
          {errors.oldPassword && <span className='error-text'>{errors.oldPassword}</span>}
      </div>
      <div className='flex flex-col'>
          <label htmlFor='newPassword' className='label-input'>Nowe hasło</label>
          <div className='relative'>
          <input value={inputValues.newPassword} onChange={handleChange} name='newPassword' className='form-input w-full'  type={`${isHiddenPassword ? 'password' : 'text'}`}/>
          <button type='button'><AiFillEye onClick={() => {setIsHiddenPassword(!isHiddenPassword)}} className='eye-password-button'/></button>
          </div>
          {errors.newPassword && <span className='error-text'>{errors.newPassword}</span>}
      </div>
      <div className='flex flex-col'>
          <label htmlFor='confirmPassword' className='label-input'>Powtórz nowe hasło</label>
          <div className='relative'>
          <input value={inputValues.confirmPassword} onChange={handleChange} name='confirmPassword' className='form-input w-full'  type={`${isHiddenRepeatPassword ? 'password' : 'text'}`}/>
          <button type='button'><AiFillEye onClick={() => {setIsHiddenRepeatPassword(!isHiddenRepeatPassword)}} className='eye-password-button'/></button>
          </div>
          {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
      </div>
        <div className='flex flex-col mt-2'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <SubmitLoadingButton loading={loading} title="Zmień hasło" />
            <button type='button' onClick={() => {props.setPasswordModule(false);dispatch(resetState())}} className='cancel-button'>Anuluj</button>
          </div>
          {errors.submit && <span className='error-text'>{errors.submit}</span>}
        </div>
      </div>
      </form>
      {error && <p className='my-1 error-text'>{error}</p>}
    </div>
  </div>
  )
}

export default PasswordChangeModal
