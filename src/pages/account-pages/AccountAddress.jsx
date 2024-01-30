import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { addUserAddress, fetchUserAddress, resetState } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import NewAddress from './NewAddress'
import AddNewAddressButton from '../../components/buttons/AddNewAddressButton'
import Spinner from '../../components/elements/Spinner'
import { getCities } from '../../utils/api/dictionaryAPI'
import { editedAddressValidate } from '../../utils/validation/addressValidation'
import { showMessage } from '../../store/messageSlice'

function AccountAddress() {
  const dispatch = useDispatch()
  const {userAddress,loading,error,success} = useSelector((state) => state.user)
  const [isEdited, setIsEdited] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [editedAddresses, setEditedAddresses] = useState([])
  const [cities, setCities] = useState([])
  const [errors, setErrors] = useState([])
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => { 
    dispatch(fetchUserAddress())
  },[])
  const handleAfterAddedNewAddress = () => {
    dispatch(fetchUserAddress())
    setIsAdding(false)
  }
  const handleEditInputChange = (index, key, value) => {
    setEditedAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index] = { ...updatedAddresses[index], [key]: value };
      return updatedAddresses;
    });
  }
  const handleCitySelectChange = (index, cityId) => {
    setEditedAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index] = { ...updatedAddresses[index], cityID: cityId };
      return updatedAddresses;
    });
  };
  const handleSaveChanges = (e) => {
    e.preventDefault()
    setErrors(editedAddressValidate(editedAddresses))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    const data = {
      "address": {
        "street": editedAddresses[0].street,
        "streetNumber": editedAddresses[0].streetNumber,
        "houseNumber": editedAddresses[0].houseNumber,
        "postcode": editedAddresses[0].postcode,
        "cityID": editedAddresses[0].cityID,
        "countryID": editedAddresses[0].countryID,
        "addressTypeID": 1
      },
      "mailingAddress": {
        "street": editedAddresses[1].street,
        "streetNumber": editedAddresses[1].streetNumber,
        "houseNumber": editedAddresses[1].houseNumber,
        "postcode": editedAddresses[1].postcode,
        "cityID": editedAddresses[1].cityID,
        "countryID": editedAddresses[1].countryID,
        "addressTypeID": 2
      }
    }
    console.log(data);
    dispatch(addUserAddress(data))
    setIsEdited(false)
    dispatch(fetchUserAddress())
  }
  useEffect(() => {
    if(success){
      dispatch(showMessage({title: "Adres użytkownika został pomyślnie zmieniony!"}))
      dispatch(resetState())
    }
  },[success])
  useEffect(() => {
    const hasNoErrors = Array.isArray(errors) && errors.every(err => Object.keys(err).length === 0)
    if (hasNoErrors && submitting) {
      finishSubmit();
    }
  }, [errors,submitting])
  return (
    <>
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      {userAddress && userAddress.length > 0 ?
      <div className='flex flex-col'>
        {userAddress.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4'>
              <h1 className='text-xl font-semibold text-center lg:text-start'>{item.addressTypeID === 1 ? "Adres zamieszkania" : "Adres korespondencyjny"}</h1>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Ulica</label>
                <input disabled={!isEdited} type='text' className='form-input'
                value={isEdited ? editedAddresses[index]?.street || '' : item.street}
                onChange={(e) => handleEditInputChange(index, 'street', e.target.value)}
                />
                {errors[index]?.street && <p className='error-text'>{errors[index].street}</p>}
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer ulicy</label>
                <input disabled={!isEdited} type='text' className='form-input'
                value={isEdited ? editedAddresses[index]?.streetNumber || '' : item.streetNumber}
                onChange={(e) => handleEditInputChange(index, 'streetNumber', e.target.value)}          
                />
                {errors[index]?.streetNumber && <p className='error-text'>{errors[index].streetNumber}</p>}
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer domu</label>
                <input disabled={!isEdited} type='text' className='form-input'
                value={isEdited ? editedAddresses[index]?.houseNumber || '' : item.houseNumber}
                onChange={(e) => handleEditInputChange(index, 'houseNumber', e.target.value)}
                />
                {errors[index]?.houseNumber && <p className='error-text'>{errors[index].houseNumber}</p>}
              </div>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Kod pocztowy</label>
                <input disabled={!isEdited} type='text' className='form-input'
                value={isEdited ? editedAddresses[index]?.postcode || '' : item.postcode}
                onChange={(e) => handleEditInputChange(index, 'postcode', e.target.value)}                
                />
                {errors[index]?.postcode && <p className='error-text'>{errors[index].postcode}</p>}
              </div>
              {!isEdited ?
              <div className='flex flex-col'>
                <label className='label-input'>Miasto</label>
                <input disabled type='text' className='form-input' value={item.cityName}/>
              </div>
              :
              <div className='flex flex-col'>
              <label htmlFor='cityID' className='label-input'>Miasto</label>
              <select id='cityID' name='cityID' className='form-input'
              value={editedAddresses[index]?.cityID || item.cityID}
              onChange={(e) => handleCitySelectChange(index, e.target.value)}>
                {cities?.map((city, cityIndex) => {
                  return (
                    <option key={cityIndex} value={city.id}>{city.name}</option>
                  )
                })}
              </select>
            </div>
              } 
              <div className='flex flex-col'>
                <label className='label-input'>Kraj</label>
                <input disabled type='text' className='form-input' value={item.countryName}/>
              </div>
            </div>
          )
        })}
        {error && <p className='error-text'>{error}</p>}
        {isEdited ?
        <div className='flex'>
          <button type='submit' onClick={handleSaveChanges} className='purple-button w-max mr-2'>{loading ?<Spinner /> : <span>Zapisz zmiany</span>}</button>
          <button type='button' onClick={(e) => {e.preventDefault();setEditedAddresses([]);setIsEdited(false)}} className='cancel-button w-max'>Anuluj</button>
        </div> :
        <button type='button' onClick={(e) => {getCities(setCities);e.preventDefault();setEditedAddresses([...userAddress]);setIsEdited(true)}} className='purple-button w-max'>Edytuj adres</button>}
      </div>
      :
      <> {isAdding ? <NewAddress handleAfterAddedNewAddress={handleAfterAddedNewAddress}/> : <AddNewAddressButton onClick={() => setIsAdding(true)} />}</>}
      </div>
    </div>
    </>
  )
}

export default AccountAddress

