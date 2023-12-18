import React, { useEffect, useState } from 'react'
import Select from '../components/forms/Select'
import BookElement from '../components/products/BookElement'
import SearchInput from '../components/forms/SearchInput'
import { productSortOptions } from '../utils/data'
import { useSearchParams } from 'react-router-dom'
import { getSearchResults } from '../utils/api/bookItemsAPI'
import PageLoader from '../components/elements/PageLoader'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')
  const [results, setResults] = useState([])
  const [sorting, setSorting] = useState('')
  const [loading, setLoading] = useState(true)
  const handleSortingChange = (e) => {
    setSorting(e.target.value)
  }
  useEffect(() => {
    if(search){
      getSearchResults(search,sorting,setResults,setLoading)
    }
  },[search,sorting])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
      {loading ? <PageLoader /> : (
        results.length <= 0 ?
         <div className='flex flex-col w-full justify-center items-center py-5 min-h-[70vh]'>
           <img src='https://iili.io/JxdQe0G.png' className='w-full lg:w-1/4 h-auto object-contain'/>
           <h1 className='text-3xl font-semibold my-2'>Nie znaleziono takich wyników wyszukiwania</h1>
           <p className='mb-5 lg:mb-3 font-light'>Spróbuj wpisać inną frazę wyszukiwania</p>
           <SearchInput />
         </div>
        :
        <>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col cursor-default'>
            <h1 className='text-3xl font-semibold dark:text-white'>Wyniki wyszukiwania</h1>
            <p className='text-lg'>{results.length} rezultatów</p>
          </div>
          <div className='w-full lg:w-1/5 mt-3 lg:mt-0'>
            <Select onChange={handleSortingChange} sortOptions={productSortOptions}/>
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
        )}
      </div>
    </div>
  )
}

export default Search
