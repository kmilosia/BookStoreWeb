import { useState, useRef, useEffect } from 'react';

// Data
import {categories} from '../utils/objects/categories-links';
import LeftArrow from './elements/LeftArrow';
import RightArrow from './elements/RightArrow';

const MyCarousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-2 mx-auto w-full">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
         <LeftArrow movePrev={movePrev}/>
         <RightArrow moveNext={moveNext}/>
        </div>
        <div ref={carousel}
          className="carousel-container relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
          {categories.map((resource, index) => {
             return (
                <div key={index} className="carousel-item text-center relative w-64 h-32 snap-start group">
                  <a href={resource.link} className="h-full w-full relative aspect-video block">
                    <img src={resource.imageUrl} className='absolute w-full h-full top-0 right-0 z-10 object-cover'/>
                    <div className='absolute w-full h-full bg-black/60 top-0 right-0 z-20 flex items-center justify-center'>
                        <h1 className='text-xl font-semibold text-white'>{resource.title}</h1>
                    </div>
                  </a>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
