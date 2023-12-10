import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { showPopup } from '../../store/cartPopupSlice'

function AddToCartFromWishlistButton({item}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    const newItem = {
      authors: item.authors,
      formId: item.formId,
      formName: item.formName,
      id: item.id,
      imageURL: item.imageURL,
      price: item.priceBrutto,
      title: item.bookTitle,
  }
    dispatch(addToCart(newItem))
    dispatch(showPopup(newItem))
  }
  return (
    <button onClick={handleClick} className='purple-button flex items-center justify-center'><FiShoppingBag className='mr-1 text-xs'/>Dodaj do koszyka</button>
  )
}

export default AddToCartFromWishlistButton
