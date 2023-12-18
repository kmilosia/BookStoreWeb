import React from 'react'
import { PiHeart } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from '../../store/messageSlice'
import { removeItem } from '../../store/cartSlice'
import { showLoginMessage } from '../../store/loginPopupSlice'
import { addToWishlist } from '../../utils/api/wishlistAPI'

function AddToWishlist({id,isWishlisted}) {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.user)
  const {cart} = useSelector((state) => state.cart)
  const handleAddToWishlist = () => {
    if(isAuth){
        if(isWishlisted){
            dispatch(showMessage({title: "Produkt znajduję się już na liście życzeń!"}))
        }else{
        addToWishlist(id)
        const cartItem = cart.find((item) => item.id === id)
        dispatch(removeItem(cartItem))
        dispatch(showMessage({title: "Produkt przeniesiono do listy życzeń!"}))
        }
    }else{
        dispatch(showLoginMessage({title: "Zaloguj się aby dodawać produkty do listy życzeń!"}))
    }
  }
  return (
    <button onClick={handleAddToWishlist} className='flex items-center'>
        <PiHeart className='text-lg lg:text-sm 2xl:text-lg text-gray-500 dark:text-white lg:mx-1'/>
        <span className='text-xs 2xl:text-sm hidden lg:inline-block'>Przenieś do listy życzeń</span>
    </button>
  )
}

export default AddToWishlist
