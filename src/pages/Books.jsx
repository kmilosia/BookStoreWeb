import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import {BsFillGridFill,BsFillGrid3X3GapFill} from 'react-icons/bs'
import {PiRowsFill} from 'react-icons/pi'
import {GoDotFill} from 'react-icons/go'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {IoFilter} from 'react-icons/io5'
import {FaHeart} from 'react-icons/fa'
import {RiShoppingCart2Fill} from 'react-icons/ri'
import { books } from '../utils/objects/books';
import Stars from '../components/elements/Stars';


function Books() {
  const [filtersOpenMobile, setFiltersOpenMobile] = useState(false)
  const [propositionsFilter, setPropositionsFilter] = useState(false)
  const [dateFilter, setDateFilter] = useState(false)
  const [priceFilter, setPriceFilter] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState(false)
  const [publisherFilter, setPublisherFilter] = useState(false)
  const [authorFilter, setAuthorFilter] = useState(false)
  const [scoreFilter, setScoreFilter] = useState(false)
  const [stockFilter, setStockFilter] = useState(false)
  const handleFilterButtonMobile = () => {
    setFiltersOpenMobile(!filtersOpenMobile)
  }
  return (
    <div className='default-page-wrapper flex flex-col px-0 py-0 lg:py-4 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-0 lg:gap-3 min-h-screen'>
        <div className='bg-white rounded-md h-full px-6 py-3 lg:py-5 dark:bg-midnight-900'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white hidden lg:inline-block'>Filtruj</h1>
          <div className='flex flex-row justify-between lg:hidden'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white'>Książki</h1>
          <div className='flex flex-row'>
          <select name="cars" id="cars" required className='rounded-md mx-2 text-xs pl-3 pr-7 py-2 text-midnight-950 dark:text-midnight-100 bg-white border-[1px] border-sunrise-300 dark:border-midnight-700 dark:bg-midnight-700 no-ring'>
              <option value="" disabled selected hidden>Sortuj..</option>
              <option value="volvo">Volvo</option>
            </select>
            <button onClick={handleFilterButtonMobile} className='flex flex-row items-center border-[1px] border-sunrise-300 rounded-md px-2 py-1'>
            <IoFilter className='mx-1'/>
            <span className='mx-1 font-semibold'>Filtry</span>
          </button>
          </div>
          </div>      
          {filtersOpenMobile &&
          <div className='flex flex-col my-2'>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
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

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
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
                  <input type='number' min={1900} max={2023} placeholder='Od' className='rounded-md px-2 py-1 text-sm border-sunrise-400' />
                  <input type='number' min={1900} max={2023} placeholder='Do' className='rounded-md px-2 py-1 text-sm border-sunrise-400' />
                </div>
                
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
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
                <div className='grid grid-cols-2 gap-3 w-full'>
                  <input type='number' min={0} max={1000} placeholder='Od' className='rounded-md px-2 py-1 text-sm border-sunrise-400' />
                  <input type='number' min={0} max={1000} placeholder='Od' className='rounded-md px-2 py-1 text-sm border-sunrise-400' />
                </div>
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Kategorie</h1>
                <button className='pointer' onClick={() => setCategoryFilter(!categoryFilter)}>
                  {categoryFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {categoryFilter &&
              <>
              <div className='divider' />
                <div className='grid grid-cols-2 gap-1 w-full py-2 px-3'>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Akcja</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Komedia</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Fantasy</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Science Fiction</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Dramat</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Romans</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Thriller</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Przygodowe</label>
                </div>
                
                </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Autor</h1>
                <button className='pointer' onClick={() => setAuthorFilter(!authorFilter)}>
                  {authorFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {authorFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1 flex flex-col'>
                <div className='flex flex-col w-full'>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Andrzej Sapkowski</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">J.K. Rowling</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Stephen King</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Zygmunt Miłoszewski</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">J.R.R. Tolkien</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Agatha Christie</label>
                </div>
                <div className='w-full'>
                <button className='text-xs w-auto text-orange-400'>Zobacz więcej..</button>
                </div>
               </div>
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Wydawnictwo</h1>
                <button className='pointer' onClick={() => setPublisherFilter(!publisherFilter)}>
                  {publisherFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {publisherFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1 flex flex-col'>
                <div className='flex flex-col w-full'>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Wydawnictwo Znak</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Wydawnictwo Zysk i S-ka</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Wydawnictwo Czarne</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Polskie Wydawnictwo Naukowe</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Nasza Rodzina</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Nasza Księgarnia</label>
                </div>
                <div className='w-full'>
                <button className='text-xs w-auto text-orange-400'>Zobacz więcej..</button>
                </div>
               </div>
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Dostępność</h1>
                <button className='pointer' onClick={() => setStockFilter(!stockFilter)}>
                  {stockFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {stockFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1 flex flex-col'>
                <div className='flex flex-col w-full'>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Dostępna</label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Niedostępna</label>
                </div>
               </div>
              </div>
              </>
            }
            </div>

            <div className='flex flex-col rounded-md border-[1px] bg-white border-sunrise-300 dark:bg-midnight-900 dark:border-midnight-700 py-2 my-1'>
              <div className='flex flex-row justify-between items-center w-full px-3 py-1'>
                <h1 className='font-[500]'>Ocena</h1>
                <button className='pointer' onClick={() => setScoreFilter(!scoreFilter)}>
                  {scoreFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
                  </button>
              </div>
              {scoreFilter &&
              <>
              <div className='divider' />
              <div className='px-3 py-1 flex flex-col'>
                <div className='flex flex-col w-full'>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs"><Stars score={1} /></label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs"><Stars score={2} /></label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs"><Stars score={3} /></label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs"><Stars score={4} /></label>
                </div>
                <div class="flex items-center my-1">
                  <input id='checkbox-horror' type="checkbox" value="" class="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded no-ring dark:bg-gray-700 dark:border-gray-600"/>
                  <label for='checkbox-horror' class="ml-2 text-xs"><Stars score={5} /></label>
                </div>
               </div>
              </div>
              </>
            }
            </div>
            <button className='text-base rounded-md py-2 my-2 bg-orange-400 font-[500] text-white hover:bg-orange-500'>Szukaj wyników</button>

          </div>
          }
          
        </div>
        <div className='bg-white rounded-md h-full py-0 lg:py-5 px-6 dark:bg-midnight-900'>
          <h1 className='text-2xl font-bold text-midnight-950 dark:text-white hidden lg:inline-block'>Książki</h1>
          <div className='lg:flex flex-row justify-between items-center hidden'>
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
          {/* <div className='divider'/> */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-1 lg:gap-2'>
            {books.map(item => (
              <Link to='/ksiazka' className='bg-sunrise-200 lg:bg-white flex flex-col px-4 py-4 my-2 rounded-md items-center dark:bg-midnight-900 dark:hover:bg-midnight-950 group hover:bg-sunrise-200 hover:shadow-md'>
                <div className='flex flex-row items-center w-full'>
                  <GoDotFill className={`${item.available ? "text-green-500" : "text-gray-500"} text-xs`}/>
                  {item.available === true ? <p className='text-green-500 text-xs mx-1'>Dostępna</p> : <p className='text-gray-500 text-xs mx-1'>Niedostępna</p>}
                </div>
                <div className='relative w-full flex items-center justify-center'>
                  <img src={item.imgURL} className='w-full object-cover aspect-[3/4] rounded-md my-1'/>
                  {item.wishlisted ?
                    <button className='absolute top-0 right-0 rounded-lg p-2 bg-white text-orange-400'><FaHeart /></button>
                  : <button className='absolute top-0 right-0 rounded-lg p-2 bg-sunrise-400 text-white hover:text-orange-400'><FaHeart /></button>
                  }
                </div>
                <div className='flex flex-col items-start w-full'>
                <h1 className='w-full font-semibold text-blue-950 dark:text-midnight-100 text-sm truncated-text'>{item.title}</h1>
                <p className='text-xs font-light my-1 text-midnight-400'>{item.author}</p>
                <Stars score={item.score} />
                <h2 className='font-semibold text-blue-950 dark:text-midnight-100 my-1'>{item.price}zł</h2>
                </div>
                <button className='w-full bg-orange-400 text-white rounded-md px-3 py-2 my-0 flex flex-row items-center text-xs justify-center transition-all hover:bg-orange-500'>
                  <RiShoppingCart2Fill className='mx-1'/>
                  <span>Dodaj do koszyka</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
