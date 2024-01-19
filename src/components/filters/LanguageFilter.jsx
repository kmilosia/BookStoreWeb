import React, { useEffect } from 'react'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import { getLanguages } from '../../utils/api/dictionaryAPI'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function LanguageFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const [languages, setLanguages] = useState([])
const [displayedFields, setDisplayedFields] = useState(6)
useEffect(() => {
  getLanguages(setLanguages)
}, [])
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? languages.length : 6));
}
const handleCheckboxChange = (languageId) => {
  const isSelected = filterElements.language.includes(`&LanguageIds=${languageId}`)
  if (isSelected) {
    setFilterElements((prevValues) => ({
      ...prevValues,
      language: prevValues.language.replace(`&LanguageIds=${languageId}`, ''),
  }))
  } else {
    setFilterElements((prevValues) => ({
      ...prevValues,
      language: `${prevValues.language}&LanguageIds=${languageId}`,
  }))
  }
}
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, language: !filtersOpen.language})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Język</h1>
        <button className='pointer'>
            {filtersOpen.language ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.language &&
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
                {languages?.slice(0, displayedFields).map((item, index) => {
                  return <FilterLabelElement key={index} value={item.id} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {languages.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
    }
  </div>
  )
}

export default LanguageFilter
