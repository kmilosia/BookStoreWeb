import React from 'react'

function ProductSelect() {
  return (
    <select className='h-auto rounded-md no-ring bg-white dark:bg-midnight-800 focus:border-purple-400 border-gray-200 dark:border-midnight-700'>
        <option>Domyślnie</option>
        <option>Najpopularniejsze</option>
        <option>Cena - rosnąco</option>
        <option>Cena - malejąco</option>
        <option>Alfabetycznie - od A do Z</option>
        <option>Alfabetycznie - od Z do A</option>
    </select>
  )
}

export default ProductSelect
