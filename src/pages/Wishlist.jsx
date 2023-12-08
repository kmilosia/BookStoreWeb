import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getValidToken } from '../utils/functions/getValidToken'
import axiosClient from '../utils/api/axiosClient'

function Wishlist() {
  const navigate = useNavigate()
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
