import React from 'react'
import {BiSolidLock} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import OrderProgressBar from '../../components/page-elements/OrderProgressBar'
import CartElement from '../../components/products/CartElement'
import ReturnShoppingButton from '../../components/buttons/ReturnShoppingButton'
import { BsDot } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'


function Cart() {
  const navigate = useNavigate()
  return (
    <div className='default-page-wrapper'>
      <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr]'>
        <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10'>
          <div className='flex justify-between'>
              <h1 className='text-3xl font-semibold'>Koszyk</h1>
              <button className='rounded-bordered-purple-button'>Opróżnij koszyk<TbTrash className='mx-1'/></button>
            </div>
            <div className='flex items-center my-2 text-sm'>
              <span className='font-semibold mx-1'>12</span>
              <p>produktów</p>
              <BsDot />
              <p>Suma całkowita</p>
              <span className='font-semibold mx-1'>199.99zł</span>
            </div>
            <div className='flex flex-col my-5'>
            <div className='grid grid-cols-[max-content_3fr_2fr_2fr] text-sm text-gray-600 py-2 dark:text-gray-400 font-semibold gap-x-5 border-b border-gray-200 dark:border-midnight-800'>
              <div className='w-5'></div>
              <p>Produkt</p>
              <p className='text-center'>Ilość</p>
              <p className='text-center'>Cena</p>
              <div></div>
            </div>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <CartElement title="Gra o tron. Ogień i Krew" price={39.99} imgURL="https://images.penguinrandomhouse.com/cover/9780593598009" availability={true} edition='Okładka twarda' author="George R.R. Martin" form="Książka"/>
            <ReturnShoppingButton />
          </div>
        </div>
        <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10 bg-white dark:bg-midnight-900 relative'>
          <div className='flex flex-col sticky top-32'>
          <h1 className='text-2xl font-bold mb-5 text-midnight-900 dark:text-white'>Podsumowanie</h1>
          <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
            <p className='text-gray-500'>Suma za zakupy</p>
            <p className=''>123.99zł</p>
          </div>
          <div className='grid grid-cols-[auto_max-content] font-medium text-sm my-1'>
            <p className='text-gray-500'>Dostawa</p>
            <p className=''>9.99zł</p>
          </div>
          <div className='grid grid-cols-[auto_max-content] font-semibold border-t border-gray-200 py-2 my-1'>
            <p>Kwota do zapłaty</p>
            <p>154.99zł</p>
          </div>
          <Link to='/zamowienie/dostawa' className='orange-button flex flex-row items-center justify-center'><BiSolidLock className='mr-2'/>Złóż zamówienie</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
