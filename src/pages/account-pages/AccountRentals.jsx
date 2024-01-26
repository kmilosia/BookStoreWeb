import React, { useEffect, useState } from 'react'
import { getRentalStatuses } from '../../utils/api/dictionaryAPI'
import { getFilteredRentedBooks } from '../../utils/api/rentalAPI'
import PageLoader from '../../components/elements/PageLoader'
import {convertDateDisplay} from '../../utils/functions/convertDate'
import AddReviewModal from '../../modals/AddReviewModal'

function AccountRentals() {
  const [filter, setFilter] = useState('')
  const [rentalStatuses, setRentalStatuses] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [reviewModal, setReviewModal] = useState(false)
  const [reviewed, setReviewed] = useState(null)
  useEffect(() => {
    getRentalStatuses(setRentalStatuses)
  },[])
  useEffect(() => {
    getFilteredRentedBooks(filter, setBooks,setLoading)
  },[filter])
  return (
    <>
    <div className='flex flex-col'>
    <div className='flex flex-col bg-white dark:bg-midnight-900 rounded-md px-5 py-5'>
      <h1 className='text-xl mb-3 font-semibold'>Wypożyczenia</h1>
      <div className='flex flex-row flex-wrap'>
        <button onClick={() => setFilter('')} className={`status-list-button ${filter === '' ? 'font-bold' : 'font-normal'}`}>Wszystkie</button>
        {rentalStatuses?.map((item,index) => {
          return(
            <button key={index} onClick={() => setFilter(`rentalStatusId=${item.id}`)} className={`status-list-button ${filter === `rentalStatusId=${item.id}` ? 'font-bold' : 'font-normal'}`}>{item.name}</button>
          )
        })}
      </div>
    </div>
    {loading ? <PageLoader /> :
    <div className='flex flex-col'>
    {books?.map((item,index) => {
      return(
      <div key={index} className='rounded-md bg-white dark:bg-midnight-900 px-5 py-5 flex flex-col mt-4'>
        <div className='flex flex-row justify-center lg:justify-start mb-1'>
          <h1>Wypożyczenie #</h1>
          <p className='font-semibold'>{item.id}</p>
        </div>      
        <div className='flex flex-row justify-between items-start px-3 py-3 my-1 border rounded-md border-gray-200 dark:border-midnight-700'>
        <div className='flex flex-row w-full'>
        <img src={item.imageURL} className='rounded-md h-40 w-auto aspect-[4/6] object-cover' alt='Book cover'/>
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-base lg:text-xs text-gray-600 dark:text-gray-400 my-1 lg:my-0'>{item.fileFormatName}</p>
          <p className='font-medium text-xl lg:text-lg w-full lg:w-2/5 my-1 lg:my-0'>{item.bookTitle}</p>
          <p className='mt-auto text-base lg:text-xs text-gray-600 dark:text-gray-400 font-light'>Wypożyczenie wygasa {item.expirationDate && convertDateDisplay(item.expirationDate)}</p>
        </div>
      </div>
      <button onClick={() => {setReviewed(item.bookItemId);setReviewModal(true)}} className='text-purple-400 w-max text-sm lg:text-base hover:font-semibold whitespace-nowrap my-2'>Oceń książkę</button>
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

export default AccountRentals
