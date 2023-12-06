import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import RightArrowCarousel from '../../elements/RightArrowCarousel';
import LeftArrowCarousel from '../../elements/LeftArrowCarousel';
import BannerCarouselItem from './BannerCarouselItem';
import axiosClient from '../../../utils/api/axiosClient';

function BannerCarousel() {
  const [banners, setBanners] = useState([])
  const getBanners = async () => {
    try{
        const response = await axiosClient.get(`Banner`)
        setBanners(response.data)

    }catch(err){
        console.error(err)
    }
  }
  useEffect(() => {
    getBanners()
  },[])
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
    {banners && banners.map((item, index) => {
        return (
          <BannerCarouselItem key={index} path={item.path} src={item.imageURL} title={item.title} alt={item.imageTitle} />
        )
    })}
    </Slider>
  )
}

export default BannerCarousel
