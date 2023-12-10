import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidePopup } from '../store/cartPopupSlice'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function CartPopup() {
    const {showCartPopup,product} = useSelector((state) => state.cartPopup)
    const dispatch = useDispatch()
    const handleHidePopup = () => {
        dispatch(hidePopup())
    }
  return (
    showCartPopup && (
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-start lg:items-center'>
      <div className='1-full lg:w-1/2 2xl:w-1/3 h-max flex flex-col py-5 px-10 bg-white dark:bg-midnight-800'>
        <div className='flex justify-between my-2 divide-border-bottom pb-2'>
            <h1 className='text-xl font-medium'>Produkt dodano do koszyka</h1>
            <button onClick={handleHidePopup} className='text-2xl'><IoClose/></button>
        </div>
        {product &&
        <div className='grid grid-cols-[1fr_2fr] gap-5 my-2'>
            <img src={product.imageURL} className='w-full h-auto object-contain rounded-md' />
            <div className='flex flex-col'>
                <h1 className='text-xl lg:text-2xl font-semibold'>{product.title}</h1>
                <h2 className='font-light my-1'>{product.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h2>
                <h3 className='flex items-center'>{product.formName === 'Book' ? 'Książka' : 'Ebook'}</h3>
                <h4 className='mt-auto font-semibold text-2xl lg:text-3xl'>{product.price && product.price.toFixed(2)}zł</h4>
            </div>
        </div>
        }
        <div className='my-2 justify-end flex flex-col lg:flex-row divide-border-top pt-2'>
            <button onClick={handleHidePopup} className='bordered-purple-button lg:mx-2'>Kontynuuj zakupy</button>
            <Link to='/koszyk' onClick={handleHidePopup} className='purple-button'>Przejdź do koszyka</Link>
        </div>
      </div>
    </div>
    )
  )
}

export default CartPopup
