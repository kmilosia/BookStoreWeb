import React, { useEffect, useState } from 'react'
import Select from '../components/forms/Select'
import BookElement from '../components/products/BookElement'
import {HiOutlineSearch} from 'react-icons/hi'
import { scrollTop } from '../utils/functions/scrollTop'
import SearchInput from '../components/forms/SearchInput'
import { productsData, searchSortOptions } from '../utils/data'

function Search() {
  const [results, setResults] = useState(false)
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {results ?
        <>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold dark:text-white'>Wyniki wyszukiwania</h1>
            <p>25 rezultatów</p>
          </div>
          <div className='w-full lg:w-1/5'>
            <Select sortOptions={searchSortOptions}/>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-3'>
          {productsData.map((item,index) => {
            return (
              <BookElement key={index} title={item.title} form={item.form} price={item.price} score={item.score} id={item.id} imgURL={item.url} author={item.author} />
            )
          })}
        </div>
        </>
        :
        <div className='flex flex-col w-full justify-center items-center py-5'>
          <img src='https://iili.io/JxdQe0G.png' className='w-1/3 mb-2 h-auto object-contain'/>
          <h1 className='text-3xl font-medium my-1'>Nie znaleziono takich wyników wyszukiwania</h1>
          <p className='mb-3'>Spróbuj wpisać inną frazę wyszukiwania</p>
          <SearchInput />
        </div>
        }
      </div>
    </div>
  )
}

export default Search
