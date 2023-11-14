import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

function AddToBasket() {
  return (
    <button className='flex items-center py-3 lg:py-2 px-8 w-full 2xl:w-max justify-center bg-purple-400 hover:bg-purple-500 text-base lg:text-sm 2xl:text-base text-white rounded-3xl my-2'>
        <FiShoppingBag className='mr-2'/>Dodaj do koszyka
    </button>
  )
}

export default AddToBasket
