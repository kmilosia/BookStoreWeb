import React from 'react'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'
import { TbTrash } from 'react-icons/tb'

function QuantityChanger() {
  return (
    <div className='flex text-sm 2xl:text-base items-center rounded-md border border-gray-300 dark:border-midnight-600'>
        <button className='mx-2 text-gray-600 dark:text-white'><TbTrash/></button>
        <span className='px-3 py-1 border-x dark:border-midnight-600'>1</span>
        <button className='mx-2 text-gray-600 dark:text-white'><HiPlusSm/></button>
    </div>
  )
}

export default QuantityChanger
