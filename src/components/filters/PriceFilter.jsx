import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import { FaSearch  } from 'react-icons/fa'

function PriceFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Cena" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='w-full py-2 px-3 grid grid-cols-[1fr_1fr_max-content] gap-2'>
                <input type='number' value={10} className='filter-number-input'/>
                <input type='number' value={100} className='filter-number-input'/>
                <button className='bg-purple-500/80 hover:bg-purple-600/80 rounded-md text-white p-2'><FaSearch  /></button>
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default PriceFilter
