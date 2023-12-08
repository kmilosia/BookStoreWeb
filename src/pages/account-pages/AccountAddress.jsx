import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUserAddress } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import NewAddress from './NewAddress'
import AddNewAddressButton from '../../components/buttons/AddNewAddressButton'

function AccountAddress() {
  const dispatch = useDispatch()
  const {userData} = useSelector((state) => state.user)
  const [isEdited, setIsEdited] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  useEffect(() => { 
    dispatch(fetchUserAddress())
    console.log(userData);
  },[])
  return (
    <>
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl font-semibold text-center lg:text-start'>Adres dostawy</h1>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      {userData.length > 0 ?
      <div className='flex flex-col'>
        {userData.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-2'>
              <h1 className='font-light text-sm text-purple-400'>{item.position === 1 ? "Adres zamieszkania" : "Adres korespondencyjny"}</h1>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Ulica</label>
                <input disabled type='text' className='form-input' value={item.street}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer ulicy</label>
                <input disabled type='text' className='form-input' value={item.streetNumber}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer domu</label>
                <input disabled type='text' className='form-input' value={item.houseNumber}/>
              </div>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Kod pocztowy</label>
                <input disabled type='text' className='form-input' value={item.postcode}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Miasto</label>
                <input disabled type='text' className='form-input' value={item.cityName}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Kraj</label>
                <input disabled type='text' className='form-input' value={item.countryName}/>
              </div>
            </div>
          )
        })}
      <button className='purple-button w-max'>Edytuj adres</button>
      </div>
      :
      <> {isAdding ? <NewAddress /> : <AddNewAddressButton onClick={() => setIsAdding(true)} />}</>}
      </div>
    </div>
    </>
  )
}

export default AccountAddress
