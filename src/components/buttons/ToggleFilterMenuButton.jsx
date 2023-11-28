import React from 'react'
import { IoClose } from 'react-icons/io5'

function ToggleFilterMenuButton({toggleFilterMenu}) {
  return (
    <button onClick={toggleFilterMenu} className='lg:hidden text-2xl w-max self-center mt-5 rounded-3xl p-2 text-white bg-gray-400 dark:bg-midnight-700'><IoClose /></button>
  )
}

export default ToggleFilterMenuButton
