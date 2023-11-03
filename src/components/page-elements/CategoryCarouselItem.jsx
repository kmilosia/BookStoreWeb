import React from 'react'

function CategoryCarouselItem(props) {
  return (
    <div className='flex flex-col items-center bg-sunrise-300 cursor-pointer rounded-md px-7 lg:px-3 py-2 text-midnight-900 dark:bg-midnight-700 dark:text-midnight-200 hover:bg-sunrise-400 dark:hover:bg-midnight-800'>
        <img src={props.src}/>
        <h1 className='font-semibold text-xl my-2'>{props.title}</h1>
    </div>
  )
}

export default CategoryCarouselItem
