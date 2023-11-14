import React from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'

function CategoryFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Kategorie" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='grid grid-cols-2 gap-1 w-full py-2 px-3'>
                <FilterLabelElement title='Fantasy' />
                <FilterLabelElement title='Science Fiction' />
                <FilterLabelElement title='Historia' />
                <FilterLabelElement title='Nauka' />
                <FilterLabelElement title='Romans' />
                <FilterLabelElement title='Podręcznik' />
                <FilterLabelElement title='Poradnik' />
                <FilterLabelElement title='Dla dzieci' />
                <FilterLabelElement title='Horror' />
                <FilterLabelElement title='Kryminał' />
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default CategoryFilter
