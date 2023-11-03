import React from 'react'
import { Link } from 'react-router-dom'

function NewsCell(props) {
  return (
    <Link to='/wiadomosc' className='relative w-full h-full rounded-md my-2 lg:my-0'>
    <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='rounded-md w-full h-full object-cover' />
    <div className='absolute flex items-end justify-start w-full h-full top-0 right-0 z-20 px-3 py-3'>
      <h1 className='text-white'>{props.title}</h1>
    </div>
    <div className='absolute w-full h-full bottom-gradient top-0 right-0 z-10 rounded-md'/>
  </Link>
  )
}

export default NewsCell
