import React from 'react'

function TitleTooltip(props) {
  return (
    <span className='block absolute z-10 left-0 top-8 bg-midnight-900 dark:bg-white dark:text-black px-2 py-1 text-white h-max w-max text-xs rounded-md font-medium'>{props.title}</span>
  )
}

export default TitleTooltip
