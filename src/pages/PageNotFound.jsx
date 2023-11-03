import React from 'react'
import error404 from '../assets/pagenotfound.png'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col w-full h-screen items-center justify-center py-5 px-5 '>
            <img src={error404} className='w-full lg:w-1/2 h-auto object-contain' />
            <h1 className='text-midnight-950 dark:text-white text-center font-semibold text-3xl my-3'>Nie znaleziono takiej strony!</h1>
            <Link to='/' className='text-sm rounded-md px-4 py-3 my-2 font-semibold bg-orange-400 hover:bg-orange-500 text-white'>Przejdź do strony głównej</Link>
        </div> 
    </div>
  )
}

export default PageNotFound
