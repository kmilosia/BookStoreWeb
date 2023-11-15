import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'

function AddToCartButton() {
  return (
    <button className='purple-button flex items-center justify-center'><FiShoppingBag className='mr-1 text-xs'/>Dodaj do koszyka</button>
  )
}

export default AddToCartButton
