import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCarouselItem from './BookCarouselItem';
import { settings } from '../../../utils/objects/carousel-settings';
import axiosClient from '../../../utils/api/axiosClient';

function BooksCarousel(props) {
  const [books, setBooks] = useState([])
  const getBooks = async () => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?${props.filter}`)
        setBooks(response.data)
    }catch(err){
        console.error(err)
    }
  }
  useEffect(() =>{ 
    getBooks()
  },[])
  return (
    books.length > 0 &&
      <>
      <h1 className='carousel-header'>{props.title}</h1>
        <Slider {...settings}>
          {books.map((item, index) => {
              return (
                  <BookCarouselItem key={index} item={item}/>
              )
          })}
    </Slider>
    </>
    )
}

export default BooksCarousel
