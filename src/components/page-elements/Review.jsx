import React from 'react'
import Stars from '../elements/Stars'

function Review(props) {
  return (
    <div className='flex flex-col border-b-[1px] border-sunrise-300 my-3 py-4 dark:border-midnight-700'>
          <div className='flex flex-col'>
          <h1 className='font-[500]'>{props.name}</h1>
          <Stars score={props.score} />
          </div>
          <p className='my-2'>{props.content}</p>
          <p className='text-xs font-light'>{props.date}</p>
    </div>
  )
}

export default Review
