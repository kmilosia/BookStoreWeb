import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guestValidate } from '../../utils/validation/guestValidation'
import { setCheckoutErrors, setGuestData } from '../../store/checkoutSlice'

function GuestOrderDetails({submitting}) {
    const dispatch = useDispatch()
    const {guestData, checkoutErrors} = useSelector((state) => state.checkout)
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     dispatch(setGuestData({ ...guestData, [name]: value }));
  // };
    // const [errors, setErrors] = useState({})
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
      // useEffect(() => {
      //   if(guestData){
      //     setData(guestData)
      //   }
      // },[guestData])
      // useEffect(() => {
      //   if (submitting) {
      //       setErrors(guestValidate(data))
      //       if(Object.keys(errors).length > 0){
      //         dispatch(setCheckoutErrors({ ...checkoutErrors, guestData: 'Dane do zamówienia muszą zostać uzupełnione' }));
      //       }else{
      //         dispatch(setCheckoutErrors((prevErrors) => {
      //           const { guestData, ...newErrors } = prevErrors;
      //           return newErrors;
      //       }));
      //       dispatch(setGuestData(data))
      //       }
      //   } else {
      //     dispatch(setCheckoutErrors((prevErrors) => {
      //       const { guestData, ...newErrors } = prevErrors;
      //       return newErrors;
      //   }));
      //   }
      // }, [errors, submitting]);
      useEffect(() => {
        if (submitting) {
            const errors = guestValidate(guestData)
            if (Object.keys(errors).length > 0) {
                dispatch(setCheckoutErrors({ ...checkoutErrors, guestData: 'Dane do zamówienia muszą zostać uzupełnione' }))
            } else {
              if(checkoutErrors?.guestData){
                dispatch(setCheckoutErrors((prevErrors) => {
                    const { guestData, ...newErrors } = prevErrors;
                    return newErrors;
                }));
              }
            }
        }
    }, [submitting, checkoutErrors])
      
  return (
    <div className='flex flex-col divide-border-bottom py-4'>
      <h1 className='font-semibold text-2xl mb-2'>Dane do zamówienia</h1>
        <form>
            <div className='lg:grid flex flex-col lg:grid-cols-3 gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='label-input text-base'>Adres email</label>
                    <input onChange={handleChange} value={data.email} name='email' type='text' className='form-input text-sm' placeholder='Email'/>
                    {/* {checkoutErrors?.guestData?.email && <p className='error-text'>{checkoutErrors.guestData?.email}</p>} */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='label-input text-base'>Imię</label>
                    <input onChange={handleChange} value={data.name} name='name' type='text' className='form-input text-sm' placeholder='Imię'/>
                    {/* {checkoutErrors?.guestData?.name && <p className='error-text'>{checkoutErrors.guestData?.name}</p>} */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='surname' className='label-input text-base'>Nazwisko</label>
                    <input onChange={handleChange} value={data.surname} name='surname' type='text' className='form-input text-sm' placeholder='Nazwisko'/>
                    {/* {checkoutErrors?.guestData?.surname && <p className='error-text'>{checkoutErrors.guestData?.surname}</p>} */}
                </div>
            </div>
        </form>
        {checkoutErrors?.guestData && <p className='error-text'>{checkoutErrors?.guestData}</p>}
    </div>
  )
}

export default GuestOrderDetails
