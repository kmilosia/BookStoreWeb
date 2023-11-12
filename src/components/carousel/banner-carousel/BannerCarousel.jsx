import React from 'react'
import Slider from 'react-slick'
import { bannersData } from '../../../utils/data'
import RightArrowCarousel from '../../elements/RightArrowCarousel';
import LeftArrowCarousel from '../../elements/LeftArrowCarousel';
import BannerCarouselItem from './BannerCarouselItem';

function BannerCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        nextArrow: <RightArrowCarousel />,
        prevArrow: <LeftArrowCarousel />,
    };
  return (
    <Slider className='mb-2' {...settings}>
    {bannersData.map((item, index) => {
        return (
          <BannerCarouselItem key={index} src={item.src} title={item.title} />
        )
    })}
    </Slider>
  )
}

export default BannerCarousel
