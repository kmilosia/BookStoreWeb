import React, { useEffect } from 'react'
import FilterHeader from './FilterHeader'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import ShowMoreButton from '../buttons/ShowMoreButton'
import axiosClient from '../../utils/api/axiosClient'

function CategoryFilter() {
const [showFilter, setShowFilter] = useState(false)
const [categories, setCategories] = useState([])
const [displayedFields, setDisplayedFields] = useState(6)

const getCategories = async () => {
  try {
    const response = await axiosClient.get(`/Category`)
    setCategories(response.data)
  } catch (err) {
    console.error(err)
  }
}
useEffect(() => {
  getCategories()
}, [])
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? categories.length : 6));
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
                  return <FilterLabelElement key={index} title={item.name} />;
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
