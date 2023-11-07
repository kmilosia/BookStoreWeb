import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

function ElementScrollButton({elementID}) {
  return (
    <a href={elementID} className=' bg-midnight-900 dark:bg-white dark:opacity-50 rounded-3xl p-3 text-white dark:text-black text-xl hover:bg-midnight-950 dark:hover:opacity-100'><FaChevronDown /></a>
  )
}

export default ElementScrollButton
