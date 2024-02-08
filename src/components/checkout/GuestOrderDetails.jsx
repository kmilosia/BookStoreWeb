import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGuestData } from '../../store/checkoutSlice'

function GuestOrderDetails({errors}) {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
      })
      useEffect(() => {
        dispatch(setGuestData(data))
      },[data])
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }
      
  return (
    <div className='flex flex-col divide-border-bottom py-4'>
      <h1 className='font-semibold text-2xl mb-2'>Dane do zamówienia</h1>
        <form>
            <div className='lg:grid flex flex-col lg:grid-cols-3 gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='label-input text-base'>Adres email</label>
                    <input onChange={handleChange} value={data.email} name='email' type='text' className='form-input text-sm' placeholder='Email'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='label-input text-base'>Imię</label>
                    <input onChange={handleChange} value={data.name} name='name' type='text' className='form-input text-sm' placeholder='Imię'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='surname' className='label-input text-base'>Nazwisko</label>
                    <input onChange={handleChange} value={data.surname} name='surname' type='text' className='form-input text-sm' placeholder='Nazwisko'/>
                </div>
            </div>
        </form>
        {errors.guestData && <p className='error-text'>{errors.guestData}</p>}
    </div>
  )
}

export default GuestOrderDetails
