import React from 'react'
import { Link } from 'react-router-dom'
import AccountOrderElement from '../../components/products/AccountOrderElement'

function AccountOrders() {
  const listElementStyle = 'mr-3 text-sm text-gray-500 dark:text-gray-300 py-1 hover:font-semibold'
  return (
  <div className='flex flex-col'>
    <div className='flex flex-col bg-white rounded-md px-5 py-5 dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold'>Zamówienia</h1>
      <ul className='flex flex-row flex-wrap'>
        <li className={listElementStyle}><Link>Wszystkie</Link></li>
        <li className={listElementStyle}><Link>Nieopłacone</Link></li>
        <li className={listElementStyle}><Link>Przetwarzane</Link></li>
        <li className={listElementStyle}><Link>Niedostarczone</Link></li>
        <li className={listElementStyle}><Link>Zakończone</Link></li>
      </ul>
    </div>
    <div className='flex flex-col'>

    <div className='rounded-md bg-white dark:bg-midnight-900 px-5 py-5 flex flex-col mt-4 '>
      <div className='flex flex-row justify-center lg:justify-start mb-2'>
      <h1>Zamówienie ID :</h1>
      <p className='font-semibold mx-1'>647256467</p>
      </div>
     <AccountOrderElement title="Harry Potter I Czara Ognia" form="Książka" edition="Okładka miękka" price={59.99} amount={59.99} quantity={1} imgURL='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' /> 
     <AccountOrderElement title="Harry Potter I Czara Ognia" form="Książka" edition="Okładka miękka" price={59.99} amount={59.99} quantity={1} imgURL='https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg' /> 
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-5'>
      <button className='rounded-purple-button py-2'>Pobierz fakturę</button>
        <div className='flex flex-row items-end my-2 lg:my-0'>
        <p className='text-lg'>Kwota całkowita:</p>
        <p className='font-semibold mx-1 text-lg'>129.99zł</p>
        </div>
      </div>
    </div>     

    </div>
  </div>
  )
}

export default AccountOrders
