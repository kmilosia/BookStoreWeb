import React, { useEffect, useState } from 'react'
import Stars from '../elements/Stars'

function ReviewSummary({score, scoreValues}) {
  const reviewsQuantity = scoreValues['1'] + scoreValues['2'] + scoreValues['3'] + scoreValues['4'] + scoreValues['5']

  // const [reviewsQuantity, setReviewsQuantity] = useState(0)
  // useEffect(() => {
  //   if(scoreValues){
  //       setReviewsQuantity( scoreValues['1'] + scoreValues['2'] + scoreValues['3'] + scoreValues['4'] + scoreValues['5'])
  //   }
  // },[])
  return (
    <div className='flex flex-col lg:flex-row my-2 py-10 justify-around items-center bg-white dark:bg-midnight-900'>
      <div className='flex flex-col items-center mb-5 lg:mb-0 cursor-default'>
        <h1 className='font-bold text-5xl'>{score}</h1>
        <Stars score={score} />
        <p className='text-sm'>Średnia ocen z {reviewsQuantity} recenzjii</p>
      </div>
      <div className='flex flex-col'>   
        <div className='flex flex-row items-center'>
          <Stars score={5} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues && scoreValues['5'] !== 0 && reviewsQuantity !== 0 ?
          <div className={`bg-purple-400 h-2.5 rounded-full w-[${((reviewsQuantity / scoreValues['5']) * 100)}%]`}></div>
          :
          <div className={`bg-purple-400 h-2.5 rounded-full w-[0%]`}></div>
          }
          </div>
          <span className='text-xs font-light'>{scoreValues['5']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={4} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues && scoreValues['4'] !== 0 && reviewsQuantity !== 0 ?
          <div className={`bg-purple-400 h-2.5 rounded-full w-[${((reviewsQuantity / scoreValues['4']) * 100)}%]`}></div>
          :
          <div className={`bg-purple-400 h-2.5 rounded-full w-[0%]`}></div>
          }
          </div>
          <span className='text-xs font-light'>{scoreValues['4']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={3} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues && scoreValues['3'] !== 0 && reviewsQuantity !== 0 ?
          <div className={`bg-purple-400 h-2.5 rounded-full w-[${((reviewsQuantity / scoreValues['3']) * 100)}%]`}></div>
          :
          <div className={`bg-purple-400 h-2.5 rounded-full w-[0%]`}></div>
          }
          </div>
          <span className='text-xs font-light'>{scoreValues['3']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={2} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues && scoreValues['2'] !== 0 && reviewsQuantity !== 0 ?
          <div className={`bg-purple-400 h-2.5 rounded-full w-[${((reviewsQuantity / scoreValues['2']) * 100)}%]`}></div>
          :
          <div className={`bg-purple-400 h-2.5 rounded-full w-[0%]`}></div>
          }
          </div>
          <span className='text-xs font-light'>{scoreValues['2']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={1} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues && scoreValues['1'] !== 0 && reviewsQuantity !== 0 ?
          <div className={`bg-purple-400 h-2.5 rounded-full w-[${((reviewsQuantity / scoreValues['1']) * 100)}%]`}></div>
          :
          <div className={`bg-purple-400 h-2.5 rounded-full w-[0%]`}></div>
          }
          </div>
          <span className='text-xs font-light'>{scoreValues['1']} recenzji</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewSummary

