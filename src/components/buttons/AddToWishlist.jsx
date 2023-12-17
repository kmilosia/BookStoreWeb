import React from 'react'
import { PiHeart } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { getValidToken } from '../../utils/functions/getValidToken'
import axiosClient from '../../utils/api/axiosClient'
import { showMessage } from '../../store/messageSlice'
import { removeItem } from '../../store/cartSlice'
import { showLoginMessage } from '../../store/loginPopupSlice'

function AddToWishlist({item}) {
  const { isAuth } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state.cart)
  const addToWishlist = async (id) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.post(`/Wishlist/Edit-Wishlist-Item?bookItemId=${id}&isWishlisted=false`, null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        return response.data
    } catch (error) {
        console.error(error);
    }
  }
  const handleAddToWishlist = () => {
    if(isAuth){
        if(item.isWishlisted){
            dispatch(showMessage({title: "Produkt znajduję się już na liście życzeń!"}))
        }else{
        addToWishlist(item.id)
        const cartItem = cart.find((item) => item.id === item.id)
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
