import React, { useState } from 'react'
import { categories } from '../utils/objects/categories-links';
import { Link } from 'react-router-dom';
import MyCarousel from '../components/MyCarousel'
import Select from 'react-select'
import {BsFillGridFill,BsFillGrid3X3GapFill, BsDot} from 'react-icons/bs'
import {PiRowsFill} from 'react-icons/pi'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {GoDotFill} from 'react-icons/go'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {FaHeart} from 'react-icons/fa'
import {RiShoppingCart2Fill,RiShoppingCart2Line} from 'react-icons/ri'
import { books } from '../utils/objects/books';
import Stars from '../components/elements/Stars';
import RangeSlider from "react-range-slider-input";


function Books() {
  const [priceRangeValue, setPriceRangeValue] = useState([30, 60]);
  const [propositionsFilter, setPropositionsFilter] = useState(false)
  const [dateFilter, setDateFilter] = useState(false)
  const [priceFilter, setPriceFilter] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState(false)
  return (
    <div className='default-page-wrapper flex flex-col px-4 py-4 overflow-hidden'>
      <div className='grid grid-cols-[1fr_3fr] gap-3 min-h-screen'>
        <div className='bg-gray-100 h-full px-4 py-4 dark:bg-midnight-950'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white'>Filtruj</h1>
          <div className='flex flex-col my-2'>

            <div className='flex flex-col rounded-md border-[1px] border-gray-200 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Nasze propozycje</h1>
                <button className='pointer' onClick={() => setPropositionsFilter(!propositionsFilter)}>
                  {propositionsFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {propositionsFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1'>
              <ul className='text-sm'>
                  <li className='my-1 hover:text-orange-400'><Link>Bestsellery</Link></li>
                  <li className='my-1 hover:text-orange-400'><Link>Nowo wydane</Link></li>
                  <li className='my-1 hover:text-orange-400'><Link>Najlepiej oceniane</Link></li>
                  <li className='my-1 hover:text-orange-400'><Link>Top 10 wyborów Spellarium</Link></li>
                </ul>
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] border-gray-200 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Data wydania</h1>
                <button className='pointer' onClick={() => setDateFilter(!dateFilter)}>
                  {dateFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {dateFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1'>
              <div className='grid grid-cols-2 gap-3 w-full'>
                  <input type='number' min={1900} max={2023} placeholder='Od' className='rounded-md px-2 py-1 text-sm' />
                  <input type='number' min={1900} max={2023} placeholder='Do' className='rounded-md px-2 py-1 text-sm' />
                </div>
                
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] border-gray-200 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Cena</h1>
                <button className='pointer' onClick={() => setPriceFilter(!priceFilter)}>
                  {priceFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {priceFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1 flex flex-col'>
              <RangeSlider min={0} max={100} step={5} value={[30, 60]} />
                <div className='grid grid-cols-2 gap-3 w-full'>
                  <input type='number' min={0} max={1000} className='rounded-md px-2 py-1 text-sm' />
                  <input type='number' min={0} max={1000} placeholder='Od' className='rounded-md px-2 py-1 text-sm' />
                </div>
              </div>
              </>
            }
            </div>

          </div>
        </div>
        <div className='bg-gray-100 h-full py-4 px-4 dark:bg-midnight-950'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white'>Książki</h1>
          <div className='flex flex-row justify-between items-center'>
          <h1>Wyniki wyszukiwania:</h1>
            <div className='flex flex-row items-center my-2'>
            <div className='flex flex-row items-center'>
              <PiRowsFill className='p-0 mx-1'/>
              <BsFillGridFill className='mx-1'/>
              <BsFillGrid3X3GapFill className='mx-1'/>
            </div>
            <select name="cars" id="cars" required className='rounded-sm w-52 mx-1 text-xs px-2 py-1 placeholder:text-gray-600'>
              <option value="" disabled selected hidden>Sortuj wyniki..</option>
              <option value="volvo">Volvo</option>
            </select>
            </div>
          </div>
          <div className='divider'/>
          <div className='grid grid-cols-4 gap-2'>
            {books.map(item => (
              <div className='bg-gray-200 flex flex-col px-4 py-4 my-2 rounded-md items-center group hover:bg-gray-300 hover:shadow-md'>
                <div className='flex flex-row items-center w-full'>
                  <GoDotFill className={`${item.available ? "text-green-500" : "text-gray-500"} text-xs`}/>
                  {item.available === true ? <p className='text-green-500 text-xs mx-1'>Dostępna</p> : <p className='text-gray-500 text-xs mx-1'>Niedostępna</p>}
                </div>
                <div className='relative w-full flex items-center justify-center'>
                  <img src={item.imgURL} className='w-[95%] h-auto object-cover aspect-[2/3] rounded-md my-1'/>
                  {item.wishlisted ?
                    <button className='absolute top-0 right-0 rounded-lg p-2 bg-white text-orange-400'><FaHeart /></button>
                  : <button className='absolute top-0 right-0 rounded-lg p-2 bg-white text-gray-400 hover:text-orange-400'><FaHeart /></button>
                  }
                </div>
                <h1 className='w-full font-semibold text-blue-950 text-sm text-center truncated-text'>{item.title}</h1>
                <p className='text-xs font-light my-1'>{item.author}</p>
                <Stars score={item.score} />
                <p className='font-semibold text-blue-950 my-1'>{item.price}zł</p>
                <button className='w-full bg-orange-400 text-white rounded-md px-3 py-2 flex flex-row items-center text-sm justify-center transition-all hover:bg-orange-500'>
                  <RiShoppingCart2Fill className='mx-1'/>
                  <span>Dodaj do koszyka</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
