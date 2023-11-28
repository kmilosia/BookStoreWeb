import React from 'react'
import Stars from '../elements/Stars'

function ReviewSummary() {
  return (
    <div className='flex my-2 py-10 justify-around items-center bg-white dark:bg-midnight-900'>
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-5xl'>4,2</h1>
      <Stars score={4} />
      <p className='text-sm'>Średnia ocena z 200 recenzji</p>
      <button className='bg-purple-400 hover:bg-purple-500 rounded-3xl w-full text-white text-sm py-2 my-2'>Oceń książkę</button>
    </div>
    <div className='flex flex-col'>

      <div className='flex flex-row items-center'>
        <Stars score={5} />
        <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          <div className='bg-purple-400 h-2.5 rounded-full w-[45%]'></div>
        </div>
        <span className='text-xs font-light'>20 recenzji</span>
      </div>
      <div className='flex flex-row items-center'>
        <Stars score={4} />
        <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          <div className='bg-purple-400 h-2.5 rounded-full w-[70%]'></div>
        </div>
        <span className='text-xs font-light'>70 recenzji</span>
      </div>
      <div className='flex flex-row items-center'>
        <Stars score={3} />
        <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          <div className='bg-purple-400 h-2.5 rounded-full w-[55%]'></div>
        </div>
        <span className='text-xs font-light'>50 recenzji</span>
      </div>
      <div className='flex flex-row items-center'>
        <Stars score={2} />
        <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          <div className='bg-purple-400 h-2.5 rounded-full w-[10%]'></div>
        </div>
        <span className='text-xs font-light'>10 recenzji</span>
      </div>
      <div className='flex flex-row items-center'>
        <Stars score={1} />
        <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          <div className='bg-purple-400 h-2.5 rounded-full w-[0%]'></div>
        </div>
        <span className='text-xs font-light'>0 recenzji</span>
      </div>         
    </div>
  </div>
  )
}

export default ReviewSummary
