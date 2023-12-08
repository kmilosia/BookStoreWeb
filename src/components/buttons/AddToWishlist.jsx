import React from 'react'
import { PiHeart } from 'react-icons/pi'
import { useDispatch } from 'react-redux'

function AddToWishlist({item}) {
  const dispatch = useDispatch()
  return (
    <button className='flex items-center'>
        <PiHeart className='text-lg lg:text-sm 2xl:text-lg text-gray-500 dark:text-white lg:mx-1'/>
        <span className='text-xs 2xl:text-sm hidden lg:inline-block'>Dodaj do listy życzeń</span>
    </button>
  )
}

export default AddToWishlist
