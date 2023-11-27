import React from 'react'
import InfiniteCarouselBook from './InfiniteCarouselBook'
import { infiniteCarouselData } from '../../../utils/data'

function InfiniteCarouselItem(props) {
  return (
    <div className={`flex items-center max-h-40 justify-center md:justify-start group-hover:pause-animation ${props.isReversed ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}>
        {infiniteCarouselData.map((item,index) => {
          return (
            <InfiniteCarouselBook key={index} src={item.src} alt={item.title} id={item.id} />
          )
        })} 
    </div>
  )
}

export default InfiniteCarouselItem
