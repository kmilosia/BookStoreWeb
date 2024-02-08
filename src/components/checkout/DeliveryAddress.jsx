import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getCountries } from '../../utils/api/dictionaryAPI'
import { addressValidate } from '../../utils/validation/addressValidation'
import { setDeliveryAddress } from '../../store/checkoutSlice'
import { getValidToken } from '../../utils/functions/getValidToken'
import axiosClient from '../../utils/api/axiosClient'

function DeliveryAddress() {
    const dispatch = useDispatch()
    const {deliveryAddress} = useSelector((state) => state.checkout)
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [userAddress, setUserAddress] = useState(null)
    const [addNew, setAddNew] = useState(null)
    const [edit, setEdit] = useState(false)
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState({
        street: '',
        streetNumber: '',
        houseNumber: '',
        postcode: '',
        cityID: '',
        cityName: '',
        countryID: '',
        countryName: ''
      })
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }
      const handleCityChange = (e) => {
        const selectedCityId = e.target.value;
        const selectedCity = cities.find(city => city.id === Number(selectedCityId));
        setData(prevData => ({
            ...prevData,
            cityID: selectedCityId,
            cityName: selectedCity ? selectedCity.name : ''
        }));
    };
      useEffect(() => {
        getCities(setCities)
        getCountries(setCountries)
        fetchUserAddress(setUserAddress)
      },[])
      useEffect(() => {
        if(userAddress){
            const data = {
                street: userAddress[0].street,
                streetNumber: userAddress[0].streetNumber,
                houseNumber: userAddress[0].houseNumber,
                postcode: userAddress[0].postcode,
                cityID: userAddress[0].cityID,
                cityName: userAddress[0].cityName,
                countryID: userAddress[0].countryID,
                countryName: userAddress[0].countryName,
                addressTypeID: 4
            }
            dispatch(setDeliveryAddress(data))
        }
      },[userAddress])
      const handleAddNew = () => {
        setErrors(addressValidate(data))
        setSubmit(true)
      }
      useEffect(() => {
        if(Object.keys(errors).length === 0 && submit){
            const newData = {
                street: data.street,
                streetNumber: data.streetNumber,
                houseNumber: data.houseNumber,
                postcode: data.postcode,
                cityID: Number(data.cityID),
                cityName: data.cityName,
                countryID: data.countryID,
                countryName: data.countryName,
                addressTypeID: 4
            }
            dispatch(setDeliveryAddress(newData))
            setAddNew(false)
            setEdit(false)
        }
      },[submit,errors])
      useEffect(() => {
        if(cities.length > 0){
            setData(prev => ({
                ...prev,
                cityID: cities[0].id,
                cityName: cities[0].name
            }))
        }
        if(countries.length > 0){
            setData(prev => ({
                ...prev,
                countryID: countries[0].id,
                countryName: countries[0].name
            }))
        }
      },[cities, countries])
    const fetchUserAddress = async () => {
        try {
            const token = getValidToken()
            const response = await axiosClient.get('User/Address',{
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
              },
            })
            if(response.status === 200 || response.status === 204){
            setUserAddress(response.data)
            }
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <div className='flex flex-col border-t mt-4 border-gray-200 dark:border-midnight-800'>
        <h3 className='font-semibold text-2xl mt-4 mb-2'>Adres dostawy</h3>
        {(deliveryAddress && !edit && !addNew) && 
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-row items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md mb-4'>
            <div className='flex flex-col w-full'>
                <p>{deliveryAddress.street} {deliveryAddress.streetNumber} / {deliveryAddress.houseNumber}</p>
                <p>{deliveryAddress.postcode} {deliveryAddress.cityName}</p>
                <p>{deliveryAddress.countryName}</p>
            </div>
            <div className='flex'>
                <button onClick={() => {setData(deliveryAddress);setEdit(true)}} className='text-purple-400 hover:text-purple-500 whitespace-nowrap'>Edytuj adres</button>
            </div>
            </div>
            <button onClick={() => {setAddNew(true)}} className='flex flex-row items-center justify-center w-full h-auto bg-white dark:bg-midnight-800 rounded-md mb-4 hover:bg-gray-100 hover:dark:bg-midnight-700'>Dodaj nowy adres dostawy</button>
        </div>
        }
        {(!deliveryAddress && !edit && !addNew) &&
            <button onClick={() => {setAddNew(true)}} className='flex flex-row items-center justify-center w-1/2 py-10 h-auto bg-white dark:bg-midnight-800 rounded-md mb-4 hover:bg-gray-100 hover:dark:bg-midnight-700'>Dodaj nowy adres faktury</button>
        }
        {addNew &&
        <div className='flex flex-col'>
         <form>
         <div className='lg:grid flex flex-col lg:grid-cols-2 gap-2'>
             <div className='flex flex-col col-span-2'>
                 <label htmlFor='street' className='label-input text-base'>Ulica</label>
                 <input onChange={handleChange} name='street' type='text' className='form-input text-sm' placeholder='Ulica'/>
                 {errors?.street && <p className='error-text'>{errors?.street}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='streetNumber' className='label-input text-base'>Numer ulicy</label>
                 <input onChange={handleChange} name='streetNumber' type='text' className='form-input text-sm' placeholder='Numer ulicy'/>
                 {errors?.streetNumber && <p className='error-text'>{errors?.streetNumber}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='houseNumber' className='label-input text-base'>Numer domu</label>
                 <input onChange={handleChange} name='houseNumber' type='text' className='form-input text-sm' placeholder='Numer domu'/>
                 {errors?.houseNumber && <p className='error-text'>{errors?.houseNumber}</p>}
             </div>
             <div className='flex flex-col col-span-2'>
                 <label htmlFor='postcode' className='label-input text-base'>Kod pocztowy</label>
                 <input onChange={handleChange} name='postcode' type='text' className='form-input text-sm' placeholder='Kod pocztowy'/>
                 {errors?.postcode && <p className='error-text'>{errors?.postcode}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='city' className='label-input text-base'>Miasto</label>
                 <select onChange={handleCityChange} name='cityID' className='form-input text-sm'>
                 {cities && cities.map((item,index) => {
                     return (
                     <option key={index} value={item.id}>{item.name}</option>
                     )
                 })}
                 </select>
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='country' className='label-input text-base'>Kraj</label>
                 <input disabled name='country' type='text' className='form-input text-sm' placeholder='Kraj' value={countries[0].name}/>
             </div>
         </div>
        </form>
        <div className='flex flex-row mt-4'>
            <button className='purple-button mr-2' onClick={() => handleAddNew()}>Dodaj adres</button>
            <button className='cancel-button' onClick={() => setAddNew(false)}>Anuluj</button>
        </div>
        </div>
        } 
        {edit &&
        <div className='flex flex-col'>
         <form>
         <div className='lg:grid flex flex-col lg:grid-cols-2 gap-2'>
             <div className='flex flex-col col-span-2'>
                 <label htmlFor='street' className='label-input text-base'>Ulica</label>
                 <input onChange={handleChange} name='street' type='text' className='form-input text-sm' value={data.street} placeholder='Ulica'/>
                 {errors?.street && <p className='error-text'>{errors?.street}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='streetNumber' className='label-input text-base'>Numer ulicy</label>
                 <input onChange={handleChange} name='streetNumber' type='text' className='form-input text-sm' value={data.streetNumber} placeholder='Numer ulicy'/>
                 {errors?.streetNumber && <p className='error-text'>{errors?.streetNumber}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='houseNumber' className='label-input text-base'>Numer domu</label>
                 <input onChange={handleChange} name='houseNumber' type='text' className='form-input text-sm' value={data.houseNumber} placeholder='Numer domu'/>
                 {errors?.houseNumber && <p className='error-text'>{errors?.houseNumber}</p>}
             </div>
             <div className='flex flex-col col-span-2'>
                 <label htmlFor='postcode' className='label-input text-base'>Kod pocztowy</label>
                 <input onChange={handleChange} name='postcode' type='text' className='form-input text-sm' value={data.postcode} placeholder='Kod pocztowy'/>
                 {errors?.postcode && <p className='error-text'>{errors?.postcode}</p>}
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='city' className='label-input text-base'>Miasto</label>
                 <select onChange={handleCityChange} name='cityID' value={data.cityID} className='form-input text-sm'>
                 {cities && cities.map((item,index) => {
                     return (
                     <option key={index} value={item.id}>{item.name}</option>
                     )
                 })}
                 </select>
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='country' className='label-input text-base'>Kraj</label>
                 <input disabled name='country' type='text' className='form-input text-sm' placeholder='Kraj' value={countries[0].name}/>
             </div>
         </div>
        </form>
        <div className='flex flex-row mt-4'>
            <button className='purple-button mr-2' onClick={() => handleAddNew()}>Edytuj adres</button>
            <button className='cancel-button' onClick={() => setEdit(false)}>Anuluj</button>
        </div>
        </div>
        } 
    </div>
  )
}

export default DeliveryAddress
