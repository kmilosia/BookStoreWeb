import React, { useEffect } from 'react'
import StockFilter from '../components/filters/StockFilter'
import ScoreFilter from '../components/filters/ScoreFilter'
import AuthorFilter from '../components/filters/AuthorFilter'
import PublisherFilter from '../components/filters/PublisherFilter'
import CategoryFilter from '../components/filters/CategoryFilter'
import LanguageFilter from '../components/filters/LanguageFilter'
import PriceFilter from '../components/filters/PriceFilter'
import FilterButton from '../components/buttons/FilterButton'
import PageLoader from '../components/elements/PageLoader'
import { useState } from 'react'
import ToggleFilterMenuButton from '../components/buttons/ToggleFilterMenuButton'
import { productSortOptions } from '../utils/data'
import BookListElement from '../components/products/BookListElement'
import Select from '../components/forms/Select'
import { getDiscountedBooksList, getFilteredSortedBooks } from '../utils/api/bookItemsAPI'
import FormFilter from '../components/filters/FormFilter'
import DiscountFilter from '../components/filters/DiscountFilter'

function Discounts() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])
    const [sorting, setSorting] = useState('')
    const [filter, setFilter] = useState('')
    const [filterElements, setFilterElements] = useState({
        minPrice: '',
        maxPrice: '',
        author: '',
        publisher: '',
        category: '',
        language: '',
        score: '',
        stock: '',
        form: '',
    })
    const [filtersOpen, setFiltersOpen] = useState({
        form: false,
        stock: false,
        score: false,
        publisher: false,
        author: false,
        price: false,
        language: false,
        category: false
    })
    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen)
    }
    const handleSortingChange = (e) => {
        setSorting(e.target.value)
    }
      const buildFilter = () => {
        let filter = ''
        if (filterElements.minPrice !== '') {
          filter += `&priceFrom=${filterElements.minPrice}`
        }
        if (filterElements.maxPrice !== '') {
          filter += `&priceTo=${filterElements.maxPrice}`
        }
        if (filterElements.author !== '') {
            filter += `${filterElements.author}`
        }
        if (filterElements.publisher !== '') {
            filter += `${filterElements.publisher}`
        }
        if (filterElements.category !== '') {
            filter += `${filterElements.category}`
        }
        if (filterElements.language !== '') {
            filter += `${filterElements.language}`
        }
        if (filterElements.stock !== '') {
            filter += `${filterElements.stock}`
        }
        if (filterElements.score !== '') {
            filter += `${filterElements.score}`
        }
        if (filterElements.form !== '') {
            filter += `${filterElements.form}`
        }
        return filter
      }
    const applyFilters =() => {
        setIsFilterOpen(false)
        const newFilter = buildFilter()
        setFilter(newFilter)
    }
    const resetFilters = () => {
        setFilterElements({
            minPrice: '',
            maxPrice: '',
            author: '',
            publisher: '',
            category: '',
            language: '',
            score: '',
            stock: '',
            form: '',
          })
          setFiltersOpen({
            form: false,
            stock: false,
            score: false,
            publisher: false,
            author: false,
            price: false,
            language: false,
            category: false,
        })
        const newFilter = buildFilter()
        setFilter(newFilter)
    }
    useEffect(() => {
        setLoading(true)
        getDiscountedBooksList(sorting,filter,setResults,setLoading)
    },[sorting, filter])
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr] lg:gap-10'>
            <div className={`flex flex-col bg-gray-100 dark:bg-midnight-950 shadow-md lg:shadow-none py-5 lg:py-0 px-5 lg:px-0 absolute z-[1000000] lg:z-10 w-full lg:relative lg:top-auto right-0 lg:right-auto duration-500 ${isFilterOpen ? 'top-0 overflow-y-auto' : 'top-[-1000px]'}`}>
                    <div className='flex flex-col'>
                        <div className='flex w-full items-center'>
                            <h1 className='text-3xl font-semibold hidden lg:inline-block w-full'>Filtrowanie</h1>
                            {filter !== '' &&
                            <button onClick={resetFilters} className='bordered-purple-button whitespace-nowrap text-xs px-3 py-2'>Wyczyść filtry</button>}
                        </div>
                        <div className='flex flex-col my-2'>
                            <FormFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <PriceFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <AuthorFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <PublisherFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <CategoryFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <LanguageFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <ScoreFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <StockFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} filterElements={filterElements} setFilterElements={setFilterElements}/>
                            <button onClick={applyFilters} className='purple-button sticky bottom-2'>Filtruj wyniki</button>
                        </div>
                        <ToggleFilterMenuButton toggleFilterMenu={toggleFilterMenu}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-semibold'>Promocje</h1>
                            <h2 className='flex items-center mt-2'><span className='mr-1 font-semibold'>{results ? results.length : '0'}</span>znalezione wyniki</h2>
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

export default Discounts
