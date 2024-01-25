import React, { useEffect, useState } from 'react'
import { getOrderStatuses } from '../../utils/api/dictionaryAPI'
import { getFilteredOrderedBooks, getOrderInvoice } from '../../utils/api/orderAPI'
import { convertDateDisplay } from '../../utils/functions/convertDate'
import PageLoader from '../../components/elements/PageLoader'
import Spinner from '../../components/elements/Spinner'

function AccountOrders() {
  const [filter, setFilter] = useState('')
  const [orderStatuses, setOrderStatuses] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingDownload, setLoadingDownload] = useState(false)
  const downloadInvoice = (id) => {
    setLoadingDownload(true)
    getOrderInvoice(id,setLoadingDownload)
  }
  useEffect(() => {
    getOrderStatuses(setOrderStatuses)
  },[])
  useEffect(() => {
    setLoading(true)
    getFilteredOrderedBooks(filter, setBooks,setLoading)
  },[filter])
  return (
  <div className='flex flex-col'>
    <div className='flex flex-col bg-white rounded-md px-5 py-5 dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold'>Zamówienia</h1>
      <div className='flex flex-row flex-wrap'>
        <button onClick={() => setFilter('')} className={`status-list-button ${filter === '' ? 'font-bold' : 'font-normal'}`}>Wszystkie</button>
        {orderStatuses?.map((item,index) => {
          return(
            <button key={index} onClick={() => setFilter(`OrderStatusId=${item.id}`)} className={`status-list-button ${filter === `OrderStatusId=${item.id}` ? 'font-bold' : 'font-normal'}`}>{item.name}</button>
          )
        })}
      </div>
    </div>
    {loading ? <PageLoader /> :
    <div className='flex flex-col'>
    {books?.map((item,index) => {
      return(
      <div key={index} className='rounded-md bg-white dark:bg-midnight-900 px-5 py-5 flex flex-col mt-4 '>
        <div className='flex flex-row justify-center lg:justify-start mb-2'>
          <h1>Zamówienie #</h1>
          <p className='font-semibold mx-1'>{item.id}</p>
        </div>
        <p className='font-light'>Data zamówienia: {item.orderDate && convertDateDisplay(item.orderDate)}</p>
        {item.orderItems?.map((order,index) => {
          return(
            <div key={index} className='flex px-3 py-3 my-1 border rounded-md border-gray-200 dark:border-midnight-700'>
            <img src={order.imageURL} alt='Book cover' className='rounded-md h-40 w-auto aspect-[4/6] object-cover' />
            <div className='flex flex-col flex-[1] mx-2'>
              <p className='text-base lg:text-xs text-gray-600 dark:text-gray-400 my-1 lg:my-0'>{order.formName}</p>
              <p className='font-medium text-xl lg:text-lg w-full lg:w-2/5 my-1 lg:my-0'>{order.bookTitle}</p>
              <p className='text-base lg:text-xs font-light my-1 lg:my-0'>{order.formName === 'Ebook' ? order.fileFormatName : order.editionName}</p>
              <div className='flex flex-row justify-between mt-auto'>
                <p className='font-medium my-1 lg:my-0'>{order.quantity} x {order.priceBrutto?.toFixed(2)}zł</p>
                <p className='font-semibold'>{order.fullPriceBrutto?.toFixed(2)}zł</p>
              </div>
            </div>
          </div>
          )
        })}
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-5'>
          <button onClick={() => downloadInvoice(item.id)} className='rounded-purple-button py-2'>{loadingDownload ? <Spinner /> : 'Pobierz fakturę'}</button>
          <div className='flex flex-row items-end my-2 lg:my-0'>
            <p className='text-lg'>Kwota całkowita:</p>
            <p className='font-semibold mx-1 text-lg'>{item.fullBruttoPrice?.toFixed(2)}zł</p>
          </div>
        </div>
      </div>
      )
    })}
    </div>}
  </div>
  )
}

export default AccountOrders
