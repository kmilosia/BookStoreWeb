import React from 'react'
import { Link } from 'react-router-dom'

function ExploreAllElement(props) {
  return (
    <Link to={props.path} className='rounded-md bg-white dark:bg-midnight-900 relative mt-4 mb-2'>
        <img className='w-full h-48 object-cover object-center rounded-md' src='https://iili.io/Jumw8qg.jpg' alt='Biblioteczka z książkami' />
        <div className='h-full w-full px-5 lg:px-0 absolute top-0 right-0 flex flex-col items-center justify-center text-white rounded-md dark:bg-midnight-900/60'>
          <h1 className='text-2xl lg:text-3xl text-center font-semibold my-3'>{props.title}</h1>
          <button className='rounded-purple-button'>Przeglądaj</button>
        </div>
    </Link>
  )
}

export default ExploreAllElement
