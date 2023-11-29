import React from 'react'

function AccountRentalElement(props) {
  return (
    <div className='flex px-3 py-3 my-1 border rounded-md border-gray-200 dark:border-midnight-700'>
        <img src={props.imgURL} className='rounded-md h-40 w-auto aspect-[4/6] object-cover' />
        <div className='flex flex-col flex-[1] mx-2'>
          <p className='text-base lg:text-xs text-gray-600 dark:text-gray-400 my-1 lg:my-0'>{props.form}</p>
          <p className='font-medium text-xl lg:text-lg w-full lg:w-2/5 my-1 lg:my-0'>{props.title}</p>
          <p className='text-base lg:text-xs font-light my-1 lg:my-0'>{props.edition}</p>
          <div className='flex flex-row justify-between mt-auto'>
            <p className='font-medium my-1 lg:my-0'>{props.quantity} x {props.price}zł</p>
            <p className='font-semibold'>{props.amount}zł</p>
          </div>
        </div>
      </div>
  )
}

export default AccountRentalElement
