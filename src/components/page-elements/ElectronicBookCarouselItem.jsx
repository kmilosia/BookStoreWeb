import React from 'react';
import Stars from '../elements/Stars';
import { Link } from 'react-router-dom';

function ElectronicBookCarouselItem(props) {
  return (
    <Link to='/wypozycz-e-book' className='flex flex-col cursor-pointer bg-sunrise-300 hover:bg-sunrise-400 dark:bg-midnight-700 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4  group'>
      <img src={props.url} className='w-full aspect-[3/4] object-cover rounded-md' />
      <div className="text-container">
        <h1 className='font-semibold mt-2 w-full h-6 overflow-hidden overflow-ellipsis'>
          {props.title}
        </h1>
        <p className='font-light text-sm'>{props.author}</p>
      </div>
      <Stars score={props.score} />
      <button className='bg-purple-500 py-2 my-0 mt-2 lg:my-2 rounded-md text-white text-sm w-full hover:bg-purple-600'>
        Wypożycz
      </button>
    </Link>
  );
}

export default ElectronicBookCarouselItem
