import React from 'react'

function OrderConfirmation() {
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold'>Zamówienie zostało złożone</h1>
                <img src='https://iili.io/JTCyJ24.png' className='w-48 h-auto object-contain my-2' />
                <p className='text-light my-2'>Otrzymasz email z potwierdzeniem oraz szczegółami zamówienia.</p>
            </div>
        </div>
    </div>
  )
}

export default OrderConfirmation
