import React, { useEffect, useState } from 'react'
import axiosClient from '../../../utils/api/axiosClient'

function Address({street,setStreet,postcode,setPostcode,streetNumber,setStreetNumber,houseNumber,setHouseNumber,selectedCity,setSelectedCity,selectedCountry,setSelectedCountry}) {
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
  setStreet(e.target.value)
}
const handleStreetNumberChange = (e) => {
  setStreetNumber(e.target.value)
}
const handleHouseNumberChange = (e) => {
  setHouseNumber(e.target.value)
}
const handlePostcodeChange = (e) => {
  setPostcode(e.target.value)
}
const handleCityChange = (e) => {
  setSelectedCity(e.target.value)
}
const handleCountryChange = (e) => {
  setSelectedCountry(e.target.value)
}
useEffect(() => {
fetchCities()
fetchCountries()
},[])
  return (
    <div className='w-full flex flex-col justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Adres zamieszkania</h2>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[40rem]'>
      <div className="relative col-span-2">
        <input value={street} type="text" id='street' name='street' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='street' className="floating-form-label">Ulica</label>
      </div>
      <div className="relative">
        <input type="text" id='street-number' name='street-number' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='street-number' className="floating-form-label">Numer ulicy</label>
      </div>
      <div className="relative">
        <input type="text" id='house-number' name='house-number' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='house-number' className="floating-form-label">Numer domu</label>
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-3 w-full lg:w-[40rem]'>
      <div className="relative">
        <input type="text" id='postcode' name='postcode' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='postcode' className="floating-form-label">Kod pocztowy</label>
      </div>
      <div className="relative">
        <select id='city' name='city' className="floating-form-input peer" placeholder=" ">
        <option value=''>Wybierz miasto</option>
        {cities.map((city) => (
            <option key={city.value} value={city.value}>
                {city.label}
            </option>
        ))}
        </select>
        <label htmlFor='city' className="floating-form-label">Miasto</label>
      </div>
      <div className="relative">
        <select id='country' name='country' className="floating-form-input peer" placeholder=" ">
        <option value=''>Wybierz kraj</option>
        {countries.map((country) => (
            <option key={country.value} value={country.value}>
                {country.label}
            </option>
        ))}
        </select>
        <label htmlFor='country' className="floating-form-label">Kraj</label>
      </div>
    </div>
  </div>
  )
}

export default Address
