import React from 'react'
import bookImage from '../assets/books.png'
import { Link } from 'react-router-dom'

function BookMenu() {
  return (
    <div className='grid grid-cols-2 transition-all text-midnight-950 dark:text-midnight-50'>
      <div className='grid grid-cols-2 gap-5 px-10 py-10'>
        <div className='flex flex-col'>
            <Link className='font-semibold my-1 text-lg'>Książki Realistyczne</Link>
            <Link className='my-1'>Historyczne</Link>
            <Link className='my-1'>Biograficzne</Link>
            <Link className='my-1'>Poradniki</Link>
            <Link className='my-1'>Podręczniki</Link>
            <Link className='my-1'>Religijne</Link>
            <Link className='my-1'>Polityczne</Link>
            <Link className='my-1'>Medyczne</Link>
            <Link className='my-1'>Naukowe</Link>
            <Link className='text-sm font-semibold my-1 text-midnight-500'>Zobacz wszystkie...</Link>
        </div>
        <div className='flex flex-col'>
        <Link className='font-semibold my-1 text-lg'>Książki Fikcyjne</Link>
            <Link className='my-1'>Fantastyka</Link>
            <Link className='my-1'>Biograficzne</Link>
            <Link className='my-1'>Science Fiction</Link>
            <Link className='my-1'>Horrory</Link>
            <Link className='my-1'>Romanse</Link>
            <Link className='my-1'>Poezja</Link>
            <Link className='my-1'>Komiksy</Link>
            <Link className='text-sm font-semibold my-1 text-midnight-500'>Zobacz wszystkie...</Link>
        </div>
      </div>
      <img src={bookImage} className='w-full h-full object-cover'/>
    </div>
  )
}

export default BookMenu
