import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'

function TypeFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Rodzaj książki" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                <FilterLabelElement title='Książka' />
                <FilterLabelElement title='E-Book' />
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default TypeFilter
