import React from 'react';
import { Link } from 'react-router-dom';

function LibraryBookCarouselItem(props) {
  return (
    <Link to={`/biblioteka/${props.id}`} className='flex flex-col group cursor-pointer relative hover:scale-105'>
    <div className='group-hover:absolute group-hover:top-0 group-hover:right-0 w-full rounded-md px-7 py-7 lg:px-5 lg:py-4'>
        <img src={props.url} className='w-full aspect-[3/4] object-cover rounded-md' />
        <h1 className='font-semibold my-1 w-full truncated-text group-hover:whitespace-normal'>{props.title}</h1>
        <h2 className='font-light text-sm'>{props.author}</h2>
    </div>
  </Link>
  )
}

export default LibraryBookCarouselItem;
