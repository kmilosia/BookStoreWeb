import React from 'react'
import { useState } from 'react'
import emptyWishlist from '../assets/pages/empty-wishlist.png'
import { Link } from 'react-router-dom'
import { BsDot} from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'

function Wishlist() {
  const [isEmpty, setIsEmpty] = useState(false)
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
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
              <button className='rounded-bordered-purple-button'>Dodaj wszystko do koszyka<BiSolidShoppingBag className='mx-1'/></button>
            </div>
            <div className='flex items-center my-2 text-sm'>
              <span className='font-semibold mx-1'>12</span>
              <p>produktów</p>
              <BsDot />
              <p>Suma całkowita</p>
              <span className='font-semibold mx-1'>199.99zł</span>
          </div>
          <div className='flex flex-col my-5'>
            <div className='grid grid-cols-[max-content_3fr_2fr_2fr_2fr] py-2 text-sm text-gray-600 dark:text-gray-400 font-semibold gap-x-5 border-b border-gray-200 dark:border-midnight-800'>
              <div className='w-5'></div>
              <p>Produkt</p>
              <p className='text-center'>Cena</p>
              <p className='text-center'>Stan magazynu</p>
              <div></div>
            </div>
            <WishlistElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <ReturnShoppingButton />
          </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist
