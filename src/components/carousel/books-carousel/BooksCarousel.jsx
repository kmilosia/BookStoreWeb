import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { booksData } from '../../../utils/data';
import BookCarouselItem from './BookCarouselItem';
import { settings } from '../../../utils/objects/carousel-settings';

function BooksCarousel(props) {
  return (
  <Slider {...settings}>
    {booksData.map((item, index) => {
      return (
        <BookCarouselItem key={index} id={item.id} title={item.title} url={item.url} score={item.score} price={item.price} author={item.author}/>
      )
    })}
  </Slider>
  )
}

export default BooksCarousel
