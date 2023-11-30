import React, { useEffect } from 'react'
import AddToWishlist from '../buttons/AddToWishlist'
import { BsDot } from 'react-icons/bs'
import QuantityChanger from '../elements/QuantityChanger'

function CartElement({item}) {
  return (
    <div className='flex flex-col px-3 lg:px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md'>
    <div className='flex justify-between'>
      <div className='flex w-full'>
        <img src={item.url} className=' h-36 w-24 object-cover rounded-md' />
        <div className='flex flex-col flex-[1] ml-4 justify-start'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col'>
            <h1 className='font-semibold text-lg cursor-default'>{item.title}</h1>
            <h1 className='font-semibold text-xs my-2 cursor-default'>{item.author}</h1>
            </div>
            <div className='lg:my-2 my-1 h-full'>
              <AddToWishlist item={item}/>
            </div>
          </div>
          <div className='mt-auto lg:hidden'>
          <h1 className='text-2xl font-semibold cursor-default'>{item.price} zł</h1>
          </div>
          <div className='mt-auto flex justify-between items-end mb-1 cursor-default'>
            <div className='flex items-start text-gray-600 dark:text-gray-400'>
                <p className='text-xs'>{item.form}</p>
                <BsDot />
                <p className='text-xs'>{item.edition}</p>
              </div> 
                <QuantityChanger id={item.id}/>
              <h1 className='text-2xl font-semibold hidden lg:inline-block cursor-default'>{item.price} zł</h1>
            </div>
        </div>
      </div>       
    </div>
    
    </div>

  )
}

export default CartElement
