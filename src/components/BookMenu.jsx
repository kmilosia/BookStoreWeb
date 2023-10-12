import React from 'react'
import bookImage from '../assets/books.png'
import { Link } from 'react-router-dom'

function BookMenu() {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
            <Link>Książki realistyczne</Link>
            <Link>Historyczne</Link>
            <Link>Biograficzne</Link>
            <Link>Poradniki</Link>
            <Link>Podręczniki</Link>
            <Link>Religijne</Link>
            <Link>Polityczne</Link>
            <Link>Medyczne</Link>
            <Link>Naukowe</Link>
            <Link>Zobacz wszystkie..</Link>
        </div>
        <div className='flex flex-col'>
            <Link>Książki fikcyjne</Link>
            <Link>Fantastyka</Link>
            <Link>Biograficzne</Link>
            <Link>Science Fiction</Link>
            <Link>Horrory</Link>
            <Link>Romanse</Link>
            <Link>Poezja</Link>
            <Link>Komiksy</Link>
            <Link>Zobacz wszystkie..</Link>
        </div>
      </div>
      <img src={bookImage} className='w-full h-full object-cover'/>
    </div>
  )
}

export default BookMenu
