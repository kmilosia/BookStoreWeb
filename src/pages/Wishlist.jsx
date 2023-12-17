import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'
import PageLoader from '../components/elements/PageLoader'
import { BiSolidShoppingBag } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { scrollTop } from '../utils/functions/scrollTop'
import { addToCart } from '../store/cartSlice'
import { showMessage } from '../store/messageSlice'
import { deleteWishlistItem, getWishlist, getWishlistGuid } from '../utils/api/wishlistAPI'

function Wishlist() {
  scrollTop()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isAuth} = useSelector((state) => state.user)
  const [wishlistElements, setWishlistElements] = useState({})
  const [guid, setGuid] = useState(null)
  const [loading, setLoading] = useState(false)
  const updateWishlistAfterDelete = (id) => {
    setWishlistElements((prev) => {
      const updatedItems = prev.items.filter((item) => item.id !== id)
      return {
        ...prev,
        items: updatedItems,
      }
    })
  }
  const moveAllToCart = () => {
    {wishlistElements.items.map((item) => {
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
      deleteWishlistItem(item.id)
      updateWishlistAfterDelete(item.id)
    })}
    dispatch(showMessage({title: "Wszystkie produkty zostały przeniesione do koszyka!", type: 'success'}))
  }
  useEffect(() => {
    if(!isAuth){
      navigate('/')
    }else{
      getWishlistGuid(setGuid, setLoading)
    }
  },[])
  useEffect(() => {
    if(guid){
      getWishlist(guid, setWishlistElements, setLoading)
    }
  },[guid])

  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
      {loading ? <PageLoader /> : (
      Object.keys(wishlistElements).length > 0 && (
      <>
      { wishlistElements.items.length <= 0 ?
        <div className='flex flex-col items-center justify-center cursor-default'>
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
                <span className='font-semibold mx-1'>{wishlistElements?.items.length}</span>
                <p>produktów</p>
                <BsDot />
                <p>Suma całkowita</p>
                <span className='font-semibold mx-1'>{wishlistElements?.fullPrice.toFixed(2)}zł</span>
              </div>
            </div>
            <button onClick={moveAllToCart} className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Przenieś wszystko do koszyka<BiSolidShoppingBag className='mx-1'/></button>
          </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-5 mt-5 mb-3'>
            {wishlistElements?.items.map((item,index) => {
              return (
                <WishlistElement key={index} item={item} updateWishlistAfterDelete={updateWishlistAfterDelete}/>
              )
            })}
        </div>
        <ReturnShoppingButton />
        </div>
      }</>))}
    </div>
  </div>
  )
}

export default Wishlist

