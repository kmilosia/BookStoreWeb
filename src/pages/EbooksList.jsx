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
import EbookListElement from '../components/products/EbookListElement'
import Select from '../components/forms/Select'
import { getFilteredSortedBooks } from '../utils/api/bookItemsAPI'
import PageLoader from '../components/elements/PageLoader'

function EbooksList() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])
    const [sorting, setSorting] = useState('')
    const [minPriceFilter, setMinPriceFilter] = useState('')
    const [maxPriceFilter, setMaxPriceFilter] = useState('')
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
      const buildFilter = () => {
        let filter = ''
        if (minPriceFilter !== '') {
          filter += `&priceFrom=${minPriceFilter}`
        }
        if (maxPriceFilter !== '') {
          filter += `&priceTo=${maxPriceFilter}`
        }
        if (authorFilter !== '') {
            filter += `${authorFilter}`
        }
        if (publisherFilter !== '') {
            filter += `${publisherFilter}`
        }
        if (categoryFilter !== '') {
            filter += `${categoryFilter}`
        }
        if (languageFilter !== '') {
            filter += `${languageFilter}`
        }
        if (stockFilter !== '') {
            filter += `${stockFilter}`
        }
        if (scoreFilter !== '') {
            filter += `${scoreFilter}`
        }
        return filter
      }
    const applyFilters =() => {
        setIsFilterOpen(false)
        const newFilter = buildFilter()
        setFilter(newFilter)
    }
    const resetFilters = () => {
        setMinPriceFilter('')
        setMaxPriceFilter('')
        setAuthorFilter('')
        setPublisherFilter('')
        setCategoryFilter('')
        setLanguageFilter('')
        setScoreFilter('')
        setStockFilter('')
        setFilter('')
    }
    useEffect(() => {
        getFilteredSortedBooks(2,sorting,filter,setResults,setLoading)
    },[])
    useEffect(() => {
        getFilteredSortedBooks(2,sorting,filter,setResults,setLoading)
    },[sorting, filter])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr] lg:gap-10'>
                <div className={`flex flex-col bg-gray-100 dark:bg-midnight-950 shadow-md lg:shadow-none py-5 lg:py-0 px-5 lg:px-0 absolute z-[1000000] lg:z-10 w-full lg:relative lg:top-auto right-0 lg:right-auto transition-all duration-500 ${isFilterOpen ? 'top-0 overflow-y-auto' : 'top-[-1000px]'}`}>
                    <div className='flex flex-col'>
                        <div className='flex w-full items-center'>
                            <h1 className='text-3xl font-semibold hidden lg:inline-block w-full'>Filtrowanie</h1>
                            {filter !== '' &&
                            <button onClick={resetFilters} className='bordered-purple-button whitespace-nowrap text-xs px-3 py-2'>Wyczyść filtry</button>}
                        </div>
                        <div className='flex flex-col my-2'>
                            <PriceFilter setMinPriceFilter={setMinPriceFilter} setMaxPriceFilter={setMaxPriceFilter}/>
                            <AuthorFilter setAuthorFilter={setAuthorFilter}/>
                            <PublisherFilter setPublisherFilter={setPublisherFilter}/>
                            <CategoryFilter setCategoryFilter={setCategoryFilter}/>
                            <LanguageFilter setLanguageFilter={setLanguageFilter}/>
                            <ScoreFilter setScoreFilter={setScoreFilter}/>
                            <StockFilter setStockFilter={setStockFilter}/>
                            <button onClick={applyFilters} className='purple-button sticky bottom-2'>Filtruj wyniki</button>
                        </div>
                        <ToggleFilterMenuButton toggleFilterMenu={toggleFilterMenu}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-semibold'>Ebooki</h1>
                            <h2 className='flex items-center mt-2'><span className='mr-1 font-semibold'>{results ? results.length : '0'}</span>wyników</h2>
                        </div>
                        <div className='flex my-2 lg:my-0'>
                            <FilterButton toggleFilterMenu={toggleFilterMenu}/>
                            <Select onChange={handleSortingChange} sortOptions={productSortOptions} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5 my-5 w-full'>
                        {loading ? <div className='col-span-5'><PageLoader /></div> :
                        results && results.map((item,index) => {
                            return (
                                <EbookListElement key={index} item={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EbooksList
