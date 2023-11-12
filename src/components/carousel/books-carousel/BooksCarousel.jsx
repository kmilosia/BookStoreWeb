import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrowCarousel from '../../elements/RightArrowCarousel';
import LeftArrowCarousel from '../../elements/LeftArrowCarousel';
import { booksData } from '../../../utils/data';
import BookCarouselItem from './BookCarouselItem';

function BooksCarousel(props) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        nextArrow: <RightArrowCarousel />,
        prevArrow: <LeftArrowCarousel />,
      
      responsive: [
       {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     ],
    };
  return (
      <Slider {...settings}>
        {booksData.map((item, index) => {
            return (
                <BookCarouselItem key={index} title={item.title} url={item.url} score={item.score} price={item.price} author={item.author} ebook={props.ebook}/>
            )
        })}
  </Slider>
  )
}

export default BooksCarousel
