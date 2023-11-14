import React from 'react'
import FilterHeader from './FilterHeader'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'

function LanguageFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Język" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                <FilterLabelElement title='Angielski' />
                <FilterLabelElement title='Polski' />
                <FilterLabelElement title='Niemiecki' />
                <FilterLabelElement title='Hiszpański' />
                <FilterLabelElement title='Rosyjski' />
            </div>
            <ShowMoreButton />
        </div>
        </>
    }
  </div>
  )
}

export default LanguageFilter
