import React, { useState } from 'react'
import { getCities } from '../../utils/api/cityAPI'
import { getCountries } from '../../utils/api/countryAPI'

function AddressForm({item}) {
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])  
    const [isEdited, setIsEdited] = useState(false)
    const [address, setAddress] = useState({
        street: item.street,
        streetNumber: item.streetNumber,
        houseNumber: item.houseNumber,
        postcode: item.postcode,
        cityID: item.cityID,
        countryID: item.countryID,
    })
    const handleEditClick = () => {
        getCities(setCities)
        getCountries(setCountries)
    }
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }
    const handleSelectedCity = (selectedCityId) => {
        setAddress({ ...address, cityID: Number(selectedCityId) });
    }
  return (
    <div className='flex flex-col mb-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2'>
              <h1 className='text-xl font-semibold text-center lg:text-start cursor-default'>{item.position === 1 ? "Adres zamieszkania" : "Adres korespondencyjny"}</h1>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Ulica</label>
                <input disabled={!isEdited} type='text' className='form-input' value={address.street}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer ulicy</label>
                <input disabled={!isEdited} type='text' className='form-input' value={address.streetNumber}/>
              </div>
              <div className='flex flex-col'>
                <label className='label-input'>Numer domu</label>
                <input disabled={!isEdited} type='text' className='form-input' value={address.houseNumber}/>
              </div>
              <div className='flex flex-col col-span-2'>
                <label className='label-input'>Kod pocztowy</label>
                <input disabled={!isEdited} type='text' className='form-input' value={address.postcode}/>
              </div>
              {!isEdited ?
              <div className='flex flex-col'>
                <label className='label-input'>Miasto</label>
                <input disabled type='text' className='form-input' value={item.cityName}/>
              </div>
              :
              <div className='flex flex-col'>
              <label htmlFor='cityID' className='label-input'>Miasto</label>
              <select onChange={(e) => handleSelectedCity(e.target.value)} id='cityID' name='cityID' className='form-input'>
                {cities?.map((item,index) => {
                  return (
                    <option key={index} value={item.id}>{item.name}</option>
                  )
                })}
              </select>
            </div>
              }      
              <div className='flex flex-col'>
                <label className='label-input'>Kraj</label>
                <input disabled={!isEdited} type='text' className='form-input' value={item.countryName}/>
              </div>
            </div>
        {isEdited ?
        <div className='flex'>
            <button type='button' onClick={() => {setIsEdited(false)}} className='purple-button w-max mr-2'>Zapisz zmiany</button>
            <button type='button' onClick={() => {setIsEdited(false)}} className='bordered-purple-button w-max'>Anuluj</button>
        </div>
        :<button type='button' onClick={() => {setIsEdited(true)}} className='purple-button w-max'>Edytuj adres {item.position === 1 ? "zamieszkania" : 'korespondencyjny'}</button>}
    </div>
  )
}

export default AddressForm
