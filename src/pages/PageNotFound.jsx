import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col w-full h-screen items-center justify-center py-5 px-5 '>
            <img src='https://iili.io/JCJhg0G.png' className='w-full lg:w-auto h-1/2 object-contain' />
            <h1 className='text-midnight-950 dark:text-white text-center font-semibold text-3xl my-4'>Nie znaleziono takiej strony!</h1>
            <Link to='/' className='rounded-purple-button my-2'>Przejdź do strony głównej</Link>
        </div> 
    </div>
  )
}

export default PageNotFound
