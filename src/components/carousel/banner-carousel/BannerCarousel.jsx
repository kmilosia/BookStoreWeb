import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import RightArrowCarousel from '../../elements/RightArrowCarousel';
import LeftArrowCarousel from '../../elements/LeftArrowCarousel';
import BannerCarouselItem from './BannerCarouselItem';
import { getBanners } from '../../../utils/api/bannerAPI';

function BannerCarousel() {
  const [banners, setBanners] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    getBanners(setBanners,setLoading)
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
    loading ? 
    <div className='w-full aspect-[10/3] rounded-md bg-white dark:bg-midnight-900 animate-pulse'></div>
    :
    <Slider className='mb-2' {...settings}>
    {banners?.map((item, index) => {
        return (
          <BannerCarouselItem key={index} path={item.path} src={item.imageURL} title={item.title} alt={item.imageTitle} />
        )
    })}
    </Slider>
  )
}

export default BannerCarousel
