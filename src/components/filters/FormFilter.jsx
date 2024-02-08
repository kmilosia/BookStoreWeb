import React, { useEffect } from 'react'
import { useState } from 'react'
import FilterLabelElement from './FilterLabelElement'
import { getForms } from '../../utils/api/dictionaryAPI'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function FormFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
const [forms, setForms] = useState([])
const handleCheckboxChange = (formId) => {
    const isSelected = filterElements.form.includes(`&FormIds=${formId}`)
    if (isSelected) {
      setFilterElements((prevValues) => ({
        ...prevValues,
        form: prevValues.form.replace(`&FormIds=${formId}`, ''),
    }))
    } else {
      setFilterElements((prevValues) => ({
        ...prevValues,
        form: `${prevValues.form}&FormIds=${formId}`,
    }))
    }
  }
useEffect(() => {
  getForms(setForms)
}, [])
  return (
    <div className='filter-wrapper'>
        <div onClick={() => setFiltersOpen({...filtersOpen, form: !filtersOpen.form})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Forma</h1>
        <button className='pointer'>
            {filtersOpen.form ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.form &&
        <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
            {forms?.map((item, index) => {
                  return <FilterLabelElement key={index} value={item.id} isChecked={filterElements.form.includes(`&FormIds=${item.id}`)} onChange={handleCheckboxChange} title={item.name === 'Book' ? 'Książka' : 'Ebook'} />
                })}
            </div>
        </div>
    }
  </div>
  )
}

export default FormFilter
