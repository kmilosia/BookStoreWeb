import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../utils/api/axiosClient'
import CheckoutSummary from '../components/page-elements/CheckoutSummary'
import PaymentMethods from '../components/checkout/PaymentMethods'
import DeliveryMethods from '../components/checkout/DeliveryMethods'

function Order() {
  const navigate = useNavigate()
  const [guest, setGuest] = useState(false)
  const [userChoice, setUserChoice] = useState(false)
  const {cart} = useSelector((state) => state.cart)
  const {isAuth} = useSelector((state) => state.user)
  useEffect(() => {
    if(cart.length <= 0){
      navigate('/koszyk')
    }
  },[cart])
  useEffect(()=>{
    if(isAuth || guest){
      setUserChoice(true)
    }
  },[guest, isAuth])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <div className='grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-5 2xl:gap-20'>
        <div className='flex flex-col'>
          { !userChoice &&
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-2 divide-border-bottom py-2'>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>Jestem już klientem sklepu</h1>
                <p className='font-light text-center'>Zaloguj się do swojego konta aby kontynuować zakupy</p>
                <Link to='/dostep/logowanie' className='purple-button w-full'>Zaloguj się</Link>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>Nowy klient</h1>
                <p className='font-light text-center'>Kontynuuj jako gość lub zarejestruj się w naszym sklepie</p>
                <Link to='/dostep/rejestracja' className='purple-button w-full'>Zarejestruj się</Link>
                <button onClick={()=>{setGuest(true)}} className='bordered-purple-button w-full'>Kontynuuj jako gość</button>
              </div>
            </div>
            }
            <DeliveryMethods />
            <PaymentMethods />
          </div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}

export default Order
