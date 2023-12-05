import React, { useEffect } from 'react';
import Stars from '../../elements/Stars';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../buttons/AddToCartButton'

function BookCarouselItem({item}) {
  return (
    <div className='flex flex-col cursor-pointer lg:mx-2 lg:my-2 shadow-md bg-white hover:bg-gray-200 dark:bg-midnight-900 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4 group'>
      <Link to={`/produkt/${item.id}`}>
      <img src={item.imageURL} className='w-full aspect-[3/4] object-cover rounded-md' />
      <div className="text-container">
        <h1 className='font-semibold mt-2 w-full h-6 overflow-hidden overflow-ellipsis'>
          {item.title}
        </h1>
        <p className='font-light text-sm'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</p>
      </div>
      <Stars score={item.score} />
      <h2 className='font-semibold text-lg my-1'>{item.price.toFixed(2)}zł</h2>
      </Link>
      <AddToCartButton item={item}/>
    </div>
  );
}

export default BookCarouselItem;
