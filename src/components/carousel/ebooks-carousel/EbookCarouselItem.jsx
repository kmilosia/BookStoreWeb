import React, { useState } from 'react';
import Stars from '../../elements/Stars';
import { Link } from 'react-router-dom';
import RentButton from '../../buttons/RentButton'

function EbookCarouselItem({item}) {
  const [showText, setShowText] = useState(false)
  return (
    <div className='flex flex-col cursor-pointer lg:mx-2 lg:my-2 shadow-md bg-white hover:bg-gray-200 dark:bg-midnight-900 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4 group'>
      <Link to={`/produkt/${item.id}`}>
      <img src={item.imageURL} className='w-full aspect-[3/4] object-cover rounded-md' />
      <div className="text-container">
        <h1 className='font-light text-sm mt-2'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h1>
        <div className='relative' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}>
          <h2 className='font-semibold cursor-pointer truncated-text'>{item.title}</h2>
          {showText && <span className='title-tooltip top-6'>{item.title}</span>}
          <h3 className='text-xs font-light'>{item.formId === 1 ? 'Książka' : 'Ebook'}</h3>
        </div>
      </div>
      <Stars score={item.score} />
      <h3 className='font-semibold text-xl mt-2 mb-1'>{item.price.toFixed(2)}zł</h3>
    </Link>
    <RentButton item={item}/>
    </div>
  );
}

export default EbookCarouselItem;
