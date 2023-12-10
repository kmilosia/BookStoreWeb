import React, { useEffect, useState } from 'react'
import Stars from '../elements/Stars'

function ReviewSummary({score, scoreValues}) {
  const [reviewsQuantity, setReviewsQuantity] = useState(0)
  useEffect(() => {
    if(scoreValues){
        setReviewsQuantity(reviewsQuantity + scoreValues['1'] + scoreValues['2'] + scoreValues['3'] + scoreValues['4'] + scoreValues['5'])
    }
  },[scoreValues])
  const returnPercent = (value) => {
    if(reviewsQuantity && reviewsQuantity !== 0 && value !== 0){
      return ((reviewsQuantity / value) * 100)
    }else{
      return 0
    }
  }
  return (
    <div className='flex flex-col lg:flex-row my-2 py-10 justify-around items-center bg-white dark:bg-midnight-900'>
      <div className='flex flex-col items-center mb-5 lg:mb-0 cursor-default'>
        <h1 className='font-bold text-5xl'>{score}</h1>
        <Stars score={score} />
        <p className='text-sm'>Średnia ocena z {reviewsQuantity} recenzjii</p>
      </div>
      <div className='flex flex-col'>   
        <ScoreRow returnPercent={returnPercent} score={5} scoreValue={scoreValues['5']} />
        <ScoreRow returnPercent={returnPercent} score={4} scoreValue={scoreValues['4']} />
        <ScoreRow returnPercent={returnPercent} score={3} scoreValue={scoreValues['3']} />
        <ScoreRow returnPercent={returnPercent} score={2} scoreValue={scoreValues['2']} />
        <ScoreRow returnPercent={returnPercent} score={1} scoreValue={scoreValues['1']} />         
      </div>
    </div>
  )
}

export default ReviewSummary

const ScoreRow = ({score, scoreValue,returnPercent}) => {
  return(
    <div className='flex flex-row items-center'>
      <Stars score={score} />
      <div className="w-[8rem] bg-gray-200 rounded-full h-2.5 mx-2 dark:bg-gray-300">
        <div className={`bg-purple-400 h-2.5 rounded-full w-[${returnPercent(scoreValue)}%]`}></div>
      </div>
      <span className='text-xs font-light'>{scoreValue} recenzji</span>
    </div>
  )
}
