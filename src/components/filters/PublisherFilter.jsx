import React, { useEffect } from 'react'
import FilterHeader from './FilterHeader'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getPublishers } from '../../utils/api/dictionaryAPI'

function PublisherFilter({setPublisherFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [publishers, setPublishers] = useState([]);
const [displayedFields, setDisplayedFields] = useState(6)
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? publishers.length : 6));
}
const handleCheckboxChange = (value, isChecked) => {
  if (isChecked) {
    setPublisherFilter((prevFilter) => `${prevFilter}${value}`)
  } else {
    setPublisherFilter((prevFilter) =>
      prevFilter.replace(`${value}`, '')
    )
  }
}
useEffect(() => {
  getPublishers(setPublishers)
}, [])
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Wydawnictwo" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
            {publishers &&
                publishers.slice(0, displayedFields).map((item, index) => {
                  const value = `&publisherIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {publishers.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
        </>
    }
  </div>
  )
}

export default PublisherFilter
