import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function PriceFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const handleMinPriceChange = (e) => {
  setFilterElements((prevValues) => ({
    ...prevValues,
    minPrice: e.target.value
  }))
}
const handleMaxPriceChange = (e) => {
  setFilterElements((prevValues) => ({
    ...prevValues,
    maxPrice: e.target.value
  }))
}
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, price: !filtersOpen.price})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Cena</h1>
        <button className='pointer'>
            {filtersOpen.price ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.price &&
        <div className='filter-list-wrapper'>
            <div className='py-2 px-3 grid grid-cols-2 gap-2'>
                <div className='flex flex-col'>
                  <label className='text-xs font-light mb-1'>Min.</label>
                  <input type='number' value={filterElements.minPrice} min={0} onChange={handleMinPriceChange} className='filter-number-input'/>
                </div>
                <div className='flex flex-col'>
                  <label className='text-xs font-light mb-1'>Max.</label>
                  <input type='number' value={filterElements.maxPrice} onChange={handleMaxPriceChange} className='filter-number-input'/>
                </div>
            </div>
        </div>
    }
  </div>
  )
}

export default PriceFilter
