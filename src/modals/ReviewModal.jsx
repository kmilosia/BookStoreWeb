import React, { useState } from 'react'

function ReviewModal({setIsReviewed}) {
    const [rating, setRating] = useState(0)
    
  return (
    <div className='flex flex-col'>
        <p className='font-medium my-2'>Oceń książkę</p>
        <textarea rows={3} className='resize-none' placeholder='Napisz swoją recenzję...'/>
        <div className='grid grid-cols-2 gap-3'>
            <button className='purple-button w-full'>Dodaj recenzję</button>
            <button onClick={() => {setIsReviewed(false)}} className='bordered-purple-button w-full'>Wróć</button>
        </div>
    </div>
  )
}

export default ReviewModal
