import React from 'react'
import FilterHeader from './FilterHeader'
import { useState, useEffect } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getAvailabilities } from '../../utils/api/dictionaryAPI';

function StockFilter({setStockFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [availability, setAvailability] = useState([])
const handleCheckboxChange = (value, isChecked) => {
  if (isChecked) {
    setStockFilter((prevFilter) => `${prevFilter}${value}`)
  } else {
    setStockFilter((prevFilter) =>
      prevFilter.replace(`${value}`, '')
    )
  }
}
useEffect(() => {
  getAvailabilities(setAvailability)
}, [])
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Dostępność" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
              {availability &&
                availability.map((item, index) => {
                  const value = `&availabilitiesIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={item.name} />
                })}
              </div>
        </div>
        </>
    }
  </div>
  )
}

export default StockFilter
