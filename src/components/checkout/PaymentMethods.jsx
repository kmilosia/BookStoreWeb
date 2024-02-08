import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { useDispatch } from 'react-redux'
import { setPaymentMethod } from '../../store/checkoutSlice'

function PaymentMethods({errors}) {
    const dispatch = useDispatch()
    const [paymentMethods, setPaymentMethods] = useState([])
    const getPaymentMethods = async () => {
        try {
          const response = await axiosClient.get(`/PaymentMethod`)
          if(response.status === 200 || response.status === 204){
          setPaymentMethods(response.data)
          }
        } catch (err) {
          console.error(err)
        }
    }
    const handlePaymentChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedPayment = paymentMethods.find(method => method.id === selectedId);
        if (selectedPayment) {
            dispatch(setPaymentMethod(selectedPayment))
        }
    }
    useEffect(() => {
        getPaymentMethods()
    },[])
  return (
    <>
    <div className='flex flex-col'>
        <h2 className='font-semibold text-2xl my-4'>Wybierz formę płatności</h2>
        <div className='grid grid-cols-2 gap-5'>
        {paymentMethods.map((item,index) => {
            return (
                <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                    </label>
                <input type="radio" name="payment" value={item.id} onChange={handlePaymentChange} />
                </div>
            )
        })}
        </div>
        {errors.payment && <p className='error-text'>{errors.payment}</p>}
    </div> 
    </>
  )
}

export default PaymentMethods
