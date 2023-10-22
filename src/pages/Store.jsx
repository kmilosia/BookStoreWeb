import React from 'react'
import { categories } from '../utils/objects/categories-links';
import { Link } from 'react-router-dom';
import MyCarousel from '../components/MyCarousel';
function Store() {
  return (
    <div className='default-page-wrapper flex flex-col px-4 py-4 overflow-hidden'>
        <div className='max-w-full px-2 py-2'>
        <MyCarousel />
        </div>
      <h1 className='text-2xl font-semibold my-4 mx-2'>Polecane Książki</h1>
    </div>
  )
}

export default Store
