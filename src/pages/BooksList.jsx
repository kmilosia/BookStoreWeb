import React from 'react'
import StockFilter from '../components/filters/StockFilter'
import ScoreFilter from '../components/filters/ScoreFilter'
import AuthorFilter from '../components/filters/AuthorFilter'
import PublisherFilter from '../components/filters/PublisherFilter'
import TypeFilter from '../components/filters/TypeFilter'
import CategoryFilter from '../components/filters/CategoryFilter'
import LanguageFilter from '../components/filters/LanguageFilter'
import PriceFilter from '../components/filters/PriceFilter'
import ProductSelect from '../components/forms/ProductSelect'
import FilterButton from '../components/buttons/FilterButton'

function BooksList() {
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-10'>

                <div className='flex flex-col relative'>
                    <div className='flex flex-col sticky top-20 bg-white dark:bg-midnight-800 shadow-md rounded-md px-10 py-10'>
                        <h1 className='text-3xl font-semibold'>Filtrowanie</h1>
                        <div className='flex flex-col my-2'>
                            <TypeFilter />
                            <PriceFilter />
                            <AuthorFilter />
                            <PublisherFilter />
                            <CategoryFilter />
                            <LanguageFilter />
                            <ScoreFilter />
                            <StockFilter />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-semibold'>Książki</h1>
                            <h2 className='flex items-center mt-2'><span className='mr-1 font-semibold'>17,340</span>wyników</h2>
                        </div>
                        <div className='flex'>
                            <FilterButton />
                            <ProductSelect />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default BooksList
