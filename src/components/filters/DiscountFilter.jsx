import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import FilterLabelElement from './FilterLabelElement'

function DiscountFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
    const handleCheckboxChange = (value) => {
        const isSelected = filterElements.discount.includes(value)
        if (isSelected) {
          setFilterElements((prevValues) => ({
            ...prevValues,
            discount: prevValues.discount.replace(value, ''),
        }))
        } else {
          setFilterElements((prevValues) => ({
            ...prevValues,
            discount: `${prevValues.discount}${value}`,
        }))
        }
      }
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, discount: !filtersOpen.discount})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Promocja</h1>
        <button className='pointer'>
            {filtersOpen.discount ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.discount &&
            <div className='filter-list-wrapper'>
                <div className='filter-list-container'>
                 <FilterLabelElement value='&IsOnSale=true' isChecked={true} onChange={handleCheckboxChange} title="Na promocji" />
                </div>
            </div>
        }
    </div>
  )
}

export default DiscountFilter