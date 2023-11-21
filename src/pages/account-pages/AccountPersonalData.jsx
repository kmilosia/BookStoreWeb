import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUserData } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountModal from '../../modals/DeleteAccountModal'

function AccountPersonalData() {
  const dispatch = useDispatch()
  const {userData} = useSelector((state) => state.user)
  const [deleteModule, setDeleteModule] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const handleSaveClick = (e) => {

  }
  const handleEditClick = (e) => {
    e.preventDefault()
    setIsEdited(true)
  }
  const handleDeleteClick = (e) => {
    e.preventDefault()
    setDeleteModule(true)
  }
  useEffect(() => {
    dispatch(fetchUserData())
  },[])
  useEffect(() => {
    console.log(userData);
  },[userData])
  return (
    <>
    <div className='flex flex-col px-5 py-5 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Dane użytkownika</h1>
      <form>
      <div className='w-full lg:w-3/4 lg:grid flex flex-col lg:grid-cols-2 gap-5'>
        <div className='flex flex-col'>
          <label htmlFor='name-input' className='label-input'>Imię</label>
          <input disabled={!isEdited} id='name-input' type='text' className='form-input' value='Janna'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='surname-input' className='label-input'>Nazwisko</label>
          <input disabled={!isEdited} id='surname-input' type='text' className='form-input ' value='Nowak'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email' className='label-input'>Email</label>
          <input disabled={!isEdited} name='email' id='email' type='text' className='form-input' value='nowaka@gmail.com'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='username' className='label-input'>Nazwa użytkownika</label>
          <input disabled={!isEdited} name='username' id='username' type='text' className='form-input' value='jannaanna'/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='phonenumber' className='label-input'>Numer telefonu</label>
          <input disabled={!isEdited} name='phonenumber' id='phonenumber' type='text' className='form-input' value='+48736267667'/>
        </div>
     
        {isEdited ? <button onClick={() => {setIsEdited(false)}} className='orange-button'>Zapisz</button>
        :  <button onClick={handleEditClick} className='purple-button'>Edytuj</button>
        }
        <button onClick={handleDeleteClick} className='delete-button'>Usuń konto</button>
      </div>
      </form>
    </div>
    {deleteModule &&
    <DeleteAccountModal setDeleteModule={setDeleteModule} />
    }
    </>
  )
}

export default AccountPersonalData
