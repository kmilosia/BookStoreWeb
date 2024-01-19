import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { editUserData, fetchUserData, resetState } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountModal from '../../modals/DeleteAccountModal'
import PasswordChangeModal from '../../modals/PasswordChangeModal'
import { showMessage } from '../../store/messageSlice'
import { userDataValidate } from '../../utils/validation/userDataValidation'
import Spinner from '../../components/elements/Spinner'

function AccountPersonalData() {
  const dispatch = useDispatch()
  const {userData,loading,error,success} = useSelector((state) => state.user)
  const [deleteModule, setDeleteModule] = useState(false)
  const [passwordModule, setPasswordModule] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [userDetails, setUserDetails] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    phoneNumber: '',
  })
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(userDataValidate(userDetails))
    setSubmitting(true)
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      console.log('hello')
      dispatch(editUserData(userDetails))
    }
  }, [errors])
  useEffect(() => {
    dispatch(fetchUserData())
  },[])
  useEffect(() => {
    if (userData) {
      setUserDetails(userData);
    }
  },[userData])
  useEffect(() => {
    if (success && !deleteModule && !passwordModule) {
      dispatch(resetState())
      dispatch(fetchUserData())
      setIsEdited(false)
      dispatch(showMessage({title: "Dane użytkownika zostały pomyślnie zmienione!"}))
    }
  }, [success])
  return (
    <>
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Dane użytkownika</h1>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      <form onSubmit={handleSubmit}>
      <div className='lg:grid flex flex-col lg:grid-cols-2 gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='label-input'>Imię</label>
          <input disabled={!isEdited} onChange={handleChange} id='name' name='name' type='text' className='form-input' value={userDetails.name}/>
          {errors.name && <p className='error-text'>{errors.name}</p>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='surname' className='label-input'>Nazwisko</label>
          <input disabled={!isEdited} onChange={handleChange} id='surname' name='surname' type='text' className='form-input ' value={userDetails.surname}/>
          {errors.surname && <p className='error-text'>{errors.surname}</p>}
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='email' className='label-input'>Email</label>
          <input disabled={!isEdited} onChange={handleChange} name='email' id='email' type='text' className='form-input' value={userDetails.email}/>
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='username' className='label-input'>Nazwa użytkownika</label>
          <input disabled={!isEdited} onChange={handleChange} name='username' id='username' type='text' className='form-input' value={userDetails.username}/>
          {errors.username && <p className='error-text'>{errors.username}</p>}
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='phoneNumber' className='label-input'>Numer telefonu</label>
          <input disabled={!isEdited} onChange={handleChange} name='phoneNumber' id='phoneNumber' type='text' className='form-input' value={userDetails.phoneNumber}/>
          {errors.phoneNumber && <p className='error-text'>{errors.phoneNumber}</p>}
        </div>
      </div>
      {error && <p className='error-text my-1 col-span-2'>{error}</p>}
      <div className='flex items-center mt-2'>
      {isEdited ? 
        <button type='submit' className='purple-button w-max mr-2'>{loading ?<Spinner /> : <span>Zapisz zmiany</span>}</button>
        :  <button type='button' onClick={(e) => {e.preventDefault();setIsEdited(true)}} className='purple-button w-max'>Edytuj dane</button>
        }
        {isEdited && <button type='button' onClick={() => {setIsEdited(false)}} className='cancel-button w-max'>Anuluj</button>}
      </div>
      </form>
      <h1 className='text-xl mt-5 font-semibold text-center lg:text-start'>Konto</h1>
      <div className='col-span-2 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2 items-end my-2'>
        <div className='flex flex-col w-full'>
          <label htmlFor='password-mockup' className='label-input'>Hasło</label>
          <input disabled onChange={handleChange} name='password-mockup' id='password-mockup' type='text' className='form-input' value='******'/>
        </div>
        <button type='button' onClick={() => {setPasswordModule(true)}} className='bordered-purple-button my-0 w-full'>Zmień hasło</button>
        </div>
        <button type='button' onClick={() => {setDeleteModule(true)}} className='delete-button w-max'>Usuń konto</button>
        </div>
    </div>
    {deleteModule && <DeleteAccountModal setDeleteModule={setDeleteModule} />}
    {passwordModule && <PasswordChangeModal setPasswordModule={setPasswordModule} />}
    </>
  )
}

export default AccountPersonalData
