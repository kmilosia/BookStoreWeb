import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartElement from '../components/products/CartElement'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import { BsDot } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../store/cartSlice'
import CartSummary from '../components/page-elements/CartSummary'

function Cart() {
  const dispatch = useDispatch()
  const {cart, totalPrice, quantity} = useSelector((state) => state.cart)
  const [cartElements, setCartElements] = useState([])
  useEffect(() => {
    if(cart){
      setCartElements(cart)
    }
  },[cart])
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
      {
        cartElements.length <= 0 ?
        <div className='flex flex-col items-center justify-center'>
          <img src='https://iili.io/JCJhie2.png' className='w-full lg:w-1/4 h-auto object-contain' />
          <h1 className='text-2xl font-semibold my-2'>Twój koszyk jest pusty</h1>
          <p className='text-sm font-light'>Wypełnij swój koszyk ulubionymi książkami</p>
          <Link to='/sklep' className='rounded-purple-button my-5'>Przejdź do sklepu</Link>
        </div>
        :
        <div className='grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-5 2xl:gap-20'>
        <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Koszyk</h1>
                <div className='flex items-center my-2 text-sm'>
                  <span className='font-semibold mx-1'>{quantity}</span>
                  <p>produktów</p>
                  <BsDot />
                  <p>Suma całkowita</p>
                  <span className='font-semibold mx-1'>{totalPrice && totalPrice.toFixed(2)}zł</span>
                </div>
              </div>
              <button onClick={() => {dispatch(emptyCart())}} className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Opróżnij koszyk<TbTrash className='mx-1'/></button>
            </div>
            <div className='grid grid-cols-1 gap-5 lg:gap-3 mt-5'>
              {cartElements.map((item,index) => {
                return (
                  <CartElement key={index} item={item}/>
                )
              })}
          </div>
          <ReturnShoppingButton />
        </div>
      <CartSummary />
      </div>
      }
      </div>
    </div>
  )
}

export default Cart
