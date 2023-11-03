import React from 'react'
import { Link } from 'react-router-dom'

function LatestNewsCell() {
  return (
    <Link to='/wiadomosc' className='w-full h-full flex flex-col bg-sunrise-200 hover:bg-sunrise-300 dark:hover:bg-midnight-900 dark:bg-midnight-800 rounded-md my-2'>
        <img src='https://images.pexels.com/photos/5977069/pexels-photo-5977069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='rounded-t-md w-full h-auto object-cover' />
        <div className='flex flex-col'>
            <h1 className='my-2 mx-2 font-[500]'>Jakaś wiadomość ostatnio dodana</h1>
        </div>
    </Link>
  )
}

export default LatestNewsCell
