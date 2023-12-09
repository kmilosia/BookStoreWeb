import React, { useEffect, useState } from 'react'
import {BiSolidLock} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CheckoutSummary() {
    const {totalPrice,cart} = useSelector((state) => state.cart)
    const {discount,delivery} = useSelector((state) => state.checkout)
    const [total, setTotal] = useState(0)
    useEffect(() => {
      if(discount){
        setTotal((totalPrice - (discount.value / 100) * totalPrice))
      }else if(discount && delivery){
        setTotal(((totalPrice - (discount.value / 100) * totalPrice) + delivery))
      }else if(delivery){
        setTotal(totalPrice + delivery.value)
      }else{
        setTotal(totalPrice)
      }
    },[discount,delivery,totalPrice])
  return (
    <div className='flex flex-col relative'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='flex flex-col my-2'>
    {cart && cart.map((item,index) => {
        return (
          <div key={index} className='flex justify-between my-2'>
            <img src={item.imageURL} className='h-20 w-auto object-contain mr-2 rounded-md' />
            <div className='flex flex-col'>
              <h1 className='text-xs font-semibold'>{item.title}</h1>
              <h2 className='text-xs'>{item.formName}</h2>
              <h3 className='text-xs font-semibold mt-auto'>{item.quantity} x {item.price.toFixed(2)}zł</h3>
            </div>
          </div>
        )
    })}
    </div>
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
      <p className=''>{delivery ? delivery.value : "0.00"}zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-semibold divide-border-top py-2 my-1'>
      <p>Kwota do zapłaty</p>
      <p>{total ? total.toFixed(2) : totalPrice.toFixed(2)}zł</p>
    </div>
    <Link to='/zamowienie' className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Opłać zamówienie</Link>
  </div>
  </div>
  )
}

export default CheckoutSummary
