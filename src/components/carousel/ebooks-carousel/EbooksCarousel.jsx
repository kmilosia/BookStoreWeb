import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { booksData } from '../../../utils/data';
import { settings } from '../../../utils/objects/carousel-settings';
import EbookCarouselItem from './EbookCarouselItem';

function EbooksCarousel(props) {
  return (
      <Slider {...settings}>
        {booksData.map((item, index) => {
            return (
                <EbookCarouselItem key={index} rental={props.rental} title={item.title} url={item.url} score={item.score} price={item.price} author={item.author}/>
            )
        })}
  </Slider>
  )
}

export default EbooksCarousel
