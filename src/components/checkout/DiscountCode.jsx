import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckoutCart, setDiscount, setTotalPrice } from '../../store/checkoutSlice'
import { showMessage } from '../../store/messageSlice'
import Spinner from '../elements/Spinner'

function DiscountCode() {
    const dispatch = useDispatch()
    const {discount,checkoutCart} = useSelector((state) => state.checkout)
    const [promoError, setPromoError] = useState('')
    const [promoInput, setPromoInput] = useState('')
    const [promoLoading, setPromoLoading] = useState(false)
    const handlePromoInput = (e) => {
        setPromoInput(e.target.value)
      }
      const handleAddPromo = () => {
        const data = {
          discountCode: promoInput,
          cartItems: checkoutCart.map((item) => ({
              bookItemID: item.id,
              quantity: item.quantity,
              singleItemBruttoPrice: item.price
          }))}
          setPromoLoading(true)
          restoreDiscountCode(data)
    }
    useEffect(() => {
        if(discount){
          const newAmount = discount.cartItems.reduce((total, item) => total + item.quantity * item.singleItemBruttoPrice, 0);
          dispatch(setTotalPrice(newAmount))
          const newCart = checkoutCart.map(item => {
            const match = discount.cartItems.find((discountItem) => discountItem.bookItemID === item.id)
            const newPrice = match ? match.singleItemBruttoPrice : item.price
            return{
                ...item,
                discountedBruttoPrice: newPrice
            }
          })
          dispatch(setCheckoutCart(newCart))
        }
      },[discount])
    const restoreDiscountCode = async (data) => {
      try{
        const response = await axiosClient.post('/User/Order/DiscountCode', data)
        if (response.status === 200) {
          dispatch(setDiscount(response.data))
          dispatch(showMessage({title: "Promocja została dodana!"}))
          setPromoError('')
        }else{
          setPromoError("Niepoprawny kod rabatowy")
        }
        setPromoLoading(false)
        }catch(e){
          setPromoError("Niepoprawny kod rabatowy")
          setPromoLoading(false)
      }
    }
  return (
    <div className='flex flex-col py-2 my-1 divide-border-bottom'>
      <p htmlFor='promoCode' className='font-medium text-sm '>Posiadasz kod rabatowy?</p>
      <div className='flex items-center flex-col'>
      <input onChange={handlePromoInput} id='promoCode' name='promoCode' type='text' className='default-input w-full my-2' placeholder='Wprowadź kod' />
      {promoError && <p className='error-text mb-2 text-center'>{promoError}</p>}
      <button onClick={handleAddPromo} className='purple-button w-full shadow-md'>{promoLoading ? <Spinner /> : 'Zastosuj'}</button>
      </div>
    </div>
  )
}

export default DiscountCode
