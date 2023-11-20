import LeftArrowCarousel from "../../components/elements/LeftArrowCarousel";
import RightArrowCarousel from "../../components/elements/RightArrowCarousel";

export const settings = {
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