import React, { useEffect } from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { getCategories } from '../../utils/api/dictionaryAPI'

function CategoryFilter({setCategoryFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [categories, setCategories] = useState([])
const [displayedFields, setDisplayedFields] = useState(6)
useEffect(() => {
  getCategories(setCategories)
}, [])
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? categories.length : 6));
}
const handleCheckboxChange = (value, isChecked) => {
  if (isChecked) {
    setCategoryFilter((prevFilter) => `${prevFilter}${value}`)
  } else {
    setCategoryFilter((prevFilter) =>
      prevFilter.replace(`${value}`, '')
    )
  }
}
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Kategorie" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='grid grid-cols-2 gap-1 w-full py-2 px-3'>
            {categories &&
                categories.slice(0, displayedFields).map((item, index) => {
                  const value = `&categoryIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {categories.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
        </>
    }
  </div>
  )
}

export default CategoryFilter
