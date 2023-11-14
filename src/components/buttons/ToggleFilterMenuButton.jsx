import React from 'react'
import { IoClose } from 'react-icons/io5'

function ToggleFilterMenuButton({toggleFilterMenu}) {
  return (
    <button onClick={toggleFilterMenu} className='lg:hidden text-2xl w-max self-center mt-5 rounded-3xl p-2 text-white bg-gray-500 hover:bg-gray-600'><IoClose /></button>
  )
}

export default ToggleFilterMenuButton
