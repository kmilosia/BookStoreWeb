import React from 'react'
import { Link } from 'react-router-dom'

function NewsElement(props) {
  return (
    <Link to='/wiadomosc' className={`relative w-full h-full rounded-md my-2 lg:my-0 hover:scale-105 ${props.rows ? `row-span-${props.rows}` : ''} ${props.cols ? `col-span-${props.cols}` : ''} `}>
    <img src={props.imgURL} className='rounded-md w-full h-full object-cover' />
    <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-3 py-3'>
      <h1 className='text-white transition-all'>{props.title}</h1>
    </div>
    <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10 rounded-md'/>
  </Link>
  )
}

export default NewsElement
