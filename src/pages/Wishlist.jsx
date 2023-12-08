import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsDot} from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlistGuid } from '../store/userSlice'
import { getValidToken } from '../utils/functions/getValidToken'
import axiosClient from '../utils/api/axiosClient'

function Wishlist() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isAuth} = useSelector((state) => state.user)
  const [guid, setGuid] = useState(null)
  const getWishlistGuid = async () => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get('/Wishlist', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setGuid(response.data)
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}
  useEffect(() => {
    if(!isAuth){
      navigate('/')
    }else{
      getWishlistGuid()
    }
  },[])
  useEffect(() => {
    if(guid){
      navigate(`/ulubione/${guid}`)
    }
  },[guid])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
      </div>
    </div>
  )
}

export default Wishlist
