import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDiscountBanner } from '../../utils/api/bannerAPI'

function EventDiscountElement() {
  const [element, setElement] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{ 
    getDiscountBanner(setElement,setLoading)
  },[])
  return (
    loading ? <div className='rounded-md w-full bg-white dark:bg-midnight-900 animate-pulse mt-4 mb-2 h-48'/> :
    <Link to='/produkty?promocje=true' className='rounded-md bg-white dark:bg-midnight-900 relative mt-4 mb-2'>
        <img className='w-full h-48 object-cover object-top rounded-md' src={element.imageURL} alt={element.imageTitle} />
        <div className='h-full w-full absolute top-0 right-0 flex flex-col items-center justify-center text-white rounded-md dark:bg-midnight-900/60'>
          <h1 className='text-2xl lg:text-3xl text-center font-semibold my-3'>{element.header}</h1>
          <button className='rounded-purple-button'>{element.buttonTitle}</button>
        </div>
    </Link>
  )
}

export default EventDiscountElement
