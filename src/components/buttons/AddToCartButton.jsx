import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'

function AddToCartButton(props) {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.stopPropagation();
    const item = {
      id: props.id,
      title: props.title,
      author: props.author,
      form: props.form,
      edition: props.edition,
      price: props.price,
    }
    dispatch(addToCart(item))
  }
  return (
    <button onClick={handleClick} className='purple-button flex items-center justify-center'><FiShoppingBag className='mr-1 text-xs'/>Dodaj do koszyka</button>
  )
}

export default AddToCartButton
