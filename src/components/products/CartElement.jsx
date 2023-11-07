import React from 'react'
import TrashButton from '../buttons/TrashButton'
import { BsDot } from 'react-icons/bs'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'

function CartElement(props) {
  return (
    <div className='grid grid-cols-[max-content_3fr_2fr_2fr] py-5 gap-5 border-b border-gray-200 dark:border-midnight-800'>
    <div className='flex items-center justify-center'>
      <TrashButton />
      </div>
      <div className='flex flex-row'>
        <img src={props.imgURL}
        className='h-32 w-24 object-cover rounded-md' />
        <div className='flex flex-col flex-[1] mx-4 justify-start'>
          <h1 className='font-semibold text-lg'>{props.title}</h1>
          <h1 className='font-semibold text-xs my-2'>{props.author}</h1>
          <div className='mt-auto mb-1 flex flex-row items-center text-gray-600 dark:text-gray-400'>
          <p className='text-xs'>{props.form}</p>
          <BsDot />
          <p className='text-xs'>{props.edition}</p>
          </div>
        </div>
      </div>       
      <div className='flex flex-row items-center justify-center'>
        <button className=''><HiMinusSm /></button>
        <p className='mx-2 cursor-pointer'>1</p>
        <button className=''><HiPlusSm  /></button>
      </div>
      <div className='flex items-center justify-center'>
      <p className='font-semibold cursor-default'>{props.price} zł</p>
      </div>
    </div>
  )
}

export default CartElement
