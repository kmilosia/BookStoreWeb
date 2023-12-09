import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutSummary from '../components/page-elements/CheckoutSummary'
import PaymentMethods from '../components/checkout/PaymentMethods'
import DeliveryMethods from '../components/checkout/DeliveryMethods'
import { setOrderAuth } from '../store/checkoutSlice'
import AuthorisationMethods from '../components/checkout/AuthorisationMethods'
import OrderDetails from '../components/checkout/OrderDetails'
import {BsArrowLeftShort} from 'react-icons/bs'

function Order() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state.cart)
  const {orderAuth} = useSelector((state) => state.checkout)
  const {isAuth} = useSelector((state) => state.user)
  const [submitting, setSubmitting] = useState(false)
  const [checkoutErrors, setCheckoutErrors] = useState({})
  useEffect(() => {
    if(cart.length <= 0){
      navigate('/koszyk')
    }
  },[cart])
  useEffect(()=>{
    if(isAuth){
      dispatch(setOrderAuth({orderAuth: "user"}))
    }
  },[isAuth])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <div className='justify-start flex'>
        <Link to='/koszyk' className='text-button-link text-base w-max flex flex-row items-center underline-hover-purple'><BsArrowLeftShort className='text-lg'/>Powrót do koszyka</Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-5 2xl:gap-20'>
        <div className='flex flex-col'>
            { !orderAuth && <AuthorisationMethods />}
            {orderAuth &&
            <>
            <OrderDetails submitting={submitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
            <DeliveryMethods submitting={submitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
            <PaymentMethods submitting={submitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
            </>
            }
          </div>
          <CheckoutSummary submitting={submitting} setSubmitting={setSubmitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
        </div>
      </div>
    </div>
  )
}

export default Order
