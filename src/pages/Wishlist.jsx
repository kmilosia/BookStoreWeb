import React from 'react'
import { useState } from 'react'
import emptyWishlist from '../assets/pages/empty-wishlist.png'
import { Link } from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

function Wishlist() {
  const [isEmpty, setIsEmpty] = useState(false)
  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col px-5 py-5 lg:py-10 lg:px-10'>
        {
          isEmpty ?
          <div className='flex flex-col items-center justify-center'>
            <img src={emptyWishlist} className='w-1/4 h-auto object-contain' />
            <h1 className='text-2xl font-semibold my-2'>Twoja lista życzeń jest pusta</h1>
            <p className='text-sm'>Zapełnij swoją listę wymarzonymi książkami</p>
            <Link to='/sklep' className='rounded-purple-button my-5'>Przejdź do sklepu</Link>
          </div>
          : 
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='text-3xl font-semibold'>Moja lista życzeń</h1>
              <button className='rounded-purple-button px-6'>Dodaj wszystko do koszyka</button>
            </div>
            <div className='flex items-center my-2 text-sm'>
              <span className='font-semibold mx-1'>12</span>
              <p>produktów</p>
              <BsDot />
              <p>Suma całkowita</p>
              <span className='font-semibold mx-1'>199.99zł</span>
          </div>
          <div className='flex flex-col my-5'>
            
            <div className='flex items-center'>
              <img src='https://images.penguinrandomhouse.com/cover/9780593598009' className='h-32 w-24 object-cover rounded-md' />
            </div>

          </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist
