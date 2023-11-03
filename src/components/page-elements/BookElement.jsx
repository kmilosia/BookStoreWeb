import React from 'react'
import { Link } from 'react-router-dom'
import Stars from '../elements/Stars'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'

function BookElement(props) {
  return (
    <Link to='/ksiazka' className='bg-sunrise-200 flex flex-col px-4 py-4 my-2 rounded-md items-center dark:bg-midnight-900 dark:hover:bg-midnight-950 group hover:bg-sunrise-200 hover:shadow-md'>
    <div className='relative w-full flex items-center justify-center'>
      <img src={props.imgURL} className='w-full object-cover aspect-[3/4] rounded-md my-1'/>
      {props.wishlisted ?
        <button className='absolute top-0 right-0 rounded-lg p-2 bg-white text-orange-400'><FaHeart /></button>
      : <button className='absolute top-0 right-0 rounded-lg p-2 bg-sunrise-400 text-white hover:text-orange-400'><FaHeart /></button>
      }
    </div>
    <div className='flex flex-col items-start w-full'>
    <h1 className='w-full font-semibold text-blue-950 dark:text-midnight-100 text-sm truncated-text'>{props.title}</h1>
    <p className='text-xs font-light my-1 text-midnight-400'>{props.author}</p>
    <Stars score={props.score} />
    <h2 className='font-semibold text-blue-950 dark:text-midnight-100 my-1'>{props.price}zł</h2>
    </div>
    <button className='w-full bg-orange-400 text-white rounded-md px-3 py-2 my-0 flex flex-row items-center text-sm justify-center transition-all hover:bg-orange-500'>
      <RiShoppingCart2Fill className='mx-1'/>
      <span>Dodaj do koszyka</span>
    </button>
  </Link>
  )
}

export default BookElement
