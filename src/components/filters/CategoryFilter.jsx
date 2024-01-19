import React, { useEffect } from 'react'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { getCategories } from '../../utils/api/dictionaryAPI'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function CategoryFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const [categories, setCategories] = useState([])
const [displayedFields, setDisplayedFields] = useState(6)
useEffect(() => {
  getCategories(setCategories)
}, [])
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? categories.length : 6));
}
const handleCheckboxChange = (categoryId) => {
  const isSelected = filterElements.category.includes(`&CategoryIds=${categoryId}`)
  if (isSelected) {
    setFilterElements((prevValues) => ({
      ...prevValues,
      category: prevValues.category.replace(`&CategoryIds=${categoryId}`, ''),
  }))
  } else {
    setFilterElements((prevValues) => ({
      ...prevValues,
      category: `${prevValues.category}&CategoryIds=${categoryId}`,
  }))
  }
}
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, category: !filtersOpen.category})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Kategorie</h1>
        <button className='pointer'>
            {filtersOpen.category ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.category &&
        <div className='filter-list-wrapper'>
            <div className='grid grid-cols-2 gap-1 w-full py-2 px-3'>
            {categories?.slice(0, displayedFields).map((item, index) => {
                  return <FilterLabelElement key={index} value={item.id} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {categories.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
    }
  </div>
  )
}

export default CategoryFilter
