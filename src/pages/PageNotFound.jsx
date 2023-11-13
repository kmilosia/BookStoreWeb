import React from 'react'
import error404 from '../assets/pages/pagenotfound.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {scrollTop} from '../utils/functions/scrollTop'

function PageNotFound() {
  useEffect(() => {
    scrollTop()
  },[])
  return (
    <div className='default-page-wrapper'>
        <div className='flex flex-col w-full h-screen items-center justify-center py-5 px-5 '>
            <img src={error404} className='w-full lg:w-auto h-1/2 object-contain' />
            <h1 className='text-midnight-950 dark:text-white text-center font-semibold text-3xl my-4'>Nie znaleziono takiej strony!</h1>
            <Link to='/' className='rounded-purple-button my-2'>Przejdź do strony głównej</Link>
        </div> 
    </div>
  )
}

export default PageNotFound
