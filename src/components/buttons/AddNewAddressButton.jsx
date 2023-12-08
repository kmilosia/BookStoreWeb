import React from 'react'
import { FaPlus } from 'react-icons/fa6'

function AddNewAddressButton({onClick}) {
  return (
    <button onClick={onClick} className='w-max my-2 rounded-md shadow-md bg-gray-50 hover:bg-gray-100 dark:hover:bg-midnight-800 dark:bg-midnight-700 flex justify-between items-center px-5 py-5'>
          <FaPlus className='text-xl mx-3'/>
          <h1 className='text-xl font-semibold mx-3'>Dodaj nowy adres</h1>
    </button>
  )
}

export default AddNewAddressButton
