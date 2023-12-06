import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { showPopup } from '../../store/cartPopupSlice'

function AddToCartButton({item}) {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(addToCart(item))
    dispatch(showPopup({id: item.id}));
  }
  return (
    <button onClick={handleClick} className='purple-button flex items-center justify-center'><FiShoppingBag className='mr-1 text-sm'/>Dodaj do koszyka</button>
  )
}

export default AddToCartButton
