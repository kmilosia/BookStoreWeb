import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GuestOrderDetails from './GuestOrderDetails'

function OrderDetails({ submitting,setCheckoutErrors,checkoutErrors}) {
    const dispatch = useDispatch()
    const {orderAuth} = useSelector((state) => state.checkout)
    const {isAuth, userData, userAddress} = useSelector((state) => state.user)  
  return (
    <>
    <div className='flex flex-col my-2'>
        <div className='flex items-center mt-2'>
            <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>1</span>
            <p className='text-xl font-semibold text-gray-600 mx-2'>Dane do zamówienia</p>
        </div>
    </div>

    {orderAuth === 'user' ?
    <div className=''>
    </div>
    :
    <GuestOrderDetails submitting={submitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
    }    
    </>
  )
}

export default OrderDetails
