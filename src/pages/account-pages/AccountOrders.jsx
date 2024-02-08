import React, { useEffect, useState } from 'react'
import { getOrderStatuses } from '../../utils/api/dictionaryAPI'
import { getFilteredOrderedBooks, getOrderInvoice } from '../../utils/api/orderAPI'
import { convertDateDisplay } from '../../utils/functions/convertDate'
import PageLoader from '../../components/elements/PageLoader'
import Spinner from '../../components/elements/Spinner'
import { useNavigate } from 'react-router-dom'
import AddReviewModal from '../../modals/AddReviewModal'
import { getValidToken } from '../../utils/functions/getValidToken'

function AccountOrders() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')
  const [orderStatuses, setOrderStatuses] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingDownload, setLoadingDownload] = useState(false)
  const [reviewModal, setReviewModal] = useState(false)
  const [reviewed, setReviewed] = useState(null)
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
    <>
  <div className='flex flex-col'>
    <div className='flex flex-col bg-white rounded-md px-5 py-5 dark:bg-midnight-900 w-full'>
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
      <div key={index} onClick={() => navigate(`/zamowienie-informacje/${item.id}`)} className=' cursor-pointer rounded-md bg-white dark:bg-midnight-900 px-5 py-5 flex flex-col mt-4 '>
        <div className='flex flex-row justify-start mb-2'>
          <h1>Zamówienie #</h1>
          <p className='font-semibold'>{item.id}</p>
        </div>
        <p className='font-light text-xs lg:text-base'>Data zamówienia: {item.orderDate && convertDateDisplay(item.orderDate)}</p>
        {item.orderItems?.map((order,index) => {
          return(
            <div key={index} className='flex flex-row justify-between items-start px-3 py-3 my-1 border rounded-md border-gray-200 dark:border-midnight-700'>
            <div className='flex flex-row w-full'>
            <img src={order.imageURL} alt='Book cover' className='rounded-md h-40 w-auto aspect-[4/6] object-cover' />
            <div className='flex flex-col flex-[1] mx-2'>
              <p className='text-sm lg:text-xs text-gray-600 dark:text-gray-400'>{order.formName}</p>
              <p className='font-medium text-base lg:text-lg w-full lg:w-2/5'>{order.bookTitle}</p>
              <p className='text-sm lg:text-xs font-light'>{order.formName === 'Ebook' ? order.fileFormatName : order.editionName}</p>
              <div className='flex flex-row justify-between mt-auto'>
                <p className='font-medium my-1 lg:my-0'>{order.quantity} x {order.bruttoPrice?.toFixed(2)}zł</p>
              </div>
            </div>
            <div className='flex flex-col h-auto items-end'>
              <button onClick={(e) => {e.stopPropagation();setReviewed(order.id);setReviewModal(true)}} className='text-purple-400 w-max text-sm lg:text-base hover:font-semibold whitespace-nowrap my-2'>Oceń książkę</button>
              <h5 className='text-xl font-semibold mt-auto'>{order.totalBruttoPrice?.toFixed(2)}zł</h5>
              </div>
            </div>
          </div>
          )
        })}
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:mt-5'>
          <div className='flex flex-row items-center'>
          <button onClick={(e) => {e.stopPropagation();downloadInvoice(item.id)}} className='rounded-purple-button py-2'>{loadingDownload ? <Spinner /> : 'Pobierz fakturę'}</button>
          </div>
          <div className='flex flex-row items-end my-2 lg:my-0'>
            <p className='text-lg'>Kwota całkowita:</p>
            <p className='font-semibold mx-1 text-lg'>{item.totalBruttoPrice?.toFixed(2)}zł</p>
          </div>
        </div>
      </div>
      )
    })}
    </div>}
  </div>
  {reviewModal && <AddReviewModal setIsReviewed={setReviewModal} bookItemId={reviewed} />}
  </>
  )
}

export default AccountOrders
