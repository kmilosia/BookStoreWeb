import React from 'react'
import { Link } from 'react-router-dom'

function AccountRentals() {
  const listElementStyle = 'mr-3 text-sm text-gray-500 dark:text-gray-300 py-1 underline-hover'
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col bg-white dark:bg-midnight-900 rounded-md px-5 py-5'>
      <h1 className='text-xl mb-3 font-semibold'>Wypożyczenia</h1>
      <ul className='flex flex-row flex-wrap'>
        <li className={listElementStyle}><Link>Wszystkie</Link></li>
        <li className={listElementStyle}><Link>Nieopłacone</Link></li>
        <li className={listElementStyle}><Link>Trwające</Link></li>
        <li className={listElementStyle}><Link>Zakończone</Link></li>
      </ul>
    </div>
    <div className='flex flex-col'>

    <div className='rounded-md bg-white dark:bg-midnight-900 px-5 py-5 flex flex-col mt-4'>
    <div className='flex flex-row justify-center lg:justify-start'>
      <h1>Wypożyczenie ID : </h1>
      <p className='font-semibold mx-1'>647256467</p>
      </div>
      <div className='divider' />
      <div className='flex flex-col lg:flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-auto lg:h-32 w-full lg:w-22 my-1 lg:my-0 object-contain lg:object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-base lg:text-xs text-gray-600 dark:text-gray-400 my-1 lg:my-0'>E-Book</p>
          <p className='font-medium text-xl lg:text-lg w-full lg:w-2/5 my-1 lg:my-0'>Harry Potter i Czara Ognia</p>
          <p className='text-base lg:text-xs font-light my-1 lg:my-0'>EPUB</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium my-1 lg:my-0'>7 dni</p>
            <p className='font-semibold'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-auto lg:h-32 w-full lg:w-22 my-1 lg:my-0 object-contain lg:object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-base lg:text-xs text-gray-600 dark:text-gray-400 my-1 lg:my-0'>E-Book</p>
          <p className='font-medium text-xl lg:text-lg w-full lg:w-2/5 my-1 lg:my-0'>Harry Potter i Czara Ognia</p>
          <p className='text-base lg:text-xs font-light my-1 lg:my-0'>EPUB</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium my-1 lg:my-0'>7 dni</p>
            <p className='font-semibold'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-5'>
      <button className=' text-white font-medium text-base lg:text-xs rounded-3xl px-4 py-2 w-full lg:w-auto bg-orange-400 hover:bg-orange-500 my-2 lg:my-0'>Pobierz fakturę</button>
      <div className='flex flex-row items-end my-2 lg:my-0'>
        <p className='text-lg'>Kwota całkowita:</p>
        <p className='font-medium mx-1 text-lg'>129.99zł</p>
        </div>
      </div>
    </div>

    

    </div>
  </div>
  )
}

export default AccountRentals
