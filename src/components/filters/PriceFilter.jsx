import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'

function PriceFilter({priceFilter, setPriceFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [minPrice, setMinPrice] = useState('')
const [maxPrice, setMaxPrice] = useState('')
const handleMinPriceChange = (e) => {
  const newMinPrice = e.target.value;
  setMinPrice(newMinPrice);
  if (newMinPrice) {
    setPriceFilter((prevFilter) => `priceFrom=${newMinPrice}${prevFilter}`);
  } else {
    setPriceFilter((prevFilter) => prevFilter.replace('priceFrom=', ''));
  }
};

const handleMaxPriceChange = (e) => {
  const newMaxPrice = e.target.value;
  setMaxPrice(newMaxPrice);
  if (newMaxPrice) {
    setPriceFilter((prevFilter) => `priceTo=${newMaxPrice}${prevFilter}`);
  } else {
    setPriceFilter((prevFilter) => prevFilter.replace('priceTo=', ''));
  }
};

  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Cena" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='py-2 px-3 grid grid-cols-2 gap-2'>
                <div className='flex flex-col'>
                  <label className='text-xs font-light mb-1'>Min.</label>
                  <input type='number' value={minPrice} min={0} onChange={handleMinPriceChange} className='filter-number-input'/>
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
