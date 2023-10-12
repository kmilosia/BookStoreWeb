import React from 'react'
import bookReading from '../assets/book-reading.png'
import autumnLeaves from '../assets/autumn-leaves.png'


function Home() {
  return (
    <div className='min-h-screen flex flex-col transition-colors bg-midnight-50 dark:bg-midnight-950'>
      <div className='relative w-full h-1/5 flex flex-row items-center justify-between bg-orange-100'>
        <img src={autumnLeaves} className='absolute top-0 left-0 w-3/4 h-full object-cover z-10'/>
        <div className='flex flex-col ml-5 px-10 z-30 bg-orange-100'>
          <h1 className='text-4xl'>Welcome Autumn!</h1>
          <div className='flex flex-row items-end'>
            <p className='text-xl inline-block'>Up to</p>
            <p className='text-3xl text-orange-600 inline-block mx-1'>60%</p>
            <p className='text-xl inline-block'>Discount On All Books</p>
          </div>
          <button className='rounded-md bg-orange-600 text-sm text-midnight-50 py-2 w-2/3 my-3 hover:bg-orange-700'>Discover Now</button>
        </div>
        <img src={bookReading} className='w-[30%] z-30'/>
      </div>
      <div className='px-10 py-2'>
        <h1>Bestsellers</h1>
      </div>
    </div>
  )
}

export default Home
