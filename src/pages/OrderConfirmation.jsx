import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../store/cartSlice'

function OrderConfirmation() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(emptyCart())
  },[])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='flex flex-col justify-center items-center h-[70vh]'>
                <img src='https://iili.io/JTCyJ24.png' className='w-48 h-auto object-contain' />
                <h1 className='text-2xl font-semibold mt-4 mb-1'>Zamówienie zostało złożone</h1>
                <p className='text-light'>Otrzymasz email z potwierdzeniem oraz szczegółami zamówienia.</p>
            </div>
        </div>
    </div>
  )
}

export default OrderConfirmation
