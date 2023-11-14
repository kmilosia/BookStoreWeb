import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import {BsFillGridFill,BsFillGrid3X3GapFill, BsDot} from 'react-icons/bs'
import {PiRowsFill} from 'react-icons/pi'
import {GoDotFill} from 'react-icons/go'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {FaHeart} from 'react-icons/fa'
import {RiShoppingCart2Fill,RiBookMarkFill} from 'react-icons/ri'
import { books } from '../utils/objects/books';
import Stars from '../components/elements/Stars';


function ElectronicBooks() {
  const [propositionsFilter, setPropositionsFilter] = useState(false)
  const [dateFilter, setDateFilter] = useState(false)
  const [priceFilter, setPriceFilter] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState(false)
  const [publisherFilter, setPublisherFilter] = useState(false)
  const [authorFilter, setAuthorFilter] = useState(false)
  const [scoreFilter, setScoreFilter] = useState(false)
  const [stockFilter, setStockFilter] = useState(false)
  return (
    <div className='default-page-wrapper flex flex-col px-0 py-4 overflow-hidden'>
      <div className='grid grid-cols-[1fr_3fr] gap-3 min-h-screen'>
        <div className='bg-white rounded-md h-full px-6 py-5 dark:bg-midnight-900'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white'>Filtruj</h1>
          <div className='flex flex-col my-2'>

          
            <button className='text-base rounded-md py-2 my-2 bg-orange-400 font-[500] text-white hover:bg-orange-500'>Szukaj wyników</button>

          </div>
        </div>
        <div className='bg-white rounded-md h-full py-5 px-6 dark:bg-midnight-900'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white'>E-Booki</h1>
          <div className='flex flex-row justify-between items-center'>
          <h1>Wyniki wyszukiwania:</h1>
            <div className='flex flex-row items-center my-2'>
            <div className='flex flex-row items-center'>
              <PiRowsFill className='p-0 mx-1 cursor-pointer'/>
              <BsFillGridFill className='mx-1 cursor-pointer'/>
              <BsFillGrid3X3GapFill className='mx-1 cursor-pointer'/>
            </div>
            <select name="cars" id="cars" required className='rounded-md w-52 mx-2 text-xs px-3 py-2 text-midnight-950 dark:text-midnight-100 bg-white border-[1px] border-sunrise-300 dark:border-midnight-700 dark:bg-midnight-700 no-ring'>
              <option value="" disabled selected hidden>Sortuj wyniki..</option>
              <option value="volvo">Volvo</option>
            </select>
            </div>
          </div>
          <div className='divider'/>
          <div className='grid grid-cols-4 gap-2'>
            {books.map(item => (
              <Link to='/e-book' className='bg-white flex flex-col px-4 py-4 my-2 rounded-md items-center dark:bg-midnight-900 dark:hover:bg-midnight-950 group hover:bg-sunrise-200 hover:shadow-md'>
                <div className='flex flex-row items-center w-full'>
                  <GoDotFill className={`${item.available ? "text-green-500" : "text-gray-500"} text-xs`}/>
                  {item.available === true ? <p className='text-green-500 text-xs mx-1'>Dostępna</p> : <p className='text-gray-500 text-xs mx-1'>Niedostępna</p>}
                </div>
                <div className='relative w-full flex items-center justify-center'>
                  <img src={item.imgURL} className='w-[95%] h-auto object-cover aspect-[2/3] rounded-md my-1'/>
                  {item.wishlisted ?
                    <button className='absolute top-0 right-0 rounded-lg p-2 bg-white text-orange-400'><FaHeart /></button>
                  : <button className='absolute top-0 right-0 rounded-lg p-2 bg-sunrise-400 text-white hover:text-orange-400'><FaHeart /></button>
                  }
                </div>
                <h1 className='w-full font-semibold text-blue-950 dark:text-midnight-100 text-sm text-center truncated-text'>{item.title}</h1>
                <p className='text-xs font-light my-1 text-midnight-400
                '>{item.author}</p>
                <Stars score={item.score} />
                <p className='font-semibold text-blue-950 dark:text-midnight-100 my-1'>{item.price}zł</p>
                <button className='w-full bg-orange-400 text-white rounded-md px-3 py-2 my-0 flex flex-row items-center text-xs justify-center transition-all hover:bg-orange-500'>
                  <RiShoppingCart2Fill className='mx-1'/>
                  <span>Dodaj do koszyka</span>
                </button>
                <button className='w-full bg-violet-500 text-white rounded-md px-3 py-2 my-2 flex flex-row items-center text-xs justify-center transition-all hover:bg-violet-600'>
                  <RiBookMarkFill className='mx-1'/>
                  <span>Wypożycz</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectronicBooks
