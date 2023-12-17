import React, { useEffect, useState } from 'react'
import InfiniteCarouselBook from './InfiniteCarouselBook'
import { getBooksCarousel, getEbooksCarousel } from '../../../utils/api/infiniteCarouselAPI'

function InfiniteCarouselItem(props) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{ 
    if(props.form === 'book'){
      getBooksCarousel(setBooks, setLoading)
    }else{
      getEbooksCarousel(setBooks, setLoading)
    }
  },[])
  return (
    loading ?
    <div className='animate-pulse h-40 w-full bg-white dark:bg-midnight-900'></div> :
    <div className={`flex items-center max-h-40 justify-center md:justify-start group-hover:pause-animation ${props.isReversed ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}>
        {books.map((item,index) => {
          return (
            <InfiniteCarouselBook key={index} src={item.imageURL} alt={item.title} id={item.id} />
          )
        })} 
    </div>
  )
}

export default InfiniteCarouselItem
