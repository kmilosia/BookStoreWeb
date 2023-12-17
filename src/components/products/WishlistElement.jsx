import React, { useState } from 'react'
import TrashButton from '../buttons/TrashButton'
import { Link } from 'react-router-dom';
import {deleteWishlistItem} from '../../utils/api/wishlistAPI';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../store/messageSlice';
import { FiShoppingBag } from 'react-icons/fi';
import { addToCart } from '../../store/cartSlice';
import { showPopup } from '../../store/cartPopupSlice';

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
      price: item.priceBrutto,
      title: item.bookTitle,
  }
    dispatch(addToCart(newItem))
    deleteWishlistItem(item.id)
    updateWishlistAfterDelete(item.id)
    dispatch(showPopup(newItem))
  }
  return (
    <div className='flex flex-col px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md lg:hover:scale-105 transition-all'>
      <TrashButton onClick={handleRemove} />
      <div className='my-3'>
        <img src={item.imageURL} className='h-auto aspect-[3/4] w-full object-cover rounded-md' />
      </div>
      <h2 className='font-light text-sm'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h2>
      <Link to={`/produkt/${item.id}`} className='relative' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}><h1 className='font-semibold my-1 cursor-pointer truncated-text'>{item.bookTitle}</h1>{showText && <span className='title-tooltip top-6'>{item.bookTitle}</span>}</Link>
      <div className='my-1 flex flex-row items-center text-gray-600 dark:text-gray-400 text-sm lg:text-xs 2xl:text-sm cursor-default'>
        <p>{item.formName === "Book" ? "Książka" : "Ebook"}</p>
      </div>
      <h3 className='font-semibold cursor-default text-xl my-1'>{item.priceBrutto.toFixed(2)} zł</h3>
      <button onClick={handleAddToCartButton} className='purple-button flex items-center justify-center'>
        <FiShoppingBag className='mr-1 text-xs'/>Przenieś do koszyka
      </button>
    </div>
  )
}

export default WishlistElement
