import React, { useEffect, useState } from 'react'
import Select from '../components/forms/Select'
import BookElement from '../components/products/BookElement'
import { scrollTop } from '../utils/functions/scrollTop'
import SearchInput from '../components/forms/SearchInput'
import { productsData, searchSortOptions } from '../utils/data'
import { useSearchParams } from 'react-router-dom'
import axiosClient from '../utils/api/axiosClient';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')
  const [results, setResults] = useState([])
  const getResults = async () => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?searchPhrase=${search}`)
        setResults(response.data)
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
    scrollTop()
  },[])
  useEffect(() => {
    if(search){
      getResults()
    }
  },[search])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        {results.length <= 0 ?
         <div className='flex flex-col w-full justify-center items-center py-5'>
           <img src='https://iili.io/JxdQe0G.png' className='w-full lg:w-1/3 mb-2 h-auto object-contain'/>
           <h1 className='text-3xl font-medium my-3 lg:my-1 text-center'>Nie znaleziono takich wyników wyszukiwania</h1>
           <p className='mb-5 lg:mb-3'>Spróbuj wpisać inną frazę wyszukiwania</p>
           <SearchInput />
         </div>
        :
        <>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold dark:text-white'>Wyniki wyszukiwania</h1>
            <p className='text-lg'>{results.length} rezultatów</p>
          </div>
          <div className='w-full lg:w-1/5 mt-3 lg:mt-0'>
            <Select sortOptions={searchSortOptions}/>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-3'>
          {results.map((item,index) => {
            return (
              <BookElement key={index} item={item} />
            )
          })}
        </div>
        </>
        }
      </div>
    </div>
  )
}

export default Search
