import React, { useState } from 'react'
import {BiSolidLock } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import CartElement from '../components/products/CartElement'
import ReturnShoppingButton from '../components/buttons/ReturnShoppingButton'
import { BsDot } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
import { useEffect } from 'react'
import { scrollTop } from '../utils/functions/scrollTop'
import { FiChevronDown } from "react-icons/fi";

function Cart() {
  useEffect(() => {
    scrollTop()
  },[])
  const navigate = useNavigate()
  const [isEmpty, setIsEmpty] = useState(false)
  const [isPromoOpen, setIsPromoOpen] = useState(false)
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
      {
        isEmpty ?
        <div className='flex flex-col items-center justify-center'>
          <img src='https://iili.io/JCJhie2.png' className='w-full lg:w-1/4 h-auto object-contain' />
          <h1 className='text-2xl font-semibold my-2'>Twój koszyk jest pusty</h1>
          <p className='text-sm font-light'>Wypełnij swój koszyk ulubionymi książkami</p>
          <Link to='/sklep' className='rounded-purple-button my-5'>Przejdź do sklepu</Link>
        </div>
        :
        <div className='grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-5 2xl:gap-20'>
        <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Koszyk</h1>
                <div className='flex items-center my-2 text-sm'>
                  <span className='font-semibold mx-1'>5</span>
                  <p>produktów</p>
                  <BsDot />
                  <p>Suma całkowita</p>
                  <span className='font-semibold mx-1'>349,99zł</span>
                </div>
              </div>
              <button className='rounded-bordered-purple-button h-max w-max mt-2 lg:mt-0'>Opróżnij koszyk<TbTrash className='mx-1'/></button>
            </div>
            <div className='grid grid-cols-1 gap-5 lg:gap-3 mt-5'>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
          </div>
          <ReturnShoppingButton />
        </div>
        <div className='flex flex-col relative'>
          <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 sticky top-32 bg-white dark:bg-midnight-800 shadow-md rounded-md w-full'>
          <h1 className='text-2xl font-bold text-midnight-900 dark:text-white'>Podsumowanie</h1>
          <div className='flex flex-col py-2 my-1 divide-border-bottom'>
            <div className='flex items-center justify-between'>
              <label htmlFor='promo-code' className='font-medium text-sm '>Dodaj kod rabatowy</label>
              <button onClick={() => {setIsPromoOpen(!isPromoOpen)}} className='mx-1'><FiChevronDown /></button>
            </div>
            {isPromoOpen &&
            <div className='flex items-center flex-col'>
            <input id='promo-code' name='promo code' type='text' className='default-input w-full my-2' placeholder='Wprowadź kod rabatowy' />
            <button className='purple-button w-full shadow-md'>Zastosuj</button>
            </div>}
          </div>

          <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
            <p className='text-gray-500'>Suma za zakupy</p>
            <p className=''>123.99 zł</p>
          </div>
          <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
            <p className='text-gray-500'>Dostawa od</p>
            <p className=''>9.99 zł</p>
          </div>
          <div className='grid grid-cols-[auto_max-content] font-semibold divide-border-top py-2 my-1'>
            <p>Kwota do zapłaty</p>
            <p>154.99 zł</p>
          </div>
          <Link to='/zamowienie/dostawa' className='purple-button flex items-center justify-center shadow-md'><BiSolidLock className='mr-2'/>Złóż zamówienie</Link>
        </div>
        </div>
      </div>



      }
      </div>
    </div>
  )
}

export default Cart
