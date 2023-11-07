import React from 'react'
import { TbTrash } from 'react-icons/tb'

function TrashButton({handleRemoveButton}) {
  return (
    <button onClick={handleRemoveButton} className='text-xl hover:text-red-500'><TbTrash/></button>
  )
}

export default TrashButton
