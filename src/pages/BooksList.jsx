import React, { useEffect } from 'react'
import StockFilter from '../components/filters/StockFilter'
import ScoreFilter from '../components/filters/ScoreFilter'
import AuthorFilter from '../components/filters/AuthorFilter'
import PublisherFilter from '../components/filters/PublisherFilter'
import CategoryFilter from '../components/filters/CategoryFilter'
import LanguageFilter from '../components/filters/LanguageFilter'
import PriceFilter from '../components/filters/PriceFilter'
import FilterButton from '../components/buttons/FilterButton'
import { useState } from 'react'
import ToggleFilterMenuButton from '../components/buttons/ToggleFilterMenuButton'
import { productSortOptions } from '../utils/data'
import { scrollTop } from '../utils/functions/scrollTop'
import BookListElement from '../components/products/BookListElement'
import Select from '../components/forms/Select'
import axiosClient from '../utils/api/axiosClient'

function BooksList() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [results, setResults] = useState([])
    const [sorting, setSorting] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const [authorFilter, setAuthorFilter] = useState('')
    const [publisherFilter, setPublisherFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    const [languageFilter, setLanguageFilter] = useState('')
    const [scoreFilter, setScoreFilter] = useState('')
    const [stockFilter, setStockFilter] = useState('')
    const [filter, setFilter] = useState('')
    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen)
    }
    const handleSortingChange = (e) => {
        setSorting(e.target.value)
      }
    const getResults = async () => {
        try{
            const response = await axiosClient.get(`/BookItems/All-Books?${sorting}${filter}`)
            setResults(response.data)
        }catch(err){
            console.error(err)
        }
      }
    useEffect(() => {
        scrollTop()
        getResults()
    },[])
    useEffect(() => {
        console.log(priceFilter)
    },[priceFilter])
    useEffect(() => {
        getResults()
      },[sorting])
      useEffect(() => {
        setFilter(stockFilter,scoreFilter, languageFilter, categoryFilter,publisherFilter,authorFilter,priceFilter)
      },[stockFilter,scoreFilter,languageFilter,categoryFilter,publisherFilter,authorFilter,priceFilter])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr] lg:gap-10'>
            <div className={`flex flex-col bg-gray-100 dark:bg-midnight-950 lg:bg-transparent py-5 lg:py-0 px-5 lg:px-0 absolute z-[1000000] lg:z-10 w-full lg:relative lg:top-auto right-0 lg:right-auto duration-500 ${isFilterOpen ? 'top-0 overflow-y-auto' : 'top-[-1000px]'}`}>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-semibold hidden lg:inline-block'>Filtrowanie</h1>
                        <div className='flex flex-col my-2'>
                            <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
                            <AuthorFilter />
                            <PublisherFilter />
                            <CategoryFilter />
                            <LanguageFilter />
                            <ScoreFilter />
                            <StockFilter stockFilter={stockFilter} setStockFilter={setStockFilter}/>
                            <button onClick={() => {getResults()}} className='purple-button sticky bottom-2'>Filtruj wyniki</button>
                        </div>
                        <ToggleFilterMenuButton toggleFilterMenu={toggleFilterMenu}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-semibold'>Książki</h1>
                            <h2 className='flex items-center mt-2'><span className='mr-1 font-semibold'>{results ? results.length : '0'}</span>wyników</h2>
                        </div>
                        <div className='flex my-2 lg:my-0'>
                            <FilterButton toggleFilterMenu={toggleFilterMenu}/>
                            <Select onChange={handleSortingChange} sortOptions={productSortOptions} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5 my-5'>
                        {results && results.map((item,index) => {
                            return (
                                <BookListElement key={index} item={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BooksList
