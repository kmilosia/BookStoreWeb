import React, { useEffect, useState } from 'react'
import {BiSolidLock} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function CheckoutSummary({setSubmitting, submitting,setCheckoutErrors,checkoutErrors}) {
  // const {discount} = useSelector((state) => state.checkout)
  // const [isPromoOpen, setIsPromoOpen] = useState(false)
  // const [promoError, setPromoError] = useState('')
  // const [promoInput, setPromoInput] = useState('')
  // const [promo, setPromo] = useState({})
  // const [discounts, setDiscounts] = useState([])
  // const getDiscountCodes = async () => {
  //   try {
  //     const response = await axiosClient.get(`/DiscountCodes`)
  //     setDiscounts(response.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  // useEffect(() => {
  //   getDiscountCodes()
  //   dispatch(setDiscount())
  // },[])
  // const handlePromoInput = (e) => {
  //   setPromoInput(e.target.value)
  // }
  // const handleAddPromo = () => {
  //   const result = discounts.find(({ code }) => code === promoInput);
  //   if(!result){
  //     setPromoError("Podany kod jest nieprawidłowy lub jest już nieaktywny")
  //     dispatch(setDiscount())
  //   }else{
  //     setPromoError("")
  //     setPromo(result) 
  //     const item = {
  //       code: promoInput,
  //       value: result.percentOfDiscount
  //     }
  //     dispatch(setDiscount(item))
  //   }
  // }


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [canNavigate, setCanNavigate] = useState(false)
    const {totalPrice,cart} = useSelector((state) => state.cart)
    const {discount,delivery,payment} = useSelector((state) => state.checkout)
    const [total, setTotal] = useState(0)
    useEffect(() => {
      if(discount && delivery){
        setTotal(((totalPrice - (discount.value / 100) * totalPrice) + delivery.price))
      }else if(discount){
        setTotal((totalPrice - (discount.value / 100) * totalPrice))
      }else if(delivery){
        setTotal(totalPrice + delivery.price)
      }else{
        setTotal(totalPrice)
      }
    },[discount,delivery,totalPrice])
    const handleSubmitOrder = () => {
      setSubmitting(true)
      if(Object.keys(checkoutErrors).length <= 0){
        navigate('/przeglad-zamowienie')
      }
    }
  return (
    <div className='flex flex-col relative'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='flex flex-col my-2'>
    {cart && cart.map((item,index) => {
        return (
          <div key={index} className='flex justify-between my-2'>
            <img src={item.imageURL} className='h-24 w-auto object-contain mr-2 rounded-md' />
            <div className='flex flex-col w-full'>
              <h1 className='text-xs font-semibold'>{item.title}</h1>
              <h2 className='text-xs'>{item.formName}</h2>
              <h3 className='text-xs font-semibold mt-auto'>{item.quantity} x {item.price.toFixed(2)}zł</h3>
            </div>
          </div>
        )
    })}
    </div>
    {/* <div className='flex flex-col py-2 my-1 divide-border-bottom'>
      <div className='flex items-center justify-between'>
        <label htmlFor='promoCode' className='font-medium text-sm '>Dodaj kod rabatowy</label>
        <button onClick={() => {setIsPromoOpen(!isPromoOpen); setPromoError('')}} className='mx-1'><FiChevronDown /></button>
      </div>
      {isPromoOpen &&
      <div className='flex items-center flex-col'>
      <input onChange={handlePromoInput} id='promoCode' name='promoCode' type='text' className='default-input w-full my-2' placeholder='Wprowadź kod rabatowy' />
      {promoError && <p className='error-text mb-2 text-center'>{promoError}</p>}
      <button onClick={handleAddPromo} className='purple-button w-full shadow-md'>Zastosuj</button>
      </div>}
    </div> */}
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Suma za zakupy</p>
      <p className=''>{totalPrice && totalPrice.toFixed(2)} zł</p>
    </div>
    {discount &&
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Wartość rabatu</p>
      <p className=''>-{((discount.value / 100) * totalPrice).toFixed(2)}zł</p>
    </div>
    }
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Dostawa</p>
      <p className=''>{delivery ? delivery.price : "0.00"}zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-semibold divide-border-top py-2 my-1'>
      <p>Kwota do zapłaty</p>
      <p>{total ? total.toFixed(2) : totalPrice.toFixed(2)}zł</p>
    </div>
    <button onClick={handleSubmitOrder} className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Złóż zamówienie</button>
  </div>
  </div>
  )
}

export default CheckoutSummary
