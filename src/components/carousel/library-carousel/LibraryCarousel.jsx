import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from '../../../utils/objects/carousel-settings'
import { booksData } from '../../../utils/data';
import LibraryBookCarouselItem from './LibraryBookCarouselItem';


function LibraryCarousel(props) {
  return (
    <Slider {...settings}>
        {booksData.map((item, index) => {
            return (
                <LibraryBookCarouselItem key={index} title={item.title} url={item.url} author={item.author} id={item.id}/>
            )
        })}
  </Slider>
  )
}

export default LibraryCarousel
