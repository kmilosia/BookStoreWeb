import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsDot} from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { getValidToken } from '../utils/functions/getValidToken'
import axiosClient from '../utils/api/axiosClient'

function UserWishlist() {
  const navigate = useNavigate()
  const {guid} = useParams()
  const {isAuth} = useSelector((state) => state.user)
  const [wishlistElements, setWishlistElements] = useState({})
  const getWishlist = async (data) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Wishlist/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setWishlistElements(response.data)
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}
  useEffect(() => {
    if(guid){
      getWishlist(guid)
    }
  },[guid])
  useEffect(() => {
    if(!isAuth){
        navigate('/')
    }
    scrollTop()
  },[])
  // const moveAllToCart = () => {
  //   {wishlistElements.map((item) => {
  //     dispatch(addToCart(item))

  //   })}
  //   dispatch(emptyWishlist())
  // }
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {Object.keys(wishlistElements).length > 0 &&
        <>
        { wishlistElements.items.length <= 0 ?
          <div className='flex flex-col items-center justify-center'>
            <img src='https://iili.io/JCJhsbS.png' className='w-full lg:w-1/4 h-auto object-contain' />
            <h1 className='text-2xl font-semibold my-2'>Twoja lista życzeń jest pusta</h1>
            <p className='text-sm font-light'>Dodaj do swojej listy życzeń wymarzone książki</p>
            <Link to='/sklep' className='rounded-purple-button my-5'>Przejdź do sklepu</Link>
          </div>
          : 
          <div className='flex flex-col'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Moja lista życzeń</h1>
                <div className='flex items-center my-2 text-sm'>
                  <span className='font-semibold mx-1'>{wishlistElements && wishlistElements.items.length}</span>
                  <p>produktów</p>
                  <BsDot />
                  <p>Suma całkowita</p>
                  <span className='font-semibold mx-1'>{wishlistElements && wishlistElements.fullPrice.toFixed(2)}zł</span>
                </div>
              </div>
              <button className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Dodaj wszystko do koszyka<BiSolidShoppingBag className='mx-1'/></button>
            </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-5 mt-5 mb-3'>
              {wishlistElements && wishlistElements.items.map((item,index) => {
                return (
                  <WishlistElement key={index} item={item}/>
                )
              })}
          </div>
          <ReturnShoppingButton />
          </div>
        }</>}
      </div>
    </div>
  )
}

export default UserWishlist
