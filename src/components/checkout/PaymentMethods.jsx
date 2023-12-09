import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'

function PaymentMethods() {
    const [paymentMethods, setPaymentMethods] = useState([])
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
    const getPaymentMethods = async () => {
        try {
          const response = await axiosClient.get(`/PaymentMethod`)
          setPaymentMethods(response.data)
        } catch (err) {
          console.error(err)
        }
    }
    const handlePaymentChange = (e) => {
        setSelectedPaymentMethod(e.target.value)
        console.log(e.target.value);
    }
    useEffect(() => {
        getPaymentMethods()
    },[])
  return (
    <>
    <div className='flex flex-col divide-border-top py-2 my-2'>
        <div className='flex items-center mt-2'>
            <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>3</span>
            <p className='text-xl font-semibold text-gray-600 mx-2'>Płatność</p>
        </div>
    </div>
    <div className='flex flex-col'>
        <h2 className='font-semibold text-lg my-2'>Wybierz formę płatności</h2>
        <div className='grid grid-cols-2 gap-5'>
            {paymentMethods.map((item,index) => {
            return (
                <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                    </label>
                    <input type="radio" id={item.id} name="payment" value={item.id} onChange={handlePaymentChange} />
                </div>
            )
            })}
        </div>
    </div>
    </>
  )
}

export default PaymentMethods
