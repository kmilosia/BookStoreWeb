import React from 'react'
import Stars from '../elements/Stars'

function ReviewSummary({score, scoreValues}) {
  const quantity = scoreValues['1'] + scoreValues['2'] + scoreValues['3'] + scoreValues['4'] + scoreValues['5']
  return (
    <div className='flex flex-col lg:flex-row my-2 py-10 justify-around items-center bg-white dark:bg-midnight-900'>
      <div className='flex flex-col items-center mb-5 lg:mb-0 cursor-default'>
        <h1 className='font-bold text-5xl'>{score != null ? (score % 1 === 0 ? score : score.toFixed(1)) : null}</h1>
        <Stars score={score} />
        <p className='text-sm'>Średnia ocen z {quantity} recenzjii</p>
      </div>
      <div className='flex flex-col'>   
        <div className='flex flex-row items-center'>
          <Stars score={5} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues['5'] !== 0 && <div className={`bg-purple-400 h-2.5 rounded-full w-[${(scoreValues['5'] / quantity * 100)}%]`}></div>}
          </div>
          <span className='text-xs font-light'>{scoreValues['5']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={4} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues['4'] !== 0 && <div className={`bg-purple-400 h-2.5 rounded-full w-[${(scoreValues['4'] / quantity * 100)}%]`}></div>}
          </div>
          <span className='text-xs font-light'>{scoreValues['4']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={3} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues['3'] !== 0 && <div className={`bg-purple-400 h-2.5 rounded-full w-[${(scoreValues['3'] / quantity * 100)}%]`}></div>}
          </div>
          <span className='text-xs font-light'>{scoreValues['3']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={2} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues['2'] !== 0 && <div className={`bg-purple-400 h-2.5 rounded-full w-[${(scoreValues['2'] / quantity * 100)}%]`}></div>}
          </div>
          <span className='text-xs font-light'>{scoreValues['2']} recenzji</span>
        </div>
        <div className='flex flex-row items-center'>
          <Stars score={1} />
          <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
          {scoreValues['1'] !== 0 && <div className={`bg-purple-400 h-2.5 rounded-full w-[${(scoreValues['1'] / quantity * 100)}%]`}></div>}
          </div>
          <span className='text-xs font-light'>{scoreValues['1']} recenzji</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewSummary

