import React from 'react'
import Stars from '../elements/Stars'

function Review(props) {
  return (
    <div className='flex flex-col bg-white dark:bg-midnight-900 rounded-md px-5 py-5 shadow-sm'>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-xl'>{props.name}</h1>
            <Stars score={props.score} />
          </div>
          <p className='my-2'>{props.content}</p>
          <p className='text-xs mt-auto font-light my-2 border-t border-gray-100 dark:border-midnight-800 pt-4'>{props.date}</p>
    </div>
  )
}

export default Review
