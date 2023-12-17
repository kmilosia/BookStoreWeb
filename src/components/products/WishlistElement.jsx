import React, { useState } from 'react'
import TrashButton from '../buttons/TrashButton'
import TitleTooltip from '../elements/TitleTooltip';
import { Link } from 'react-router-dom';
import AddToCartFromWishlistButton from '../buttons/AddToCartFromWishlistButton';
import axiosClient from '../../utils/api/axiosClient';
import { getValidToken } from '../../utils/functions/getValidToken';
import { useDispatch } from 'react-redux';
import { showMessage } from '../../store/messageSlice';

function WishlistElement({item,updateWishlistAfterDelete}) {
  const [showText, setShowText] = useState(false)
  const dispatch = useDispatch()
  const deleteWishlistItem = async (id) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.post(`/Wishlist/Edit-Wishlist-Item?bookItemId=${id}&isWishlisted=true`, null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        return response.data
    } catch (error) {
        console.error(error);
    }
  }
  const handleRemove = () => {
    deleteWishlistItem(item.id)
    updateWishlistAfterDelete(item.id)
    dispatch(showMessage({title: "Produkt usunięto z listy życzeń!"}))
  }
  return (
    <div className='flex flex-col px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md lg:hover:scale-105 transition-all'>
      <TrashButton onClick={handleRemove} />
      <div className='my-3'>
        <img src={item.imageURL} className='h-auto aspect-[3/4] w-full object-cover rounded-md' />
      </div>
      <h2 className='font-light text-sm'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h2>
      <Link to={`/produkt/${item.id}`} className='relative' onMouseOver={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}><h1 className='font-semibold my-1 cursor-pointer truncated-text'>{item.bookTitle}</h1>{showText && <TitleTooltip title={item.bookTitle}/>}</Link>
      <div className='my-1 flex flex-row items-center text-gray-600 dark:text-gray-400 text-sm lg:text-xs 2xl:text-sm cursor-default'>
        <p>{item.formName === "Book" ? "Książka" : "Ebook"}</p>
      </div>
      <h3 className='font-semibold cursor-default text-xl my-1'>{item.priceBrutto.toFixed(2)} zł</h3>
      <AddToCartFromWishlistButton item={item} />
    </div>
  )
}

export default WishlistElement
