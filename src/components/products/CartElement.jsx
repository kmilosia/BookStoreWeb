import React from 'react'
import AddToWishlist from '../buttons/AddToWishlist'
import QuantityChanger from '../elements/QuantityChanger'

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
              <AddToWishlist id={item.id} isWishlisted={item.isWishlisted}/>
            </div>
          </div>
          <div className='mt-auto lg:hidden flex flex-row cursor-default'>
            {item.discountedBruttoPrice !== 0 && <p className='font-semibold text-purple-400 text-2xl mr-2'>{item.discountedBruttoPrice?.toFixed(2)}zł</p>}
            <p className={`${item.discountedBruttoPrice !== 0 ? 'font-light text-lg line-through' : 'font-semibold text-2xl no-underline'}`}>{item.price?.toFixed(2)}zł</p>
          </div>
          <div className='mt-auto flex justify-between items-end mb-1 cursor-default'>
            <div className='flex items-start text-gray-600 dark:text-gray-400'>
                <p className='text-xs'>{item.formName === "Book" ? "Książka" : "Ebook"}</p>
              </div> 
                <QuantityChanger id={item.id}/>
                <div className='flex-row items-baseline hidden lg:flex cursor-default'>
                  {item.discountedBruttoPrice !== 0 && <p className='font-semibold text-purple-400 text-2xl mr-2'>{item.discountedBruttoPrice?.toFixed(2)}zł</p>}
                  <p className={`${item.discountedBruttoPrice !== 0 ? 'font-light text-lg line-through' : 'font-semibold text-2xl no-underline'}`}>{item.price?.toFixed(2)}zł</p>
                </div>
            </div>
        </div>
      </div>       
    </div>
    
    </div>

  )
}

export default CartElement
