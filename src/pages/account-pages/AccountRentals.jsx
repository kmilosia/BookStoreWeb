import React from 'react'
import { Link } from 'react-router-dom'
import AccountRentalElement from '../../components/products/AccountRentalElement'

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
      <AccountRentalElement title="Harry Potter I Czara Ognia" form="Ebook" fileFormat="EPUB" price={59.99} amount={59.99} imgURL='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' /> 
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-5'>
      <button className=' text-white font-medium text-base lg:text-xs rounded-3xl px-4 py-2 w-full lg:w-auto bg-purple-400 hover:bg-purple-500 my-2 lg:my-0'>Pobierz fakturę</button>
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
