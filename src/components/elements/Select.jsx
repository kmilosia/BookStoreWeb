import React from 'react'

function Select({sortOptions}) {
  return (
<select className="bg-white border border-sunrise-300 text-midnight-950 text-sm rounded-md block w-full dark:bg-midnight-900 dark:border-midnight-700 dark:placeholder-gray-400 dark:text-white">
  {sortOptions.map((item, index) => (
    <option key={index} value={item.value}>{item.label}</option>
  ))}  
</select>

  )
}

export default Select
