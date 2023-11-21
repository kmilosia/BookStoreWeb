import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUserData } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountModal from '../../modals/DeleteAccountModal'

function AccountInfo() {
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
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Adresy dostawy</h1>
      <form>
      <div className='w-full lg:w-3/4 lg:grid flex flex-col lg:grid-cols-2 gap-5'> 
        {isEdited ? 
        <div className='flex flex-col col-span-2'>
          <h1 className='mt-2 font-medium text-midnight-600 dark:text-midnight-400 border-t border-midnight-100 dark:border-midnight-800 py-3'>Adres zamieszkania</h1>
          <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
          <label htmlFor='street-input' className='label-input'>Ulica</label>
          <input id='street-input' type='text' className='form-input' value='Łychowa'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='streetnumber-input' className='label-input'>Numer ulicy</label>
          <input id='streetnumber-input' type='text' className='form-input' value='23'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='housenumber-input' className='label-input'>Numer domu</label>
          <input id='housenumber-input' type='text' className='form-input' value='5'/>
          </div><div className='flex flex-col'>
          <label htmlFor='postcode-input' className='label-input'>Kod pocztowy</label>
          <input id='postcode-input' type='text' className='form-input' value='09-990'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='city-input' className='label-input'>Miasto</label>
          <input id='city-input' type='text' className='form-input' value='Wyszków'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='country-input' className='label-input'>Kraj</label>
          <select id='country-input' className='form-input'>
            <option defaultValue value='Poland'>Polska</option>
            <option value='Spain'>Hiszpania</option>
          </select>
          </div>
          </div>
          <h1 className='mt-5 font-medium text-midnight-600 dark:text-midnight-400 border-t border-midnight-100 dark:border-midnight-800 py-3'>Adres korespondencyjny</h1>
          <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
          <label htmlFor='street-input' className='label-input'>Ulica</label>
          <input id='street-input' type='text' className='form-input' value='Łychowa'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='streetnumber-input' className='label-input'>Numer ulicy</label>
          <input id='streetnumber-input' type='text' className='form-input' value='23'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='housenumber-input' className='label-input'>Numer domu</label>
          <input id='housenumber-input' type='text' className='form-input' value='5'/>
          </div><div className='flex flex-col'>
          <label htmlFor='postcode-input' className='label-input'>Kod pocztowy</label>
          <input id='postcode-input' type='text' className='form-input' value='09-990'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='city-input' className='label-input'>Miasto</label>
          <input id='city-input' type='text' className='form-input' value='Wyszków'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='country-input' className='label-input'>Kraj</label>
          <select id='country-input' className='form-input'>
            <option defaultValue value='Poland'>Polska</option>
            <option value='Spain'>Hiszpania</option>
          </select>
          </div>
          </div>
        </div>
        :
        <div className='flex flex-col col-span-2'>
        <div className='flex flex-col'>
          <label htmlFor='address-input' className='label-input'>Adres zamieszkania</label>
          <input disabled={!isEdited} id='address-input' type='text' className='form-input' value='ul.Łychowa 25/3 09-990 Wyszków'/>
        </div>
        <div className='flex flex-col mt-5'>
          <label htmlFor='address-input' className='label-input'>Adres korespondencyjny</label>
          <input disabled={!isEdited} id='address-input' type='text' className='form-input' value='ul.Przybieska 13/3a 09-990 Wyszków'/>
        </div>
        </div>
        }
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

export default AccountInfo
