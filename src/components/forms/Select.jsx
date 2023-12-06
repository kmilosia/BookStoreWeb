import React from 'react'

function Select({sortOptions, onChange}) {
  return (
  <select onChange={onChange} className="bg-white border border-gray-200 text-midnight-950 lg:text-sm rounded-md block w-full dark:bg-midnight-900 dark:border-midnight-700 dark:placeholder-gray-400 dark:text-white focus:ring-purple-400 focus:border-purple-400">
    {sortOptions.map((item, index) => (
      <option key={index} value={item.value}>{item.label}</option>
    ))}  
  </select>
  )
}

export default Select
