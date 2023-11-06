import React from 'react'
import { HiPlusSm, HiMinusSm} from 'react-icons/hi'
import {BsDot,BsArrowLeftShort} from 'react-icons/bs'
import {TbTrash} from 'react-icons/tb'
import {BiSolidLock} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import OrderProgressBar from '../../components/page-elements/OrderProgressBar'


function Cart() {
  const navigate = useNavigate()
  return (
    <div className='default-page-wrapper'>
      <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr]'>
        <div className='flex flex-col px-5 lg:px-10 py-5 lg:py-10'>
          <OrderProgressBar step={1} />
          <h1 className='text-2xl font-bold my-2 text-midnight-900 dark:text-white'>Koszyk</h1>
          <div className='flex flex-col'>
            <div className='grid grid-cols-[4fr_2fr_2fr_1fr] gap-5 py-2'>
                <p className='text-sm font-semibold'>Produkt</p>
                <p className='text-sm font-semibold text-center'>Ilość</p>
                <p className='text-sm font-semibold text-center'>Cena całkowita</p>
                <p></p>
            </div>

            <div className='flex flex-col border-y border-gray-200 dark:border-midnight-800'>
            <div className='grid grid-cols-[4fr_2fr_2fr_1fr] py-5 gap-5'>
              <div className='flex flex-row'>
                <img src='https://media1.popsugar-assets.com/files/thumbor/UgV02HB6zL2ZLaY2ebOzunGwEAE=/fit-in/1280x1916/filters:format_auto():extract_cover():upscale()/2014/07/30/942/n/1922507/198283eaf80d7804_tumblr_n9inhbOoSO1qb0j8no3_1280.jpg'
                className='h-32 w-24 object-cover rounded-md' />
                <div className='flex flex-col mx-2 justify-center'>
                  <h1 className='font-semibold'>Harry Potter i Więzień Azkabanu</h1>
                  <div className='my-1 flex flex-row items-center text-gray-400'>
                  <p className='text-xs'>Książka</p>
                  <BsDot />
                  <p className='text-xs'>Okładka miękka</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center'>
                <button className=''><HiMinusSm /></button>
                <p className='mx-2 cursor-pointer'>2</p>
                <button className=''><HiPlusSm  /></button>
              </div>
              <div className='flex items-center justify-center'>
              <p className='font-semibold cursor-pointer'>39.99zł</p>
              </div>
              <div className='flex items-center justify-center'>
                <button className='text-xl'><TbTrash/></button>
              </div>
            </div>

            <div className='grid grid-cols-[4fr_2fr_2fr_1fr] py-5 gap-5'>
              <div className='flex flex-row'>
                <img src='https://media1.popsugar-assets.com/files/thumbor/UgV02HB6zL2ZLaY2ebOzunGwEAE=/fit-in/1280x1916/filters:format_auto():extract_cover():upscale()/2014/07/30/942/n/1922507/198283eaf80d7804_tumblr_n9inhbOoSO1qb0j8no3_1280.jpg'
                className='h-32 w-24 object-cover rounded-md' />
                <div className='flex flex-col mx-2 justify-center'>
                  <h1 className='font-semibold'>Harry Potter i Więzień Azkabanu</h1>
                  <div className='my-1 flex flex-row items-center text-gray-400'>
                  <p className='text-xs'>Książka</p>
                  <BsDot />
                  <p className='text-xs'>Okładka miękka</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center'>
                <button className=''><HiMinusSm /></button>
                <p className='mx-2 cursor-pointer'>2</p>
                <button className=''><HiPlusSm  /></button>
              </div>
              <div className='flex items-center justify-center'>
              <p className='font-semibold cursor-pointer'>39.99zł</p>
              </div>
              <div className='flex items-center justify-center'>
                <button className='text-xl'><TbTrash/></button>
              </div>
            </div>

            <div className='grid grid-cols-[4fr_2fr_2fr_1fr] py-5 gap-5'>
              <div className='flex flex-row'>
                <img src='https://media1.popsugar-assets.com/files/thumbor/UgV02HB6zL2ZLaY2ebOzunGwEAE=/fit-in/1280x1916/filters:format_auto():extract_cover():upscale()/2014/07/30/942/n/1922507/198283eaf80d7804_tumblr_n9inhbOoSO1qb0j8no3_1280.jpg'
                className='h-32 w-24 object-cover rounded-md' />
                <div className='flex flex-col mx-2 justify-center'>
                  <h1 className='font-semibold'>Harry Potter i Więzień Azkabanu</h1>
                  <div className='my-1 flex flex-row items-center text-gray-400'>
                  <p className='text-xs'>Książka</p>
                  <BsDot />
                  <p className='text-xs'>Okładka miękka</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center'>
                <button className=''><HiMinusSm /></button>
                <p className='mx-2 cursor-pointer'>2</p>
                <button className=''><HiPlusSm  /></button>
              </div>
              <div className='flex items-center justify-center'>
              <p className='font-semibold cursor-pointer'>39.99zł</p>
              </div>
              <div className='flex items-center justify-center'>
                <button className='text-xl'><TbTrash/></button>
              </div>
            </div>

            </div>
            <button onClick={() => {navigate(-1)}} className='flex flex-row items-center my-3 w-max font-semibold underline-hover-dark'><BsArrowLeftShort className='text-xl'/><span className='text-sm'>Kontynuuj zakupy</span></button>

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
