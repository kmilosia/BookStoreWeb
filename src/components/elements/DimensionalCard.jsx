import React from 'react'

function DimensionalCard() {
  return (
    <div
    key={index}
    className="carousel-item text-center relative w-64 h-64 snap-start group"
  >
    <a href={resource.link} className="h-full w-full relative aspect-square block">
      <div className='w-full h-full absolute top-0 right-0 flex items-end justify-center z-20'>
          <div className='relative w-5/6 h-5/6 rounded-md'>
              <img src={resource.imageUrl} className='w-full h-full rounded-md object-cover absolute'/>
              <div className='bg-black absolute w-full h-full top-0 right-0 rounded-md opacity-0 group-hover:opacity-80' style={{transition: '1s all ease'}}/>
          </div>
      </div>
      <div className='w-full h-full absolute top-0 right-0 flex items-end justify-center z-30'>
          <img src={resource.pngUrl} className='w-[90%] h-[90%] object-contain opacity-0 group-hover:opacity-100' style={{transition: '1s all ease'}}/>
      </div>
    </a>
  </div>
  )
}

export default DimensionalCard
