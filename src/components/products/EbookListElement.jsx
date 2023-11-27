import React from 'react'
import AddToCartButton from '../buttons/AddToCartButton'
import RentButton from '../buttons/RentButton'
import { Link } from 'react-router-dom'
import Stars from '../elements/Stars'

function EbookListElement(props) {
  return (
    <Link to={`/ksiazka/${props.id}`} className='flex flex-col group cursor-pointer relative'>
    <div className='group-hover:z-20 group-hover:absolute group-hover:top-0 group-hover:right-0 w-full shadow-md bg-gray-100 hover:bg-gray-200 dark:bg-midnight-900 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4'>
        <img src={props.imgURL} className='w-full aspect-[3/4] object-cover rounded-md' />
        <h1 className='font-semibold my-1 w-full truncated-text group-hover:whitespace-normal'>{props.title}</h1>
        <p className='font-light text-sm'>{props.author}</p>
        <Stars score={props.score} />
        <h2 className='font-semibold text-lg my-1'>{props.price}zł</h2>
        <div className='hidden group-hover:flex group-hover:flex-col'>
            <AddToCartButton />  
            <RentButton />
        </div>
    </div>
  </Link>
  )
}

export default EbookListElement
