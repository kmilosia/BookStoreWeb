import React from 'react'
import { IoFilter  } from "react-icons/io5";

function FilterButton({toggleFilterMenu}) {
  return (
    <button onClick={toggleFilterMenu} className='lg:hidden rounded-md font-semibold text-base px-4 mr-2 items-center justify-center flex bg-white dark:bg-midnight-800 border border-gray-200 dark:border-midnight-700'>
      <IoFilter  />
      <h1 className='ml-2'>Filtry</h1>
    </button>
  )
}

export default FilterButton
