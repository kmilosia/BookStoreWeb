import React from 'react'
import { useState } from 'react'
import emptyWishlist from '../assets/pages/empty-wishlist.png'
import { Link } from 'react-router-dom'
import { BsDot} from 'react-icons/bs'
import { BiSolidShoppingBag } from 'react-icons/bi'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import WishlistElement from '../components/products/WishlistElement'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'

function Wishlist() {
  useEffect(() => {
    scrollTop()
  },[])
  const [isEmpty, setIsEmpty] = useState(false)
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {
          isEmpty ?
          <div className='flex flex-col items-center justify-center'>
            <img src={emptyWishlist} className='w-full lg:w-1/4 h-auto object-contain' />
            <h1 className='text-2xl font-semibold my-2'>Twoja lista życzeń jest pusta</h1>
            <p className='text-sm font-light'>Dodaj do swojej listy życzeń wymarzone książki</p>
            <Link to='/sklep' className='rounded-purple-button my-5'>Przejdź do sklepu</Link>
          </div>
          : 
          <div className='flex flex-col'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Moja lista życzeń</h1>
                <div className='flex items-center my-2 text-sm'>
                  <span className='font-semibold mx-1'>12</span>
                  <p>produktów</p>
                  <BsDot />
                  <p>Suma całkowita</p>
                  <span className='font-semibold mx-1'>199.99zł</span>
                </div>
              </div>
              <button className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Dodaj wszystko do koszyka<BiSolidShoppingBag className='mx-1'/></button>
            </div>
            
          <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6 gap-3 lg:gap-5 mt-5 mb-3'>
            <WishlistElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew. Część 1" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew. Część 1" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew. Część 1" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew. Część 1" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <WishlistElement title="Gra o tron. Ogień i Krew. Część 1" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
          </div>
          <ReturnShoppingButton />
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist
