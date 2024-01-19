import React, { useEffect } from 'react'
import ShowMoreButton from '../buttons/ShowMoreButton'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getPublishers } from '../../utils/api/dictionaryAPI'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function PublisherFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const [publishers, setPublishers] = useState([]);
const [displayedFields, setDisplayedFields] = useState(6)
const handleShowMore = () => {
  setDisplayedFields((prevCount) => (prevCount === 6 ? publishers.length : 6));
}

const handleCheckboxChange = (publisherId) => {
  const isSelected = filterElements.publisher.includes(`&PublisherIds=${publisherId}`)
  if (isSelected) {
    setFilterElements((prevValues) => ({
      ...prevValues,
      publisher: prevValues.publisher.replace(`&PublisherIds=${publisherId}`, ''),
  }))
  } else {
    setFilterElements((prevValues) => ({
      ...prevValues,
      publisher: `${prevValues.publisher}&PublisherIds=${publisherId}`,
  }))
  }
}
useEffect(() => {
  getPublishers(setPublishers)
}, [])
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, publisher: !filtersOpen.publisher})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Wydawnictwo</h1>
        <button className='pointer'>
            {filtersOpen.publisher ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.publisher &&
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
            {publishers?.slice(0, displayedFields).map((item, index) => {
                  return <FilterLabelElement key={index} value={item.id} onChange={handleCheckboxChange} title={item.name} />
                })}
            </div>
            {publishers.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
        </div>
    }
  </div>
  )
}

export default PublisherFilter
