import React, { useEffect, useState } from 'react'
import InfiniteCarouselBook from './InfiniteCarouselBook'
import axiosClient from '../../../utils/api/axiosClient'

function InfiniteCarouselItem(props) {
  const [books, setBooks] = useState([])
  const getBooks = async () => {
    try{
        const response = await axiosClient.get(`/BookItems/Infinite-Carousel-Books`)
        setBooks(response.data)

    }catch(err){
        console.error(err)
    }
  }
  const getEbooks = async () => {
    try{
        const response = await axiosClient.get(`/BookItems/Infinite-Carousel-EBooks`)
        setBooks(response.data)

    }catch(err){
        console.error(err)
    }
  }
  useEffect(() =>{ 
    if(props.form === 'book'){
      getBooks()
    }else{
      getEbooks()
    }
  },[])
  return (
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
