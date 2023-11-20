import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function LibraryBookElement() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold text-midnight-700 dark:text-white my-3'>Kontynuuj czytanie..</h1>
            <p className='my-3 font-medium text-midnight-700 dark:text-white'>Zanurz się w opowieści na nowo i pozwól odpłynąć razem w twoją ulubioną lekturą.</p>
            <button className='flex flex-row font-medium items-center my-3 justify-center rounded-3xl text-lg bg-midnight-800 text-white dark:bg-orange-400 dark:hover:bg-orange-500 px-4 py-3 lg:py-2 w-full lg:w-1/3 hover:bg-midnight-950'><span>Kontynuuj</span><FiArrowUpRight className='opacity-100 lg:opacity-80'/></button>
        </div>
        <div className='lg:flex flex-col hidden'>
            <h1 className='font-semibold text-xl my-3 cursor-default'>Harry Potter i Czara Ognia</h1>
            <Link className='font-medium text-midnight-500'>J.K. Rowling</Link>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nesciunt adipisci quam officia hic, molestias sit vel blanditiis obcaecati eligendi praesentium ipsa exercitationem mollitia temporibus maxime repudiandae! Perferendis, voluptates porro.</p>
        </div>
    </div>
  )
}

export default LibraryBookElement
