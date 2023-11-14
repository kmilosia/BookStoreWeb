import React from 'react'
import { TbTrash } from 'react-icons/tb'

function TrashButton({handleRemoveButton}) {
  return (
    <button onClick={handleRemoveButton} className='2xl:text-2xl text-lg text-gray-600 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-500 transition-colors'><TbTrash/></button>
  )
}

export default TrashButton
