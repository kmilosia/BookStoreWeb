import React from 'react'
import TrashButton from '../buttons/TrashButton'
import { BsDot } from 'react-icons/bs'
import AvailabilityElement from '../page-elements/AvailabilityElement'
import AddToBasket from '../buttons/AddToBasket';

function WishlistElement(props) {
  return (
    <div className='flex flex-col px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md lg:hover:scale-105 transition-all group'>
      <div className='my-1 flex items-center justify-between mx-1'>
        <TrashButton />
        <AvailabilityElement isAvailable={props.availability}/>
      </div>
      <div className='my-3'>
        <img src={props.imgURL} className='h-auto aspect-[3/4] w-full object-cover rounded-md' />
      </div>
      <h2 className='font-semibold text-sm my-1 cursor-default'>{props.author}</h2>
      <h1 className='font-semibold text-xl my-1 cursor-default truncated-text'>{props.title}</h1>
      <div className='my-1 flex flex-row items-center text-gray-600 dark:text-gray-400 text-sm lg:text-xs 2xl:text-sm cursor-default'>
        <p>{props.form}</p>
        <BsDot className='text-xl'/>
        <p>{props.edition}</p>
      </div>
      <h3 className='font-semibold cursor-default text-3xl lg:text-xl 2xl:text-3xl my-1'>{props.price} zł</h3>
      <AddToBasket />
    </div>
  )
}

export default WishlistElement
