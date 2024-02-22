import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../elements/Stars'
import AddToCartButton from '../buttons/AddToCartButton'
import RentButton from '../buttons/RentButton'

function BookElement({item}) {
  const [showText, setShowText] = useState()
  return (
    <div className='flex flex-col group cursor-pointer relative'>
    <div className='group-hover:z-20 group-hover:absolute group-hover:top-0 group-hover:right-0 w-full shadow-md bg-gray-100 hover:bg-gray-200 dark:bg-midnight-900 dark:hover:bg-midnight-800 rounded-md px-7 py-7 lg:px-5 lg:py-4'>
        <Link to={`/produkt/${item.id}`}>
        <img src={item.imageURL} className='w-full aspect-[3/4] object-cover rounded-md' />
        <h1 className='font-light text-sm mt-2'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h1>
        <div className='relative' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}>
          <h2 className='font-semibold cursor-pointer truncated-text'>{item.title}</h2>
          {showText && <span className='title-tooltip'>{item.title}</span>}
        </div>
        <h3 className='text-gray-600 dark:text-gray-400 text-sm mb-2 lg:text-xs 2xl:text-sm cursor-default'>{item.formName === "Book" ? "Książka" : "Ebook"}</h3>
        <Stars score={item.score} />
        <div className='flex flex-row items-baseline'>
        {item.discountedBruttoPrice !== 0 && <p className='font-semibold text-purple-400 text-xl mt-2 mb-1 mr-1'>{item.discountedBruttoPrice.toFixed(2)}zł</p>}
        <p className={`${item.discountedBruttoPrice !== 0 ? 'font-light text-md line-through' : 'font-semibold text-xl no-underline'} mt-2 mb-1`}>{item.price.toFixed(2)}zł</p>
        </div>
        </Link>
        <div className='lg:hidden lg:group-hover:flex lg:group-hover:flex-col flex flex-col'>
            <AddToCartButton item={item}/>  
            {item.formId === 2 && <RentButton />}
        </div>
    </div>
  </div>
  )
}

export default BookElement
