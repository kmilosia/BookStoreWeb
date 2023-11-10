import React from 'react'
import { Link } from 'react-router-dom'

function StoreTypeLink(props) {
  return (
    <Link to={props.path} className='flex flex-col items-center bg-gray-100 shadow-md cursor-pointer rounded-md px-3 py-5 text-midnight-900 dark:bg-midnight-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-midnight-700'>
        <img src={props.src} className='w-2/5 lg:w-2/6 2xl:w-1/6 my-2'/>
        <h1 className='font-semibold text-center lg:text-start text-2xl my-2'>{props.title}</h1>
    </Link>
  )
}

export default StoreTypeLink
