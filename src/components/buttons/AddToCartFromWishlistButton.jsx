import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { removeItem } from '../../store/wishlistSlice'
import { showPopup } from '../../store/cartPopupSlice'

function AddToCartFromWishlistButton({item}) {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(addToCart(item))
    dispatch(showPopup({id: item.id}))
    dispatch(removeItem(item))
  }
  return (
    <button onClick={handleClick} className='purple-button flex items-center justify-center'><FiShoppingBag className='mr-1 text-xs'/>Dodaj do koszyka</button>
  )
}

export default AddToCartFromWishlistButton
