import React, { useState } from 'react'
import TrashButton from '../buttons/TrashButton'
import { BsDot } from 'react-icons/bs'
import AvailabilityElement from '../page-elements/AvailabilityElement'
import AddToBasket from '../buttons/AddToBasket';
import TitleTooltip from '../elements/TitleTooltip';
import { Link } from 'react-router-dom';

function WishlistElement(props) {
  const [showText, setShowText] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null);
  const handleMouseOver = () => {
    const id = setTimeout(() => {
      setShowText(true)
    }, 500)
    setTimeoutId(id)
  }
  const handleMouseLeave = () => {
    clearTimeout(timeoutId)
    setShowText(false)
  }
  return (
    <div className='flex flex-col px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md lg:hover:scale-105 transition-all'>
      <div className='my-1 flex items-center justify-between mx-1'>
        <TrashButton />
        <AvailabilityElement isAvailable={props.availability}/>
      </div>
      <div className='my-3'>
        <img src={props.imgURL} className='h-auto aspect-[3/4] w-full object-cover rounded-md' />
      </div>
      <h2 className='font-semibold text-sm my-1 cursor-default'>{props.author}</h2>
      <Link to='/produkt/1' className='relative' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}><h1 className='font-semibold text-xl my-1 cursor-pointer truncated-text'>{props.title}</h1>{showText && <TitleTooltip title={props.title}/>}</Link>
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
