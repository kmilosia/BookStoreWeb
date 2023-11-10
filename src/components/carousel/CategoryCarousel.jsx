import React from 'react';
import CategoryCarouselItem from './CategoryCarouselItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrowCarousel from '../elements/RightArrowCarousel';
import LeftArrowCarousel from '../elements/LeftArrowCarousel';

const settings = {
    dots: false,
    infinite: true,
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
      infinite: true,
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

const itemsData = [
    { title: "Science Fiction", src: 'https://iili.io/JBf7eUb.png' },
    { title: "Poezja", src: 'https://iili.io/JBf7EJf.png' },
    { title: "Fantasy", src: 'https://iili.io/JBf70UG.png' },
    { title: "Kulinarne", src: 'https://iili.io/JBf7YiX.png' },
    { title: "Komiks", src: 'https://iili.io/JBf77Vt.png' },
    { title: "Biografia", src: 'https://iili.io/JBf7ADN.png' },
    { title: "Komedia", src: 'https://iili.io/JBf7TRR.png' },
    { title: "Dla dzieci", src: 'https://iili.io/JBf7MOl.png' },
    { title: "Lifestyle", src: 'https://iili.io/JBf7Vb2.png' },
    { title: "Podręcznik", src: 'https://iili.io/JBf7js9.png' },
    { title: "Romans", src: 'https://iili.io/JBf7Nfe.png' },
    { title: "Nauka", src: 'https://iili.io/JBf7O0u.png' },
    { title: "Dla młodzieży", src: 'https://iili.io/JBf7vJj.png' },
    { title: "Horror", src: 'https://iili.io/JBf7GR4.png' },
];

const CategoryCarousel = () => (
    <Slider {...settings}>
        {itemsData.map((item, index) => {
            return (
                <CategoryCarouselItem key={index} title={item.title} src={item.src} />
            )
        })}
  </Slider>
);

export default CategoryCarousel
