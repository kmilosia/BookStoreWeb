import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';

function RightArrowCarousel(props) {
  const { className, style, onClick } = props;
  return (

    <button onClick={onClick} className='absolute text-3xl flex justify-center rounded-se-md rounded-ee-md items-center bg-white/50 dark:bg-midnight-950/50 dark:hover:bg-midnight-950/80 text-midnight-900/50 dark:text-white px-1 top-0 right-0 h-full w-max z-[10000] hover:bg-white/80' style={{ ...style }}>
        <HiOutlineChevronRight />
    </button>
  )
}

export default RightArrowCarousel
