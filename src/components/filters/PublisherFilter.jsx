import React from 'react'
import FilterHeader from './FilterHeader'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'

function PublisherFilter() {
const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Wydawnictwo" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                <FilterLabelElement title='Nasza Księgarnia' />
                <FilterLabelElement title='Wydawnictwo Czarne' />
                <FilterLabelElement title='SuperNova' />
                <FilterLabelElement title='Wydawnictwo Znak' />
                <FilterLabelElement title='Zysk i S-ka' />
            </div>
            <ShowMoreButton />
        </div>
        </>
    }
  </div>
  )
}

export default PublisherFilter
