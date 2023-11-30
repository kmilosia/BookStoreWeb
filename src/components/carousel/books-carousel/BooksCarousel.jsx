import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { booksData } from '../../../utils/data';
import BookCarouselItem from './BookCarouselItem';
import { settings } from '../../../utils/objects/carousel-settings';

function BooksCarousel() {
  return (
  <Slider {...settings}>
    {booksData.map((item, index) => {
      return (
        <BookCarouselItem key={index} item={item}/>
      )
    })}
  </Slider>
  )
}

export default BooksCarousel
