import React from 'react'
import { Link } from 'react-router-dom'

function AccountOrders() {
  const listElementStyle = 'mr-3 text-sm text-gray-500 py-1'
  return (
  <div className='flex flex-col'>
    <div className='flex flex-col bg-white rounded-md px-5 py-5'>
      <h1 className='text-xl mb-3 font-semibold'>Zamówienia</h1>
      <ul className='flex flex-row'>
        <li className={`${listElementStyle} hover-underline`}><Link>Wszystkie</Link></li>
        <li className={`${listElementStyle} active-underline`}><Link>Nieopłacone</Link></li>
        <li className={listElementStyle}><Link>Przetwarzane</Link></li>
        <li className={listElementStyle}><Link>Niedostarczone</Link></li>
        <li className={listElementStyle}><Link>Zakończone</Link></li>
      </ul>
    </div>
    <div className='flex flex-col'>

    <div className='rounded-md bg-white px-5 py-5 flex flex-col mt-4'>
      <div className='flex flex-row'>
      <h1>Zamówienie ID :</h1>
      <p className='font-medium mx-1'>647256467</p>
      </div>
      <div className='divider' />
      <div className='flex flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-32 w-22 object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-xs text-gray-600'>Książka</p>
          <p className='font-medium text-lg w-2/5'>Harry Potter i Czara Ognia</p>
          <p className='text-xs font-light'>Okładka miękka</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium'>1 x 19.99zł</p>
            <p className='font-medium'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-32 w-22 object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-xs text-gray-600'>Książka</p>
          <p className='font-medium text-lg w-2/5'>Harry Potter i Czara Ognia</p>
          <p className='text-xs font-light'>Okładka miękka</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium'>1 x 19.99zł</p>
            <p className='font-medium'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center mt-5'>
      <button className=' text-white font-medium text-xs rounded-3xl px-4 py-2 bg-orange-400 hover:bg-orange-500'>Faktura zamówienia</button>
        <div className='flex flex-row items-end'>
        <p className=''>Kwota całkowita:</p>
        <p className='font-medium mx-1 text-lg'>129.99zł</p>
        </div>
      </div>
    </div>

    <div className='rounded-md bg-white px-5 py-5 flex flex-col mt-4'>
      <div className='flex flex-row'>
      <h1>Zamówienie ID : </h1>
      <p className='font-medium mx-1'>647256467</p>
      </div>
      <div className='divider' />
      <div className='flex flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-32 w-22 object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-xs text-gray-600'>Książka</p>
          <p className='font-medium text-lg w-2/5'>Harry Potter i Czara Ognia</p>
          <p className='text-xs font-light'>Okładka miękka</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium'>1 x 19.99zł</p>
            <p className='font-medium'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row py-5 border-b border-gray-200 dark:border-midnight-800'>
        <img src='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' 
        className='rounded-md h-32 w-22 object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-xs text-gray-600'>Książka</p>
          <p className='font-medium text-lg w-2/5'>Harry Potter i Czara Ognia</p>
          <p className='text-xs font-light'>Okładka miękka</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium'>1 x 19.99zł</p>
            <p className='font-medium'>59.99zł</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center mt-5'>
      <button className=' text-white font-medium text-xs rounded-3xl px-4 py-2 bg-orange-400 hover:bg-orange-500'>Faktura zamówienia</button>
        <div className='flex flex-row items-end'>
        <p className=''>Kwota całkowita:</p>
        <p className='font-medium mx-1 text-lg'>129.99zł</p>
        </div>
      </div>
    </div>

    

    </div>
  </div>
  )
}

export default AccountOrders
