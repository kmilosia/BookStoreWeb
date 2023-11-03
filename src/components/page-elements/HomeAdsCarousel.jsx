import React, { useState } from 'react';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

const HomeAdsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    // Assuming the total number of slides is 3
    setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 2));
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-32 overflow-hidden md:h-96">
            <div className={`duration-700 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`} data-carousel-item>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/10/30/27926_Quote_B2_Iron_Flame_10-30.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1"/>
            </div>
            <div className={`duration-700 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`} data-carousel-item>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/10/06/27634_BB_D_HGG_10-06.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2"/>
            </div>
            <div className={`duration-700 ease-in-out ${currentSlide === 2 ? 'block' : 'hidden'}`} data-carousel-item>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/09/27/27677_Quote_A1_DiscoverShortlistAnnouncement_09-27.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3"/>
            </div>
        </div>  
        <button onClick={handlePrev} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                <FaChevronLeft className='text-white' />
            </span>
        </button>
        <button onClick={handleNext} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                <FaChevronRight className='text-white'/>
            </span>
        </button>
    </div>
  );
};

export default HomeAdsCarousel;
