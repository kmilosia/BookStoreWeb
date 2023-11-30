import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsDot} from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { emptyWishlist } from '../store/wishlistSlice'

function Wishlist() {
  const dispatch = useDispatch()
  const {wishlist, totalPrice, quantity} = useSelector((state) => state.wishlist)
  const [wishlistElements, setWishlistElements] = useState([])
  useEffect(() => {
    if(wishlist){
      setWishlistElements(wishlist)
    }
  },[wishlist])
  useEffect(() => {
    scrollTop()
  },[])
  const moveAllToCart = () => {
    {wishlistElements.map((item) => {
      dispatch(addToCart(item))

    })}
    dispatch(emptyWishlist())
  }
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {
          wishlistElements.length <= 0 ?
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
                  <span className='font-semibold mx-1'>{quantity}</span>
                  <p>produktów</p>
                  <BsDot />
                  <p>Suma całkowita</p>
                  <span className='font-semibold mx-1'>{totalPrice && totalPrice.toFixed(2)}zł</span>
                </div>
              </div>
              <button onClick={moveAllToCart} className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Dodaj wszystko do koszyka<BiSolidShoppingBag className='mx-1'/></button>
            </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-5 mt-5 mb-3'>
              {wishlistElements.map((item,index) => {
                return (
                  <WishlistElement key={index} item={item}/>
                )
              })}
          </div>
          <ReturnShoppingButton />
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist
