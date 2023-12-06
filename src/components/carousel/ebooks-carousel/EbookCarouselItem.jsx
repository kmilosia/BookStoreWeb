import React, { useState } from 'react';
import Stars from '../../elements/Stars';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../buttons/AddToCartButton'
import RentButton from '../../buttons/RentButton'
import TitleTooltip from '../../elements/TitleTooltip';

function EbookCarouselItem({item,rental}) {
  const [showText, setShowText] = useState(false)
  return (
    <Link to={`/produkt/${item.id}`} className='flex flex-col cursor-pointer lg:mx-2 lg:my-2 shadow-md bg-gray-100 hover:bg-gray-200 dark:bg-midnight-900 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4 group'>
      <img src={item.imageURL} className='w-full aspect-[3/4] object-cover rounded-md' />
      <div className="text-container">
      <div className='relative mt-2' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}>
        <h1 className='font-semibold text-sm cursor-pointer truncated-text'>{item.title}</h1>
        {showText && <TitleTooltip title={item.title}/>}
      </div>
        <p className='font-light text-xs'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</p>
      </div>
      <Stars score={item.score} />
      <h2 className='font-semibold text-lg my-1'>{item.price.toFixed(2)}zł</h2>
      {rental ? <RentButton /> : <AddToCartButton />}
    </Link>
  );
}

export default EbookCarouselItem;
