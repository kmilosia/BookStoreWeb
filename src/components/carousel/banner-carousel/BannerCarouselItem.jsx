import React from 'react'

function BannerCarouselItem(props) {
  return (
    <div className='rounded-md'>
        <img src={props.src} alt={props.title} className='w-full h-32 lg:h-80 object-cover rounded-md' />
    </div>
  )
}

export default BannerCarouselItem
