import React from 'react'
import InfiniteCarouselItem from './InfiniteCarouselItem'

function InfiniteCarousel(props) {
  return (
    <div className="group my-2 w-full h-40 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_220px,_black_calc(100%-220px),transparent_100%)]">
        <InfiniteCarouselItem form={props.form} isReversed={props.isReversed}/>
        <InfiniteCarouselItem form={props.form} isReversed={props.isReversed}/>
    </div>
  )
}

export default InfiniteCarousel
