import { useState, useRef, useEffect } from 'react';

// Data
import {categories} from '../utils/objects/categories-links';
import LeftArrow from './elements/LeftArrow';
import RightArrow from './elements/RightArrow';
import { Link } from 'react-router-dom';

const BooksCarousel = () => {
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
          className="carousel-container relative flex gap-3 overflow-hidden snap-x snap-mandatory touch-pan-x z-0">
        
                <div className="carousel-item  snap-start group flex flex-col py-2 w-42">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
                <div className="carousel-item  snap-start group flex flex-col py-2 w-1/4">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
                <div className="carousel-item  snap-start group flex flex-col py-2 w-1/4">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
                <div className="carousel-item  snap-start group flex flex-col py-2 w-1/4">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
                <div className="carousel-item  snap-start group flex flex-col py-2 w-1/4">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
                <div className="carousel-item  snap-start group flex flex-col py-2 w-1/4">
                    <img src='https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-b-iext139015180.jpg' className='w-full h-full object-contain' />
                    <h1>Tytuł</h1>
                </div>
    
        </div>
      </div>
    </div>
  );
};

export default BooksCarousel;
