import React, { useEffect } from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getForms } from '../../utils/api/filtersAPI'

function TypeFilter({setTypeFilter}) {
const [showFilter, setShowFilter] = useState(false)
const [forms, setForms] = useState([]);
const handleCheckboxChange = (value, isChecked) => {
  if (isChecked) {
    setTypeFilter((prevFilter) => `${prevFilter}${value}`)
  } else {
    setTypeFilter((prevFilter) =>
      prevFilter.replace(`${value}`, '')
    )
  }
}
useEffect(() => {
  getForms(setForms)
}, [])
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Rodzaj książki" />
        {showFilter &&
        <>
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
            {forms &&
                forms.map((item, index) => {
                  const value = `&formIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
        </div>
        </>
    }
  </div>
  )
}

export default TypeFilter
