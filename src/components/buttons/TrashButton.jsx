import React from 'react'
import { TbTrash } from 'react-icons/tb'

function TrashButton({onClick}) {
  return (
    <button onClick={onClick} className='2xl:text-2xl lg:text-lg text-xl w-max text-gray-600 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-500 transition-colors'>
      <TbTrash/>
    </button>
  )
}

export default TrashButton
