import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../utils/data';
import { FaHeart } from 'react-icons/fa';
import Stars from '../components/elements/Stars';

function Ebook() {
    const {id} = useParams()
    const productID = Number(id)
    const product = productsData.find((element) => element.id === productID );

  return (
    <div className='default-page-wrapper'>
      <div className='flex flex-col relative'>
        <img src={product.url} className='absolute h-96 w-full z-10 object-cover blur-sm' />
        <div className='w-full z-20 py-20 px-5 lg:px-10 2xl:px-48'>
            <div className='grid grid-cols-[max-content_auto] gap-10'>
                <div className='h-[30rem] w-auto flex items-center justify-end'>
                <img src={product.url} className='h-full w-auto object-contain rounded-md shadow-book' />
                </div>
                <div className='flex flex-col items-center py-10 px-5 bg-midnight-900/70 backdrop-blur-md rounded-md'>
                    <h1 className='text-4xl font-bold my-1'>{product.title}</h1>
                    <h2 className='text-3xl my-1'>{product.author}</h2>
                    <h3 className='font-semibold text-xl my-1'>{product.form}</h3>
                    <Stars score={product.score}/>
                    <div className='flex py-1 px-10 rounded-3xl bg-midnight-900 text-white'>
                    <Link className=''>
                        <h1 className='text-sm'>E-Book</h1>
                        <h2 className='text-sm font-semibold'>25.99zł</h2>
                    </Link>
                    
                    </div>
                    <div className='mt-auto w-full flex flex-col items-center'>
                    <div className='flex my-2'>
                        <h3 className='text-5xl font-semibold'>{product.price}zł</h3>
                    </div>
                    <div className='flex'>
                        <button className='purple-button'>Wypożycz</button>
                        <button className='purple-button'>Dodaj do koszyka</button>
                        <button className='rounded-purple-button'><FaHeart/></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ebook
