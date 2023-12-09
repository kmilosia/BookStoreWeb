import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { guestValidate } from '../../utils/validation/guestValidation'
import { setUserData } from '../../store/checkoutSlice'

function GuestOrderDetails({submitting,setCheckoutErrors,checkoutErrors}) {
    const dispatch = useDispatch()
    const {userData} = useSelector((state) => state.checkout)
    const [errors, setErrors] = useState({})
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [guestData, setGuestData] = useState({
        name: '',
        surname: '',
        email: '',
        street: '',
        streetNumber: '',
        houseNumber: '',
        postcode: '',
        selectedCity: 1,
        selectedCountry: 1,
      })
      const handleChange = (e) => {
        setGuestData({ ...guestData, [e.target.name]: e.target.value });
      }
      const handleSelectedCity = (selectedCityId) => {
        setGuestData({ ...guestData, selectedCity: Number(selectedCityId) });
      }
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
      useEffect(() => {
        getCities()
        getCountries()
      },[])
      useEffect(() => {
        if(userData && userData.guestData){
          console.log("gowno");
          setGuestData((prevData) => ({
            ...prevData,
            name: userData.guestData.name || '',
            surname: userData.guestData.surname || '',
            email: userData.guestData.email || '',
            street: userData.guestData.street || '',
            streetNumber: userData.guestData.streetNumber || '',
            houseNumber: userData.guestData.houseNumber || '',
            postcode: userData.guestData.postcode || '',
            selectedCity: userData.guestData.selectedCity || 1,
            selectedCountry: userData.guestData.selectedCountry || 1,
          }));
        }
      },[userData])
      useEffect(() => {
        if (submitting) {
            setErrors(guestValidate(guestData))
            if(Object.keys(errors).length > 0){
              setCheckoutErrors({ ...checkoutErrors, guestDetails: 'Dane do zamówienia muszą zostać uzupełnione' });
            }else{
              setCheckoutErrors((prevErrors) => {
                const { guestDetails, ...newErrors } = prevErrors;
                return newErrors;
            });
            dispatch(setUserData({guestData}))
            }
        } else {
          setCheckoutErrors((prevErrors) => {
            const { guestDetails, ...newErrors } = prevErrors;
            return newErrors;
        });
        }
      }, [ errors, submitting]);
      
  return (
    <div className='flex flex-col px-10 divide-border-top divide-border-bottom py-4'>
        <form>
            <div className='lg:grid flex flex-col lg:grid-cols-2 gap-2'>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='email' className='label-input text-base'>Adres email</label>
                    <input onChange={handleChange} value={guestData.email} name='email' type='text' className='form-input text-sm' placeholder='Email'/>
                    {errors.email && <p className='error-text'>{errors.email}</p>}
                </div>
                <h1 className='font-semibold col-span-2 text-lg mt-2'>Dane do faktury</h1>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='label-input text-base'>Imię</label>
                    <input onChange={handleChange} value={guestData.name} name='name' type='text' className='form-input text-sm' placeholder='Imię'/>
                    {errors.name && <p className='error-text'>{errors.name}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='surname' className='label-input text-base'>Nazwisko</label>
                    <input onChange={handleChange} value={guestData.surname} name='surname' type='text' className='form-input text-sm' placeholder='Nazwisko'/>
                    {errors.surname && <p className='error-text'>{errors.surname}</p>}
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='street' className='label-input text-base'>Ulica</label>
                    <input onChange={handleChange} value={guestData.street} name='street' type='text' className='form-input text-sm' placeholder='Ulica'/>
                    {errors.street && <p className='error-text'>{errors.street}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='streetNumber' className='label-input text-base'>Numer ulicy</label>
                    <input onChange={handleChange} value={guestData.streetNumber} name='streetNumber' type='text' className='form-input text-sm' placeholder='Numer ulicy'/>
                    {errors.streetNumber && <p className='error-text'>{errors.streetNumber}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='houseNumber' className='label-input text-base'>Numer domu</label>
                    <input onChange={handleChange} value={guestData.houseNumber} name='houseNumber' type='text' className='form-input text-sm' placeholder='Numer domu'/>
                    {errors.houseNumber && <p className='error-text'>{errors.houseNumber}</p>}
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='postcode' className='label-input text-base'>Kod pocztowy</label>
                    <input onChange={handleChange} value={guestData.postcode} name='postcode' type='text' className='form-input text-sm' placeholder='Kod pocztowy'/>
                    {errors.postcode && <p className='error-text'>{errors.postcode}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='city' className='label-input text-base'>Miasto</label>
                    <select onChange={(e) => handleSelectedCity(e.target.value)} name='city' className='form-input text-sm'>
                    {cities && cities.map((item,index) => {
                        return (
                        <option key={index} value={item.id}>{item.name}</option>
                        )
                    })}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='country' className='label-input text-base'>Kraj</label>
                    <select disabled name='country' className='form-input text-sm'>
                    {countries && countries.map((item,index) => {
                        return (
                        <option key={index} value={item.id}>{item.name}</option>
                        )
                    })}
                    </select>
                </div>

            </div>
        </form>
    </div>
  )
}

export default GuestOrderDetails
