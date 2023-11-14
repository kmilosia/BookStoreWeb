import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function FilterHeader(props) {
  return (
    <div onClick={() => props.setShowFilter(!props.showFilter)} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>{props.title}</h1>
        <button className='pointer'>
            {props.showFilter ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
    </div>
  )
}

export default FilterHeader
