import React from 'react'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'
import { TbTrash } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../../store/cartSlice'

function QuantityChanger({id}) {
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state.cart)
  const cartItem = cart.find((item) => item.id === id)
  return (
    <div className='flex text-sm 2xl:text-base items-center rounded-md border border-gray-300 dark:border-midnight-600'>
        {cartItem && cartItem.quantity === 1 ? <button onClick={() => {dispatch(removeItem(cartItem))}} className='mx-2 text-gray-600 dark:text-white'><TbTrash/></button>
        : <button onClick={() => {dispatch(decrementQuantity(cartItem))}} className='mx-2 text-gray-600 dark:text-white'><HiMinusSm/></button>
        }
        <span className='px-3 py-1 border-x dark:border-midnight-600'>{cartItem && cartItem.quantity}</span>
        <button onClick={() => {dispatch(incrementQuantity(cartItem))}} className='mx-2 text-gray-600 dark:text-white'><HiPlusSm/></button>
    </div>
  )
}

export default QuantityChanger
