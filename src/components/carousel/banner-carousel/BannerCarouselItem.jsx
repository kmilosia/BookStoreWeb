import React from 'react'
import { Link } from 'react-router-dom'

function BannerCarouselItem(props) {
  return (
    <Link to={props.path} className='rounded-md'>
        <img src={props.src} alt={props.alt} className='w-full aspect-[10/3] object-cover rounded-md' />
    </Link>
  )
}

export default BannerCarouselItem
