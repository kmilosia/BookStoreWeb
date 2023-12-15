import React, { useState } from 'react'
import {IoClose} from 'react-icons/io5'
import { FaSave , FaStarHalfAlt  } from "react-icons/fa"
import { FiFileText } from "react-icons/fi";
import { Link } from 'react-router-dom'
import ReviewModal from '../../modals/ReviewModal';

function BookModal({item,setIsBookModal,purchased}) {
  const [isReviewed, setIsReviewed] = useState(false)
  const showDate = () => {
    const newDate = new Date(item.expirationDate)
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate
  }
  const showTime = () => {
    const newDate = new Date(item.expirationDate)
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime
  }
  return (
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-start lg:items-center'>
      <div className='w-full lg:w-2/3 h-max flex flex-col py-10 px-10 bg-white dark:bg-midnight-800'>

          <div className='grid grid-cols-[1fr_2fr] gap-5'>
                <div className='h-auto w-full flex items-center justify-end'>
                    <img src={item.imageURL && item.imageURL} className='h-full w-full object-cover rounded-md' />
                </div>
                <div className='flex flex-col items-start'>   
                <div className='grid grid-cols-[auto_max-content] gap-2 w-full'>
                  <Link target='_blank' to={`/produkt/${item.id}`}><h1 className='text-3xl font-semibold cursor-pointer'>{item.title && item.title}</h1></Link>
                  <div className='flex items-start'>
                    <button onClick={() => {setIsBookModal(false)}} className='text-2xl'><IoClose/></button>
                  </div>
                </div>
                <h2 className='text-xl font-medium mt-2'>{item.fileFormatName}</h2>
                  {!isReviewed ?
                  <div className='flex flex-col w-full mt-auto'>
                    {purchased && <button className='purple-button'>Pobierz na urządzenie<FaSave className='ml-2'/></button>}
                    {!purchased && <p className='my-2 cursor-default'>Wypożyczenie ważne do <strong>{showDate()}</strong> do godziny <strong>{showTime()}</strong></p>}
                    <button className='purple-button'>Czytaj ebooka<FiFileText  className='ml-2' /></button>
                    <button onClick={() => {setIsReviewed(true)}} className='purple-button'>Dodaj recenzję<FaStarHalfAlt className='ml-2' /></button>
                  </div>
                  :
                  <ReviewModal bookItemId={item.id} setIsReviewed={setIsReviewed}/>
                  }
                </div>
          </div>
      
      
      </div>
    </div>
  )
}

export default BookModal
