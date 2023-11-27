import React from 'react'
import SearchInput from '../components/forms/SearchInput'

function SearchModal() {
  return (
    <div className='fixed z-[1000] w-full lg:w-max bottom-12 lg:top-20 lg:bottom-auto right-0 px-5 py-7 lg:py-5 rounded-none lg:rounded-md flex
     flex-col items-center justify-center lg:shadow-lg default-bg'>
      <SearchInput />
    </div>
  )
}

export default SearchModal
