import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {deleteWishlistItem} from '../../utils/api/wishlistAPI';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../store/messageSlice';
import { addToCart } from '../../store/cartSlice';
import { showPopup } from '../../store/cartPopupSlice';
import { TbTrash } from 'react-icons/tb';

function WishlistElement({item,updateWishlistAfterDelete}) {
  const [showText, setShowText] = useState(false)
  const dispatch = useDispatch()
  const handleRemove = () => {
    deleteWishlistItem(item.id)
    updateWishlistAfterDelete(item.id)
    dispatch(showMessage({title: "Produkt usunięto z listy życzeń!", type: 'warning'}))
  }
  const handleAddToCartButton = () => {
    const newItem = {
      authors: item.authors,
      formId: item.formId,
      formName: item.formName,
      id: item.id,
      imageURL: item.imageURL,
      price: item.bruttoPrice,
      discountedBruttoPrice: item.discountedBruttoPrice,
      title: item.bookTitle,
      isWishlisted: false,
  }
    dispatch(addToCart(newItem))
    deleteWishlistItem(item.id)
    updateWishlistAfterDelete(item.id)
    dispatch(showPopup(newItem))
  }
  return (
    <div className='flex flex-col px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md'>
      <button onClick={handleRemove} className='2xl:text-2xl lg:text-lg text-xl w-max text-gray-600 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-500 transition-colors'>
      <TbTrash/>
      </button>
      <div className='my-3'>
        <img src={item.imageURL} className='h-auto aspect-[3/4] w-full object-cover rounded-md' />
      </div>
      <h1 className='font-light text-sm'>{item?.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h1>
      <Link to={`/produkt/${item.id}`} className='relative' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}>
        <h2 className='font-semibold my-1 cursor-pointer truncated-text'>{item.bookTitle}</h2>
        {showText && <span className='title-tooltip top-7'>{item.bookTitle}</span>}
      </Link>
        <h3 className='text-gray-600 dark:text-gray-400 text-sm lg:text-xs 2xl:text-sm cursor-default'>{item.formName === "Book" ? "Książka" : "Ebook"}</h3>
        <div className='flex flex-row items-baseline'>
        {item.discountedBruttoPrice !== 0 && <p className='font-semibold text-purple-400 text-xl mt-2 mb-1 mr-1'>{item.discountedBruttoPrice?.toFixed(2)}zł</p>}
        <p className={`${item.discountedBruttoPrice !== 0 ? 'font-light text-md line-through' : 'font-semibold text-xl no-underline'} mt-2 mb-1`}>{item.bruttoPrice?.toFixed(2)}zł</p>
      </div>
      <button onClick={handleAddToCartButton} className='purple-button'>Przenieś do koszyka</button>
    </div>
  )
}

export default WishlistElement
