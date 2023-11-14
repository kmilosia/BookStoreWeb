import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'

function StockFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Dostępność" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                <FilterLabelElement title='Dostępna' />
                <FilterLabelElement title='Niedostępna' />
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default StockFilter
