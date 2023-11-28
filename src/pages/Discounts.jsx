import React, { useState } from 'react'
import PriceFilter from '../components/filters/PriceFilter'
import AuthorFilter from '../components/filters/AuthorFilter'
import PublisherFilter from '../components/filters/PublisherFilter'
import CategoryFilter from '../components/filters/CategoryFilter'
import LanguageFilter from '../components/filters/LanguageFilter'
import ScoreFilter from '../components/filters/ScoreFilter'
import StockFilter from '../components/filters/StockFilter'
import TypeFilter from '../components/filters/TypeFilter'
import ToggleFilterMenuButton from '../components/buttons/ToggleFilterMenuButton'
import FilterButton from '../components/buttons/FilterButton'
import Select from '../components/forms/Select'
import BookElement from '../components/products/BookElement'
import { productsData, sortOptions } from '../utils/data'

function Discounts() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen)
    }
  return (
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
        <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr] lg:gap-10'>
            <div className={`flex flex-col fixed w-full lg:relative lg:top-auto right-0 lg:right-auto transition-all duration-500 ${isFilterOpen ? 'top-10' : 'top-[-1000px]'}`}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold hidden lg:inline-block'>Filtrowanie</h1>
                    <div className='flex flex-col my-2'>
                        <TypeFilter />
                        <PriceFilter />
                        <AuthorFilter />
                        <PublisherFilter />
                        <CategoryFilter />
                        <LanguageFilter />
                        <ScoreFilter />
                        <StockFilter />
                        <button className='purple-button sticky bottom-2'>Filtruj wyniki</button>
                    </div>
                    <ToggleFilterMenuButton toggleFilterMenu={toggleFilterMenu}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-semibold'>Promocje</h1>
                        <h2 className='flex items-center mt-2'><span className='mr-1 font-semibold'>17,340</span>wyników</h2>
                    </div>
                    <div className='flex my-2 lg:my-0'>
                        <FilterButton toggleFilterMenu={toggleFilterMenu}/>
                        <Select sortOptions={sortOptions} />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5 my-5'>
                    {productsData.map((item,index) => {
                        return (
                            <BookElement key={index} id={item.id} imgURL={item.url} author={item.author} score={item.score} title={item.title} price={item.price} form={item.form}/>
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
