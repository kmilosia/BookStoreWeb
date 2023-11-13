import React from 'react'
import { Link } from 'react-router-dom'

function EventDiscountElement() {
  return (
    <Link to='/ksiazki' className='rounded-md bg-white dark:bg-midnight-900 relative mt-4 mb-2'>
        <img className='w-full h-48 object-cover object-top rounded-md' src='https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top&resize=1200:*' />
        <div className='h-full w-full absolute top-0 right-0 flex flex-col items-center justify-center text-white rounded-md dark:bg-midnight-900/60'>
          <h1 className='text-2xl lg:text-3xl text-center font-semibold my-3'>Czas na świąteczne promocję</h1>
          <button className='rounded-purple-button'>Przeglądaj promocyjne książki</button>
        </div>
    </Link>
  )
}

export default EventDiscountElement
