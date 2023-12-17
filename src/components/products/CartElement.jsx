import React, { useEffect } from 'react'
import AddToWishlist from '../buttons/AddToWishlist'
import QuantityChanger from '../elements/QuantityChanger'
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from '../../store/messageSlice';
import { getValidToken } from '../../utils/functions/getValidToken';
import axiosClient from '../../utils/api/axiosClient';
import { showLoginMessage } from '../../store/loginPopupSlice';
import { removeItem } from '../../store/cartSlice';

function CartElement({item}) {
  return (
    <div className='flex flex-col px-3 lg:px-5 py-3 border border-gray-200 dark:border-midnight-800 rounded-md'>
    <div className='flex justify-between'>
      <div className='flex w-full'>
        <img src={item.imageURL} className=' h-36 w-24 object-cover rounded-md' />
        <div className='flex flex-col flex-[1] ml-4 justify-start'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col'>
            <h1 className='font-semibold text-lg cursor-default'>{item.title}</h1>
            <h2 className='font-light'>{item.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h2>
            </div>
            <div className='lg:my-2 my-1 h-full'>
              <AddToWishlist item={item}/>
            </div>
          </div>
          <div className='mt-auto lg:hidden'>
          <h1 className='text-2xl font-semibold cursor-default'>{item.price && item.price.toFixed(2)} zł</h1>
          </div>
          <div className='mt-auto flex justify-between items-end mb-1 cursor-default'>
            <div className='flex items-start text-gray-600 dark:text-gray-400'>
                <p className='text-xs'>{item.formName === "Book" ? "Książka" : "Ebook"}</p>
              </div> 
                <QuantityChanger id={item.id}/>
              <h1 className='text-2xl font-semibold hidden lg:inline-block cursor-default'>{item.price && item.price.toFixed(2)} zł</h1>
            </div>
        </div>
      </div>       
    </div>
    
    </div>

  )
}

export default CartElement
