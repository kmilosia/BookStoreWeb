import React from 'react';
import { Link } from 'react-router-dom';

function LibraryBookCarouselItem(props) {
  return (
    <Link className='flex flex-col cursor-pointer px-10 py-8 group'>
    <div className='h-96 w-full flex flex-col justify-end'>
    <img src={props.url} className='w-full h-84 group-hover:h-96 object-cover shadow-book' />
    </div>
        <h1 className='font-semibold w-full mt-7 text-center'>
          {props.title}
        </h1>
    </Link>
  );
}

export default LibraryBookCarouselItem;
