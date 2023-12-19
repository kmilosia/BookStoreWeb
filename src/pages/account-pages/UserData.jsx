import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../../utils/api/userAPI'
import PageLoader from '../../components/elements/PageLoader'
import DeleteAccountModal from '../../modals/DeleteAccountModal'
import PasswordChangeModal from '../../modals/PasswordChangeModal'

function UserData() {
  const [data, setData] = useState({})
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(true)
  const [isEdited, setIsEdited] = useState(false)
  const [deleteModule, setDeleteModule] = useState(false)
  const [passwordModule, setPasswordModule] = useState(false)
  useEffect(() => {
    fetchUserData(setData, setError, setLoading)
    console.log(data);
  },[])
  return (
    loading ? <PageLoader/> :
    <>
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Dane użytkownika</h1>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      <form onSubmit={handleSubmit}>
      <div className='lg:grid flex flex-col lg:grid-cols-2 gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='label-input'>Imię</label>
          <input disabled={!isEdited} onChange={handleChange} id='name' name='name' type='text' className='form-input' value={data.name}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='surname' className='label-input'>Nazwisko</label>
          <input disabled={!isEdited} onChange={handleChange} id='surname' name='surname' type='text' className='form-input ' value={data.surname}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='email' className='label-input'>Email</label>
          <input disabled={!isEdited} onChange={handleChange} name='email' id='email' type='text' className='form-input' value={data.email}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='username' className='label-input'>Nazwa użytkownika</label>
          <input disabled={!isEdited} onChange={handleChange} name='username' id='username' type='text' className='form-input' value={data.username}/>
        </div>
        <div className='flex flex-col col-span-2'>
          <label htmlFor='phoneNumber' className='label-input'>Numer telefonu</label>
          <input disabled={!isEdited} onChange={handleChange} name='phoneNumber' id='phoneNumber' type='text' className='form-input' value={data.phoneNumber}/>
        </div>
        {error && <p className='error-text my-1 col-span-2'>{error}</p>}
        {isEdited ? <SubmitLoadingButton loading={loading} title="Zapisz zmiany" />
        :  <button onClick={handleEditClick} className='purple-button'>Edytuj dane</button>
        }
        {isEdited && <button onClick={() => {setIsEdited(false)}} className='bordered-purple-button'>Anuluj</button>}
      </div>
      </form>
      <h1 className='text-xl mt-5 font-semibold text-center lg:text-start'>Konto</h1>
      <div className='col-span-2 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2 items-end my-2'>
        <div className='flex flex-col w-full'>
          <label htmlFor='password-mockup' className='label-input'>Hasło</label>
          <input disabled onChange={handleChange} name='password-mockup' id='password-mockup' type='text' className='form-input' value='******'/>
        </div>
        <button onClick={handlePasswordClick} className='bordered-purple-button my-0 w-full'>Zmień hasło</button>
        </div>
        <button onClick={handleDeleteClick} className='delete-button w-max'>Usuń konto</button>
        </div>
    </div>
    {deleteModule && <DeleteAccountModal setDeleteModule={setDeleteModule} />}
    {passwordModule && <PasswordChangeModal setPasswordModule={setPasswordModule} />}
    </>
  )
}

export default UserData
