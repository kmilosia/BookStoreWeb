import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';

function RightArrowCarousel(props) {
  const { className, style, onClick } = props;
  return (
    <>
    {onClick &&
    <button onClick={onClick} className='absolute text-sm lg:text-xl flex justify-center rounded-3xl items-center bg-midnight-900/20 hover:bg-midnight-950/50 dark:bg-white/20 dark:hover:bg-white/50 text-white p-2 top-1/2 transform -translate-y-1/2 -right-2 h-max w-max z-10' style={{ ...style }}>
    <HiOutlineChevronRight />
    </button>
    }
    </>
  )
}

export default RightArrowCarousel
