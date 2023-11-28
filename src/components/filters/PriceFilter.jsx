import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'

function PriceFilter() {
const [showFilter, setShowFilter] = useState(false)
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const handleMinPriceChange = (event) => {
  setMinPrice(event.target.value);
}
const handleMaxPriceChange = (event) => {
  setMaxPrice(event.target.value);
}
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Cena" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='py-2 px-3 grid grid-cols-2 gap-2'>
                <div className='flex flex-col'>
                  <label className='text-xs font-light mb-1'>Min.</label>
                  <input type='number' value={minPrice} onChange={handleMinPriceChange} className='filter-number-input'/>
                </div>
                <div className='flex flex-col'>
                  <label className='text-xs font-light mb-1'>Max.</label>
                  <input type='number' value={maxPrice} onChange={handleMaxPriceChange} className='filter-number-input'/>
                </div>
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default PriceFilter
