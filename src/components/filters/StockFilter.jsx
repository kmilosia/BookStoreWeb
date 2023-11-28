import React from 'react'
import FilterHeader from './FilterHeader'
import { useState, useEffect } from 'react'
import FilterLabelElement from './FilterLabelElement'
import axiosClient from '../../utils/api/axiosClient';

function StockFilter() {
const [showFilter, setShowFilter] = useState(false)
const [availability, setAvailability] = useState([])
const getAvailabilities = async () => {
  try {
    const response = await axiosClient.get(`/Availability`)
    setAvailability(response.data)
  } catch (err) {
    console.error(err)
  }
}
useEffect(() => {
  getAvailabilities()
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
                  return <FilterLabelElement key={index} title={item.name} />
                })}
              </div>
        </div>
        </>
    }
  </div>
  )
}

export default StockFilter
