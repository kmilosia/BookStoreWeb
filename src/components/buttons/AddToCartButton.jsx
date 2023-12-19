import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { showPopup } from '../../store/cartPopupSlice'

function AddToCartButton({item}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToCart(item))
    dispatch(showPopup(item))
  }
  return (
    <button onClick={handleClick} className='purple-button whitespace-nowrap'>Dodaj do koszyka</button>
  )
}

export default AddToCartButton
