import React from 'react'

function PageHeader(props) {
  return (
    <div className='flex flex-col lg:flex-row rounded-md w-full justify-between cursor-default'>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-center lg:items-start'>
            <h1 className='text-5xl font-medium my-5 text-midnight-800 dark:text-white'>{props.title}</h1>
            <p className='text-xl text-center lg:text-start text-midnight-700 dark:text-gray-200'>{props.content}</p>
        </div>
        <img src={props.src} className='h-auto lg:h-80 w-full lg:w-auto object-contain mt-3 lg:mt-0' />
    </div>
  )
}

export default PageHeader
