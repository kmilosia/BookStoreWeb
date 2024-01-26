import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderInvoice, getUserOrder } from '../utils/api/orderAPI'
import PageLoader from '../components/elements/PageLoader'
import Spinner from '../components/elements/Spinner'
import { convertDateDisplay } from '../utils/functions/convertDate'
import AddReviewModal from '../modals/AddReviewModal'

function OrderInformations() {
  const {id} = useParams()
  const orderId = Number(id)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingDownload, setLoadingDownload] = useState(false)
  const [reviewModal, setReviewModal] = useState(false)
  const [reviewed, setReviewed] = useState(null)
  const downloadInvoice = (id) => {
    setLoadingDownload(true)
    getOrderInvoice(id,setLoadingDownload)
  }
  useEffect(() => {
    getUserOrder(orderId, setData, setLoading)
  },[])
  return (
    loading ? <PageLoader/> :
    <>
    {data ?
    <>
    <div className='flex flex-col bg-white p-4 lg:p-6 dark:bg-midnight-900 min-h-[80vh] dark:text-white cursor-default'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-semibold'>Zamówienie #{data.id}</h1>
        <div className='flex flex-row flex-wrap mt-2 mb-2 lg:mb-0 text-xs lg:text-base'>
          <p>Data zamówienia:</p>
          <p className='text-gray-600 dark:text-gray-300 ml-2 font-light mr-1'>{data.orderDate && convertDateDisplay(data.orderDate)} |</p>
          <p>Status zamówienia:</p>
          <p className='text-gray-600 dark:text-gray-300 ml-2 font-light'>{data.orderStatus.name}</p>
        </div>
        </div>
        <button onClick={() => downloadInvoice(data.id)} className='rounded-purple-button py-2'>{loadingDownload ? <Spinner /> : 'Pobierz fakturę'}</button>
      </div>
      <div className='flex flex-col border-y border-gray-200 dark:border-midnight-700 py-4 my-4'>
        {data.orderItems.map((item,index) => {
          return(
            <div key={index} className={`flex flex-row justify-between ${index !== 0 && 'border-t border-gray-200 dark:border-midnight-700 pt-4 mt-4'}`}>
              <div className='flex flex-row'>
                <img src={item.imageURL} width={100} height={200} className='rounded-md'/>
                <div className='flex flex-col ml-2'>
                  <h1 className='font-semibold'>{item.bookTitle}</h1>
                  <h2 className='font-light text-sm'>{item.authors.map((item) => {return (item.name + " " + item.surname)})}</h2>
                  <h3 className='font-medium text-sm'>{item.formName === 'Book' ? 'Książka' : 'Ebook'} | {item.formName === 'Ebook' ? item.fileFormatName : item.editionName}</h3>
                  <h4 className='mt-auto font-semibold text-xl'>{item.quantity} x {item.priceBrutto?.toFixed(2)}zł</h4>
                </div>
              </div>
              <div className='flex flex-col h-auto items-end'>
                <button onClick={() => {setReviewed(item.id);setReviewModal(true)}} className='text-purple-400 w-max text-sm lg:text-base hover:font-semibold'>Oceń książkę</button>
                <h5 className='text-2xl font-semibold mt-auto'>{item.fullPriceBrutto?.toFixed(2)}zł</h5>
              </div>
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 border-b border-gray-200 dark:border-midnight-700 pb-4 mb-4'>
      <div className='flex flex-col'>
          <p className='font-semibold text-2xl mb-2'>Płatność</p>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Metoda płatności:</p>
              <p className='font-light'>{data.payment.paymentMethod.name}</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Data płatności:</p>
              <p className='font-light'>{data.payment.paymentDate && convertDateDisplay(data.payment.paymentDate)}</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Kwota:</p>
              <p className='font-light'>{data.payment.amount?.toFixed(2)}zł</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Status transakcji:</p>
              <p className='font-light'>{data.payment.transactionStatus.name}</p>
            </div>
        </div>
        <div className='flex flex-col '>
          <p className='font-semibold text-2xl mb-2'>Dostawa</p>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Sposób dostawy:</p>
              <p className='font-light'>{data.deliveryMethod.name}</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Suma za dostawę:</p>
              <p className='font-light'>{data.deliveryMethod.price?.toFixed(2)}zł</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Dane kupującego:</p>
              <p className='font-light'>{data.customer.name} {data.customer.surname}</p>
            </div>
            <div className='flex flex-row mt-1'>
              <p className='font-medium mr-2'>Email:</p>
              <p className='font-light'>{data.customer.email}</p>
            </div>
        </div>
      </div>
        <div className='flex flex-row items-center mb-4'>
          <p className='text-xl font-semibold mr-2'>Kwota całkowita zamówienia: </p>
          <p className='font-light text-xl'>{data.fullBruttoPrice?.toFixed(2)}zł</p>
        </div>
      </div>
      {reviewModal && <AddReviewModal setIsReviewed={setReviewModal} bookItemId={reviewed} />}
      </>
    :
    <div className='flex flex-col bg-white px-5 py-5 dark:bg-midnight-900 h-screen justify-center items-center'>
      <img src='https://iili.io/JT0PtrN.png' width={200} height={200}/>
      <h1 className='mt-2 text-2xl'>Nie znaleziono takiego zamówienia!</h1>
    </div>
    }
    </>
  )
}

export default OrderInformations
