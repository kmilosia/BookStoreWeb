import React, { useEffect, useState } from 'react'
import axiosClient from '../../../utils/api/axiosClient'

function MailingAddress({mailingStreet,setMailingStreet,mailingPostcode,setMailingPostcode,mailingStreetNumber,setMailingStreetNumber,mailingHouseNumber,setMailingHouseNumber,mailingSelectedCity,setMailingSelectedCity,mailingSelectedCountry,setMailingSelectedCountry}) {
  const fetchCities = async () => {
    try{
      const response = await axiosClient.get(`/City`)
      const genders = response.data.map(item => ({
        value: item.id,
        label: item.name
      }))
      setCities(genders)
    }catch(err){
      console.error(err)
    }
}
const fetchCountries = async () => {
  try{
    const response = await axiosClient.get(`/Country`)
    const genders = response.data.map(item => ({
      value: item.id,
      label: item.name
    }))
    setCountries(genders)
  }catch(err){
    console.error(err)
  }
}
const [cities,setCities] = useState([])
const [countries,setCountries] = useState([])
const handleStreetChange = (e) => {
  setMailingStreet(e.target.value)
}
const handleStreetNumberChange = (e) => {
  setMailingStreetNumber(e.target.value)
}
const handleHouseNumberChange = (e) => {
  setMailingHouseNumber(e.target.value)
}
const handlePostcodeChange = (e) => {
  setMailingPostcode(e.target.value)
}
const handleCityChange = (e) => {
  setMailingSelectedCity(e.target.value)
}
const handleCountryChange = (e) => {
  setMailingSelectedCountry(e.target.value)
}
useEffect(() => {
fetchCities()
fetchCountries()
},[])
return (
    <div className='w-full flex flex-col justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Adres korespondencyjny</h2>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[40rem]'>
        <div className="relative col-span-2">
          <input value={mailingStreet} onChange={handleStreetChange} type="text" id='mailing-street' name='mailing-street' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='mailing-street' className="floating-form-label">Ulica</label>
        </div>
        <div className="relative">
          <input value={mailingStreetNumber} onChange={handleStreetNumberChange} type="text" id='mailing-street-number' name='mailing-street-number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='mailing-street-number' className="floating-form-label">Numer ulicy</label>
        </div>
        <div className="relative">
          <input value={mailingHouseNumber} onChange={handleHouseNumberChange} type="text" id='mailing-house-number' name='mailing-house-number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='mailing-house-number' className="floating-form-label">Numer domu</label>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-3 w-full lg:w-[40rem]'>
        <div className="relative">
          <input value={mailingPostcode} onChange={handlePostcodeChange} type="text" id='mailing-postcode' name='mailing-postcode' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='mailing-postcode' className="floating-form-label">Kod pocztowy</label>
        </div>
        <div className="relative">
          <select value={mailingSelectedCity} onChange={handleCityChange} id='mailing-city' name='mailing-city' className="floating-form-input peer" placeholder=" ">
          <option className='option-select' value=''>Wybierz miasto</option>
          {cities.map((city) => (
            <option className='option-select' key={city.value} value={city.value}>
                {city.label}
            </option>
          ))}
          </select>
          <label htmlFor='mailing-city' className="floating-form-label">Miasto</label>
        </div>
        <div className="relative">
          <select value={mailingSelectedCountry} onChange={handleCountryChange} id='mailing-country' name='mailing-country' className="floating-form-input peer" placeholder=" ">
          <option className='option-select' value=''>Wybierz kraj</option>
          {countries.map((country) => (
            <option className='option-select' key={country.value} value={country.value}>
                {country.label}
            </option>
          ))}
          </select>
          <label htmlFor='mailing-country' className="floating-form-label">Kraj</label>
        </div>
      </div>
    </div>
  )
}

export default MailingAddress
