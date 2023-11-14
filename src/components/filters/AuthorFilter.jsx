import React from 'react'
import FilterHeader from './FilterHeader'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'

function AuthorFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Autor" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                <FilterLabelElement title='Andrzej Sapkowski' />
                <FilterLabelElement title='George R.R. Martin' />
                <FilterLabelElement title='J.K. Rowling' />
                <FilterLabelElement title='Barack Obama' />
                <FilterLabelElement title='Britney Spears' />
            </div>
            <ShowMoreButton />
        </div>
        </>
    }
  </div>
  )
}

export default AuthorFilter
