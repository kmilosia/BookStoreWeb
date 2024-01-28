import React from 'react'
import {BiSolidLock} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartSummary() {
  const {totalPrice} = useSelector((state) => state.cart)
  return (
    <div className='flex flex-col relative cursor-default'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 sticky top-32 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='flex justify-between items-center font-medium text-sm my-2'>
      <p className='text-gray-500'>Suma za zakupy</p>
      <p className='text-lg'>{totalPrice?.toFixed(2)}zł</p>
    </div>
    <Link to='/kasa' className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Złóż zamówienie</Link>
  </div>
  </div>
  )
}

export default CartSummary
