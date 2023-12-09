import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { addressValidate } from '../../utils/validation/addressValidation'
import { setDelivery } from '../../store/checkoutSlice'

function DeliveryAddress({submitting,checkoutErrors, setCheckoutErrors}) {
    const dispatch = useDispatch()
    const { delivery } = useSelector((state) => state.checkout)
    const [errors, setErrors] = useState({})
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [address, setAddress] = useState({
        street: '',
        streetNumber: '',
        houseNumber: '',
        postcode: '',
        selectedCity: 1,
        selectedCountry: 1,
      })
      const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
      }
      const handleSelectedCity = (selectedCityId) => {
        setAddress({ ...address, selectedCity: Number(selectedCityId) });
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
        if (submitting) {
            setErrors(addressValidate(address))
            if(Object.keys(errors).length > 0){
              setCheckoutErrors({ ...checkoutErrors, deliveryAddress: 'Nieprawidłowy adres dostawy' });
            }else{
              setCheckoutErrors((prevErrors) => {
                const { deliveryAddress, ...newErrors } = prevErrors;
                return newErrors;
            });
            dispatch(setDelivery({...delivery, address}))
          }
        } else {
          setCheckoutErrors((prevErrors) => {
            const { deliveryAddress, ...newErrors } = prevErrors;
            return newErrors;
        });
        }
      }, [ errors, submitting]);
  return (
    <form>
    <div className='lg:grid flex flex-col lg:grid-cols-2 gap-2'>
        <div className='flex flex-col col-span-2'>
            <label htmlFor='street' className='label-input text-base'>Ulica</label>
            <input onChange={handleChange} name='street' type='text' className='form-input text-sm' placeholder='Ulica'/>
            {errors.street && <p className='error-text'>{errors.street}</p>}
        </div>
        <div className='flex flex-col'>
            <label htmlFor='streetNumber' className='label-input text-base'>Numer ulicy</label>
            <input onChange={handleChange} name='streetNumber' type='text' className='form-input text-sm' placeholder='Numer ulicy'/>
            {errors.streetNumber && <p className='error-text'>{errors.streetNumber}</p>}
        </div>
        <div className='flex flex-col'>
            <label htmlFor='houseNumber' className='label-input text-base'>Numer domu</label>
            <input onChange={handleChange} name='houseNumber' type='text' className='form-input text-sm' placeholder='Numer domu'/>
            {errors.houseNumber && <p className='error-text'>{errors.houseNumber}</p>}
        </div>
        <div className='flex flex-col col-span-2'>
            <label htmlFor='postcode' className='label-input text-base'>Kod pocztowy</label>
            <input onChange={handleChange} name='postcode' type='text' className='form-input text-sm' placeholder='Kod pocztowy'/>
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
  )
}

export default DeliveryAddress
