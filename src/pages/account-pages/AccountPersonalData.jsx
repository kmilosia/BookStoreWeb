import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { editUserData, fetchUserData, resetState } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountModal from '../../modals/DeleteAccountModal'
import SubmitLoadingButton from '../../components/buttons/SubmitLoadingButton'
import { useNavigate } from 'react-router-dom'
import PasswordChangeModal from '../../modals/PasswordChangeModal'

function AccountPersonalData() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userData,loading,error,success} = useSelector((state) => state.user)
  const [deleteModule, setDeleteModule] = useState(false)
  const [passwordModule, setPasswordModule] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
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
    dispatch(editUserData(userDetails))
  }
  const handleEditClick = (e) => {
    e.preventDefault()
    setIsEdited(true)
  }
  const handleDeleteClick = (e) => {
    e.preventDefault()
    setDeleteModule(true)
  }
  const handlePasswordClick = (e) => {
    e.preventDefault()
    setPasswordModule(true)
  }
  useEffect(() => {
    dispatch(fetchUserData())
  },[])
  useEffect(() => {
    if (userData) {
      setUserDetails(userData);
    }
  },[userData])
  useEffect(() => {
    if (success) {
      dispatch(resetState())
      dispatch(fetchUserData())
      setIsEdited(false)
    }
  }, [success])
  return (
    <>
    <div className='flex flex-col px-5 py-5 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Dane użytkownika</h1>
      <form onSubmit={handleSubmit}>
      <div className='w-full lg:w-3/4 lg:grid flex flex-col lg:grid-cols-2 gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='label-input'>Imię</label>
          <input disabled={!isEdited} onChange={handleChange} id='name' name='name' type='text' className='form-input' value={userDetails.name}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='surname' className='label-input'>Nazwisko</label>
          <input disabled={!isEdited} onChange={handleChange} id='surname' name='surname' type='text' className='form-input ' value={userDetails.surname}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='email' className='label-input'>Email</label>
          <input disabled={!isEdited} onChange={handleChange} name='email' id='email' type='text' className='form-input' value={userDetails.email}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='username' className='label-input'>Nazwa użytkownika</label>
          <input disabled={!isEdited} onChange={handleChange} name='username' id='username' type='text' className='form-input' value={userDetails.username}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='phoneNumber' className='label-input'>Numer telefonu</label>
          <input disabled={!isEdited} onChange={handleChange} name='phoneNumber' id='phoneNumber' type='text' className='form-input' value={userDetails.phoneNumber}/>
        </div>
        <div className='col-span-2 grid grid-cols-[3fr_1fr] gap-2 items-end'>
        <div className='flex flex-col w-full'>
          <label htmlFor='password-mockup' className='label-input'>Hasło</label>
          <input disabled onChange={handleChange} name='password-mockup' id='password-mockup' type='text' className='form-input' value='***'/>
        </div>
        <button onClick={handlePasswordClick} className='bordered-purple-button my-0 w-full'>Zmień hasło</button>
        </div>
        {error && <p className='error-text my-1 col-span-2'>{error}</p>}
        {isEdited ? <SubmitLoadingButton loading={loading} title="Zapisz zmiany" />
        :  <button onClick={handleEditClick} className='purple-button'>Edytuj</button>
        }
        <button onClick={handleDeleteClick} className='delete-button'>Usuń konto</button>
      </div>
      </form>
    </div>
    {deleteModule && <DeleteAccountModal setDeleteModule={setDeleteModule} />}
    {passwordModule && <PasswordChangeModal setPasswordModule={setPasswordModule} />}
    </>
  )
}

export default AccountPersonalData
