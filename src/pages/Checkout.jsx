import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutSummary from '../components/page-elements/CheckoutSummary'
import {BsArrowLeftShort} from 'react-icons/bs'
import { resetCheckout, setGuest } from '../store/checkoutSlice'
import GuestOrderDetails from '../components/checkout/GuestOrderDetails'
import DeliveryMethods from '../components/checkout/DeliveryMethods'
import PaymentMethods from '../components/checkout/PaymentMethods'
import InvoiceAddress from '../components/checkout/InvoiceAddress'
import DeliveryAddress from '../components/checkout/DeliveryAddress'

function Order() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {cart} = useSelector((state) => state.cart)
  const {deliveryMethod,guest} = useSelector((state) => state.checkout)
  const {isAuth} = useSelector((state) => state.user)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  useEffect(() => {
    dispatch(resetCheckout())
  },[])
  useEffect(() => {
    if(cart.length <= 0){
      navigate('/koszyk')
    }
  },[cart])
  useEffect(()=>{
    if(isAuth){
      dispatch(setGuest(false))
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
          {guest === null ?
          <div className='grid grid-cols-1 gap-5 mt-5'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-semibold'>Jestem już klientem sklepu</h1>
            <p className='font-light text-center'>Zaloguj się do swojego konta aby kontynuować zakupy</p>
            <Link to='/dostep/logowanie' className='purple-button w-full lg:w-2/3'>Zaloguj się</Link>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-semibold'>Nowy klient</h1>
            <p className='font-light text-center'>Kontynuuj jako gość lub zarejestruj się w naszym sklepie</p>
            <Link to='/dostep/rejestracja' className='purple-button w-full lg:w-2/3'>Zarejestruj się</Link>
            <button onClick={() => dispatch(setGuest(true))} className='bordered-purple-button w-full lg:w-2/3'>Kontynuuj jako gość</button>
          </div>
        </div>
        :
        <div className='flex flex-col'>
          {guest &&
          <GuestOrderDetails errors={errors} submitting={submitting}/>
          }
          <DeliveryMethods errors={errors} submitting={submitting}/>
          <PaymentMethods errors={errors} submitting={submitting} />
          <InvoiceAddress errors={errors} submitting={submitting}/>
          {errors.invoiceAddress && <p className='error-text'>{errors.invoiceAddress}</p>}
          {(deliveryMethod && deliveryMethod?.name === 'Dostawa do domu') &&
          <>
          <DeliveryAddress errors={errors} submitting={submitting}/>
          {errors.deliveryAddress && <p className='error-text'>{errors.deliveryAddress}</p>}
          </>
          }
        </div>
          }
        </div>
        <CheckoutSummary setErrors={setErrors} errors={errors} submitting={submitting} setSubmitting={setSubmitting}/>
        </div>
      </div>
    </div>
  )
}

export default Order
