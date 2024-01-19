import React from 'react'
import { useState, useEffect } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getAvailabilities } from '../../utils/api/dictionaryAPI';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function StockFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const [availability, setAvailability] = useState([])
const handleCheckboxChange = (availabilityId) => {
  const isSelected = filterElements.stock.includes(`&AvailabilitiesIds=${availabilityId}`)
  if (isSelected) {
    setFilterElements((prevValues) => ({
      ...prevValues,
      stock: prevValues.stock.replace(`&AvailabilitiesIds=${availabilityId}`, ''),
  }))
  } else {
    setFilterElements((prevValues) => ({
      ...prevValues,
      stock: `${prevValues.stock}&AvailabilitiesIds=${availabilityId}`,
  }))
  }
}
useEffect(() => {
  getAvailabilities(setAvailability)
}, [])
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, stock: !filtersOpen.stock})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Dostępność</h1>
        <button className='pointer'>
            {filtersOpen.stock ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.stock &&
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
              {availability?.map((item, index) => {
                  return <FilterLabelElement key={index} value={item.id} onChange={handleCheckboxChange} title={item.name} />
                })}
              </div>
        </div>
    }
  </div>
  )
}

export default StockFilter
