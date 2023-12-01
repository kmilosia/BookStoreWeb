import React, { useEffect, useState } from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {BiSolidLock} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import axiosClient from '../../utils/api/axiosClient'
import { useSelector } from 'react-redux'

function CheckoutSummary({selectedDeliveryMethod}) {
    const {totalPrice} = useSelector((state) => state.cart)
    const [summary, setSummary] = useState(0)
    const [deliveryMethod, setDeliveryMethod] = useState({})
    const getDeliveryMethod = async () => {
        try {
          const response = await axiosClient.get(`/DeliveryMethod/${selectedDeliveryMethod}`)
          setDeliveryMethod(response.data)
        } catch (err) {
          console.error(err)
        }
      }
      useEffect(() => {
        getDeliveryMethod()
      }, [selectedDeliveryMethod])
      useEffect(() => {
        if(deliveryMethod){
        const sum = Number(deliveryMethod.price) + Number(totalPrice)
        setSummary(sum)
        }
      },[deliveryMethod,totalPrice])
  return (
    <div className='flex flex-col relative'>
    <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 sticky top-32 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
    <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Suma za zakupy</p>
      <p className=''>{totalPrice && totalPrice.toFixed(2)} zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
      <p className='text-gray-500'>Dostawa</p>
      <p className=''>{deliveryMethod.price}zł</p>
    </div>
    <div className='grid grid-cols-[auto_max-content] font-semibold divide-border-top py-2 my-1'>
      <p>Kwota do zapłaty</p>
      <p>{summary && summary.toFixed(2)}zł</p>
    </div>
    <Link to='/zamowienie' className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Opłać zamówienie</Link>
  </div>
  </div>
  )
}

export default CheckoutSummary
