import React from 'react'

function CategoryCarouselItem(props) {
  return (
    <div className='flex flex-col items-center mx-2 bg-gray-100 shadow-md cursor-pointer rounded-md px-16 lg:px-3 py-2 text-midnight-900 dark:bg-midnight-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-midnight-700'>
        <img src={props.src}/>
        <h1 className='font-semibold text-xl my-4'>{props.title}</h1>
    </div>
  )
}

export default CategoryCarouselItem
