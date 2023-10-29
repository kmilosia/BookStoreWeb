import React from 'react'
import Stars from '../elements/Stars'

function BookItemCarousel(props) {
  return (
        <div className='flex flex-col items-center hover:bg-sunrise-300 dark:hover:bg-midnight-950 rounded-md px-4 py-3'>
            <img src={props.url} className='w-full aspect-square object-contain'/>
            <h1 className='font-semibold my-1 text-center'>{props.title}</h1>
            <p className=' font-light text-sm'>{props.author}</p>
            <Stars score={props.score} />
            <h2 className='font-semibold'>{props.price}zł</h2>
            <button className='bg-orange-400 py-2 my-1 rounded-md text-white text-sm w-full hover:bg-orange-500'>Dodaj do koszyka</button>
         </div>
  )
}

export default BookItemCarousel
