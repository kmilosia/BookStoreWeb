import React, { useEffect, useState } from 'react'
import {BiSolidLock} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DiscountCode from '../checkout/DiscountCode'
import Spinner from '../elements/Spinner'
import { showMessage } from '../../store/messageSlice'
import { makeOrder } from '../../utils/api/orderAPI'
import { emptyCart } from '../../store/cartSlice'

function CheckoutSummary({setSubmitting, submitting,errors, setErrors}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { discount, deliveryMethod, paymentMethod, totalPrice,checkoutCart,guest, guestData,invoiceAddress,deliveryAddress} = useSelector((state) => state.checkout)
  const [total,setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

    useEffect(() => {
      if( deliveryMethod){
        setTotal((totalPrice + deliveryMethod.price))
      }else{
        setTotal(totalPrice)
      }
    },[deliveryMethod,totalPrice])
    
    const finishSubmit = () => {
      let data = {
        deliveryMethodID: deliveryMethod.id,
        paymentMethodID: paymentMethod.id,
        invoiceAddress: {
          street: invoiceAddress.street,
          streetNumber: invoiceAddress.streetNumber,
          houseNumber: invoiceAddress.houseNumber,
          postcode: invoiceAddress.postcode,
          cityID: invoiceAddress.cityID,
          countryID: invoiceAddress.countryID,
          addressTypeID: invoiceAddress.addressTypeID
        },
        cartItems: checkoutCart.map((item) => ({
          bookItemID: item.id,
          quantity: item.quantity
        }))
      }
      if(discount){
        data.discountCodeID = discount.discountID
      }
      if(guest && guestData){
        data.customerGuest = {
          name: guestData.name,
          surname: guestData.surname,
          email: guestData.email
        }
      }
      if(deliveryAddress && deliveryMethod.name === 'Dostawa do domu'){
        data.deliveryAddress = {
          street: deliveryAddress.street,
          streetNumber: deliveryAddress.streetNumber,
          houseNumber: deliveryAddress.houseNumber,
          postcode: deliveryAddress.postcode,
          cityID: deliveryAddress.cityID,
          countryID: deliveryAddress.countryID,
          addressTypeID: deliveryAddress.addressTypeID
        }
      }
      makeOrder(data, setLoading, setSuccess)
    }

    const handleSubmitOrder = () => {
      setSubmitting(true)
      setErrors(validate())
    }
    const validate = () => {
      let errors = {}
       if(!invoiceAddress){
          errors.invoiceAddress = "Wprowadź adres faktury!"
      }
      if(!deliveryAddress && deliveryMethod?.name === 'Dostawa do domu'){
        errors.deliveryAddress = "Wprowadź adres dostawy!"
      }
      if(!deliveryMethod){
        errors.delivery = "Wybierz sposób dostawy!"
      }
      if(!paymentMethod){
        errors.payment = "Wybierz metodę płatności!"
      }
      if(guest){
        if(guestData.name === '' || guestData.surname === '' || guestData.email === '' || !/\S+@\S+\.\S+/.test(guestData.email)){
          errors.guestData = "Wprowadź prawidłowe dane do zamówienia!"
        }
      }
      return errors
    }
    useEffect(() => {
      if (Object.keys(errors).length === 0 && submitting) {
        setLoading(true)
        finishSubmit()
      }
    }, [errors])
    useEffect(() => {
      if(success){
        dispatch(showMessage({title: 'Zamówienie zostało złożone'}))
        dispatch(emptyCart())
        navigate('/potwierdzenie-zamowienia')
      }else if(success === false){
        dispatch(showMessage({title: 'Błąd podczas składania zamówienia', type: 'warning'}))
      }
    },[success])
  return (
    <div className='flex flex-col relative'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='flex flex-col my-2'>
    {checkoutCart.length > 0 && checkoutCart.map((item,index) => {
        return (
          <div key={index} className='flex justify-between my-2'>
            <img src={item.imageURL} className='h-24 w-auto object-contain mr-2 rounded-md' />
            <div className='flex flex-col w-full'>
              <h1 className='text-xs font-semibold'>{item.title}</h1>
              <h2 className='text-xs font-light'>{item.formName}</h2>
              {item.formName === 'Ebook' && <p className='text-purple-400 font-light text-xs'>Produkt elektroniczny zostanie dostarczony na Twój adres email</p>}
              <div className='flex flex-row items-baseline mt-auto'>
              <p className='text-sm font-semibold'>{item.quantity} x</p>
              {item.discountedBruttoPrice !== 0 && <p className='text-sm font-semibold text-purple-400 mx-1'>{item.discountedBruttoPrice?.toFixed(2)}zł</p>}
              <p className={`${item.discountedBruttoPrice !== 0 ? 'text-xs font-light line-through' : 'text-sm font-semibold'}`}>{item.price?.toFixed(2)}zł</p>
              </div>
            </div>
          </div>
        )
    })}
    </div>
    <DiscountCode />
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Suma za zakupy</p>
      <p className=''>{totalPrice && totalPrice.toFixed(2)}zł</p>
    </div>
    {discount &&
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Kod rabatowy</p>
      <p className=''>{discount.discountCode}</p>
    </div>
    }
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Dostawa</p>
      <p className=''>{deliveryMethod ? deliveryMethod.price : "0.00"}zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-semibold my-2'>
      <p>Kwota do zapłaty</p>
      <p>{total ? total.toFixed(2) : "0.00"}zł</p>
    </div>
    <button onClick={handleSubmitOrder} className='purple-button flex items-center justify-center shadow-md'>
      {loading ? <Spinner /> : <span className='flex flex-row items-center'><BiSolidLock className='mr-2'/>Opłać i zamów</span>}
    </button>
  </div>
  </div>
  )
}

export default CheckoutSummary
