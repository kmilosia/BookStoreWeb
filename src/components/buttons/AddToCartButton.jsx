import React from 'react'
import {FaShoppingBasket} from 'react-icons/fa'

function AddToCartButton() {
  return (
    <button className='purple-button flex items-center justify-center'><FaShoppingBasket className='mr-1 text-xs'/>Dodaj do koszyka</button>
  )
}

export default AddToCartButton
