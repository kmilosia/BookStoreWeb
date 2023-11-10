import React from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'

function LeftArrowCarousel(props) {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className='absolute text-3xl flex justify-center rounded-es-md rounded-ss-md items-center bg-white/50 dark:bg-midnight-950/50 dark:hover:bg-midnight-950/80 text-midnight-900/50 dark:text-white px-1 top-0 left-0 h-full w-max z-[10000] hover:bg-white/80' style={{ ...style }}>
        <HiOutlineChevronLeft />
    </button>
  )
}

export default LeftArrowCarousel
