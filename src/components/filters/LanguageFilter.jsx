import React, { useEffect } from 'react'
import FilterHeader from './FilterHeader'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import { getLanguages } from '../../utils/api/filtersAPI'

function LanguageFilter({setLanguageFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [languages, setLanguages] = useState([])
const [displayedFields, setDisplayedFields] = useState(6)
useEffect(() => {
  getLanguages(setLanguages)
}, [])
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? languages.length : 6));
}
const handleCheckboxChange = (value, isChecked) => {
  if (isChecked) {
    setLanguageFilter((prevFilter) => `${prevFilter}${value}`)
  } else {
    setLanguageFilter((prevFilter) =>
      prevFilter.replace(`${value}`, '')
    )
  }
}
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Język" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
              {languages &&
                languages.slice(0, displayedFields).map((item, index) => {
                  const value = `&languageIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {languages.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
        </>
    }
  </div>
  )
}

export default LanguageFilter
