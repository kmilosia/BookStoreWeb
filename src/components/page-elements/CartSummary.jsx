import React, { useEffect, useState } from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {BiSolidLock} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axiosClient from '../../utils/api/axiosClient'
import { setDiscount } from '../../store/checkoutSlice'

function CartSummary() {
  const dispatch = useDispatch()
    const {totalPrice} = useSelector((state) => state.cart)
    const {discount} = useSelector((state) => state.checkout)
    const [isPromoOpen, setIsPromoOpen] = useState(false)
    const [promoError, setPromoError] = useState('')
    const [promoInput, setPromoInput] = useState('')
    const [promo, setPromo] = useState({})
    const [discounts, setDiscounts] = useState([])
    const getDiscountCodes = async () => {
      try {
        const response = await axiosClient.get(`/DiscountCodes`)
        setDiscounts(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    useEffect(() => {
      getDiscountCodes()
    },[])
    const handlePromoInput = (e) => {
      setPromoInput(e.target.value)
    }
    const handleAddPromo = () => {
      const result = discounts.find(({ code }) => code === promoInput);
      if(!result){
        setPromoError("Podany kod jest nieprawidłowy lub jest już nieaktywny")
        dispatch(setDiscount())
      }else{
        setPromoError("")
        setPromo(result) 
        const item = {
          code: promoInput,
          value: result.percentOfDiscount
        }
        dispatch(setDiscount(item))
      }
    }
  return (
    <div className='flex flex-col relative'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 sticky top-32 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='flex flex-col py-2 my-1 divide-border-bottom'>
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
    </div>

    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Suma za zakupy</p>
      <p className=''>{totalPrice && totalPrice.toFixed(2)} zł</p>
    </div>
    {discount &&
    <>
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Wartość rabatu</p>
      <p className=''>-{((discount.value / 100) * totalPrice).toFixed(2)}zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Kod rabatowy</p>
      <p className=''>{discount.code}</p>
    </div>
    </>
    }
    <div className='grid grid-cols-[auto_max-content] font-semibold divide-border-top py-2 my-1'>
      <p>Do zapłaty</p>
      <p>{discount ? ((totalPrice - ((discount.value / 100) * totalPrice)).toFixed(2)) : totalPrice.toFixed(2)}zł</p>
    </div>
    <Link to='/zamowienie' className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Złóż zamówienie</Link>
  </div>
  </div>
  )
}

export default CartSummary
