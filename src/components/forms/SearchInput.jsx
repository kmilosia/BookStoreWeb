import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { hideAll } from '../../store/navSlice'

function SearchInput() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="relative w-full lg:w-96">
        <input id="search" name='search' onChange={handleChange} className="block w-full p-2.5 pl-4 pr-[7rem] text-lg lg:text-sm text-midnight-900 border-2 border-gray-200 no-ring rounded-3xl bg-gray-50 dark:bg-midnight-800 dark:focus:border-purple-500 focus:border-purple-500 dark:border-midnight-700 dark:placeholder-gray-400 dark:text-white" placeholder="Szukaj książek" required/>
        <Link to={`/szukaj?search=${value}`} onClick={() => {dispatch(hideAll())}} className="text-white absolute right-1 bottom-1 flex items-center bg-purple-500 hover:bg-purple-600 no-ring focus:outline-none font-medium rounded-3xl text-lg lg:text-sm px-5 py-2">Szukaj<IoSearch className='ml-1' /></Link>
    </div>
  )
}

export default SearchInput
