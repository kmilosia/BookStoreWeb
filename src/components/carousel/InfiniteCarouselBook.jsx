import React from 'react'
import { Link } from 'react-router-dom'

function InfiniteCarouselBook(props) {
  return (
    <Link className='mx-2 rounded-md'>
        <img className='max-h-40 max-w-none rounded-md' src={props.src} alt={props.alt} />
    </Link>
  )
}

export default InfiniteCarouselBook
