import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUserAddress } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountModal from '../../modals/DeleteAccountModal'
import { FaPlus } from "react-icons/fa6";
import axiosClient from '../../utils/api/axiosClient'


function AccountInfo() {
  const dispatch = useDispatch()
  const {userData} = useSelector((state) => state.user)
  const [deleteModule, setDeleteModule] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [selectedCity, setSelectedCity] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState(1)
  const [cities, setCities] = useState([])
  const [countries, setCountries] = useState([])
  const [userAddress, setUserAddress] = useState({
    street: '',
    streetNumber: '',
    houseNumber: '',
    postcode: '',
    cityID: '',
    countryID: '',
    cityName: '',
    countryName: '',
    position: ''
  })
  const [mailingAddress, setMailingAddress] = useState({
    mailingStreet: '',
    mailingStreetNumber: '',
    mailingHouseNumber: '',
    mailingPostcode: '',
    mailingCityID: '',
    mailingCountryID: '',
    mailingPosition: ''
  })
const getCities = async () => {
  try {
    const response = await axiosClient.get(`/City`)
    setCities(response.data)
  } catch (err) {
    console.error(err)
  }
}
const getCountries = async () => {
  try {
    const response = await axiosClient.get(`/Country`)
    setCountries(response.data)
  } catch (err) {
    console.error(err)
  }
}
  const handleSaveClick = (e) => {

  }
  const handleChange = (e) => {
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  }
  const handleSelectedCity = (e) => {
    setSelectedCity(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(registerValidate(userAddress))
    // setSubmitting(true)
  }
  const handleEditClick = (e) => {
    e.preventDefault()
    setIsEdited(true)
  }
  useEffect(() => {
    dispatch(fetchUserAddress())
  },[])
  useEffect(() => {
    if (userData) {
      setUserAddress(userData);
      console.log(userData);
    }
  },[userData])
  useEffect(() => {
    console.log(cities);
  },[cities])
  useEffect(() => {
    if(isAdding || isEdited){
      getCities()
      getCountries()  
    }
  },[isAdding, isEdited])
  return (
    <>
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Adres dostawy</h1>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      {userData.length > 0 ?
      <div className=''>
      </div>
      :
      <>
      {isAdding ? 
      <form onSubmit={handleSubmit}>
        <div className='lg:grid flex flex-col lg:grid-cols-2 gap-3'>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='street' className='label-input'>Ulica</label>
            <input onChange={handleChange} id='street' name='street' type='text' className='form-input' placeholder='Ulica'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='streetNumber' className='label-input'>Numer ulicy</label>
            <input onChange={handleChange} id='streetNumber' name='streetNumber' type='text' className='form-input' placeholder='Numer ulicy'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='houseNumber' className='label-input'>Numer domu</label>
            <input onChange={handleChange} id='houseNumber' name='houseNumber' type='text' className='form-input' placeholder='Numer domu'/>
          </div>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='postcode' className='label-input'>Kod pocztowy</label>
            <input onChange={handleChange} id='postcode' name='postcode' type='text' className='form-input' placeholder='Kod pocztowy'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='city' className='label-input'>Miasto</label>
            <select onChange={handleSelectedCity} id='city' name='city' className='form-input'>
              {cities && cities.map((item,index) => {
                return (
                  <option key={index} value={item.id}>{item.name}</option>
                )
              })}
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='country' className='label-input'>Kraj</label>
            <select disabled id='country' name='country' className='form-input'>
            {countries && countries.map((item,index) => {
                return (
                  <option key={index} value={item.id}>{item.name}</option>
                )
              })}
            </select>
          </div>
        </div>
        <button type='submit' className='purple-button'>Dodaj</button>
      </form> 
      :
      <button onClick={() => {setIsAdding(true)}} className='w-max rounded-md shadow-md bg-gray-50 hover:bg-gray-100 dark:hover:bg-midnight-800 dark:bg-midnight-700 flex justify-between items-center px-5 py-5'>
          <FaPlus className='text-xl mx-3'/>
          <h1 className='text-xl font-semibold mx-3'>Dodaj nowy adres</h1>
        </button>
      }
      </>
      }
      {/* <form>
      <div className='lg:grid flex flex-col lg:grid-cols-2 gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='label-input'>Imię</label>
          <input disabled={!isEdited} onChange={handleChange} id='name' name='name' type='text' className='form-input' value={userDetails.name}/>
        </div>
      </div>
      </form> */}

      </div>
    </div>
    {deleteModule &&
    <DeleteAccountModal setDeleteModule={setDeleteModule} />
    }
    </>
  )
}

export default AccountInfo
