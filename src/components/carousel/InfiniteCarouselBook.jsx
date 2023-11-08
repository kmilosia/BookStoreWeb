import React from 'react'
import { Link } from 'react-router-dom'

function InfiniteCarouselBook(props) {
  return (
    <Link className='mx-2'>
        <img className='max-h-48 max-w-none' src={props.src} alt={props.alt} />
    </Link>
  )
}

export default InfiniteCarouselBook
